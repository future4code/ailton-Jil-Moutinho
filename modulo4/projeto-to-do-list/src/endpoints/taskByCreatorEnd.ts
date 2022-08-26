import { Request, Response } from "express";
import { taskByCreator } from "../data/taskByCreator";

export default async function taskByCreatorEnd(req: Request, res: Response) {
  try {
    const creator = Number(req.query.creator);

    const listTasksByCreator = await taskByCreator(creator);

    /* if (!taskToDisplay) {
      res.statusCode = 400;
      throw new Error("There's no task with this id");
    } */ //Tem q colocar? Pq se não existir o site quebra?

    res.status(200).send(listTasksByCreator);
  } catch (err: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: err.message || err.sqlMessage });
  }
}
