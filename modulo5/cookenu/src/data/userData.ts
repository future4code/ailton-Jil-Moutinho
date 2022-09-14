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

  public async getUserByEmail(email: string) {
    const result = await this.getConnection()
      .select("*")
      .from(userTableName)
      .where({ email });

    return result;
  }

  public async getUserValidLogin(email: string, password: string) {
    const result = await this.getConnection()
      .select("*")
      .from(userTableName)
      .where({ email })
      .andWhere({ password });

    return result;
  }

  public async getUserById(id: string) {
    const result = await this.getConnection()
      .select("*")
      .from(userTableName)
      .where({ id });

    return result[0];
  }

  public async delUserById(id: string) {
    const result = await this.getConnection()
      .delete("*")
      .from(userTableName)
      .where({ id });

    return `User deleted successfully`;
  }
}
