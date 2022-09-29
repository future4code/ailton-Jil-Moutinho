export interface IShowInputDB {
  band: string;
  starts_at: Date;
  token: string;
}

export interface IShowDB {
  id: string;
  band: string;
  starts_at: Date;
  tickets: number;
}
export interface IBookTicketInputDB {
  show_id: string;
  token: string;
}

export interface ITicketDB {
  id: string;
  show_id: string;
  user_id: string;
}

export interface IDelTicketInputDB {
  show_id: string;
  user_id: string;
}

export class Show {
  constructor(
    private id: string,
    private band: string,
    private startsAt: Date,
    private tickets: number = 5000
  ) {}

  public getId = () => {
    return this.id;
  };

  public getBand = () => {
    return this.band;
  };

  public getStartsAt = () => {
    return this.startsAt;
  };

  public getTickets = () => {
    return this.tickets;
  };

  public setId = (newId: string) => {
    this.id = newId;
  };

  public setBand = (newBand: string) => {
    this.band = newBand;
  };

  public setStartsAt = (newStartsAt: Date) => {
    this.startsAt = newStartsAt;
  };

  public setTickets = (newTickets: number) => {
    this.tickets = newTickets;
  };
}
