import express, { Express, Request, Response } from "express";
import cors from "cors";
import { User, usersList } from "./data";

import { AddressInfo } from "net";

const app: Express = express();

app.use(cors());
app.use(express.json());

//Ex1
/* app.get("/users", (req: Request, res: Response) => {
  let codeError: number = 400;
  try {
    if (!usersList) {
      codeError = 404;
      throw new Error("There's no userlist");
    }
    res.status(200).send(usersList);
  } catch (error) {
    res
      .status(codeError)
      .send("Userlist not found"); //{message: error.message}
  }
}); */

//*a. Qual método HTTP você deve utilizar para isso?*
// get users

//b. Como você indicaria a entidade que está sendo manipulada?
// Como User[]. Entidade é o que estamos manipulando

//Ex2
app.get("/users", (req: Request, res: Response) => {
  let codeError: number = 400;
  const type1: string = req.query.type as string;
  const type: string = type1.toUpperCase();

  try {
    if (!usersList) {
      codeError = 404;
      throw new Error("There's no userlist");
    }

    let ListToDisplay: User[] = [];
    if (type === "") {
      ListToDisplay = [...usersList];
    }

    if (type !== "ADMIN" && type !== "NORMAL" && type !== "") {
      codeError = 422; //unprocessable entity
      throw new Error("Type not identified");
    }

    const userSByType: User[] | undefined = usersList.filter((item) => {
      return item.type === type;
    });

    if (type !== "" && userSByType.length === 0) {
      codeError = 404; //not found
      throw new Error("User with this type not found");
    }

    if (type !== "" && userSByType.length !== 0) {
      ListToDisplay = [...userSByType];
    }

    res.status(200).send(ListToDisplay);
  } catch (error: any) {
    res.status(codeError || 500).send({ message: error.message });
  }
});

//Ainda Ex2
//a. Como você passou os parâmetros de type para a requisição? Por quê?
// query Pq assim pode ser opcional.

//b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
//Sim, linha 50

//Ex3
app.get("/usersByName", (req: Request, res: Response) => {
  const name1: string = req.query.name as string;
  const name: string = name1.toLowerCase();
  let codeError: number = 400;

  try {
    if (!usersList) {
      codeError = 404;
      throw new Error("There's no userlist");
    }

    let ListToDisplay: User[] = [];
    if (name === "") {
      ListToDisplay = [...usersList];
    }

    const userByName: User[] | undefined = usersList.filter((item) => {
      return item.name.toLowerCase() === name;
    });

    if (name !== "" && userByName.length === 0) {
      codeError = 404; //not found
      throw new Error("User with this name not found");
    }

    if (name !== "" && userByName.length !== 0) {
      ListToDisplay = [...userByName];
    }

    res.status(200).send(ListToDisplay);
  } catch (error: any) {
    res.status(codeError || 500).send({ message: error.message });
  }
});

//a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
//Query

//b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
//Linha 103

//Ex4
app.post("/users", (req: Request, res: Response) => {
  const { id, name, email, type, age } = req.body;

  try {
    if (!id || !name || !email || !type || !age) {
      res.statusCode = 400; //bad request
      throw new Error(
        "Info of new user not identified. Please check the fields!"
      );
    }

    const newUser: User = {
      id,
      name,
      email,
      type,
      age,
    };

    usersList.push(newUser);

    res.status(200).send(usersList);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

//Ex4a
app.put("/users", (req: Request, res: Response) => {
  const { id, name, email, type, age } = req.body;

  try {
    if (!id && !name && !email && !type && !age) {
      res.statusCode = 401; //
      throw new Error(
        "Info of new user not identified. Please check the fields!"
      );
    }

    const newUser: User = {
      id,
      name,
      email,
      type,
      age,
    };

    usersList.push(newUser);

    res.status(200).send(usersList);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

//a. Mude o método do endpoint para PUT. O que mudou?
//De || para && pq não precisa de todoas as informações.

//b. Você considera o método PUT apropriado para esta transação? Por quê?
//Não. Put é pra mudar e não pra criar. Mas funciona. rs

//Ex5
app.put("/users/name/", (req: Request, res: Response) => {
  try {
    if (!usersList) {
      res.statusCode = 404;
      throw new Error("There's no userlist");
    }

    usersList[usersList.length - 1].name =
      usersList[usersList.length - 1].name + " - ALTERADO";

    res.status(200).send(usersList[usersList.length - 1]);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

//Ex6
app.patch("/users/name/", (req: Request, res: Response) => {
  try {
    if (!usersList) {
      res.statusCode = 404;
      throw new Error("There's no userlist");
    }

    usersList[usersList.length - 1].name =
      usersList[usersList.length - 1].name + " - REALTERADO";

    res.status(200).send(usersList[usersList.length - 1]);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

//Ex7
app.delete("/users/delete/:id", (req, res) => {
  const id: number = Number(req.params.id);

  try {
    if (!usersList) {
      res.statusCode = 404;
      throw new Error("There's no userlist");
    }
    if (isNaN(id)) {
      res.statusCode = 422; //unprocessable entity
      throw new Error("Invalid parameter");
    }
    if (
      usersList.filter((item) => {
        return item.id === id;
      }).length === 0
    ) {
      res.statusCode = 404;
      throw new Error("User not found");
    }
    const userDeleted = usersList.filter((item) => {
      return item.id !== id;
    });
    res
      .status(200)
      .send({ message: "User deleted successfully", data: userDeleted });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
