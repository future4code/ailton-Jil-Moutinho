import { Router } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ShowController } from "../controller/ShowController";
import { ShowDatabase } from "../database/ShowDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const showRouter = Router();

const showController = new ShowController(
  new ShowBusiness(new ShowDatabase(), new IdGenerator())
);

showRouter.post("/create", showController.post);
showRouter.get("/all", showController.getAll);
showRouter.post("/bookingTicket/:show_id", showController.postBooking);
showRouter.delete("/delBooking/:show_id", showController.delBooking);
