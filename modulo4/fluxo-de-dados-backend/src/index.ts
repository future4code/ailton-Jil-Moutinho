import express, { Express, Request, Response } from "express";
import cors from "cors";
import { Product, productsList } from "./data";

const app: Express = express();

app.use(express.json());
app.use(cors());

//ex1
app.get("/test", (req, res) => {
  res.send("The API is working! 👩‍💻");
});

//3
app.post("/newproduct", (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) {
      res.statusCode = 401; //Qual erro?
      throw new Error("Inform name and price");
    }

    if (typeof name !== "string" || typeof price !== "number") {
      res.statusCode = 401; //Qual erro?
      throw new Error(
        "Name must be a string and price must be a number and positive"
      );
    }

    const newProduct: Product = {
      id: String(Number(productsList[productsList.length - 1].id) + 1),
      name,
      price,
    };

    productsList.push(newProduct);

    res
      .status(201)
      .send({ message: "Product added successfully", data: productsList });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

//4
/* app.get("/allproduct", (req, res) => {
  try {
    if (!productsList) {
        res.statusCode = 401;
      throw new Error("There is no products on the list");
    }

    res
      .status(200)
      .send({ message: "List of products ok!", data: productsList });
  } catch (err) {
    res.status(404).send({ message: "There is no products on the list" });
  }
}); */

//5
app.put("/allproduct/edit/:id", (req: Request, res: Response) => {
  try {
    const { price, name } = req.body;
    const id = req.params.id;

    //8
    /* if (!price || !id) {
      res.statusCode = 401;
      throw new Error("There is no price or id informed");
    } */
    //Por Params, n precisa ali em cima?

    //Ex11
    if (!price && !name) {
      res.statusCode = 401;
      throw new Error("There is no price or name informed");
    }

    if ((price && typeof price !== "number") || price < 0) {
      res.statusCode = 401;
      throw new Error("Price is not a number or is negative");
    }

    if (typeof name !== "string" && !price) {
      res.statusCode = 401;
      throw new Error("Name is not a string - not valid format");
    }

    if (
      productsList.filter((item) => {
        return item.id === id;
      }).length === 0
    ) {
      res.statusCode = 404;
      throw new Error("Product not found");
    }

    const pruductToChange: Product[] = productsList.map((item) => {
      if (item.id === id) {
        if (price) {
          item.price = price;
        }
        if (name) {
          item.name = name;
        }
      }
      return item;
    });

    res
      .status(200)
      .send({
        message: "Product info changed successfully",
        data: pruductToChange,
      });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});
//No postman, id sem aspas, e no body, sempre objeto, por isso dessestruturei na linha 43

//6
app.delete("/allproduct/delete/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    console.log(id);
    
    try {
    const id = req.params.id;
    
    if (!productsList) {
      res.statusCode = 401;
      throw new Error("There is no products on the list or no id informed");
    }

    if (
      productsList.filter((item) => {
        return item.id === id;
      }).length === 0
    ) {
      res.statusCode = 404;
      throw new Error("Product not found");
    }

    const productDeleted: Product[] = productsList.filter((item) => {
      return item.id !== id;
    });

    res
      .status(200)
      .send({ message: "Product deleted successfully", data: productDeleted });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

//Ex7 => No ex3

//Ex8 => No ex5

//Ex9 => No ex6

//Ex10
app.get("/allproduct", (req, res) => {
  const { search } = req.query;
  try {
    let ListToDisplay: Product[] = [];

    if (search === "") {
      ListToDisplay = [...productsList];
      console.log(ListToDisplay);
    }

    const filteredeByName: Product[] = productsList.filter((item) => {
      return item.name === search;
    });

    if (search !== "" && filteredeByName.length === 0) {
      res.statusCode = 404;
      throw new Error("Product not found");
    }

    if (filteredeByName.length !== 0) {
      ListToDisplay = [...filteredeByName];
    }

    res.status(200).send(ListToDisplay);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

//Ex11

app.listen(3003, () => {
  console.log("Server is running 👩‍💻 in http://localhost:3003");
});