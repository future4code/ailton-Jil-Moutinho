import { BaseDataBase } from "../data/BaseDataBase";
import { Teacher } from "../model/Teacher";

export class TeachersData extends BaseDataBase {
  async createTeacher(newTeacher: Teacher): Promise<any> {
    await this.getConnection()
      .insert({
        teacher_name: newTeacher.getName(),
        teacher_email: newTeacher.getEmail(),
        birth_date: newTeacher.getBirthDate(),
        class_id: newTeacher.getClassId(),
        teacher_id: newTeacher.getId(),
      })
      .into("teacher");

    return `Teacher ${newTeacher.getName()} created successfully.`;
  }

  async selectByEmail(teacher_email: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from("teacher")
      .where({ teacher_email });

    return result[0];
  }

  async selectAllTeachers(): Promise<Teacher[]> {
    const result = await this.getConnection().select("*").from("teacher");

    return result;
  }

  async selectTeacherById(teacher_id: number): Promise<Teacher | undefined> {
    const result = await this.getConnection()
      .select("*")
      .from("teacher")
      .where({ teacher_id });

    return result[0];
  }

  async changeTeachersClass(teacher_id: number, class_id: number): Promise<string> {
    const result = await this.getConnection()
      .update({ class_id })
      .from("teacher")
      .where({ teacher_id });

    return `Teacher with id ${teacher_id} update to class with id ${class_id}`;
  }
}
