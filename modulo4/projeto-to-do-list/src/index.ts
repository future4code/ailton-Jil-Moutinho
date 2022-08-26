import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { editUserEnd } from "./endpoints/editUserEnd";
import createUserEnd from "./endpoints/creatUserEnd";
import userByIdEnd from "./endpoints/userByIdEnd";
import createTaskEnd from "./endpoints/createTaskEnd";
import taskByIdEnd from "./endpoints/taskByIdEnd";
import allUsersEnd from "./endpoints/allUsersEnd";
import taskByCreatorEnd from "./endpoints/taskByCreatorEnd";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/user", createUserEnd);

app.get("/user/:id", userByIdEnd);

app.put("/user/edit/:id", editUserEnd);

app.post("/task", createTaskEnd);

app.get("/task", taskByCreatorEnd);

app.get("/task/:id", taskByIdEnd);

app.get("/users/all", allUsersEnd);



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
