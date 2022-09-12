import { Request, Response } from "express";
import { UserData } from "../data/UserData";
import { EmailAlreadyExists } from "../error/EmailAlreadyExist";
import { InvalidCredentials } from "../error/InvalidCredentials";
import { NonExistentEmail } from "../error/EmailDoenstExist";
import UserModel from "../model/User";
import GenerateId from "../services/GenerateId";
import { TokenClass } from "../services/Token";
import { IncorrectPassword } from "../error/IncorrectPassword";

export class userEndpoint {
  async create(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password || !email.includes("@") || password.length < 6) {
        throw new InvalidCredentials();
      }

      const userDataBase = new UserData();

      const emailAlreadyExist = await userDataBase.getUserByEmail(email);
      if (emailAlreadyExist.length) {
        throw new EmailAlreadyExists();
      }

      const id = new GenerateId().createId();

      const newUser = new UserModel(id, email, password);

      const result = await userDataBase.createUser(newUser);

      const token = new TokenClass().generateToken(id);

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

        const { email, password } = req.body

        if (!email || !password || !email.includes("@") || password.length < 6) {
          throw new InvalidCredentials();
        }

        const userData = new UserData()

        const userValidLogin = await userData.getUserValidLogin(email, password)

        if (!userValidLogin.length) {
            throw new IncorrectPassword();
        }

        const token = new TokenClass().generateToken(userValidLogin[0].id)

        res.status(200).send({ "token: ": token })

    } catch (error: any) {
        res.status(error.statusCode || 500).send({ message: error.message })
    }
}

/* async authenticationLogin(req: Request, res: Response) {
  try {
      // const token = req.headers.authorization as string
      const token = req.headers.authorization!

      const isOk = new TokenClass().verifyToken(token)

      const userData = new UserData()

      await userData.edit(id)

      res.status(200).send("Atualizado com sucesso!")

  } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message })
  }
} */


}
