import { Request, Response } from "express";
import tasksAllResp from "../data/tasksAllResp";

export default async function tasksAllRespEnd(req: Request, res: Response) {
  try {
    const listTasksAllRespToDisplay = await tasksAllResp();

    res.status(200).send(listTasksAllRespToDisplay);
  } catch (err: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: err.message || err.sqlMessage });
  }
};