import { UserDataBase } from "../database/UserDataBase";
import { MissingFields } from "../error/MissingFields";
import { TokenNotPass } from "../error/TokenNotPass";
import { UserDoesntExist } from "../error/UserDoesnExist";
import {
  DataToDeleteDTO,
  GetuserInput,
  GetUserInputDBDTO,
  User,
  UserCoBu,
  UserEditDTO,
  UserLoginInputDTO,
  USER_ROLES,
} from "../models/User";
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

  async login(user: UserLoginInputDTO): Promise<string> {
    const { email, password } = user;

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

  public getUsers = async (input: GetuserInput) => {
    const token = input.token;
    const search = input.search || "";
    const order = input.order || "name";
    const sort = input.sort || "ASC";
    const limit = Number(input.limit) || 10;
    const page = Number(input.page) || 1;

    const offset = limit * (page - 1);

    if (!token) {
      throw new TokenNotPass();
    }

    const userToken = new Authenticator().getTokenPayload(token);

    if (!userToken) {
      throw new TokenNotPass();
    }

    const userData = new UserDataBase();

    const dataToGetAll: GetUserInputDBDTO = {
      search,
      order,
      sort,
      limit,
      offset,
    };

    const result = await userData.getAllUsers(dataToGetAll);

    return result;
  };

  public delete = async (inputToDelete: DataToDeleteDTO) => {
    const token = inputToDelete.token;
    const idToDelete = inputToDelete.idToDelete;

    if (!token) {
      throw new TokenNotPass();
    }

    const userToken = new Authenticator().getTokenPayload(token);

    if (!userToken) {
      throw new TokenNotPass();
    }

    if (userToken.role !== USER_ROLES.ADMIN) {
      throw new Error("Apenas admins podem deletar usuários");
    }

    if (userToken.id === idToDelete) {
      throw new Error("Não é possível deletar a própria conta");
    }

    const userData = new UserDataBase();

    const userExist = await userData.getUserById(idToDelete);

    if (!userExist) {
      throw new Error("There is no user with this id");
    }

    const result = await userData.deleteUserById(idToDelete);

    return result;
  };

  async editUser(user: UserEditDTO): Promise<string> {
    const { token, idToEdit, email, name, password } = user;

    if (!token) {
      throw new Error("Missing Token");
    }

    if (!idToEdit) {
      throw new Error("Missing id to edit");
    }

    const userToken = new Authenticator().getTokenPayload(token);

    if (!userToken) {
      throw new TokenNotPass();
    }

    if (userToken.role === USER_ROLES.NORMAL && userToken.id !== idToEdit) {
      throw new Error(
        "Only admins can edit others users profile. If you want, you can edit your on."
      );
    }

    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new Error("Email info not valid");
    }

    if (name.length < 3) {
      throw new Error(
        "Size od name info valid. It must have more than 3 characteres."
      );
    }

    if (password.length < 6) {
      throw new Error(
        "Size od password info valid. It must have more than 5 characteres."
      );
    }

    if (!email && !name && !password) {
      throw new MissingFields();
    }

    const userData = new UserDataBase();

    const userBuCo = await userData.getUserById(idToEdit);

    if (!userBuCo) {
      throw new UserDoesntExist();
    }

    const editedUser = new User(
      userBuCo.getId(),
      userBuCo.getName(),
      userBuCo.getEmail(),
      userBuCo.getPassword(),
      userBuCo.getRole()
    );

    name && userBuCo.setName(name);
    email && userBuCo.setEmail(email);
    password && userBuCo.setPassword(password);

    const result = await userData.updateUser(editedUser);

    return result;
  }
}
