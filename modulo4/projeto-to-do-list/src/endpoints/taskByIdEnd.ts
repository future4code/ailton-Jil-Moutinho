import { Request, Response } from "express";
import taskById from "../data/taskById";

export default async function taskByIdEnd(req: Request, res: Response) {
  const id = Number(req.params.id);
  try {
    const taskToDisplay = await taskById(id);

    if (!taskToDisplay) {
      res.statusCode = 400;
      throw new Error("There's no task with this id");
    }

    const dateToBR = (data: string): string => {
      const fullDate = data.split(" ");

      const year = fullDate[3];
      const month = fullDate[1];
      const day = fullDate[2];

      const arrayMonth = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Oct",
        "Nov",
        "Dec",
      ];
      const monthCorrect = (arrayMonth.indexOf(month))+1;

      return `${day}/${monthCorrect}/${year}`;
    };

    const newLimit_date = dateToBR(String(taskToDisplay[0].limit_date));
  
    const newTaskToDisplay = {...taskToDisplay[0],
      limit_date: newLimit_date
    };

    res.status(200).send(newTaskToDisplay);
  } catch (err: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: err.message || err.sqlMessage });
  }
}
