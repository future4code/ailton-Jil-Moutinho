import { Request, Response } from "express";
import { userDel } from "../data/userDel";

export default async function userDelEnd(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    if (!id) {
      res.statusCode = 400;
      throw new Error("Inform user id.");
    }

    const result = await userDel(id);

    res.status(200).send(result);
  } catch (err: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: err.message || err.sqlMessage });
  }
};