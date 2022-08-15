import express, { Express } from "express";
import cors from "cors";
import { Users, usersList, Post, postsList } from "./data";
import { Users2, usersList2, Post2 } from "./data2";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get("/ex1", (req, res) => {
  res.send("Hello world!");
});

//ex4
app.get("/users", (req, res) => {
  res.send(usersList);
});

//7
app.get("/posts", (req, res) => {
  res.send(postsList);
});

//8
app.get("/posts/:id", (req, res) => {
  const idUser: number = Number(req.params.id);

  const userPosts: Post[] = postsList.filter((item) => {
    return item.userId === idUser;
  });
  res.send(userPosts);
});

//9
app.delete("/delPost/:id", (request, response) => {
  const postId = Number(request.params.id);

  const delPost: Post[] = postsList.filter((item) => {
    return item.id !== postId;
  });
  response.send(delPost);
});

//10
app.delete("/delUser/:id", (request, response) => {
  const userId = Number(request.params.id);

  const delUser: Users[] = usersList.filter((item) => {
    return item.id !== userId;
  });
  response.send(delUser);
});

//Desafio pessoal - criar novo post
app.post("/posts/new", (request, response) => {
  const newPost = request.body;

  postsList.push(newPost)
  
  response.status(201).send({Mensagem:"Post adicionado com sucesso"});
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});