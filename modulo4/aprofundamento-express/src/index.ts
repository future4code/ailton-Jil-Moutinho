import express, { Express } from "express";
import cors from "cors";
import { toDoList, ToDo, Todos } from "./data";

const app: Express = express();

app.use(cors());
app.use(express.json());

//Ex1
app.get("/ping", (req, res) => {
  res.send("Pong! 🏓");
});

//Ex4 só true
app.get("/toDo/filtered", (req, res) => {
  const isCompleted: boolean = req.body;

  const ToDoFiltered: ToDo[] = toDoList.filter((item) => {
    return item.completed === true;
  });

  res.send(ToDoFiltered);
});

//4 com params
app.get("/toDo/filtered/:isCompletedChoosed", (req, res) => {
  let isCompleted: boolean;

  if (req.params.isCompletedChoosed === "true") {
    isCompleted = true;
  } else if (req.params.isCompletedChoosed === "false") {
    isCompleted = false;
  } else {
    res.status(401).send({ Mensagem: "Parametro inválido" });
  }

  const ToDoFilteredChoosed: ToDo[] = toDoList.filter((item) => {
    return item.completed == isCompleted;
  });

  ToDoFilteredChoosed.length === 0 && res.send(ToDoFilteredChoosed);
});

//5
app.post("/toDo/newToDo", (req, res) => {
  const newTask = req.body;

  toDoList.push(newTask);
  res.send(toDoList);
  //res.status(201).send({ Mensagem: "Tarefa adicionado com sucesso" });
});

//ex6
app.put("/toDo/setCompleted/:id", (req, res) => {
  const newCompleted = req.body;

  const taskCompleted: ToDo[] = toDoList.filter((item) => {
    if (item.id === Number(req.params.id)) {
      item.completed = newCompleted.completed; //!item.completed
    }
    return item;
  });
  res.send(taskCompleted);
});

//7
app.delete("/toDo/:id", (req, res) => {
  const newList: ToDo[] = toDoList.filter((item) => {
    return item.id !== Number(req.params.id);
  });
  res.send(newList);
});

//8
app.get("/toDo/:userid", (req, res) => {
  const newListByUser: ToDo[] = toDoList.filter((item) => {
    return item.userId === Number(req.params.userid);
  });
  res.send(newListByUser);
});

//10
app.get("/toDoAll/:userid", (req, res) => {
  const newListByOtherUsers: ToDo[] = [];

  const newListByUser: ToDo[] = toDoList.filter((item) => {
    if (item.userId === Number(req.params.userid)) {
      return item.userId === Number(req.params.userid);
    } else {
      newListByOtherUsers.push(item);
    }
  });

  let AllSeparated: Todos = {
    selectedUser: newListByUser,
    others: newListByOtherUsers,
  };
  res.send(AllSeparated);
});

//Ex11
/* import fs from 'fs';

function example1() {
  try {
    const content = JSON.stringify(listAfazeres)
    fs.writeFileSync('./test.txt', content);
  } catch (err) {
    console.log(err);
  }
}
example1(); */

app.listen(3003, () => {
  console.log("Running in http://localhost:3003");
});