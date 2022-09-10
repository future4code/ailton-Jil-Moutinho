import { Request, Response } from "express";
import taskResponsible from "../data/taskResponsible";

export default async function taskResponsibleEnd(req: Request, res: Response) {
  try {
    const { task_id, responsible_user } = req.body;

    if (
      !task_id ||
      !responsible_user ||
      task_id === "" ||
      responsible_user === ""
    ) {
      res.statusCode = 400;
      throw new Error("Inform task id and responsible user.");
    }

    const result = await taskResponsible(Number(task_id), Number(responsible_user));

    res.status(201).send(result);
  } catch (err: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: err.message || err.sqlMessage });
  }
};
