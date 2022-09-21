import { UserDataBase } from "../database/UserDataBase";
import { MissingFields } from "../error/MissingFields";
import { TokenNotPass } from "../error/TokenNotPass";
import { User, UserCoBu, UserCoBuAllUser, USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  async create(UserCoBu: UserCoBu): Promise<{}> {
    const { name, email, password, role } = UserCoBu;

    if (!name || !email || !password || !role) {
      throw new MissingFields();
    }

    if (password.length < 6) {
      throw new Error("The password must have at least 6 characters");
    }

    if (
      role.toUpperCase() !== USER_ROLES.NORMAL &&
      role.toUpperCase() !== USER_ROLES.ADMIN
    ) {
      throw new Error("User role must be normal ou admin");
    }

    const userData = new UserDataBase();

    const emailAlreadyExit = await userData.getUserByEmail(email);

    if (emailAlreadyExit) {
      throw new Error("Email already submit");
    }

    const id = new IdGenerator().generate();

    const hashPassword = await new HashManager().hash(password);

    const user = new User(id, name, email, hashPassword, role);

    const response = await userData.createUser(user);

    const token = new Authenticator().generateToken({ id, role });

    return { response: response, token: token };
  }

  async login(email: string, password: string): Promise<string> {
    if (!email || !password) {
      throw new MissingFields();
    }

    const userData = new UserDataBase();

    const userBuCo = await userData.getUserByEmail(email);

    if (!userBuCo) {
      throw new Error("Email not register yet");
    }

    const correctPassword = await new HashManager().compare(
      password,
      userBuCo.getPassword()
    );

    if (!correctPassword) {
      throw new Error("Password incorrect");
    }

    const token = new Authenticator().generateToken({
      id: userBuCo.getId(),
      role: userBuCo.getRole(),
    });

    return token;
  }

  async getAllUsers(token: string, nameSearch?:string ): Promise<UserCoBuAllUser[]> {
    if (!token) {
      throw new TokenNotPass();
    }

    if (!nameSearch) {
      nameSearch = ""
    }
    const userToken = new Authenticator().getTokenPayload(token);

    const userData = new UserDataBase();

    const userExist = await userData.getUserById(userToken.id);

    if (!userExist.length) {
      throw new Error("Usuario não existe");
    }

    const result = await userData.getAllUsers(nameSearch)

    return result;
  }
}
