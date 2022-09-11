import { Request, Response } from "express";
import { TeachersData } from "../ClassesData/cTeachersData";
import { MissingFields } from "../error/MissingFields";
import { Teacher } from "../model/Teacher";
import moment from "moment";
import { ClassesData } from "../ClassesData/cClassesData";
import { NonExistentClass } from "../error/NonExistentClass";
import { AlreadyExist } from "../error/AlreadyExist";
import { NonExistentStudent } from "../error/NonExistentStudent";

export class TeacherEndoint {
  async create(req: Request, res: Response) {
    try {
      const { teacher_name, teacher_email, birth_date, class_id } = req.body;

      if (
        !teacher_name ||
        !teacher_email ||
        !birth_date ||
        !class_id ||
        isNaN(Number(class_id))
      ) {
        throw new MissingFields();
      }

      const newClassesData = new ClassesData();
      const classExist = await newClassesData.selectByClassId(class_id);
      if (!classExist.length) {
        throw new NonExistentClass();
      }

      const newTeacherData = new TeachersData();
      const emailExist = await newTeacherData.selectByEmail(teacher_email);
      if (emailExist) {
        throw new AlreadyExist();
      }

      const convertedDate = moment(birth_date, "DD/MM/YYYY").format(
        "YYYY-MM-DD"
      );
      //const teacher_id = Number(Date.now());

      const teacher_id = 6;
      const newTeacher = new Teacher(
        teacher_name,
        teacher_email,
        convertedDate,
        class_id,
        teacher_id
      );

      const result = await newTeacherData.createTeacher(newTeacher);

      res.status(201).send({ message: result });
    } catch (error: any) {
      res
        .status(res.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }

  async gelAll(req: Request, res: Response) {
    try {
      const newTeacherData = new TeachersData();
      const result = await newTeacherData.selectAllTeachers();

      if (!result.length) {
        throw new NonExistentStudent();
      }

      res.status(res.statusCode).send({ message: result });
    } catch (error: any) {
      res
        .status(res.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }

  async putTeachersClass(req: Request, res: Response) {
    try {
      const teacher_id = req.params.teacher_id;
      const { class_id } = req.body;

      if (
        !teacher_id ||
        !class_id ||
        isNaN(Number(teacher_id)) ||
        isNaN(Number(class_id))
      ) {
        throw new MissingFields();
      }

      const newClassesData = new ClassesData();
      const classExist = await newClassesData.selectByClassId(class_id);
      if (!classExist.length) {
        throw new NonExistentClass();
      }

      const newTeacherData = new TeachersData();
      const teacherExist = newTeacherData.selectTeacherById(Number(teacher_id));

      if (!teacherExist) {
        throw new NonExistentStudent();
      }

      const result = await newTeacherData.changeTeachersClass(
        Number(teacher_id),
        class_id
      );

      res.status(res.statusCode).send({ message: result });
    } catch (error: any) {
      res
        .status(res.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }
}
