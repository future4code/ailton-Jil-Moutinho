class UserModel {
    constructor(
      private user_id: string,
      private user_name: string,
      private email: string,
      private user_password: string
    ) {}
  
    public getId() {
      return this.user_id;
    }
  
    public getEmail() {
      return this.email;
    }
  
    public getPassword() {
      return this.user_password;
    }
  
    public getName() {
      return this.user_name;
    }
  }
  
  export default UserModel;