import { Request, Response } from "express";
import { selectAllUsers } from "../data/selectAllUser";

export const selectAllUsersEnd = async (req: Request, res: Response) => {
  try {
    const arrayUsers = await selectAllUsers();

    if (!arrayUsers.length) {
      res.statusCode = 400;
      throw new Error("Error: No user on the table)");
    }

    res.status(200).send(arrayUsers);
  } catch (error: any) {
    res
      .status(res.statusCode)
      .send({ message: error.message || error.sqlMessage });
  }
};
