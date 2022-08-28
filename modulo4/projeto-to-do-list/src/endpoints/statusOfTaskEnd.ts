import { Request, Response } from "express";
import statusOfTask from "../data/statusOfTask";

export default async function statusOfTaskEnd(req: Request, res: Response) {
  try {
    const task_id = Number(req.params.id);
    const task_status = req.body.task_status as string;

    if (!task_id || !task_status || task_status === "" ) {
      res.statusCode = 400;
      throw new Error("Informe task id.");
    }

    const taskToDisplay = await statusOfTask(task_status, task_id);

    if (taskToDisplay.length === 0) {
      res.statusCode = 400;
      throw new Error("There's no task with this id.");
    }

    res.status(200).send(taskToDisplay);
  } catch (err: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: err.message || err.sqlMessage });
  }
}
