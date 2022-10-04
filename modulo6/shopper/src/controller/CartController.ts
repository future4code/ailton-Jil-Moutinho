import { Request, Response } from "express";
import { CartBusiness } from "../business/CartBusiness";

export class CartController {
  constructor(private CartBusiness: CartBusiness,
     ) {}

  public signup = async (req: Request, res: Response) => {
    /*     try {
      const input: ISignupInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const response = await this.CartBusiness.signupCart(input);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage });
    } */
  };

  public login = async (req: Request, res: Response) => {
    /*     try {
      const Cart: ILoginInputDTO = {
        email: req.body.email,
        password: req.body.password,
      };

      const response = await this.CartBusiness.loginCart(Cart);
      res.status(201).send({ message: response });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    } */
  };
}
