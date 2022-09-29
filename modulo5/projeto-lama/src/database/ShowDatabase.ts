import { IShowDB, Show } from "../models/Show";
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
      .from(ShowDatabase.TABLE_SHOWS)

    return ShowsDB;
  };
}
