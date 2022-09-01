import { Request, Response } from "express";
import { selectAllUsers } from "../data/selectAllUser";
import { selectPurchasesByUser } from "../data/selectPurchasesByUser";

export const selectAllUsersWithPurchaseEnd = async (req: Request, res: Response) => {
  try {
    let arrayUsersWithPurchases = await selectAllUsers();

    if (!arrayUsersWithPurchases.length) {
      res.statusCode = 400;
      throw new Error("Error: No user on the table)");
    }

    for (const item of arrayUsersWithPurchases) {
      let purchases = await selectPurchasesByUser(item.id);
      item.purchases = purchases;
    }

    /*   arrayUsersWithPurchases.forEach(item:any => {
        const purchases = selectPurchasesByUser(item.id)
    item.purchases = purchases

    return item
}); */

    res.status(200).send(arrayUsersWithPurchases);
  } catch (error: any) {
    res
      .status(res.statusCode)
      .send({ message: error.message || error.sqlMessage });
  }
};
