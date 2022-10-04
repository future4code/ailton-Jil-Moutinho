import { BaseDatabase } from "../../src/database/BaseDatabase";
import { IUserDB, User, USER_ROLES } from "../../src/models/User";

export class UserDatabaseMock extends BaseDatabase {
  public static TABLE_USERS = "Labook_Users";

  public toUserDBModel = (user: User) => {
    const userDB: IUserDB = {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
    };
    return userDB;
  };

  public getUserByEmail = async (email: string): Promise<IUserDB | undefined> => {
    switch (email) {
      case "mia@gmail.com":
        const normalUser: IUserDB = {
          id: "id-mock",
          name: "Mia",
          email: "mia@gmail.com",
          password: "hash-mia123",
          role: USER_ROLES.NORMAL,
        };
        return normalUser;
      case "astrodev@gmail.com":
        const adminUser: IUserDB = {
          id: "id-mock",
          name: "Astrodev",
          email: "astrodev@gmail.com",
          password: "hash-bananinha",
          role: USER_ROLES.ADMIN,
        };
        return adminUser;
      default:
        return undefined;
    }
  };
  public createUser = async (user: User): Promise<void> => {};
}
