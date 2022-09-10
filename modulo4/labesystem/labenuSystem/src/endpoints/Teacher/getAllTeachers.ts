/* import { Request, Response } from "express";
import { selectAllTeachers } from "../../data/TeacherData/selectAllTeachers";

export const getAllTeachers = async (req: Request, res: Response) => {
  try {
    const allTeacher = await selectAllTeachers();

    if (!allTeacher.length) {
      res.statusCode;
      throw new Error("There are no teachers");
    }

    res.status(201).send(allTeacher);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
};
 */