import { Request, Response } from "express";
import taskAndRespByTaskId from "../data/taskAndRespByTaskId";

export default async function taskAndRespByTaskIdEnd(
  req: Request,
  res: Response
) {
  try {
    const task_id = Number(req.params.id);

    if (!task_id) {
      res.statusCode = 400;
      throw new Error("Informe task id.");
    }

    const listTaskAndRespByTaskId = await taskAndRespByTaskId(task_id);

    if (!listTaskAndRespByTaskId.id) {
      res.statusCode = 400;
      throw new Error("There's no task with this id.");
    }

    res.status(200).send(listTaskAndRespByTaskId);
  } catch (err: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: err.message || err.sqlMessage });
  }
};