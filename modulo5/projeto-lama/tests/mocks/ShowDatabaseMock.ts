import { BaseDatabase } from "../../src/database/BaseDatabase";
import {
  IDelTicketInputDB,
  IShowDB,
  ITicketDB,
  Show,
} from "../../src/models/Show";

export class ShowDatabaseMock extends BaseDatabase {
  public static TABLE_POSTS = "Labook_Posts";
  public static TABLE_LIKES = "Labook_Likes";

  public getAllShow = async (): Promise<IShowDB[]> => {
    const allShowsDB: IShowDB[] = [
      {
        id: "201",
        band: "Foo Fighters",
        starts_at: new Date("2022-12-05"),
        tickets: 5000,
      },
      {
        id: "202",
        band: "System of a Down",
        starts_at: new Date("2022-12-06"),
        tickets: 5000,
      },
      {
        id: "203",
        band: "Evanescence",
        starts_at: new Date("2022-12-07"),
        tickets: 5000,
      },
      {
        id: "44444379-43b8-4a82-ac8f-81627e446532",
        band: "Kalipso",
        starts_at: new Date("2022-12-10"),
        tickets: 5000,
      },
      {
        id: "4d7a8934-23f3-4200-9d4e-041050bb6ce6",
        band: "Manu Batidão",
        starts_at: new Date("2022-10-10"),
        tickets: 4995,
      },
      {
        id: "940f3071-1367-4c09-ad95-0353c974fd7e",
        band: "Teste",
        starts_at: new Date("2022-12-22"),
        tickets: 0,
      },
      {
        id: "e5566f0b-89ee-4ad5-a0b9-6f507db97a71",
        band: "The Killers",
        starts_at: new Date("2022-12-05"),
        tickets: 5000,
      },
    ];
    return allShowsDB;
  };

  public getShowByDate = async (
    starts_at: Date
  ): Promise<IShowDB | undefined> => {
    const formatedDate = starts_at.toString();
    const formatedDate2 = formatedDate.slice(4, 15);
    switch (formatedDate2) {
      case "Dec 05 2022":
        return {
          id: "e5566f0b-89ee-4ad5-a0b9-6f507db97a71",
          band: "The Killers",
          starts_at: new Date("2022-12-05"),
          tickets: 5000,
        };
      case "Dec 06 2022":
        return {
          id: "202",
          band: "System of a Down",
          starts_at: new Date("2022-12-06"),
          tickets: 5000,
        };
      case "Dec 07 2022":
        return {
          id: "203",
          band: "Evanescence",
          starts_at: new Date("2022-12-07"),
          tickets: 5000,
        };
      case "Dec 22 2022":
        return {
          id: "940f3071-1367-4c09-ad95-0353c974fd7e",
          band: "Teste",
          starts_at: new Date("2022-12-22"),
          tickets: 5000,
        };
      default:
        return undefined;
    }
  };

  public async createShow(newShow: Show): Promise<string> {
    return `${newShow.getBand()}'s show created successfully`;
  }

  public getShowById = async (id: string): Promise<IShowDB | undefined> => {
    switch (id) {
      case "e5566f0b-89ee-4ad5-a0b9-6f507db97a71":
        return {
          id: "e5566f0b-89ee-4ad5-a0b9-6f507db97a71",
          band: "The Killers",
          starts_at: new Date("2022-12-05"),
          tickets: 0,
        };
      case "201":
        return {
          id: "201",
          band: "Foo Fighters",
          starts_at: new Date("2022-12-05"),
          tickets: 4999,
        };
      case "202":
        return {
          id: "202",
          band: "System of a Down",
          starts_at: new Date("2022-12-06"),
          tickets: 5000,
        };
      case "203":
        return {
          id: "203",
          band: "Evanescence",
          starts_at: new Date("2022-12-07"),
          tickets: 5000,
        };
      case "940f3071-1367-4c09-ad95-0353c974fd7e":
        return {
          id: "940f3071-1367-4c09-ad95-0353c974fd7e",
          band: "Teste",
          starts_at: new Date("2022-12-22"),
          tickets: 4999,
        };
      default:
        return undefined;
    }
  };

  public getTicketByUserId = async (
    show_id: string,
    user_id: string
  ): Promise<ITicketDB | undefined> => {
    switch (user_id && show_id) {
      case "101" && "940f3071-1367-4c09-ad95-0353c974fd7e":
        return {
          id: "940f3071-1367-4c09-ad95-0353c974fd7e",
          show_id: "203",
          user_id: "e5566f0b-89ee-4ad5-a0b9-6f507db97a71",
        };
      default:
        return undefined;
    }
  };

  public postBooking = async (newBooking: ITicketDB) => {
    return `Ticket booked successfully`;
  };

  public putTickets = async (show_id: string, tickets: number) => {
    return "Updated Successfully";
  };

  public delBooking = async (searchBooking: IDelTicketInputDB) => {
    return `Reservation canceled successfully`;
  };
}
