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
      })
      .into(userTableName);

    return `User with email ${newUser.getEmail()} created successfully`;
  };

  /* public async edit(id: string) {
    await this.getConnection().update({ nickname }).into(userTableName).where({ id })
} */

  public async getUserByEmail(email: string) {
    const result = await this.getConnection()
      .select("*")
      .from(userTableName)
      .where({ email });

    return result;
  }

  public async getUserValidLogin (email: string, password:string) {
    const result = await this.getConnection()
      .select("*")
      .from(userTableName)
      .where({ email })
      .andWhere({password});

    return result;
  }

}
