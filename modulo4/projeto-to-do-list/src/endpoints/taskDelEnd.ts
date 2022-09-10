import { Request, Response } from "express";
import { taskDel } from "../data/taskDel";

export default async function taskDelEnd(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    if (!id) {
      res.statusCode = 400;
      throw new Error("Inform task id.");
    }

    const result = await taskDel(id);

    res.status(200).send(result);
  } catch (err: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: err.message || err.sqlMessage });
  }
};
