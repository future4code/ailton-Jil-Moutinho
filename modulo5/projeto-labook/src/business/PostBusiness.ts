import { resourceLimits } from "worker_threads";
import { PostDatabase } from "../database/PostDatabase";
import { AuthorizationError } from "../errors/AuthorizationError";
import {
  IPostDB2,
  IPostDB,
  Post,
  IPostToDelDB,
  IPostLikeDB,
  ILikeDB,
} from "../models/Post";
import { User } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class PostBusiness {
  constructor(
    private postDatabase: PostDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  public postPost = async (input: IPostDB) => {
    const { content, token } = input;

    if (!content || !token) {
      throw new Error("You must inform your token");
    }

    if (typeof content !== "string" || content.length < 1) {
      throw new Error("Your post must have at least one charactere");
    }

    if (typeof token !== "string") {
      throw new Error("user_id is not valid");
    }

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthorizationError();
    }

    // dependencia da classe, const idGenerator = new IdGenerator()
    const id = this.idGenerator.generate();

    const newPost = new Post(id, content, payload.id);

    // instanciar a classe PostDatabase, dependencia da classe
    // const postDatabase = new PostDatabase()
    const postDB = await this.postDatabase.createPost(newPost);

    return { message: "Post created successfully" };
  };

  public getPosts = async (token: string) => {
    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthorizationError();
    }

    const allPosts: any[] = await this.postDatabase.getAllPost();

    const posts = allPosts.map((eachPost) => {
      return new Post(eachPost.id, eachPost.content, eachPost.user_id);
    });

    for (let post of posts) {
      const allLikes = await this.postDatabase.getLikesByPost(post.getId());
      const likes = Number(allLikes.length);
      post.setLikes(likes);
    }

    return posts;
  };

  public delPostFromDB = async (input: IPostToDelDB) => {
    const { token, post_id } = input;

    if (!post_id || !token) {
      throw new Error("You must inform your token");
    }

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthorizationError();
    }

    const postExist = await this.postDatabase.getPostById(post_id);
    if (!postExist.length) {
      throw new Error("There is no post with this id");
    }

    if (payload.role === "NORMAL" && postExist[0].user_id !== payload.id) {
      throw new AuthorizationError();
    }

    // instanciar a classe PostDatabase, dependencia da classe
    // const postDatabase = new PostDatabase()
    await this.postDatabase.delPost(post_id);

    return { message: "Post deleted successfully" };
  };

  public likePost = async (input: IPostToDelDB) => {
    const { token, post_id } = input;

    if (!post_id || !token) {
      throw new Error("You must inform your token");
    }

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthorizationError();
    }

    const postExist = await this.postDatabase.getPostById(post_id);
    if (!postExist.length) {
      throw new Error("There is no post with this id");
    }
    const postToFind: IPostLikeDB = {
      post_id: post_id,
      user_id: payload.id,
    };
    const postAlreadyLiked = await this.postDatabase.getLikeByIdAndUser(
      postToFind
    );

    const id = this.idGenerator.generate();

    const postToLike: ILikeDB = {
      id: id,
      post_id: post_id,
      user_id: payload.id,
    };

    if (postAlreadyLiked.length) {
      throw new Error("You already liked this post");
    } else {
      await this.postDatabase.postLike(postToLike);
    }

    return { message: "Post liked successfully" };
  };

  public delLikeDB = async (input: IPostToDelDB) => {
    const { token, post_id } = input;

    if (!post_id || !token) {
      throw new Error("You must inform your token");
    }

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthorizationError();
    }

    const postExist = await this.postDatabase.getPostById(post_id);
    if (!postExist.length) {
      throw new Error("There is no post with this id");
    }
    const postToFind: IPostLikeDB = {
      post_id: post_id,
      user_id: payload.id,
    };
    const postAlreadyLiked = await this.postDatabase.getLikeByIdAndUser(
      postToFind
    );

    if (!postAlreadyLiked.length) {
      throw new Error("You haven't liked this post yet.");
    } else {
      await this.postDatabase.delLike(postToFind);
    }

    return { message: "Like deleted successfully" };
  };
}
