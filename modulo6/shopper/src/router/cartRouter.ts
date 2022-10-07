import { Router } from "express";
import { CartBusiness } from "../business/CartBusiness";
import { CartController } from "../controller/CartController";
import { CartDatabase } from "../database/CartDatabase";
import { ProductDatabase } from "../database/ProductDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const cartRouter = Router();

const cartController = new CartController(
  new CartBusiness(new CartDatabase(), new IdGenerator(), new ProductDatabase())
);

cartRouter.post("/create", cartController.createCart);
cartRouter.put("/balance", cartController.updateBalance);
/* cartRouter.post("/login", cartController.login); */
