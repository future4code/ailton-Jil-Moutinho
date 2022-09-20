import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import {
  DataToDeleteDTO,
  GetuserInput,
  UserCoBu,
  UserEditDTO,
  UserLoginInputDTO,
} from "../models/User";

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const { name, email, password, role } = req.body;

      const userBussines = new UserBusiness();

      const user: UserCoBu = {
        name,
        email,
        password,
        role,
      };

      const messageAndToken = await userBussines.create(user);

      res.status(201).send({ message: messageAndToken });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const user: UserLoginInputDTO = {
        email: req.body.email,
        password: req.body.password,
      };

      const userBusiness = new UserBusiness();

      const token = await userBusiness.login(user);

      res.status(201).send({ message: token });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const inputs: GetuserInput = {
        token: req.headers.authorization,
        search: req.query.search as string,
        order: req.query.order as string,
        sort: req.query.sort as string,
        limit: Number(req.query.limit),
        page: req.query.page as string,
      };

      const userBusiness = new UserBusiness();

      const userProfile = await userBusiness.getUsers(inputs);

      res.status(201).send({ response: userProfile });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }

  public deleteUser = async (req: Request, res: Response) => {
    try {
      const inputToDelete: DataToDeleteDTO = {
        token: req.headers.authorization,
        idToDelete: req.params.id,
      };

      const userBusiness = new UserBusiness();
      const response = await userBusiness.delete(inputToDelete);

      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };

  public editUser = async (req: Request, res: Response) => {
    try {
      const input: UserEditDTO = {
        token: req.headers.authorization,
        idToEdit: req.params.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const userBusiness = new UserBusiness();
      const response = await userBusiness.editUser(input);

      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };
}
