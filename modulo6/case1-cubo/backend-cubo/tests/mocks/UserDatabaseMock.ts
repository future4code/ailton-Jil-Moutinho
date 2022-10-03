import { BaseDatabase } from "../../src/database/BaseDatabase";
import { IUserDB, User } from "../../src/models/User";

export class UserDatabaseMock extends BaseDatabase {
  public static TABLE_USERS = "Labook_Users";

  public toUserDBModel = (user: User) => {
    const userDB: IUserDB = {
      id: user.getId(),
      first_name: user.getFirstName(),
      last_name: user.getLastName(),
      partnership: user.getPartnership(),
      password: user.getPassword(),
    };
    return userDB;
  };

  public createUser = async (user: User): Promise<string> => {
    return `Member ${user.getFirstName()} register successfully.`;
  };

  public getUserByFullName = async (
    first_name: string,
    last_name: string
  ): Promise<IUserDB | undefined> => {
    switch (first_name && last_name) {
      case "Mia" && "Mia Gatona":
        const user1: IUserDB = {
          id: "id-mock",
          first_name: "Mia",
          last_name: "Mia Gatona",
          partnership: 5,
          password: "hash-asdfg123",
        };
        return user1;
      case "Raul" && "Raul Gatuno":
        const user2: IUserDB = {
          id: "id-mock",
          first_name: "Raul",
          last_name: "Raul Gatuno",
          partnership: 10,
          password: "hash-qwerty00",
        };
        return user2;
      default:
        return undefined;
    }
  };

  public getAllUsers = async (): Promise<IUserDB[] | undefined> => {
    return [
      {
        id: "101",
        first_name: "Astrodev",
        last_name: "Astronalta",
        partnership: 10,
        password:
          "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC",
      },
      {
        id: "102",
        first_name: "Raul",
        last_name: "Raul Gatuno",
        partnership: 5,
        password:
          "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO",
      },
      {
        id: "103",
        first_name: "Mia",
        last_name: "Mia Gatona",
        partnership: 5,
        password:
          "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i",
      },
    ];
  };

  public delUser = async (id: string): Promise<string> => {
    return "You are not a member any more!";
  };
}
