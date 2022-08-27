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
import userByNameEnd from "./endpoints/userByNameEnd";
import taskResponsibleEnd from "./endpoints/taskResponsibleEnd";
import responsibleByTaskEnd from "./endpoints/responsibleByTaskEnd";
import taskAndRespByTaskIdEnd from "./endpoints/taskAndRespByTaskIdEnd";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/user/all", allUsersEnd);

app.post("/user", createUserEnd);

app.get("/user/:id", userByIdEnd);

app.put("/user/edit/:id", editUserEnd);

app.post("/task", createTaskEnd);

app.get("/task/:id/responsiblesTask", taskAndRespByTaskIdEnd);

app.get("/task/:id/responsible", responsibleByTaskEnd);

app.get("/task", taskByCreatorEnd);

app.get("/task/:id", taskByIdEnd);

app.get("/user", userByNameEnd);

app.post("/task/responsible", taskResponsibleEnd);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
