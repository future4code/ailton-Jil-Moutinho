import UserModel from "../model/User";
import { BaseDataBase } from "./BaseDataBase";

const userTableName = "User";
export class UserData extends BaseDataBase {
  createUser = async (newUser: UserModel): Promise<string> => {
    await this.getConnection()
      .insert({
        id: newUser.getId(),
        email: newUser.getEmail(),
        password: newUser.getPassword(),
        role: newUser.getRole()
      })
      .into(userTableName);

    return `User with email ${newUser.getEmail()} created successfully`;
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
}
