import { UserBusiness } from "../src/business/UserBusiness";
import { BaseError } from "../src/errors/BaseError";
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { HashManagerMock } from "./mocks/HashManagerMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";

describe("Testando a UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  );

  //Success cases
  test("Return a token when the register", async () => {
    const input: ISignupInputDTO = {
      first_name: "Mia2",
      last_name: "Mia Gatona",
      partnership: 5,
      password: "mia123",
    };

    const response = await userBusiness.signupUser(input);
    expect(response.message).toBe(`Member Mia2 register successfully.`);
    expect(response.token).toBe("token-mock");
  });

  /*   test("Um token é retornado quando o login é bem-sucedido", async () => {
    const input: ILoginInputDTO = {
      email: "astrodev@gmail.com",
      password: "bananinha",
    };

    const response = await userBusiness.loginUser(input);
    expect(response.message).toBe("Login realizado com sucesso");
    expect(response.token).toBe("token-mock-admin");
  }); */

  //Ex1 Teste de Erros para singUp
  /*   test("Usuário se cadastra com nome menor que 3 caracteres", async () => {
    expect.assertions(2);

    try {
      const input: ISignupInputDTO = {
        email: "fulano@gmail.com",
        name: "Fu",
        password: "123fulano",
      };
      await userBusiness.signupUser(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe(
          "Parâmetro 'name' inválido: mínimo de 3 caracteres"
        );
      }
    }
  }); */

  /*   test("Usuário se cadastra com senha menor que 6 caracteres", async () => {
    expect.assertions(2);

    try {
      const input: ISignupInputDTO = {
        email: "fulano@gmail.com",
        name: "Fulano",
        password: "123",
      };
      await userBusiness.signupUser(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe(
          "Parâmetro 'password' inválido: mínimo de 6 caracteres"
        );
      }
    }
  }); */

  /*   test("Usuário se cadastra com email em formato invalido", async () => {
    expect.assertions(2);

    try {
      const input: ISignupInputDTO = {
        email: "fulanogmail.com",
        name: "Fulano",
        password: "fulano123",
      };
      await userBusiness.signupUser(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("Parâmetro 'email' inválido");
      }
    }
  }); */

  /*   test("Usuário se cadastra com email ja cadastrado", async () => {
    expect.assertions(2);

    try {
      const input: ISignupInputDTO = {
        email: "mia@gmail.com",
        name: "Mia",
        password: "hash-mia123",
      };
      await userBusiness.signupUser(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(409);
        expect(error.message).toBe("E-mail já cadastrado");
      }
    }
  }); */

  //Ex2 Teste de Erros para Login
  /*   test("Usuário tenta logar com senha menor que 6 caracteres", async () => {
    expect.assertions(2);

    try {
      const input: ILoginInputDTO = {
        email: "fulano@gmail.com",
        password: "123",
      };
      await userBusiness.loginUser(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe(
          "Parâmetro 'password' inválido: mínimo de 6 caracteres"
        );
      }
    }
  }); */

  /*   test("Usuário tenta logar com email em formato inválido", async () => {
    expect.assertions(2);

    try {
      const input: ILoginInputDTO = {
        email: "fulanogmail.com",
        password: "fulano123",
      };
      await userBusiness.loginUser(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("Parâmetro 'email' inválido");
      }
    }
  }); */

  /*   test("Usuário tenta logar com email não cadastrado", async () => {
    expect.assertions(2);

    try {
      const input: ILoginInputDTO = {
        email: "fulano@gmail.com",
        password: "fulano123",
      };
      await userBusiness.loginUser(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Email não cadastrado");
      }
    }
  }); */

  /*   test("Usuário tenta logar com senha incorreta", async () => {
    expect.assertions(2);

    try {
      const input: ILoginInputDTO = {
        email: "mia@gmail.com",
        password: "hash-MOCK",
      };
      await userBusiness.loginUser(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Invalid credentials");
      }
    }
  }); */
});
