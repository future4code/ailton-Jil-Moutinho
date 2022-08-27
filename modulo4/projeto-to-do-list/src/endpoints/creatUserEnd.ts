import { Request, Response } from "express";
import { createUser } from "../data/createUser";

export default async function createUserEnd(req: Request, res: Response) {
  try {
    const { name, nickname, email } = req.body;

    if (
      !name ||
      !nickname ||
      !email ||
      name === "" ||
      nickname === "" ||
      email === ""
    ) {
      res.statusCode = 400;
      throw new Error("Inform all request data.");
    }

/* if() */

    const newUser = await createUser(name, nickname, email);

    res.status(200).send(newUser);
  } catch (err: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: err.message || err.sqlMessage });
  }
};
