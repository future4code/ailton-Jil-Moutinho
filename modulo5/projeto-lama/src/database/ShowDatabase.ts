import { format } from "path";
import { IDelTicketInputDB, IShowDB, ITicketDB, Show } from "../models/Show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase {
  public static TABLE_SHOWS = "Lama_Shows";
  public static TABLE_TICKETS = "Lama_Tickets";

  public async createShow(newShow: Show): Promise<string> {
    await this.getConnection()
      .insert({
        id: newShow.getId(),
        band: newShow.getBand(),
        starts_at: newShow.getStartsAt(),
        tickets: newShow.getTickets(),
      })
      .into(ShowDatabase.TABLE_SHOWS);

    return `${newShow.getBand()}'s show created successfully`;
  }

  public getShowByDate = async (starts_at: Date) => {
    const ShowsDB: IShowDB[] = await this.getConnection()
      .select("*")
      .from(ShowDatabase.TABLE_SHOWS)
      .where({ starts_at });

    return ShowsDB[0];
  };

  public getAllShow = async () => {
    const ShowsDB: Show[] = await this.getConnection()
      .select("*")
      .from(ShowDatabase.TABLE_SHOWS);

    return ShowsDB;
  };

  public getShowById = async (id: string) => {
    const ShowsDB: IShowDB[] = await this.getConnection()
      .select("*")
      .from(ShowDatabase.TABLE_SHOWS)
      .where({ id });

    return ShowsDB[0];
  };

  public getTicketByUserId = async (show_id: string, user_id: string) => {
    const ShowsDB: ITicketDB[] = await this.getConnection()
      .select("*")
      .from(ShowDatabase.TABLE_TICKETS)
      .where({ user_id })
      .andWhere({ show_id });

    return ShowsDB[0];
  };

  public postBooking = async (newBooking: ITicketDB) => {
    await this.getConnection()
      .insert({
        id: newBooking.id,
        show_id: newBooking.show_id,
        user_id: newBooking.user_id,
      })
      .into(ShowDatabase.TABLE_TICKETS);

    return `Ticket booked successfully`;
  };

  public putTickets = async (show_id: string, tickets: number) => {
    await this.getConnection()
      .update({ tickets })
      .from(ShowDatabase.TABLE_SHOWS)
      .where({ id: show_id });

    return "Updated Successfully";
  };

  public delBooking = async (searchBooking: IDelTicketInputDB) => {
    await this.getConnection()
      .delete("*")
      .from(ShowDatabase.TABLE_TICKETS)
      .where({
        show_id: searchBooking.show_id,
        user_id: searchBooking.user_id,
      })
      .into(ShowDatabase.TABLE_TICKETS);

    return `Reservation canceled successfully`;
  };

/*   deleteTicket = async (purchase: ICancelTicketDBDTO ) => {
    const cancelTicketDB = {
        user_id: purchase.user_id,
        show_id: purchase.show_id,
    }

    await DataBase
        .connection(ShowDataBase.TABLE_TICKETS)
        .where({ user_id: cancelTicketDB.user_id, show_id: cancelTicketDB.show_id })
        .delete()

    await DataBase
        .connection(ShowDataBase.TABLE_SHOWS)
        .where("id", "=", `${purchase.show_id}`)
        .increment("tickets", 1)    
} */
}
