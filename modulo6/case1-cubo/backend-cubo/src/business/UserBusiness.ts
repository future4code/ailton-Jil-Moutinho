import { UserDatabase } from "../database/UserDatabase";
import { AuthenticationError } from "../errors/AuthenticationError";
import { AuthorizationError } from "../errors/AuthorizationError";
import { ConflictError } from "../errors/ConflictError";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
import {
  IDelUserInputDTO,
  ILoginInputDTO,
  ISignupInputDTO,
  User,
} from "../models/User";
import { Authenticator, IIdPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  public signupUser = async (input: ISignupInputDTO) => {
    const { first_name, last_name, nickname, password } = input;
    const partnership = Number(input.partnership);

    if (!first_name || !last_name || !nickname || !password || !partnership) {
      throw new ParamsError();
    }

    if (
      typeof partnership !== "number" ||
      partnership > 100 ||
      !Number.isInteger(partnership)
    ) {
      throw new ParamsError(
        "Invalid parameter as partnership percentage. Inform a integer number."
      );
    }

    if (password.length < 6) {
      throw new ParamsError("Your password must have at least 6 characters");
    }

    const userDB = await this.userDatabase.getUserByNickname(nickname);

    if (userDB) {
      throw new ConflictError("Member already registered");
    }

    const id = this.idGenerator.generate();
    const hashedPassword = await this.hashManager.hash(password);

    const user = new User(
      id,
      first_name,
      last_name,
      nickname,
      partnership,
      hashedPassword
    );

    const result = await this.userDatabase.createUser(user);

    const payload: IIdPayload = { id: user.getId() };
    const token = this.authenticator.generateToken(payload);

    const response = {
      message: result,
      token,
    };

    return response;
  };

  public loginUser = async (input: ILoginInputDTO) => {
    const nickname = input.nickname;
    const password = input.password;

    if (!nickname || !password) {
      throw new ParamsError();
    }

    if (password.length < 6) {
      throw new ParamsError("Your password must have at least 6 characters");
    }

    const userDB = await this.userDatabase.getUserByNickname(nickname);

    if (!userDB) {
      throw new NotFoundError("Member not found");
    }

    const user = new User(
      userDB.id,
      userDB.first_name,
      userDB.last_name,
      userDB.nickname,
      userDB.partnership,
      userDB.password
    );

    const isPasswordCorrect = await this.hashManager.compare(
      password,
      user.getPassword()
    );

    if (!isPasswordCorrect) {
      throw new AuthenticationError();
    }

    const payload: IIdPayload = { id: user.getId() };
    const token = this.authenticator.generateToken(payload);

    const response = {
      message: "You are logged in!",
      token,
    };

    return response;
  };

  public getUsers = async (token: string) => {
    const idFromValidToken = this.authenticator.getIdByToken(token);

    if (!idFromValidToken) {
      throw new AuthenticationError();
    }

    const usersFromDB = await this.userDatabase.getAllUsers();
    return usersFromDB;
  };

  public delPartnership = async (input: IDelUserInputDTO) => {
    const { nickname, token } = input;

    if (!nickname || !token) {
      throw new ParamsError();
    }

    const idFromValidToken = this.authenticator.getIdByToken(token);

    if (!idFromValidToken) {
      throw new AuthenticationError();
    }

    const userDB = await this.userDatabase.getUserByNickname(nickname);

    if (!userDB) {
      throw new NotFoundError("Member not found");
    }

    const user = new User(
      userDB.id,
      userDB.first_name,
      userDB.last_name,
      userDB.nickname,
      userDB.partnership,
      userDB.password
    );

    const payload: IIdPayload = { id: user.getId() };

    let response: string;
    if (idFromValidToken.id !== payload.id) {
      throw new AuthorizationError();
    } else {
      response = await this.userDatabase.delUser(user.getId());
    }

    return response;
  };
}
