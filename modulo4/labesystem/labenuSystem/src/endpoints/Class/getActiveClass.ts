/* import { Request, Response } from "express";
import { selectActiveClasses } from "../../data/ClassData/selectActiveClasses";

export const getActiveClass = async (req: Request, res: Response) => {
  try {
    const activeClasses = await selectActiveClasses();

    if (!activeClasses.length) {
      res.statusCode = 404;
      throw new Error("There are no active classes");
    }

    res.status(200).send(activeClasses);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
}; */
