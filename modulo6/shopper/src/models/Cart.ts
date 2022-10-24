export interface ICartInputDB {
  client_name: string;
  delivery_date: Date;
}

export class Cart {
  constructor(
    private id_cart: string,
    private client_name: string,
    private delivery_date: Date,
    private total: number = 0
  ) {}

  public getIdCart = () => {
    return this.id_cart;
  };

  public getName = () => {
    return this.client_name;
  };

  public getDelivery_date = () => {
    return this.delivery_date;
  };

  public getTotal = () => {
    return this.total;
  };
}
