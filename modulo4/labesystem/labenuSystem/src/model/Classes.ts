export class Classes {
  private id: number | undefined;
  private class_name: string;
  private module: number | undefined;

  constructor(class_name: string, module?: number, id?: number) {
    this.class_name = class_name;
    this.module = module;
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public getName() {
    return this.class_name;
  }

  public getModule() {
    return this.module;
  }
}
