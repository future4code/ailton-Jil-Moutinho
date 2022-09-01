import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.statusCode = 400;
      throw new Error("Inform all request data. Name, e-mail and password");
    };

    if (!email.includes("@") || !email.includes(".")) {
      res.statusCode = 400;
      throw new Error("Error: Please inform a valid e-mail. (email@email.com or email@email.com.us)");
    };

    const newUser = await insertUser(name, email, password);

    res.status(201).send({message:"User created successfully", data: `Your id is ${newUser}`});
  } catch (error: any) {
    res
      .status(res.statusCode)
      .send({ message: error.message || error.sqlMessage });
  }
};
