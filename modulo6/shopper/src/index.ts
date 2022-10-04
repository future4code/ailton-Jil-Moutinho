import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { pingRouter } from "./router/pingRouter";
import { productRouter } from "./router/productRouter";
import { cartRouter } from "./router/cartRouter";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Service working at ${process.env.PORT || 3003}`);
});

app.use("/ping", pingRouter);
app.use("/users", cartRouter);
app.use("/product", productRouter);
