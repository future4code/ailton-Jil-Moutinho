import { Request, Response } from "express";
import { CartBusiness } from "../business/CartBusiness";
import { ICartInputDB } from "../models/Cart";

export class CartController {
  constructor(private cartBusiness: CartBusiness) {}

  public createCart = async (req: Request, res: Response) => {
        try {
      const input: ICartInputDB = {
        client_name: req.body.client_name!,
        delivery_date: req.body.delivery_date,
      };

      const response = await this.cartBusiness.createNewCart(input);

      res.status(201).send(response);
    } catch (error: any) {      
      res.status(error.statusCode || 400).send({ message: error.message || error.sqlMessage });
    }
  };

  public updateBalance = async (req: Request, res: Response) => {
    try {
      const id_cart = req.body.id_cart!;

      const response = await this.cartBusiness.putTotal(id_cart);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ message: error.message || error.sqlMessage });
    }
  };
}
