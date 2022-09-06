export abstract class Place {
  constructor(protected cep: string) {}

  public getCep(): string {
    return this.cep;
  }
}

export class NewPlaceClass extends Place {
  constructor(protected cep: string) {
    super(cep);
  }
}
