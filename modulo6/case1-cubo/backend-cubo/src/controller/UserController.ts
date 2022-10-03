import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import {
  IDelUserInputDTO,
  ILoginInputDTO,
  ISignupInputDTO,
} from "../models/User";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public signup = async (req: Request, res: Response) => {
    try {
      const input: ISignupInputDTO = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        partnership: Number(req.body.partnership),
        password: req.body.password
      };
      
      const response = await this.userBusiness.signupUser(input);
      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const user: ILoginInputDTO = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
      };
      const response = await this.userBusiness.loginUser(user);
      res.status(201).send({ message: response });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  };

  public getAll = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization!;

     const response = await this.userBusiness.getUsers(token);
      res.status(201).send({ message: response });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  };

  public deleteUser = async (req: Request, res: Response) => {
    try {
      const user: IDelUserInputDTO = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        token: req.headers.authorization!,
      };
      const response = await this.userBusiness.delPartnership(user);
      res.status(201).send({ message: response });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  };
}
