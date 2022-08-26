import { Request, Response } from "express";
import userid  from "../data/userById";

export default async function userByIdEnd(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    
    const userToDisplay = await userid(id);

    if (!userToDisplay) {
      res.statusCode = 400;
      throw new Error("There's no user with this id");
    }

    res.status(200).send(userToDisplay);
  } catch (err: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: err.message || err.sqlMessage });
  }
};
