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
  test("Return a token when the register is usccessfull", async () => {
    const input: ISignupInputDTO = {
      first_name: "Mia2",
      last_name: "Mia Gatona",
      nickname: "Mia2",
      partnership: 5,
      password: "mia123",
    };

    const response = await userBusiness.signupUser(input);
    expect(response.message).toBe(`Member Mia2 register successfully.`);
    expect(response.token).toBe("token-mock");
  });

    test("Return token when login is successful", async () => {
    const input: ILoginInputDTO = {
      nickname: "Mia",
      password: "asdfg123",
    };

    const response = await userBusiness.loginUser(input);
    expect(response.message).toBe("You are logged in!");
    expect(response.token).toBe("token-mock");
  });

 /*  test("Return when del user", async () => {
    const input: ILoginInputDTO = {
      nickname: "Mia",
      password: "asdfg123",
    };

    const response = await userBusiness.loginUser(input);
    expect(response.message).toBe("You are logged in!");
    expect(response.token).toBe("token-mock");
  }); */

  //Teste de Erros para singUp
  /* test("Usuário se cadastra com tipo de partnership diferente de number", async () => {
    expect.assertions(2);

    try {
      const input: ISignupInputDTO = {
        first_name: "Mia2",
        last_name: "Gatuna",
        nickname: "Cachorra",
        password: "123",
        partnership: "2",
      };
      await userBusiness.signupUser(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("Invalid parameter as partnership percentage. Inform a integer number."
        );
      }
    }
  }); */

    test("Usuário se cadastra com senha menor que 6 caracteres", async () => {
    expect.assertions(2);

    try {
      const input: ISignupInputDTO = {
        first_name: "Mia2",
        last_name: "Gatuna",
        nickname: "Cachorra",
        password: "123",
        partnership: 1,
      };
      await userBusiness.signupUser(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe(
          "Your password must have at least 6 characters"
        );
      }
    }
  });


  test("Usuário se cadastra com apelido já cadastrado", async () => {
    expect.assertions(2);

    try {
      const input: ISignupInputDTO = {
        first_name: "Mia2",
        last_name: "Gatuna 2",
        nickname: "Mia",
        password: "acbd1234",
        partnership: 2,
      };
      await userBusiness.signupUser(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(409);
        expect(error.message).toBe("Member already registered");
      }
    }
  });

  //Teste de Erros para Login
  test("Usuário tenta logar com senha menor que 6 caracteres", async () => {
    expect.assertions(2);

    try {
      const input: ILoginInputDTO = {
        nickname: "Mia",
        password: "123",
      };
      await userBusiness.loginUser(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe(
          "Your password must have at least 6 characters");
      }
    }
  });

  test("Usuário tenta logar com apelido não cadastrado", async () => {
    expect.assertions(2);

    try {
      const input: ILoginInputDTO = {
        nickname: "Mia4",
        password: "mia123",
      };
      await userBusiness.loginUser(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Member not found");
      }
    }
  });

  test("Usuário tenta logar com senha incorreta", async () => {
    expect.assertions(2);

    try {
      const input: ILoginInputDTO = {
        nickname: "Mia",
        password: "mia1234",
      };
      await userBusiness.loginUser(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Invalid credentials");
      }
    }
  });

  //Teste de Erros para deletar usuário

});
