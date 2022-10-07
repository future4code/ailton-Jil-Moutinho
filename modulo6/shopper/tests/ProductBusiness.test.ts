import { ProductBusiness } from "../src/business/ProductBusiness";
import { BaseError } from "../src/errors/BaseError";
import {
  Product,
  IProductDB,
} from "../src/models/Products";
import { IdGeneratorMock } from "./mocks/services/IdGeneratorMock";
import { ProductDatabaseMock } from "./mocks/ProductDatabaseMock";

/* describe("Testando a ProductBusiness", () => {
  const productBusiness = new ProductBusiness(
    new ProductDatabaseMock(),
    new IdGeneratorMock()
  ); */

  //Create Product
/*   test("Should create a Product", async () => {
    const input: IProductInputDB = {
      band: "Teste tenatndo",
      starts_at: new Date("2022-12-25"),
      token: "token-mock-admin",
    };
    const response = await ProductBusiness.postProduct(input);
    expect(response.message).toBe("Product created successfully");
  });

  //Get all Products
  test("Should return the list of all Products", async () => {
    const token: string = "token-mock-normal";
    const response = await ProductBusiness.getAllProducts(token);
    expect(response.length).toBe(7);
    expect(response[0]).toBeInstanceOf(Object);
  });

  //Book a ticket
  test("Should be able to place a booking a ticket", async () => {
    const input: IBookTicketInputDB = {
      Product_id: "202",
      token: "token-mock-normal",
    };
    const response = await ProductBusiness.postBookingTicket(input);
    expect(response.message).toBe(`Ticket booked successfully`);
    expect(response.ticketnumber).toBe("id-mock");
    expect(response.ticketsAvailable).toBe(4999);
    expect(response.result).toBe(`Updated Successfully`);
  });

  //Cancel a booked ticket
  test("Should be able to cancel a booking a ticket", async () => {
    const input: IBookTicketInputDB = {
      Product_id: "940f3071-1367-4c09-ad95-0353c974fd7e",
      token: "token-mock-normal",
    };
    const response = await ProductBusiness.delBookingTicket(input);
    expect(response.message).toBe(`Reservation canceled successfully`);
    expect(response.ticketsAvailable).toBe(5000);
    expect(response.result).toBe(`Updated Successfully`);
  });

  //ERRORS
  //Error - Create Product
  test("Create a Product with no band name", async () => {
    expect.assertions(2);

    try {
      const input: IProductInputDB = {
        band: "",
        starts_at: new Date("2022-12-25"),
        token: "token-mock-admin",
      };
      await ProductBusiness.postProduct(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("You must inform all Product data");
      }
    }
  });

  test("Create a Product without a valid token", async () => {
    expect.assertions(2);

    try {
      const input: IProductInputDB = {
        band: "Bandanda",
        starts_at: new Date("2022-12-25"),
        token: "token-mock-adminISTRATOR",
      };

      await ProductBusiness.postProduct(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Invalid credentials");
      }
    }
  });

  test("Create a Product not being admin", async () => {
    expect.assertions(2);

    try {
      const input: IProductInputDB = {
        band: "Bandanda",
        starts_at: new Date("2022-12-25"),
        token: "token-mock-normal",
      };
      await ProductBusiness.postProduct(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(403);
        expect(error.message).toBe("Insuficient permission");
      }
    }
  });

  test("Create a Product before the festival started", async () => {
    expect.assertions(2);

    try {
      const input: IProductInputDB = {
        band: "Bandanda",
        starts_at: new Date("2022-10-25"),
        token: "token-mock-admin",
      };
      await ProductBusiness.postProduct(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("Festival hasn't started yet.");
      }
    }
  });

  test("Create a Product in the same day as another", async () => {
    expect.assertions(2);

    try {
      const input: IProductInputDB = {
        band: "Bandanda",
        starts_at: new Date("2022/12/05"),
        token: "token-mock-admin",
      };
      await ProductBusiness.postProduct(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(409);
        expect(error.message).toBe("Resource already exists");
      }
    }
  });

  //Error - Get all Products
  test("Gel all Products without a valid token", async () => {
    expect.assertions(2);

    try {
      const token: string = "token-mock-adminISTRATOR";

      await ProductBusiness.getAllProducts(token);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Invalid credentials");
      }
    }
  });

  //Error - Booking a Product
  test("Booking a Product without informing its id", async () => {
    expect.assertions(2);

    try {
      const input: IBookTicketInputDB = {
        Product_id: "",
        token: "token-mock-admin",
      };

      await ProductBusiness.postBookingTicket(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("You must inform Product data");
      }
    }
  });

  test("Booking a Product without a valid token", async () => {
    expect.assertions(2);

    try {
      const input: IBookTicketInputDB = {
        Product_id: "203",
        token: "token-mock-adminISTRATOR",
      };

      await ProductBusiness.postBookingTicket(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Invalid credentials");
      }
    }
  });

  test("Booking a Product with an invalid id", async () => {
    expect.assertions(2);

    try {
      const input: IBookTicketInputDB = {
        Product_id: "10000",
        token: "token-mock-admin",
      };

      await ProductBusiness.postBookingTicket(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Product with this id not found");
      }
    }
  });

  test("Booking a ticket that you already bought", async () => {
    expect.assertions(2);

    try {
      const input: IBookTicketInputDB = {
        Product_id: "940f3071-1367-4c09-ad95-0353c974fd7e",
        token: "token-mock-admin",
      };

      await ProductBusiness.postBookingTicket(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe(
          "You already bought a tickets for this Product."
        );
      }
    }
  });

  test("Booking a Product without available tickets", async () => {
    expect.assertions(2);

    try {
      const input: IBookTicketInputDB = {
        Product_id: "e5566f0b-89ee-4ad5-a0b9-6f507db97a71",
        token: "token-mock-admin",
      };

      await ProductBusiness.postBookingTicket(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe("There are no tickets available");
      }
    }
  });

  //Error - Cancel a ticket reservation
  test("Cancel a ticket without informing its id", async () => {
    expect.assertions(2);

    try {
      const input: IBookTicketInputDB = {
        Product_id: "",
        token: "token-mock-admin",
      };

      await ProductBusiness.delBookingTicket(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("You must inform Product data");
      }
    }
  });

  test("Cancel a ticket without a valid token", async () => {
    expect.assertions(2);

    try {
      const input: IBookTicketInputDB = {
        Product_id: "203",
        token: "token-mock-adminISTRATOR",
      };

      await ProductBusiness.delBookingTicket(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Invalid credentials");
      }
    }
  });

  test("Cancel a ticket with an invalid Product id", async () => {
    expect.assertions(2);

    try {
      const input: IBookTicketInputDB = {
        Product_id: "10000",
        token: "token-mock-admin",
      };

      await ProductBusiness.delBookingTicket(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Product with this id not found");
      }
    }
  });

  test("Cancel a ticket that you didn't buy", async () => {
    expect.assertions(2);
    try {
      const input: IBookTicketInputDB = {
        Product_id: "e5566f0b-89ee-4ad5-a0b9-6f507db97a71",
        token: "token-mock-admin",
      };
      await ProductBusiness.delBookingTicket(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe(
          "You haven't booked a tickets for this Product."
        );
      }
    }
  }); */
