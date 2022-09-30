import { ShowBusiness } from "../src/business/ShowBusiness";
import { BaseError } from "../src/errors/BaseError";
import { Show, IShowDB, IShowInputDB, IBookTicketInputDB } from "../src/models/Show";
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
        show_id: "201",
        token: "token-mock-normal",
      };
    const response = await showBusiness.delBookingTicket(input);
    expect(response.message).toBe(`Reservation canceled successfully`);
    expect(response.ticketsAvailable).toBe(5000);
    expect(response.result).toBe(`Updated Successfully`);
  });
});
