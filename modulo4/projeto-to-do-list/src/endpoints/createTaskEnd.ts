import { Request, Response } from "express";
import { createTask } from "../data/createTask";

export default async function createTaskEnd(req: Request, res: Response) {
  try {
    const { title, task_description, limit_dateInitial, creator } = req.body;

    if (
      !title ||
      !task_description ||
      !limit_dateInitial ||
      !creator ||
      title === "" ||
      task_description === "" ||
      limit_dateInitial === "" ||
      creator === ""
    ) {
      res.statusCode = 400;
      throw new Error("Inform all request data.");
    }

    const dateBRToUS = (data: string): string => {
      const fullDate = data.split("/");
      const year = fullDate[2];
      const month = Number(fullDate[1]) - 1;
      const day = fullDate[0];
      return `${year}-${String(month)}-${day}`;
    };

    const limit_date = dateBRToUS(limit_dateInitial);

    const newTask = await createTask(
      title,
      task_description,
      limit_date,
      creator
    );

    res.status(200).send(newTask);
  } catch (err: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: err.message || err.sqlMessage });
  }
}
