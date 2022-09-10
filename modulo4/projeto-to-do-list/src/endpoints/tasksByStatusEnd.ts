import { Request, Response } from "express";
import tasksByStatus from "../data/tasksByStatus";

export default async function tasksByStatusEnd(req: Request, res: Response) {
  const task_status = req.query.status as string;
  try {
    if (!task_status) {
        res.statusCode = 400;
        throw new Error("Inform task status to search");
      }

    const listTaskToDisplay = await tasksByStatus(task_status);

    if (!listTaskToDisplay) {
      res.statusCode = 400;
      throw new Error("There's no task with this status");
    }

/*     const dateToBR = (data: string): string => {
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

    const newLimit_date = dateToBR(String(listTaskToDisplay[0].limit_date));
  
    const newlistTaskToDisplay = {...listTaskToDisplay[0],
      limit_date: newLimit_date
    }; */

    res.status(200).send(listTaskToDisplay);
  } catch (err: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: err.message || err.sqlMessage });
  }
}
