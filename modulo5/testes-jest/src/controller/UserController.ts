import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { ILoginInputDTO, ISignupInputDTO } from "../models/User";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public signup = async (req: Request, res: Response) => {
    try {
      const input: ISignupInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      // instanciar a classe userBussines - dependencia
      // const userBusiness = new UserBusiness()
      const response = await this.userBusiness.signupUser(input);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const user: ILoginInputDTO = {
        email: req.body.email,
        password: req.body.password,
      };

      const response = await this.userBusiness.loginUser(user);
      res.status(201).send({ message: response });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  };

  
}
