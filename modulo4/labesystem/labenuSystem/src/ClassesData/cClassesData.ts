import { Classes } from "../model/Classes";
import { BaseDataBase } from "../data/BaseDataBase";

export class ClassesData extends BaseDataBase {
  async createClasses(newClass: Classes): Promise<string> {
    await this.getConnection()
      .insert({
        class_name: newClass.getName(),
        module: newClass.getModule(),
      })
      .into("classes");

    return `${newClass.getName()} class created successfully`;
  }

  async changeModule(id: number, module: number): Promise<string> {
    await this.getConnection().update({ module }).from("classes").where({ id });
    return `Module altered successfully to ${module}`;
  }

  async selectActiveClasses(): Promise<Classes[]> {
    const result = await this.getConnection()
      .select("*")
      .from("classes")
      .where("module", ">", 0);
    return result;
  }
}
