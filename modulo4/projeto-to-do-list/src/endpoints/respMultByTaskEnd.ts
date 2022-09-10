import { Request, Response } from "express";
import respMultByTask from "../data/respMultByTask";

export default async function respMultByTaskEnd(req: Request, res: Response) {
  try {
    const task_id = Number(req.body.task_id);
    const multResp = req.body.multipleResponse;

    if (!task_id || !multResp || multResp === "") {
      res.statusCode = 400;
      throw new Error("Informe task id and responsibles.");
    }
    //Setar varias vezes para cada item dentro do array
    const listrespMultByTask = await respMultByTask(task_id, multResp);
  } catch (err: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: err.message || err.sqlMessage });
  }
}
