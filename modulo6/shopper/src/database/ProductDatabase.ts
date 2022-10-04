import {
  IProductDB,
  IProductDTO,
  IPutProductInputDB,
  Product,
} from "../models/Products";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
  public static TABLE_PRODUCTS = "Shopper_Products";
  public static TABLE_PURCHASES = "Shopper_Purchases";

  public getAllProducts = async (input: IProductDTO): Promise<IProductDB[]> => {
    const { search, limit, offset, order, sort } = input;

    const ProductsDB: IProductDB[] = await this.getConnection()
      .select("*")
      .where("qty_stock", ">", "0")
      .andWhere("name", "like", `%${search}%`)
      .limit(limit)
      .offset(offset)
      .orderBy(sort, order)
      .from(ProductDatabase.TABLE_PRODUCTS);
    return ProductsDB;
  };

  public getProductById = async (
    id: string
  ): Promise<IProductDB | undefined> => {
    const productDB: IProductDB[] = await this.getConnection()
      .select("*")
      .from(ProductDatabase.TABLE_PRODUCTS)
      .where({ id });
    return productDB[0];
  };

  public putStockById = async (input: IPutProductInputDB): Promise<string> => {
    const { id, qty_stock } = input;

    const productDB = await this.getConnection()
      .update({ qty_stock })
      .from(ProductDatabase.TABLE_PRODUCTS)
      .where({ id });

    return `Quantity in stock updated successfuly`;
  };
}
