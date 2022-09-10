/* import { Request, Response } from "express";
import { searchStudentByHobby } from "../../data/StudentData/searchStudentByHobby";

export const getStudentByHobby = async (req: Request, res: Response) => {
  try {
    const hobby_name = req.params.hobby_name;

    const studentByHobby = await searchStudentByHobby(hobby_name);

    if (!studentByHobby.length) {
      res.statusCode = 404;
      throw new Error("There is no student in this hobby");
    }

    res.status(200).send(studentByHobby);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
};
 */