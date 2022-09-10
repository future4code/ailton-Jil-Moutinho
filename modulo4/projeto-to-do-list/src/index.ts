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
import statusOfTaskEnd from "./endpoints/statusOfTaskEnd";
import tasksByStatusEnd from "./endpoints/tasksByStatusEnd";
import taskDelEnd from "./endpoints/taskDelEnd";
import userDelEnd from "./endpoints/userDelEnd";
import tasksDelayedEnd from "./endpoints/tasksDelayedEnd";
import userDelFromRespEnd from "./endpoints/userDelFromRespEnd";
import tasksAllRespEnd from "./endpoints/tasksAllRespEnd";
import respMultByTaskEnd from "./endpoints/respMultByTaskEnd";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/user/all", allUsersEnd);

app.post("/user", createUserEnd);

app.get("/user/:id", userByIdEnd);

app.put("/user/edit/:id", editUserEnd);

app.post("/task", createTaskEnd);

app.get("/task/all", tasksAllRespEnd);

app.get("/task/:id/responsiblesTask", taskAndRespByTaskIdEnd);

app.get("/task/:id/responsible", responsibleByTaskEnd);

app.get("/task", tasksByStatusEnd);

app.get("/task", taskByCreatorEnd);

app.delete("/task/:taskId/responsible/:responsibleUserId", userDelFromRespEnd);

app.delete("/task/:id", taskDelEnd);

app.get("/task/delayed", tasksDelayedEnd);

app.get("/task/:id", taskByIdEnd);

app.get("/user", userByNameEnd);

app.post("/task/responsible", taskResponsibleEnd);

app.post("/task/responsibles", respMultByTaskEnd);

app.put("/task/status/:id", statusOfTaskEnd);

app.delete("/user/:id", userDelEnd);



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
