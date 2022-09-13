import { Request, Response } from "express";
import { UserData } from "../data/userData";
import { InvalidCredentials } from "../error/InvalidCredentials";
import { EmailAlreadyExists } from "../error/EmailAlreadyExists";
import GenerateId from "../services/GenerateId";
import UserModel from "../model/User";
import { TokenClass, typeUser } from "../services/TokenClass";
import { NonExistentEmail } from "../error/EmailDoensExist";
import { HashManager } from "../services/HashManager";
import { IncorrectPassword } from "../error/IncorrectPassword";
import { PermissionDenied } from "../error/PermissionDenied";

export class userEndpoint {
  async create(req: Request, res: Response) {
    try {
      const { email, password, role } = req.body;

      if (
        !email ||
        !password ||
        !email.includes("@") ||
        password.length < 6 ||
        !role
      ) {
        throw new InvalidCredentials();
      }

      const userDataBase = new UserData();

      const emailAlreadyExist = await userDataBase.getUserByEmail(email);
      if (emailAlreadyExist.length) {
        throw new EmailAlreadyExists();
      }

      const id = new GenerateId().createId();

      const hashPassword: string = await new HashManager().generateHash(
        password
      );
      const roleLower: typeUser = role.toLowerCase();

      const newUser = new UserModel(id, email, hashPassword, roleLower);

      const result = await userDataBase.createUser(newUser);

      const token = new TokenClass().generateToken({ id, role: roleLower });

      res.status(201).send({ message: result, token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async getByEmail(req: Request, res: Response) {
    try {
      const { email } = req.body;

      if (!email || !email.includes("@")) {
        throw new InvalidCredentials();
      }

      const userDataBase = new UserData();

      const userByEmail = await userDataBase.getUserByEmail(email);
      if (!userByEmail.length) {
        throw new NonExistentEmail();
      }

      console.log(userByEmail);

      res.status(201).send({ message: userByEmail });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password || !email.includes("@") || password.length < 6) {
        throw new InvalidCredentials();
      }

      const userData = new UserData();

      const emailExist = await userData.getUserByEmail(email);

      if (!emailExist) {
        throw new NonExistentEmail();
      }

      const correctPassword: boolean = await new HashManager().compare(
        password,
        emailExist[0].password
      );

      if (!correctPassword) {
        throw new IncorrectPassword();
      }

      /* const userValidLogin = await userData.getUserValidLogin(email, emailExist[0].password);

      if (!userValidLogin.length) {
        throw new IncorrectPassword();
      } 
      Não da mais pra usar, só se for comparando a senha criptografada.
      */

      const token = new TokenClass().generateToken({
        id: emailExist[0].id,
        role: emailExist[0].role,
      });

      res.status(200).send({ "token: ": token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async getByIdProfile(req: Request, res: Response) {
    try {
      // const token = req.headers.authorization as string
      const token = req.headers.authorization!;
      const { id } = req.body;

      const isOk = new TokenClass().verifyToken(token);

      if (isOk.role === "admin") {
        throw new PermissionDenied();
      }

      const newUserData = new UserData();

      const userById = await newUserData.getUserById(id);

      res
        .status(200)
        .send({ message: { id: userById.id, "email:": userById.email } });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      // const token = req.headers.authorization as string
      const token = req.headers.authorization!;

      const isOk = new TokenClass().verifyToken(token);

      const newUserData = new UserData();

      const userById = await newUserData.getUserById(isOk.id);

      res
        .status(200)
        .send({ message: { id: userById.id, email: userById.email, role: userById.role } });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async delById(req: Request, res: Response) {
    try {
      // const token = req.headers.authorization as string
      const { id } = req.body;
      const token = req.headers.authorization!;

      if (!id) {
        throw new InvalidCredentials();
      }

      const isOk = new TokenClass().verifyToken(token);

      if (isOk.role === "normal") {
        throw new PermissionDenied();
      }

      const newUserData = new UserData();
      const userById = await newUserData.getUserById(id);
      if (!userById) {
        throw new NonExistentEmail();
      }

      const result = await newUserData.delUserById(id);

      res.status(200).send({ message: result });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }
}
