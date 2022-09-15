import UserModel from "../model/UserModel";
import { BaseDataBase } from "./BaseDataBase";

const userTableName = "UserCookenu";
const tableFollowers = "Followers";
export class UserData extends BaseDataBase {
  createUser = async (newUser: UserModel): Promise<string> => {
    await this.getConnection()
      .insert({
        user_id: newUser.getId(),
        email: newUser.getEmail(),
        user_password: newUser.getPassword(),
        user_name: newUser.getName(),
        role: newUser.getRole(),
      })
      .into(userTableName);

    return `User ${newUser.getName()} created successfully`;
  };

  public async getUserByEmail(email: string): Promise<UserModel | undefined> {
    const result = await this.getConnection()
      .select("*")
      .from(userTableName)
      .where({ email });

    if (!result.length) {
      return undefined;
    } else {
      const newuser = new UserModel(
        result[0].user_id,
        result[0].user_name,
        result[0].email,
        result[0].user_password,
        result[0].role
      );
      return newuser;
    }
  }

  public async getUserValidLogin(email: string, user_password: string) {
    const result = await this.getConnection()
      .select("*")
      .from(userTableName)
      .where({ email })
      .andWhere({ user_password });

    return result;
  }

  public async getUserById(user_id: string) {
    const result = await this.getConnection()
      .select("*")
      .from(userTableName)
      .where({ user_id });

    if (!result.length) {
      return undefined;
    } else {
      const newuser = new UserModel(
        result[0].user_id,
        result[0].user_name,
        result[0].email,
        result[0].user_password,
        result[0].role
      );
      return newuser;
    }
  }

  public async delUserById(user_id: string) {
    const result = await this.getConnection()
      .delete("*")
      .from(userTableName)
      .where({ user_id });

    return `User deleted successfully`;
  }

  public async postFollowUser(
    followerId: string,
    followedId: string
  ): Promise<string> {
    const result = await this.getConnection()
      .insert({
        follower_id: followerId,
        followed_id: followedId,
      })
      .into(tableFollowers);

    return `User with id ${followerId} following user with id ${followedId} successfully`;
  }

  public async isAlredyFollowing(
    followerId: string,
    followedId: string
  ): Promise<boolean> {
    const result = await this.getConnection()
      .select("*")
      .where({
        follower_id: followerId,
        followed_id: followedId,
      })
      .from(tableFollowers);

    return result.length > 0;
  }

  public async delUnfollowUser(
    followerId: string,
    followedId: string
  ): Promise<string> {
    const result = await this.getConnection()
      .delete("*")
      .where({
        follower_id: followerId,
        followed_id: followedId,
      })
      .from(tableFollowers);

    return `User with id ${followerId} not following user with id ${followedId} any more.`;
  }

  public async delUnfollowToDelUser(user_id: string): Promise<string> {
    const result = await this.getConnection()
      .delete("*")
      .where({
        follower_id: user_id,
      })
      .andWhere({ followed_id: user_id })
      .from(tableFollowers);

    return `All follows from user with id ${user_id} deleted successfully.`;
  }
}
