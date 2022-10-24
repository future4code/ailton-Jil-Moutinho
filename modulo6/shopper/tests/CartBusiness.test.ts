import { CartBusiness } from "../src/business/CartBusiness";
import { BaseError } from "../src/errors/BaseError";
import { ICartInputDB } from "../src/models/Cart";
import { CartDatabaseMock } from "./mocks/CartDatabaseMock";
import { ProductDatabaseMock } from "./mocks/ProductDatabaseMock";
import { IdGeneratorMock } from "./mocks/services/IdGeneratorMock";

describe("Testing CartBusiness", () => {
  const cartBusiness = new CartBusiness(
    new CartDatabaseMock(),
    new IdGeneratorMock(),
    new ProductDatabaseMock()
  );

  //Teste de Sucessos
  test("Message of success when created", async () => {
    const input: ICartInputDB = {
      client_name: "Mia",
      delivery_date: new Date("2022/10/10")
    };

    const response = await cartBusiness.createNewCart(input);
    expect(response.message).toBe(`Mia created successfully`);
  });

  test("Message of success when calculated and the balance", async () => {
    const id_cart = "be679a85-58e9-4dd0-8e8b-1f2519276db1";

    const response = await cartBusiness.putTotal(id_cart);
    expect(response.message).toBe("Total balance updated successfully");
    expect(response.totalBalance).toBe(19.07);
  });

  //Teste de Erros para createNewCart
  test("Client tries to subscribe without informing all data", async () => {
    expect.assertions(2);
    try {
      const input: ICartInputDB = {
        client_name: "",
        delivery_date: new Date("2022/10/10"),
      };
      await cartBusiness.createNewCart(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("Invalid or missing parameters");
      }
    }
  });

  //Teste de Erros para putTotal
  test("Client tries to get the balance without informing all data", async () => {
    expect.assertions(2);
    try {
      const id_cart: string = "";

      await cartBusiness.putTotal(id_cart);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("Invalid or missing parameters");
      }
    }
  });

  test("Client tries to get the balance with a wrong id_cart", async () => {
    expect.assertions(2);
    try {
      const id_cart: string = "teste";

      await cartBusiness.putTotal(id_cart);
    } catch (error) {
      if (error instanceof BaseError) {
        console.log("statusCode",error.statusCode);
        console.log("message",error.message);
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("There's no cart with this id");
      }
    }
  });
});
