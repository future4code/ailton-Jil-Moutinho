export interface IPutProductInputDB {
  id: string;
  qty_stock: number;
}

export interface IProductDB extends IPutProductInputDB {
  id: string;
  qty_stock: number;
  name: string;
  price: number;
}

export interface IProductDTO {
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

  public setQtyStock = (newQtyStock: number) => {
    this.qty_stock = newQtyStock;
  };
}
