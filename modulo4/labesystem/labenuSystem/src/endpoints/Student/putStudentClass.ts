/* import { Request, Response } from "express";
import { updateStudentClass } from "../../data/StudentData/updateStudentClass";

export const putStudentClass = async (req: Request, res: Response) => {
  try {
    const { id, class_id } = req.body;

    if (!id || !class_id) {
      res.statusCode = 400;
      throw new Error("Inform Student id and Class id");
    }

    if (isNaN(Number(id)) || isNaN(Number(class_id))) {
      res.statusCode = 422;
      throw new Error("Inform Student id and Class id like number");
    }

    await updateStudentClass(id, class_id);

    res.status(200).send({ message: "Student changed class successfully" });
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
};
 */