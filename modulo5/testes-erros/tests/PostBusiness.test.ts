import { PostBusiness } from "../src/business/PostBusiness";
import { BaseError } from "../src/errors/BaseError";
import {
  ICreatePostInputDTO,
  IGetPostsInputDTO,
  Post,
  IDeletePostInputDTO,
  IAddLikeInputDTO,
  IRemoveLikeInputDTO,
} from "../src/models/Post";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { PostDatabaseMock } from "./mocks/PostDatabaseMock";

describe("Testando a PostBusiness", () => {
  const postBusiness = new PostBusiness(
    new PostDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  );

  test("Deve retornar uma lista de posts", async () => {
    const input: IGetPostsInputDTO = {
      token: "token-mock-normal",
    };

    const response = await postBusiness.getPosts(input);
    expect(response.posts.length).toBe(3);
    expect(response.posts[0]).toBeInstanceOf(Post);
  });

  test("Deve ser possível criar um novo post", async () => {
    const input: ICreatePostInputDTO = {
      token: "token-mock-normal",
      content: "Teste do mock",
    };

    const response = await postBusiness.createPost(input);

    expect(response.message).toBe("Post criado com sucesso");
    expect(response).toBeInstanceOf(Object);
    expect(response.post).toBeInstanceOf(Post);
    expect(response.post.getId()).toBe("id-mock");
    expect(response.post.getContent()).toBe("Teste do mock");
    expect(response.post.getLikes()).toBe(0);
    expect(response.post.getUserId()).toBe("id-mock");
  });

  test("Deve ser possível deletar um post", async () => {
    const input: IDeletePostInputDTO = {
      token: "token-mock-admin",
      postId: "201",
    };

    const response = await postBusiness.deletePost(input);

    expect(response.message).toBe("Post deletado com sucesso");
  });

  test("Deve ser possível likar", async () => {
    const input: IDeletePostInputDTO = {
      token: "token-mock-admin",
      postId: "202",
    };

    const response = await postBusiness.addLike(input);

    expect(response.message).toBe("Like realizado com sucesso");
  });

  test("Deve ser possível deslikar", async () => {
    const input: IDeletePostInputDTO = {
      token: "token-mock-admin",
      postId: "201",
    };

    const response = await postBusiness.removeLike(input);

    expect(response.message).toBe("Like removido com sucesso");
  });

  //Ex3 Teste de Erros para createPost
  test("Postar com token inválido", async () => {
    expect.assertions(2);

    try {
      const input: ICreatePostInputDTO = {
        token: "token-mock-Anormal",
        content: "Amor",
      };
      await postBusiness.createPost(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Credenciais inválidas");
      }
    }
  });

  test("Postar com conteúdo menor de 1 caractér", async () => {
    expect.assertions(2);

    try {
      const input: ICreatePostInputDTO = {
        token: "token-mock-normal",
        content: "",
      };
      await postBusiness.createPost(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe(
          "Parâmetro 'content' inválido: mínimo de 1 caracteres"
        );
      }
    }
  });

  //Ex4 Teste de Erros para getPost
  test("Postar com token inválido", async () => {
    expect.assertions(2);

    try {
      const input: IGetPostsInputDTO = {
        token: "token-mock-Anormal",
      };
      await postBusiness.getPosts(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Credenciais inválidas");
      }
    }
  });

  //Desafios Teste de Erros para deletePost
  test("Deletar post com token inválido", async () => {
    expect.assertions(2);

    try {
      const input: IDeletePostInputDTO = {
        token: "token-mock-Anormal",
        postId: "201",
      };
      await postBusiness.deletePost(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Credenciais inválidas");
      }
    }
  });

  test("Deletar post inexistente", async () => {
    expect.assertions(2);

    try {
      const input: IDeletePostInputDTO = {
        token: "token-mock-normal",
        postId: "1000",
      };
      await postBusiness.deletePost(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Recurso não encontrado");
        //Neste exercício não usei a mensagem dentro do throw new, então trouxe a mensagem do erro d dentro da pasta errors.
      }
    }
  });

  test("Deletar post de outro usuário sendo role normal", async () => {
    expect.assertions(2);

    try {
      const input: IDeletePostInputDTO = {
        token: "token-mock-normal",
        postId: "201",
      };
      await postBusiness.deletePost(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(403);
        expect(error.message).toBe("Permissão insuficiente");
        //Neste exercício não usei a mensagem dentro do throw new, então trouxe a mensagem do erro d dentro da pasta errors.
      }
    }
  });

  //Desafios Teste de Erros para addLike
  test("Likar post com token inválido", async () => {
    expect.assertions(2);

    try {
      const input: IAddLikeInputDTO = {
        token: "token-mock-Anormal",
        postId: "201",
      };
      await postBusiness.addLike(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Credenciais inválidas");
      }
    }
  });

  test("Likar post inexistente", async () => {
    expect.assertions(2);
    try {
      const input: IAddLikeInputDTO = {
        token: "token-mock-normal",
        postId: "1000",
      };
      await postBusiness.addLike(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Recurso não encontrado");
      }
    }
  });

  test("Likar post já likado", async () => {
    expect.assertions(2);
    try {
      const input: IAddLikeInputDTO = {
        token: "token-mock-normal",
        postId: "201",
      };
      await postBusiness.addLike(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(409);
        expect(error.message).toBe("Já deu like");
      }
    }
  });

  //Desafios Teste de Erros para removeLike
  test("Deslikar post com token inválido", async () => {
    expect.assertions(2);

    try {
      const input: IRemoveLikeInputDTO = {
        token: "token-mock-Anormal",
        postId: "201",
      };
      await postBusiness.removeLike(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Credenciais inválidas");
      }
    }
  });

  test("Deslikar post inexistente", async () => {
    expect.assertions(2);
    try {
      const input: IRemoveLikeInputDTO = {
        token: "token-mock-normal",
        postId: "1000",
      };
      await postBusiness.removeLike(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Post não encontrado");
      }
    }
  });

  test("Deslikar post não likado ainda", async () => {
    expect.assertions(2);
    try {
      const input: IRemoveLikeInputDTO = {
        token: "token-mock-normal",
        postId: "202",
      };
      await postBusiness.removeLike(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Ainda não deu like");
      }
    }
  });
});
