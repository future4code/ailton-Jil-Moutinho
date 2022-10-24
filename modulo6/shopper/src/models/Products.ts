export interface IProductDB {
  id: string;
  qty_stock: number;
  name: string;
  price: number;
}

export interface IPutPurchaseInputDB {
  id_product: string;
  id_purchase: string;
}

export interface IPostInputDB {
  id_cart: string,
  id_product: string,
  price: number
}

export interface IPostInputIdDB extends IPostInputDB{
  id_purchase: string
}

export interface IPurchaseInputDB {
  id_purchase: string;
  id_cart: string;
  id_product: string;
  quantity: number;
  price: number;
}

export interface ISearchProduct {
  search: string;
  order: string;
  limit: number;
  page: number;
  offset: number;
  sort: string;
}

export class Product {
  constructor(
    private id: string,
    private name: string,
    private price: number,
    private qty_stock: number
  ) {}

  public getId = () => {
    return this.id;
  };

  public getName = () => {
    return this.name;
  };

  public getPrice = () => {
    return this.price;
  };

  public getQtyStock = () => {
    return this.qty_stock;
  };
}
