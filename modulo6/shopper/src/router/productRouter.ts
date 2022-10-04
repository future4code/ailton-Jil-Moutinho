import { Router } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductController } from "../controller/ProductController";
import { ProductDatabase } from "../database/ProductDatabase";

export const productRouter = Router();

const productController = new ProductController(
  new ProductBusiness(new ProductDatabase())
);

productRouter.get("/all", productController.getAll);
productRouter.get("/:id", productController.getById);
/* ProductRouter.post("/bookingTicket/:Product_id", productController.postBooking);
ProductRouter.delete("/delBooking/:Product_id", productController.delBooking); */
