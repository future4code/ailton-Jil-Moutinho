import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ParamsError } from "../errors/ParamsError";
import { IShowDB, IShowInputDB } from "../models/Show";

export class ShowController {
  constructor(private showBusiness: ShowBusiness) {}

  public post = async (req: Request, res: Response) => {
    try {
      const input: IShowInputDB = {
        band: req.body.band!,
        starts_at: new Date(req.body.starts_at!),
        token: req.headers.authorization!,
      };

      const response = await this.showBusiness.postShow(input);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };

  public getAll = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization!;

      const response = await this.showBusiness.getAllShows(token);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    }
  };
}
