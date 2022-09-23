import { ILikeDB, IPostDB, IPostDB2, IPostLikeDB, Post } from "../models/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  public static TABLE_POSTS = "Labook_Posts";
  public static TABLE_LIKES = "Labook_Likes";

  public async createPost(newPost: Post): Promise<string> {
    await this.getConnection()
      .insert({
        id: newPost.getId(),
        content: newPost.getContent(),
        user_id: newPost.getUserId(),
      })
      .into(PostDatabase.TABLE_POSTS);

    return `Post of user with id ${newPost.getUserId()} created successfully`;
  }

  public async getAllPost(): Promise<Post[]> {
    const result = await this.getConnection()
      .select("*")
      .from(PostDatabase.TABLE_POSTS);

    return result;
  }

  public async getLikesByPost(post_id: string): Promise<ILikeDB[]> {
    const result = await this.getConnection()
      .select()
      .from(PostDatabase.TABLE_LIKES)
      .where({ post_id });

    return result;
  }

  public async getAllPostUnique(): Promise<any[]> {
    const result = await this.getConnection()
      .select("*")
      .from(PostDatabase.TABLE_POSTS);

    return result;
  }

  public getLikesPost = async (postId: string) => {
    const result = await this.getConnection()
      .select("*")
      .count("id")
      .from(PostDatabase.TABLE_LIKES)
      .where({ post_id: postId });

    return result[0]["count(`id`)"] as number;
  };

  public delPost = async (id: string): Promise<string> => {
    const result = await this.getConnection()
      .delete("*")
      .from(PostDatabase.TABLE_POSTS)
      .where({ id });

    return `Post deleted successfully`;
  };

  public delLikesToDelPost = async (post_id: string): Promise<string> => {
    const result = await this.getConnection()
      .delete("*")
      .from(PostDatabase.TABLE_POSTS)
      .where({ post_id });

    return `Post deleted successfully`;
  };

  public async getPostById(id: string) {
    const result = await this.getConnection()
      .select("*")
      .from(PostDatabase.TABLE_POSTS)
      .where({ id });

    return result;
  }

  public async postLike(newLike: ILikeDB) {
    const result = await this.getConnection()
      .insert({
        id: newLike.id,
        post_id: newLike.post_id,
        user_id: newLike.user_id,
      })
      .into(PostDatabase.TABLE_LIKES);

    return result;
  }

  public async getLikeByIdAndUser(search: IPostLikeDB) {
    const result = await this.getConnection()
      .select("*")
      .from(PostDatabase.TABLE_LIKES)
      .where({ post_id: search.post_id,
        user_id: search.user_id });

    return result;
  }

  public async delLike(search: IPostLikeDB) {
    const result = await this.getConnection()
      .del("*")
      .from(PostDatabase.TABLE_LIKES)
      .where({ post_id: search.post_id,
        user_id: search.user_id });

        return `Like deleted successfully`;
  }
}
