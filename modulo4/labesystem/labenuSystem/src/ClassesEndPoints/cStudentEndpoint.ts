import { Request, Response } from "express";
import { StudentData } from "../ClassesData/cStudentsData";
import { Student } from "../model/Student";
import { MissingFields } from "../error/MissingFields";
import { AlreadyExist } from "../error/AlreadyExist";
import { ClassesData } from "../ClassesData/cClassesData";
import { NonExistentClass } from "../error/NonExistentClass";
import moment from "moment";

export class StudentEndPoint {
  async create(req: Request, res: Response) {
    try {
      const { student_name, student_email, birth_date, class_id } = req.body;

      if (
        !student_name ||
        !student_email ||
        !birth_date ||
        !class_id ||
        isNaN(Number(class_id))
      ) {
        throw new MissingFields();
      }

      const newStudentData = new StudentData();
      const emailExist = await newStudentData.selectByEmail(student_email);
      if (emailExist) {
        throw new AlreadyExist();
      }

      const newClassesData = new ClassesData();
      const classExist = await newClassesData.selectByClassId(class_id);
      if (!classExist.length) {
        throw new NonExistentClass();
      }

      const convertedDate = moment(birth_date, "DD/MM/YYYY").format(
        "YYYY-MM-DD"
      );

      const newStudent = new Student(
        student_name,
        student_email,
        convertedDate,
        class_id
      );
      const result = await newStudentData.createStudent(newStudent);

      res.status(201).send({ message: result });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }
}
