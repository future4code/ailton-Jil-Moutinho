import { IProductDB } from "./Products";

export interface IUserDB {
  id_cart: string;
  client_name: string;
  delivery_date: Date;
  productsList: IProductDB[];
}

/* export interface ILoginInputDTO {
  email: string;
  password: string;
}

export interface ISignupInputDTO extends ILoginInputDTO {
  name: string;
} */

export class Cart {
  constructor(
    private id_cart: string,
    private client_name: string,
    private delivery_date: Date,
    private productsList: IProductDB[],
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

  public getProductsList = () => {
    return this.productsList;
  };

  public setProductsList = (newProductsList: IProductDB[]) => {
    this.productsList = newProductsList;
  };

  public setDelivery_date = (newDeliveryDate: Date) => {
    this.delivery_date = newDeliveryDate;
  };
}
