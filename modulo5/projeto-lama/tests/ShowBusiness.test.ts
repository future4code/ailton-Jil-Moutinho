import { ShowBusiness } from "../src/business/ShowBusiness";
import { BaseError } from "../src/errors/BaseError";
import {
  Show,
  IShowDB,
  IShowInputDB,
  IBookTicketInputDB,
} from "../src/models/Show";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { ShowDatabaseMock } from "./mocks/ShowDatabaseMock";

describe("Testando a ShowBusiness", () => {
  const showBusiness = new ShowBusiness(
    new ShowDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  );

  //Create show
  test("Should create a show", async () => {
    const input: IShowInputDB = {
      band: "Teste tenatndo",
      starts_at: new Date("2022-12-25"),
      token: "token-mock-admin",
    };
    const response = await showBusiness.postShow(input);
    expect(response.message).toBe("Show created successfully");
  });

  //Get all shows
  test("Should return the list of all shows", async () => {
    const token: string = "token-mock-normal";
    const response = await showBusiness.getAllShows(token);
    expect(response.length).toBe(7);
    expect(response[0]).toBeInstanceOf(Object);
  });

  //Book a ticket
  test("Should be able to place a booking a ticket", async () => {
    const input: IBookTicketInputDB = {
      show_id: "202",
      token: "token-mock-normal",
    };
    const response = await showBusiness.postBookingTicket(input);
    expect(response.message).toBe(`Ticket booked successfully`);
    expect(response.ticketnumber).toBe("id-mock");
    expect(response.ticketsAvailable).toBe(4999);
    expect(response.result).toBe(`Updated Successfully`);
  });

  //Cancel a booked ticket
  test("Should be able to cancel a booking a ticket", async () => {
    const input: IBookTicketInputDB = {
      show_id: "940f3071-1367-4c09-ad95-0353c974fd7e",
      token: "token-mock-normal",
    };
    const response = await showBusiness.delBookingTicket(input);
    expect(response.message).toBe(`Reservation canceled successfully`);
    expect(response.ticketsAvailable).toBe(5000);
    expect(response.result).toBe(`Updated Successfully`);
  });

  //ERRORS
  //Error - Create show
  test("Create a show with no band name", async () => {
    expect.assertions(2);

    try {
      const input: IShowInputDB = {
        band: "",
        starts_at: new Date("2022-12-25"),
        token: "token-mock-admin",
      };
      await showBusiness.postShow(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("You must inform all show data");
      }
    }
  });

  test("Create a show without a valid token", async () => {
    expect.assertions(2);

    try {
      const input: IShowInputDB = {
        band: "Bandanda",
        starts_at: new Date("2022-12-25"),
        token: "token-mock-adminISTRATOR",
      };

      await showBusiness.postShow(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Invalid credentials");
      }
    }
  });

  test("Create a show not being admin", async () => {
    expect.assertions(2);

    try {
      const input: IShowInputDB = {
        band: "Bandanda",
        starts_at: new Date("2022-12-25"),
        token: "token-mock-normal",
      };
      await showBusiness.postShow(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(403);
        expect(error.message).toBe("Insuficient permission");
      }
    }
  });

  test("Create a show before the festival started", async () => {
    expect.assertions(2);

    try {
      const input: IShowInputDB = {
        band: "Bandanda",
        starts_at: new Date("2022-10-25"),
        token: "token-mock-admin",
      };
      await showBusiness.postShow(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("Festival hasn't started yet.");
      }
    }
  });

  test("Create a show in the same day as another", async () => {
    expect.assertions(2);

    try {
      const input: IShowInputDB = {
        band: "Bandanda",
        starts_at: new Date("2022/12/05"),
        token: "token-mock-admin",
      };
      await showBusiness.postShow(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(409);
        expect(error.message).toBe("Resource already exists");
      }
    }
  });

  //Error - Get all shows
  test("Gel all shows without a valid token", async () => {
    expect.assertions(2);

    try {
      const token: string = "token-mock-adminISTRATOR";

      await showBusiness.getAllShows(token);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Invalid credentials");
      }
    }
  });

  //Error - Booking a show
  test("Booking a show without informing its id", async () => {
    expect.assertions(2);

    try {
      const input: IBookTicketInputDB = {
        show_id: "",
        token: "token-mock-admin",
      };

      await showBusiness.postBookingTicket(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("You must inform show data");
      }
    }
  });

  test("Booking a show without a valid token", async () => {
    expect.assertions(2);

    try {
      const input: IBookTicketInputDB = {
        show_id: "203",
        token: "token-mock-adminISTRATOR",
      };

      await showBusiness.postBookingTicket(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Invalid credentials");
      }
    }
  });

  test("Booking a show with an invalid id", async () => {
    expect.assertions(2);

    try {
      const input: IBookTicketInputDB = {
        show_id: "10000",
        token: "token-mock-admin",
      };

      await showBusiness.postBookingTicket(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Show with this id not found");
      }
    }
  });

  test("Booking a ticket that you already bought", async () => {
    expect.assertions(2);

    try {
      const input: IBookTicketInputDB = {
        show_id: "940f3071-1367-4c09-ad95-0353c974fd7e",
        token: "token-mock-admin",
      };

      await showBusiness.postBookingTicket(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe(
          "You already bought a tickets for this show."
        );
      }
    }
  });

  test("Booking a show without available tickets", async () => {
    expect.assertions(2);

    try {
      const input: IBookTicketInputDB = {
        show_id: "e5566f0b-89ee-4ad5-a0b9-6f507db97a71",
        token: "token-mock-admin",
      };

      await showBusiness.postBookingTicket(input);
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
        show_id: "",
        token: "token-mock-admin",
      };

      await showBusiness.delBookingTicket(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("You must inform show data");
      }
    }
  });

  test("Cancel a ticket without a valid token", async () => {
    expect.assertions(2);

    try {
      const input: IBookTicketInputDB = {
        show_id: "203",
        token: "token-mock-adminISTRATOR",
      };

      await showBusiness.delBookingTicket(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Invalid credentials");
      }
    }
  });

  test("Cancel a ticket with an invalid show id", async () => {
    expect.assertions(2);

    try {
      const input: IBookTicketInputDB = {
        show_id: "10000",
        token: "token-mock-admin",
      };

      await showBusiness.delBookingTicket(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Show with this id not found");
      }
    }
  });

  test("Cancel a ticket that you didn't buy", async () => {
    expect.assertions(2);
    try {
      const input: IBookTicketInputDB = {
        show_id: "e5566f0b-89ee-4ad5-a0b9-6f507db97a71",
        token: "token-mock-admin",
      };
      await showBusiness.delBookingTicket(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe(
          "You haven't booked a tickets for this show."
        );
      }
    }
  });
});
