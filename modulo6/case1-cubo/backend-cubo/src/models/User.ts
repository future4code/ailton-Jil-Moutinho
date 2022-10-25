export interface ILoginInputDTO {
  nickname: string;
  password: string;
}

export interface ISignupInputDTO extends ILoginInputDTO {
  first_name: string;
  last_name: string;
  partnership: number;
}

export interface IUserDB extends ISignupInputDTO {
  id: string;
}

export interface IDelUserInputDTO {
  nickname: string;
  token: string;
}

/* export interface IAvailableSharesDB {
  sum(`partnership`): number;
} */

export class User {
  constructor(
    private id: string,
    private first_name: string,
    private last_name: string,
    private nickname: string,
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

  public getNickname = () => {
    return this.nickname;
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
