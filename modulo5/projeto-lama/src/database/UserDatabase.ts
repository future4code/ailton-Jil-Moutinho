import { IUserDB, User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Lama_Users";

  public createUser = async (user: User) => {
    const userDB: IUserDB = {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
    };

    await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB);
  };

  public getUserByEmail = async (email: string) : Promise<IUserDB | undefined>=> {
    const usersDB: IUserDB[] = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_USERS)
      .where({ email });

    return usersDB[0];
  };
}
