import { Request, Response } from "express";
import tasksDelayed from "../data/tasksDelayed";

export default async function tasksDelayedEnd(req: Request, res: Response) {
  try {
    const listTasksDelayed = tasksDelayed();

/*     if (listTasksDelayed.lenght === 0) {
      res.statusCode = 400;
      throw new Error("There's no delayed task");
    } */
console.log(listTasksDelayed);

    res.status(200).send(listTasksDelayed);
  } catch (err: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: err.message || err.sqlMessage });
  }
}
