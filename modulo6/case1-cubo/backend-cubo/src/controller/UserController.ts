import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import {
  IDelUserInputDTO,
  ILoginInputDTO,
  IPartnershipControlInputDTO,
  ISignupInputDTO,
} from "../models/User";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public signup = async (req: Request, res: Response) => {
    try {
      const input: ISignupInputDTO = {
        first_name: req.body.first_name!,
        last_name: req.body.last_name!,
        nickname: req.body.nickname!,
        partnership: Number(req.body.partnership),
        password: req.body.password!,
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
        nickname: req.body.nickname,
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

  public updateUser = async (req: Request, res: Response) => {
    try {
      const user: IPartnershipControlInputDTO = {
        nickname: req.body.nickname!,
        partnership: Number(req.body.partnership),
        token: req.headers.authorization!,
      };
      const response = await this.userBusiness.updatePartnership(user);
      res.status(201).send({ message: response });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  };

  public deleteUser = async (req: Request, res: Response) => {
    try {
      const user: IDelUserInputDTO = {
        nickname: req.params.nickname!,
        token: req.headers.authorization!,
      };
      const response = await this.userBusiness.delPartnership(user);
      res.status(201).send({ message: response });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  };

  public getAvailable = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization!;

      const response = await this.userBusiness.getAvailableShares(token);
      res.status(201).send({ message: response });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  };
}
