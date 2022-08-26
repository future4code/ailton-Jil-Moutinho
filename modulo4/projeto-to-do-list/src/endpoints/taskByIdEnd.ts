import { Request, Response } from "express";
import { taskById } from "../data/taskById";

export default async function taskByIdEnd(req: Request, res: Response) {
  const id = Number(req.params.id);
  try {
    const taskToDisplay = await taskById(id);

    if (!taskToDisplay) {
      res.statusCode = 400;
      throw new Error("There's no task with this id");
    }

    const dateToBR = (data: string): string => {
      const fullDate = data.split("-");
      console.log("all",fullDate);
      
      const year = fullDate[0];
      const month = fullDate[1];
      const day = fullDate[2];
      console.log(year);
      
      return `${year}-${month}-${day}`;
    };

    const newLimit_date = dateToBR(String(taskToDisplay.limit_date));
    console.log(newLimit_date);

    /*     taskToDisplay.limit_date = newLimit_date; */

    res.status(200).send(taskToDisplay);
  } catch (err: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: err.message || err.sqlMessage });
  }
}
