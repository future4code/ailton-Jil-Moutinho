import { Request, Response } from "express";
import editUser from "../data/editUser";

export async function editUserEnd(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { user_name, nickname } = req.body;

    if (!user_name || !nickname || user_name === "" || nickname === "") {
      res.statusCode = 400;
      throw new Error("Inform all request data.");
    }

    const updatedUser = await editUser(id, user_name, nickname);

    if (!updatedUser) {
      res.statusCode = 400;
      throw new Error("There's no user with this id");
    }

    res.status(201).send(updatedUser);
  } catch (err: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: err.message || err.sqlMessage });
  }
};
