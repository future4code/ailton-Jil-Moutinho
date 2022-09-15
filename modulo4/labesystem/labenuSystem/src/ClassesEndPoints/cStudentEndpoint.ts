import { Request, Response } from "express";
import { StudentData } from "../ClassesData/cStudentsData";
import { Student } from "../model/Student";
import { MissingFields } from "../error/MissingFields";
import { AlreadyExist } from "../error/AlreadyExist";
import { ClassesData } from "../ClassesData/cClassesData";
import { NonExistentClass } from "../error/NonExistentClass";
import moment from "moment";
import { NonExistentStudent } from "../error/NonExistentStudent";

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

  async selectByName(req: Request, res: Response) {
    try {
      const student_name = req.params.student_name;

      const studentData = new StudentData();
      const result = await studentData.selectByStudentsName(student_name);

      if (!result) {
        throw new NonExistentStudent();
      }

      res.status(200).send({ message: result });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }

  async changeClass(req: Request, res: Response) {
    try {
      const { student_name, id, class_id } = req.body;

      if (
        !student_name ||
        !id ||
        !class_id ||
        isNaN(Number(class_id)) ||
        isNaN(Number(id))
      ) {
        throw new MissingFields();
      }

      const studentData = new StudentData();
      const studentById = studentData.selectByStudentsId(id);
      if (!studentById) {
        throw new NonExistentStudent();
      }

      const newClassesData = new ClassesData();
      const classExist = await newClassesData.selectByClassId(class_id);
      if (!classExist.length) {
        throw new NonExistentClass();
      }

      const result = await studentData.changeStudentClass(
        class_id,
        id,
        student_name
      );

      res.status(201).send({ message: result });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }
}
