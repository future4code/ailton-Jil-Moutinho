import { IUserDB, User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Cubo_Users";

  public createUser = async (user: User): Promise<string> => {
    const userDB: IUserDB = {
      id: user.getId(),
      first_name: user.getFirstName(),
      last_name: user.getLastName(),
      nickname: user.getNickname(),
      partnership: user.getPartnership(),
      password: user.getPassword(),
    };
    await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB);
    return `Member ${user.getFirstName()} register successfully.`;
  };

  public getAvailableShares = async (): Promise<number> => {
    const totalShares = await this.getConnection()
      .sum("partnership")
      .from(UserDatabase.TABLE_USERS);

    const availableShares = 100 - totalShares[0]["sum(`partnership`)"];

    return availableShares;
  };

  public getUserByNickname = async (
    nickname: string
  ): Promise<IUserDB | undefined> => {
    const usersDB: IUserDB[] = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_USERS)
      .where({ nickname });
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
