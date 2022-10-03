import { IUserDB, User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Cubo_Users";

  public createUser = async (user: User): Promise<string> => {
    const userDB: IUserDB = {
      id: user.getId(),
      first_name: user.getFirstName(),
      last_name: user.getLastName(),
      partnership: user.getPartnership(),
      password: user.getPassword(),
    };
    await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB);
    return `Member ${user.getFirstName()} register successfully.`;
  };

  public getUserByFullName = async (
    first_name: string,
    last_name: string
  ): Promise<IUserDB | undefined> => {
    const usersDB: IUserDB[] = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_USERS)
      .where({ first_name })
      .andWhere({ last_name });
    return usersDB[0];
  };

  public getAllUsers = async (): Promise<IUserDB[] | undefined> => {
    const usersDB: IUserDB[] = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_USERS);
    return usersDB;
  };

  public delUser = async (id: string): Promise<string> => {
    const usersDB: IUserDB[] = await this.getConnection()
      .delete("*")
      .from(UserDatabase.TABLE_USERS)
      .where({ id });
    return "You are not a member any more!";
  };
}