import { Request, Response } from "express";
import { selectPurchasesByUser } from "../data/selectPurchasesByUser";

export const selectPurchasesByUserEnd = async (req: Request, res: Response) => {
  try {
    const user_id = Number(req.params.user_id);

    const arrayPurchasesByUser = await selectPurchasesByUser(user_id);

    if (!arrayPurchasesByUser.length) {
      res.statusCode = 404;
      throw new Error("Error: No user on this table");
    }

    res.status(200).send(arrayPurchasesByUser);
  } catch (error: any) {
    res
      .status(res.statusCode)
      .send({ message: error.message || error.sqlMessage });
  }
};
