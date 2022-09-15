/* import { Request, Response } from "express";
import { connection } from "../../data/dataBase";
import { createStudent } from "../../data/StudentData/createStudent";

export const postStudent = async (req: Request, res: Response) => {
  try {
    const { student_name, student_email, birth_date, class_id } = req.body;

    if (!student_name || !student_email || !birth_date || !class_id) {
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

    await createStudent(student_name, student_email, birth_date, class_id);

    res.status(201).send({ message: "Student created successfully" });
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
};
 */