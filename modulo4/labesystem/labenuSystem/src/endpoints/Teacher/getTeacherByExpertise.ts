/* import { Request, Response } from "express";
import { searchTeacherByExpertise } from "../../data/TeacherData/searchTeacherbyExpertise";

export const getTeacherbyExpertise = async (req: Request, res: Response) => {
  try {
    const expertise_name = req.params.expertise_name;

    const TeacherbyExpertise = await searchTeacherByExpertise(expertise_name);

    if (!TeacherbyExpertise.length) {
      res.statusCode = 404;
      throw new Error("There is no teacher with this expertise");
    }

    res.status(200).send(TeacherbyExpertise);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
};
 */