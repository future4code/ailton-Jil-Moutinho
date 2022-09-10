/* import { Request, Response } from "express";
import { createHobby } from "../../data/StudentData/createHobby";

export const postHobby = async (req: Request, res: Response) => {
  try {
    const { hobby_name } = req.body;

    if (!hobby_name) {
      res.statusCode = 400;
      throw new Error("Inform Hobby Name");
    }

    await createHobby(hobby_name);

    res.status(201).send({ message: "Hobby created successfully" });
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
};
 */