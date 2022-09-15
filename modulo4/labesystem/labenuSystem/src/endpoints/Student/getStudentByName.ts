/* import { Request, Response } from "express";
import { searchStudentByName } from "../../data/StudentData/searchSudentBynName";

export const getStudentByName = async (req: Request, res: Response) => {
  try {
    const student_name = req.params.name;

    const studentByName = await searchStudentByName(student_name);

    if (!studentByName.length) {
      res.statusCode;
      throw new Error("There is no student with name");
    }

    res.status(201).send(studentByName);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
};
 */