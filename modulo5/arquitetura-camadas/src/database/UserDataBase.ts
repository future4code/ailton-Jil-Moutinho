import { User, UserCoBuAllUser } from "../models/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
  public static TABLE_USERS = "Arq_Users";

  async createUser(user: User): Promise<string> {
    await this.getConnection()
      .insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole().toUpperCase(),
      })
      .into(UserDataBase.TABLE_USERS);

    return `User ${user.getName()} created successfully`;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDataBase.TABLE_USERS)
      .where({ email });

    if (!result.length) {
      return undefined;
    }

    return new User(
      result[0].id,
      result[0].name,
      result[0].email,
      result[0].password,
      result[0].role
    );
  }

  async getAllUsers(nameSearch: string): Promise<UserCoBuAllUser[] | undefined> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDataBase.TABLE_USERS)
      .where("name", "like", `%${nameSearch}%`);

    if (!result.length) {
      return undefined;
    }

    result.forEach((item) => {
      item.id, item.name, item.email;
    });
    return result;

    /* new User(
      result[0].id,
      result[0].name,
      result[0].email,
      result[0].password,
      result[0].role );*/
  }

  async getUserById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDataBase.TABLE_USERS)
      .where({ id });

    return result;
  }
}
