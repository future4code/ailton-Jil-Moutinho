import { BaseDatabase } from "../../src/database/BaseDatabase";
import { IUserDB, User } from "../../src/models/User";

export class UserDatabaseMock extends BaseDatabase {
  public static TABLE_USERS = "Labook_Users";

  public toUserDBModel = (user: User) => {
    const userDB: IUserDB = {
      id: user.getId(),
      first_name: user.getFirstName(),
      last_name: user.getLastName(),
      nickname: user.getLastName(),
      partnership: user.getPartnership(),
      password: user.getPassword(),
    };
    return userDB;
  };

  public createUser = async (user: User): Promise<string> => {
    return `Member ${user.getFirstName()} register successfully.`;
  };

  public getUserByNickname = async (
    nickname: string
  ): Promise<IUserDB | undefined> => {
    switch (nickname) {
      case "Mia":
        const user1: IUserDB = {
          id: "id-mock",
          first_name: "Mia",
          last_name: "Mia Gatona",
          nickname: "Mia",
          partnership: 10,
          password: "hash-asdfg123",
        };
        return user1;
      case "Raul":
        const user2: IUserDB = {
          id: "id-mock",
          first_name: "Raul",
          last_name: "Raul Gatuno",
          nickname: "Raul",
          partnership: 5,
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
        nickname: "Astronalta",
        partnership: 10,
        password:
          "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC",
      },
      {
        id: "102",
        first_name: "Raul",
        last_name: "Raul Gatuno",
        nickname: "Raul",
        partnership: 5,
        password:
          "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO",
      },
      {
        id: "103",
        first_name: "Mia",
        last_name: "Mia Gatona",
        nickname: "Mia",
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
