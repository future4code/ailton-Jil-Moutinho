/* import { Request, Response } from "express";
import { createStudentHobby } from "../../data/StudentData/createStudentHobby";

export const postStudentHobby = async (req: Request, res: Response) => {
  try {
    const { hobby_name, student_name } = req.body;

    if (!hobby_name || !student_name) {
      res.statusCode = 400;
      throw new Error("Inform hobby name and student name");
    }

    await createStudentHobby(hobby_name, student_name);

    res.status(201).send({ message: "Student hobby created successfully" });
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
};
 */