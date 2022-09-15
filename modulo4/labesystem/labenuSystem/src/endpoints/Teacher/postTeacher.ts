/* import { Request, Response } from "express";
import { connection } from "../../data/dataBase";
import { createTeacher } from "../../data/TeacherData/createTeacher";
import { createTeacherExpertise } from "../../data/TeacherData/createTeacherExpertise";

export const postTeacher = async (req: Request, res: Response) => {
  try {
    const {
      teacher_id,
      teacher_name,
      teacher_email,
      birth_date,
      class_id,
      expertise_name
    } = req.body;

    if (
      !teacher_id ||
      !teacher_name ||
      !teacher_email ||
      !birth_date ||
      !class_id
    ) {
      res.statusCode = 400;
      throw new Error("Inform all Data");
    }

    const existsClass = await connection("classes")
      .select("*")
      .where("id", class_id);

    if (!existsClass.length) {
      res.statusCode = 404;
      throw new Error("There are no classes with this id");
    }

    await createTeacher(
      teacher_id,
      teacher_name,
      teacher_email,
      birth_date,
      class_id
    );
    await createTeacherExpertise(teacher_name, expertise_name);

    res.status(201).send({ message: "teacher created successfully" });
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
};
 */