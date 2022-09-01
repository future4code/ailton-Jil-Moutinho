import { Request, Response } from "express";
import { insertProduct } from "../data/insertProduct";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name_product, image_url } = req.body;
    const price = Number(req.body.price);

    if (!name_product || !price || !image_url) {
      res.statusCode = 400;
      throw new Error("Inform all request data. Name, e-mail and password");
    }

    if (isNaN(price)) {
      res.statusCode = 400;
      throw new Error("Inform your price with numbers");
    }

    if (
      !image_url.includes("http") ||
      !image_url.includes(":") ||
      !image_url.includes("/")
    ) {
      res.statusCode = 400;
      throw new Error("Error: Please inform a valid url)");
    }

    const newProduct = await insertProduct(name_product, price, image_url);

    res.status(201).send({
      message: "Product created successfully",
      data: `The product id is ${newProduct}`,
    });
  } catch (error: any) {
    res
      .status(res.statusCode)
      .send({ message: error.message || error.sqlMessage });
  }
};
