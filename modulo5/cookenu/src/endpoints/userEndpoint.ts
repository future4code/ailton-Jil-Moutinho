import { Request, Response } from "express";
import { UserData } from "../data/userData";
import { InvalidCredentials } from "../error/InvalidCredentials";
import { EmailAlreadyExists } from "../error/EmailAlreadyExists";
import { HashManager } from "../services/HashManager";
import { IncorrectPassword } from "../error/IncorrectPassword";
import { PermissionDenied } from "../error/PermissionDenied";
import GenerateId from "../services/GeneratorId";
import { TokenClass } from "../services/Authenticator";
import UserModel from "../model/UserModel";
import { EmailDoesntExist } from "../error/EmailDoesnExist";

export class userEndpoint {
  async create(req: Request, res: Response) {
    try {
      const { email, user_password, user_name } = req.body;

      if (
        !email ||
        !user_password ||
        !user_name ||
        !email.includes("@") ||
        user_password.length < 6
      ) {
        throw new InvalidCredentials();
      }

      const userDataBase = new UserData();

      const emailAlreadyExist = await userDataBase.getUserByEmail(email);
      if (emailAlreadyExist) {
        throw new EmailAlreadyExists();
      }

      const user_id = new GenerateId().createId();

      const hashPassword: string = await new HashManager().generateHash(
        user_password
      );
      /* const roleLower: typeUser = role.toLowerCase(); */

      const newUser = new UserModel(user_id, user_name, email, hashPassword);

      const result = await userDataBase.createUser(newUser);

      const token = new TokenClass().generateToken(user_id);

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
      if (!userByEmail) {
        throw new EmailDoesntExist();
      }

      res.status(201).send({ message: userByEmail });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, user_password } = req.body;

      if (
        !email ||
        !user_password ||
        !email.includes("@") ||
        user_password.length < 6
      ) {
        throw new InvalidCredentials();
      }

      const userData = new UserData();

      const emailExist = await userData.getUserByEmail(email);

      let correctPassword: boolean = false;
      if (!emailExist) {
        throw new EmailDoesntExist();
      } else {
        const hastTeste = emailExist.getPassword();
        correctPassword = await new HashManager().compare(
          user_password,
          hastTeste
        );
      }

      if (!correctPassword) {
        throw new IncorrectPassword();
      }

      /* const userValidLogin = await userData.getUserValidLogin(email, emailExist[0].password);

      if (!userValidLogin.length) {
        throw new IncorrectPassword();
      } 
      Não da mais pra usar, só se for comparando a senha criptografada.
      */

      const token = new TokenClass().generateToken(emailExist.getId());
      //, role: emailExist[0].role,

      res.status(200).send({ "token: ": token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async getByIdProfile(req: Request, res: Response) {
    try {
      // const token = req.headers.authorization as string
      const token = req.headers.authorization!;

      const isOk = new TokenClass().verifyToken(token);

      /*       if (isOk.role === "admin") {
        throw new PermissionDenied();
      } */

      if (!isOk) {
        throw new PermissionDenied();
      }

      const newUserData = new UserData();

      const userById = await newUserData.getUserById(isOk);

      res
        .status(200)
        .send({
          message: {
            user_id: userById?.getId(),
            "email:": userById?.getEmail(),
            name: userById?.getName(),
          },
        });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      // const token = req.headers.authorization as string
      const user_id = req.params.user_id;
      const token = req.headers.authorization!;
      
      if (!user_id) {
        throw new InvalidCredentials();
      }

      const isOk = new TokenClass().verifyToken(token);
      if (!isOk) {
        throw new PermissionDenied();
      }

      const newUserData = new UserData();

      const userById = await newUserData.getUserById(user_id);

      res.status(200).send({
        message: {
          user_id: userById?.getId(),
          email: userById?.getEmail(),
          user_name: userById?.getName()
        },
      });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
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

      /* if (isOk.role === "normal") {
        throw new PermissionDenied();
      } */

      const newUserData = new UserData();
      const userById = await newUserData.getUserById(id);
      if (!userById) {
        throw new EmailDoesntExist();
      }

      const result = await newUserData.delUserById(id);

      res.status(200).send({ message: result });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }
}
