export interface ILoginInputDTO {
  first_name: string;
  last_name: string;
  password: string;
}

export interface ISignupInputDTO extends ILoginInputDTO {
  partnership: number;
}

export interface IUserDB extends ISignupInputDTO {
  id: string;
}

export interface IDelUserInputDTO {
  first_name: string;
  last_name: string;
  token: string;
}

export class User {
  constructor(
    private id: string,
    private first_name: string,
    private last_name: string,
    private partnership: number,
    private password: string
  ) {}

  public getId = () => {
    return this.id;
  };

  public getLastName = () => {
    return this.last_name;
  };

  public getFirstName = () => {
    return this.first_name;
  };

  public getPartnership = () => {
    return this.partnership;
  };

  public getPassword = () => {
    return this.password;
  };

  public setId = (newId: string) => {
    this.id = newId;
  };

  public setpartnership = (newpartnership: number) => {
    this.partnership = newpartnership;
  };

  public setPassword = (newPassword: string) => {
    this.password = newPassword;
  };
}
