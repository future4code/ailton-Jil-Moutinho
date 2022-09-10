/* import { Request, Response } from "express";
import { createClass } from "../../data/ClassData/createClass";

export const postClass = async (req: Request, res: Response) => {
  try {
    const { class_name, module } = req.body;

    if (!class_name) {
      res.statusCode = 400;
      throw new Error("Inform the class name");
    }
    await createClass(class_name, module);

    res.status(201).send({ message: "Class created successfully" });
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
}; */
