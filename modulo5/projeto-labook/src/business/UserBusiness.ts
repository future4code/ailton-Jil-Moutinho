import { UserDatabase } from "../database/UserDatabase"
import { ILoginInputDTO, ISignupInputDTO, User, USER_ROLES } from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public signupUser = async (input: ISignupInputDTO) => {
        const name = input.name;
        const email = input.email;
        const password = input.password;
    
        if (!name || !email || !password) {
          throw new Error("Um ou mais parâmetros faltando");
        }
    
        if (typeof name !== "string" || name.length < 3) {
          throw new Error("Parâmetro 'name' inválido");
        }
    
        if (typeof email !== "string" || email.length < 7) {
          throw new Error("Parâmetro 'email' inválido");
        }
    
        if (
          !email.match(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          )
        ) {
          throw new Error("Parâmetro 'email' inválido");
        }
    
        if (typeof password !== "string" || password.length < 3) {
          //  tratramento de erro não é uma dependencia
          throw new Error("Parâmetro 'password' inválido");
        }
    
        // instanciar a classe userDataBase
        // dependencia da classe
        // const userDatabase = new UserDatabase()
        const userDB = await this.userDatabase.getUserByEmail(email);
    
        if (userDB) {
          throw new Error("E-mail já cadastrado");
        }
    
        // dependencia da classe
        // const idGenerator = new IdGenerator()
        // dependencia da classe
        // const hashManager = new HashManager()
    
        const id = this.idGenerator.generate();
        const hashedPassword = await this.hashManager.hash(password);
    
        // Modelagem de dados não é uma dependencia
        const user = new User(id, name, email, hashedPassword, USER_ROLES.NORMAL);
    
        await this.userDatabase.createUser(user);
    
        const payload: ITokenPayload = {
          id: user.getId(),
          role: user.getRole(),
        };
    
        // dependencia da classe
        // const authenticator = new Authenticator()
        const token = this.authenticator.generateToken(payload);
    
        const response = {
          message: "Cadastro realizado com sucesso",
          token,
        };
    
        return response;
      };

      public loginUser = async (input: ILoginInputDTO) => {
        const email = input.email;
        const password = input.password;
    
        if (!email || !password) {
          throw new Error("Um ou mais parâmetros faltando");
        }
    
        if (typeof email !== "string" || email.length < 3) {
          throw new Error("Parâmetro 'email' inválido");
        }
    
        if (
          !email.match(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          )
        ) {
          throw new Error("Parâmetro 'email' inválido");
        }
    
        if (typeof password !== "string" || password.length < 3) {
          throw new Error("Parâmetro 'password' inválido");
        }
    
        const userDB = await this.userDatabase.getUserByEmail(email);
    
        if (!userDB) {
          throw new Error("E-mail não cadastrado");
        }
    
        const user = new User(
          userDB.id,
          userDB.name,
          userDB.email,
          userDB.password,
          userDB.role
        );
    
        const isPasswordCorrect = await this.hashManager.compare(
          password,
          user.getPassword()
        );
    
        if (!isPasswordCorrect) {
          throw new Error("Senha incorreta");
        }
    
        const payload: ITokenPayload = {
          id: user.getId(),
          role: user.getRole(),
        };
    
        const token = this.authenticator.generateToken(payload);
    
        const response = {
          message: "Login realizado com sucesso",
          token,
        };
    
        return response;
      };
}