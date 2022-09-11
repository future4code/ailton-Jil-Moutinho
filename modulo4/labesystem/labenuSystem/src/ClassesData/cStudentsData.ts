import { BaseDataBase } from "../data/BaseDataBase";
import { Student } from "../model/Student";

export class StudentData extends BaseDataBase {
  async createStudent(newStudent: Student): Promise<string> {
    await this.getConnection()
      .insert({
        student_name: newStudent.getName(),
        student_email: newStudent.getEmail(),
        birth_date: newStudent.getBirthDate(),
        class_id: newStudent.getClassId(),
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

  async selectByStudentsName(student_name: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from("student")
      .where({ student_name });

    return result[0];
  }

  async changeStudentClass(
    class_id: number,
    id: number,
    student_name: string
  ): Promise<any> {
    await this.getConnection()
      .update({ class_id })
      .from("student")
      .where({ id });
    return `Student ${student_name} class successfully updated.`;
  }

  async selectByStudentsId(id: number): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from("student")
      .where({ id });

    return result[0];
  }
}
