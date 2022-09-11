import { BaseDataBase } from "../data/BaseDataBase";
import { Student } from "../model/Student";

export class StudentData extends BaseDataBase {
  async createStudent(newStudent: Student): Promise<any> {
    await this.getConnection()
      .insert({
        student_name: newStudent.getName(),
        student_email: newStudent.getEmail(),
        birth_date: newStudent.getBirthDate(),
        class_id: newStudent.getId(),
      })
      .into("student");

    return `Student ${newStudent.getName()} created successfully.`;
  }

  async selectByEmail(student_email: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from("student")
      .where({ student_email });

    return result[0];
  }
}
