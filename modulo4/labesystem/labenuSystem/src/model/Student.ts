export class Student {
  private id: number | undefined;
  private student_name: string;
  private student_email: string;
  private birth_date: string;
  private class_id: number;

  constructor(
    student_name: string,
    student_email: string,
    birth_date: string,
    class_id: number,
    id?: number | undefined
  ) {
    this.student_name = student_name;
    this.student_email = student_email;
    this.birth_date = birth_date;
    this.class_id = class_id;
    this.id = id;
  }

  public getName() {
    return this.student_name;
  }

  public getEmail() {
    return this.student_email;
  }

  public getBirthDate() {
    return this.birth_date;
  }

  public getClassId() {
    return this.class_id;
  }

  public getId() {
    return this.id;
  }
}
