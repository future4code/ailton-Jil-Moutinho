import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { IPostDB, IPostToDelDB } from "../models/Post";

export class PostController {
  constructor(private postBusiness: PostBusiness) {}

  public post = async (req: Request, res: Response) => {
    try {
      const input: IPostDB = {
        content: req.body.content!,
        token: req.headers.authorization!,
      };

      // instanciar a classe userBussines - dependencia
      // const userBusiness = new UserBusiness()
      const response = await this.postBusiness.postPost(input);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };

  public getAll = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization!;

      // instanciar a classe userBussines - dependencia
      // const userBusiness = new UserBusiness()
      const response = await this.postBusiness.getPosts(token);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };

  public deletePost = async (req: Request, res: Response) => {
    try {
      const input: IPostToDelDB = {
        token: req.headers.authorization!,
        post_id: req.params.post_id,
      };

      // instanciar a classe userBussines - dependencia
      // const userBusiness = new UserBusiness()
      const response = await this.postBusiness.delPostFromDB(input);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };

  public like = async (req: Request, res: Response) => {
    try {
      const input: IPostToDelDB = {
        token: req.headers.authorization!,
        post_id: req.params.post_id,
      };

      // instanciar a classe userBussines - dependencia
      // const userBusiness = new UserBusiness()
      const response = await this.postBusiness.likePost(input);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };
}
