import { Request, Response } from "express";
import { userDelFromResp } from "../data/userDelFromResp";

export default async function userDelFromRespEnd(req: Request, res: Response) {
  try {
    const { taskId, responsibleUserId } = req.params;

    if (!taskId || !responsibleUserId) {
      res.statusCode = 400;
      throw new Error("Informe task id and responsible id");
    }

    /*     const IsThereUser = ExisteUsuarioComEsseId;
    const WasResp = EraResponsavel; */

    const respUpdated = await userDelFromResp(
      Number(taskId),
      Number(responsibleUserId)
    );

    if (!respUpdated) {
      res.statusCode = 404;
      throw new Error("Task not found");
    }

    res.status(200).send(respUpdated);
  } catch (err: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: err.message || err.sqlMessage });
  }
}
