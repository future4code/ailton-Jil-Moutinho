import { Request, Response } from "express";
import { selectAllProducts } from "../data/selectAllProducts";

export const selectAllProductsEnd = async (req: Request, res: Response) => {
  try {
    let order = req.query.order as string;
    let search = req.query.search as string;

    if (order !== "asc" && order !== "desc") {
      order = "none";
    }

    if (!search) {
      search = "";
    }

    const arrayProducts = await selectAllProducts(order, search);

    if (!arrayProducts.length) {
      res.statusCode = 400;
      throw new Error("Error: No products on the table)");
    }

    res.status(200).send(arrayProducts);
  } catch (error: any) {
    res
      .status(res.statusCode)
      .send({ message: error.message || error.sqlMessage });
  }
};
