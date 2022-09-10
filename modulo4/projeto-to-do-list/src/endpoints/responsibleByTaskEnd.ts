import { Request, Response } from "express";
import responsibleByTask from "../data/responsibleByTask";

export default async function responsibleByTaskEnd(
  req: Request,
  res: Response
) {
  try {
    const task_id = Number(req.params.id);

    if (!task_id) {
      res.statusCode = 400;
      throw new Error("Informe taskl id.");
    }

    const listResponsibleByTask = await responsibleByTask(task_id);

    if (listResponsibleByTask.length === 0) {
      res.statusCode = 400;
      throw new Error("There's no task with this id.");
    }

    res.status(200).send(listResponsibleByTask);
  } catch (err: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: err.message || err.sqlMessage });
  }
};
