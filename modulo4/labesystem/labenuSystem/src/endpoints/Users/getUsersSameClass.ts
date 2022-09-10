/* import { Request, Response } from "express";
import { searchStudentByClass } from "../../data/StudentData/searchStudentByClass";
import { searchTeacherByClass } from "../../data/TeacherData/searchTeacherByClass";

export const getUsersByClass = async (req: Request, res: Response) => {
  try {
    const class_id = req.params.class_id;

    if (isNaN(Number(class_id))) {
      res.statusCode = 400;
      throw new Error("Inform the class id like number");
    }

    const studentByClass = await searchStudentByClass(Number(class_id));

    if (!studentByClass.length) {
      res.statusCode = 404;
      throw new Error("There is no student in this class");
    }

    const teacherByClass = await searchTeacherByClass(Number(class_id));

    let usersByClass = [];

    usersByClass = [...studentByClass, teacherByClass];

    if (!studentByClass.length) {
      res.statusCode = 404;
      throw new Error("There is no teacher in this class");
    }

    res.status(201).send(usersByClass);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
};
 */