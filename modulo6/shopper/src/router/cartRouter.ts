import { Router } from "express";
import { CartBusiness } from "../business/CartBusiness";
import { CartController } from "../controller/CartController";
import { CartDatabase } from "../database/CartDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const cartRouter = Router();

/* const cartController = new CartController(
  new CartBusiness(new CartDatabase(), new IdGenerator())
);

cartRouter.post("/signup", cartController.signup);
cartRouter.post("/login", cartController.login); */
