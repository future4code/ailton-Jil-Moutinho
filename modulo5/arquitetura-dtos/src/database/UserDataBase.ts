import {
  GetUserInputDBDTO,
  IUserDB,
  User,
  UserCoBuAllUser,
} from "../models/User";
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

  async getAllUsers(
    dataToGetAll: GetUserInputDBDTO
  ): Promise<UserCoBuAllUser[]> {
    const search = dataToGetAll.search;
    const order = dataToGetAll.order;
    const sort = dataToGetAll.sort;
    const limit = dataToGetAll.limit;
    const offset = dataToGetAll.offset;

    const result: UserCoBuAllUser[] = await this.getConnection()
      .select("id", "name", "email")
      .from(UserDataBase.TABLE_USERS)
      .where("name", "like", `%${search}%`)
      .orderBy(order, sort)
      .limit(limit)
      .offset(offset);

    /*     if (!result.length) {
      return undefined;
    } Não precisa pra pra chamar esse endpoint tem q ter um token valido e sem tem token valido tem ao menos um usuário*/

    return result;
  }

  async getUserById(id: string): Promise<User> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDataBase.TABLE_USERS)
      .where({ id });

    return new User(
      result[0].id,
      result[0].name,
      result[0].email,
      result[0].password,
      result[0].role
    );
  }

  public deleteUserById = async (id: string): Promise<string> => {
    await this.getConnection()
      .delete("*")
      .from(UserDataBase.TABLE_USERS)
      .where({ id });

    return `User with id ${id} deleted successfully.`;
  };

  public async updateUser(user: User): Promise<string> {
    const userDB: IUserDB = {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
    };

    await this.getConnection()
      .update(userDB)
      .from(UserDataBase.TABLE_USERS)
      .where({ id: userDB.id });

    return `User ${user.getName()} updated successfully`;
  }
}
