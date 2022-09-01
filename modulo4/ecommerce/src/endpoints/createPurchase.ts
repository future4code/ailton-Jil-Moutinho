import { Request, Response } from "express";
import { insertPurchase } from "../data/insertPurchase";

export const createPurchase = async (req: Request, res: Response) => {
  try {
    const quantity = Number(req.body.quantity);
    const product_id = Number(req.body.product_id);
    const user_id = Number(req.body.user_id);

    if (!quantity || !user_id || !product_id) {
      res.statusCode = 400;
      throw new Error("Inform all request data. User id, product id and quantity");
    };

    if (isNaN(user_id) || isNaN(product_id) || isNaN(quantity) ) {
      res.statusCode = 400;
      throw new Error("Inform your user id, product id and quantity with numbers");
    };

    const newPurchase = await insertPurchase(user_id, product_id, quantity);

    res.status(201).send({
      message: "Purchase created successfully",
      data: `The Purchase id is ${newPurchase}`,
    });
  } catch (error: any) {
    res
      .status(res.statusCode)
      .send({ message: error.message || error.sqlMessage });
  }
};