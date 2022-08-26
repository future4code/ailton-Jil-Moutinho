import { Request, Response } from "express";
import { allUsers } from "../data/allUsers";

export default async function allUsersEnd(req: Request, res: Response) {
  try {
    const allUsersToDisplay = await allUsers();

    res.status(200).send(allUsersToDisplay);
  } catch (err: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: err.message || err.sqlMessage });
  }
};
