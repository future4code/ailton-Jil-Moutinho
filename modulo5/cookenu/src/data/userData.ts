import UserModel from "../model/UserModel";
import { BaseDataBase } from "./BaseDataBase";

const userTableName = "UserCookenu";
export class UserData extends BaseDataBase {
  createUser = async (newUser: UserModel): Promise<string> => {
    await this.getConnection()
      .insert({
        user_id: newUser.getId(),
        email: newUser.getEmail(),
        user_password: newUser.getPassword(),
        user_name: newUser.getName(),
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
        result[0].user_password
      );
      return newuser;
    }
  }

  public async getUserValidLogin(email: string, password: string) {
    const result = await this.getConnection()
      .select("*")
      .from(userTableName)
      .where({ email })
      .andWhere({ password });

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
          result[0].user_password
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
}
