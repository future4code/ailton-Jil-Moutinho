/* import { Request, Response } from "express";
import { updateClassModule } from "../../data/ClassData/updateClassModule";

export const putClassModule = async (req: Request, res: Response) => {
  try {
    const { id, module } = req.body;

    if (!id || !module) {
      res.statusCode = 400;
      throw new Error("Inform class id and module");
    }

    if (isNaN(Number(id)) || isNaN(Number(module))) {
      res.statusCode = 422;
      throw new Error("Inform class id and module like number");
    }

    await updateClassModule(id, module);

    res.status(200).send({ message: "Module changed successfully" });
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
};
 */