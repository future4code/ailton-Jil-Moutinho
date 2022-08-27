import { Request, Response } from "express";
import userByName from "../data/userByName";

export default async function userByNameEnd(req: Request, res: Response) {
  const search = req.query.search as string;
  try {
    if (!search || search === "") {
      res.statusCode = 400;
      throw new Error("Inform a work to search.");
    }

    const userToDisplay = await userByName(search);

    if (!userToDisplay) {
      res.statusCode = 404;
      throw new Error("No user with this data.");
    }

    res.status(200).send(userToDisplay);
  } catch (err: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: err.message || err.sqlMessage });
  }
}
