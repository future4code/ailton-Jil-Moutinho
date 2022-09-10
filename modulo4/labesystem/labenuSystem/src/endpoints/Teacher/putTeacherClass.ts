/* import { Request, Response } from "express";
import { updateTeacherClass } from "../../data/TeacherData/updateTeacherClass";

export const putTeacherClass = async (req: Request, res: Response) => {
  try {
    const { teacher_id, class_id } = req.body;

    if (!teacher_id || !class_id) {
      res.statusCode = 400;
      throw new Error("Inform Teacher id and Class id");
    }

    if (isNaN(Number(teacher_id)) || isNaN(Number(class_id))) {
      res.statusCode = 422;
      throw new Error("Inform Teacher id and Class id like number");
    }

    await updateTeacherClass(teacher_id, class_id);

    res.status(200).send({ message: "Teacher changed class successfully" });
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
};
 */