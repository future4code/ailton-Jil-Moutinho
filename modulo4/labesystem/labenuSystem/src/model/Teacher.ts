export class Teacher {
  private teacher_name: string;
  private teacher_email: string;
  private birth_date: string;
  private class_id: number;
  private teacher_id: number | undefined;

  constructor(
    teacher_name: string,
    teacher_email: string,
    birth_date: string,
    class_id: number,
    teacher_id?: number
  ) {
    this.teacher_name = teacher_name;
    this.teacher_email = teacher_email;
    this.birth_date = birth_date;
    this.class_id = class_id;
    this.teacher_id = teacher_id;
  }

  public getId() {
    return this.teacher_id;
  }

  public getName() {
    return this.teacher_name;
  }

  public getEmail() {
    return this.teacher_email;
  }

  public getBirthDate() {
    return this.birth_date;
  }

  public getClassId() {
    return this.class_id;
  }
}
