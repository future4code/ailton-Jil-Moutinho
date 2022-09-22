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

    /*     const posts = allPosts.map((item) => {
      return new Post(
        item.getId(),
        item.getContent(),
        item.getUserId()
      );
    }); */

    for (let post of allPosts) {
      const postId = post.id;
      const likes = await this.postDatabase.getLikesPost(postId);
      post.setLikes(likes);
    }

    return allPosts;
  };

  /*   public getAllPosts = async (token: string) => {
    if (!token || typeof token !== "string") {
      throw new Error("You must inform your token as string");
    }

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthorizationError();
    }

    // instanciar a classe PostDatabase, dependencia da classe
    // const postDatabase = new PostDatabase()
    const postsDB: IPostDB2[] | undefined =
      await this.postDatabase.getAllPost();

    let result: any[] = [];

    if (!postsDB) {
      throw new Error("You must inform your token as string");
    } else {
      postsDB.forEach(async (item) => {
        let arrayOfLikes = await this.postDatabase.getLikesByPost(item.id);

        let amount = Number(arrayOfLikes.length);

        let result2 = result.push({
          id: item.id,
          content: item.content,
          user_id: item.user_id,
          likes: amount,
        });

        return result2;
      });
    }

    return { message: result };
  }; */
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
}
