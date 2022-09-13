class UserModel {
  constructor(
    private id: string,
    private email: string,
    private password: string,
    private role: string
  ) {}

  public getId() {
    return this.id;
  }

  public getEmail() {
    return this.email;
  }

  public getPassword() {
    return this.password;
  }

  public getRole() {
    return this.role;
  }
}

export default UserModel;
