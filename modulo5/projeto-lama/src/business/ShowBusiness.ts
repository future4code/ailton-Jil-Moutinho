import { tickets } from "../database/migrations/data";
import { ShowDatabase } from "../database/ShowDatabase";
import { AuthenticationError } from "../errors/AuthenticationError";
import { AuthorizationError } from "../errors/AuthorizationError";
import { ConflictError } from "../errors/ConflictError";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
import { UnprocessableError } from "../errors/UnprocessableError";
import {
  IBookTicketInputDB,
  IDelTicketInputDB,
  IShowInputDB,
  ITicketDB,
  Show,
} from "../models/Show";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class ShowBusiness {
  constructor(
    private showDatabase: ShowDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  public postShow = async (input: IShowInputDB) => {
    const { band, starts_at, token } = input;

    if (!band || !starts_at) {
      throw new ParamsError("You must inform show data");
    }

    if (typeof band !== "string" || band.length < 1) {
      throw new ParamsError("Your post must have at least one charactere");
    }

    /* if (typeof starts_at !== "Date") {
      throw new ParamsError("starts_at is not valid");
    } */
    //Ou manda como string e faz new date Date aqui e verifica o formato da string Ou não verifica pois SQL vai verificar

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthenticationError();
    }

    if (payload.role === "NORMAL") {
      throw new AuthorizationError();
    }

    if (starts_at < new Date("2022/12/05")) {
      throw new ParamsError("Festival hasn't started yet.");
    }

    const existShow = await this.showDatabase.getShowByDate(starts_at);

    if (existShow) {
      throw new ConflictError();
    }

    const id = this.idGenerator.generate();

    const newShow = new Show(id, band, starts_at);

    const showDB = await this.showDatabase.createShow(newShow);

    return { message: "Show created successfully" };
  };

  public getAllShows = async (token: string) => {
    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthenticationError();
    }

    const allShows: Show[] = await this.showDatabase.getAllShow();

    return allShows;
  };

  public postBookingTicket = async (input: IBookTicketInputDB) => {
    const { show_id, token } = input;

    if (!show_id || !token) {
      throw new ParamsError("You must inform show data");
    }

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthenticationError();
    }

    const existShow = await this.showDatabase.getShowById(show_id);
    if (!existShow) {
      throw new NotFoundError("Show with this id not found");
    }

    const existBooking = await this.showDatabase.getTicketByUserId(
      show_id,
      payload.id
    );

    if (existBooking) {
      throw new UnprocessableError(
        "You already bought a tickets for this show."
      );
    }

    const show = new Show(
      existShow.id,
      existShow.band,
      existShow.starts_at,
      existShow.tickets
    );

    if (show.getTickets() === 0) {
      throw new Error("There are no tickets available");
    }
    const result = await this.showDatabase.putTickets(
      show.getId(),
      show.getTickets() - 1
    );

    const id = this.idGenerator.generate();

    const newTicket: ITicketDB = {
      id: id,
      show_id: show_id,
      user_id: payload.id,
    };

    const ticketDB = await this.showDatabase.postBooking(newTicket);

    return {
      message: ticketDB,
      ticketnumber: id,
      ticketsAvailable: show.getTickets() - 1,
      result,
    };
  };

  public delBookingTicket = async (input: IBookTicketInputDB) => {
    const { show_id, token } = input;

    if (!show_id || !token) {
      throw new ParamsError("You must inform show data");
    }

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthenticationError();
    }

    const existShow = await this.showDatabase.getShowById(show_id);
    if (!existShow) {
      throw new NotFoundError("Show with this id not found");
    }

    const existBooking = await this.showDatabase.getTicketByUserId(
      show_id,
      payload.id
    );

    if (!existBooking) {
      throw new UnprocessableError(
        "You haven't booked a tickets for this show."
      );
    }

    const show = new Show(
      existShow.id,
      existShow.band,
      existShow.starts_at,
      existShow.tickets
    );

    const result = await this.showDatabase.putTickets(
      show.getId(),
      show.getTickets() - 1
    );

    const searchBooking: IDelTicketInputDB = {
      show_id: show_id,
      user_id: payload.id,
    };
    const ticketDB = await this.showDatabase.delBooking(searchBooking);

    return {
      message: ticketDB,
      ticketsAvailable: show.getTickets() + 1,
      result,
    };
  };
}
