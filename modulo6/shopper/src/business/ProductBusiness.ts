import { ProductDatabase } from "../database/ProductDatabase";
import { AuthenticationError } from "../errors/AuthenticationError";
import { ConflictError } from "../errors/ConflictError";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
import { IProductDB, IProductDTO } from "../models/Products";
import { IdGenerator } from "../services/IdGenerator";

export class ProductBusiness {
  constructor(private productDatabase: ProductDatabase) {}

  public getAll = async (input: IProductDTO) => {
    const search = input.search || "";
    const sort = input.sort || "name";
    const order = input.order || "ASC";
    const limit = Number(input.limit) || 25;
    const page = Number(input.page) || 1;
    const offset = (page - 1) * limit;

    const searchProducts: any = {
      search,
      order,
      sort,
      limit,
      offset,
    };

    const allProducts: IProductDB[] = await this.productDatabase.getAllProducts(
      searchProducts
    );

    return allProducts;
  };

  public getById = async (id: string) => {
    if (!id) {
      throw new ParamsError("You must inform the product id");
    }

    const existProduct = await this.productDatabase.getProductById(id);
    if (!existProduct) {
      throw new NotFoundError("Product with this id not found");
    }

    return existProduct;
  };
}
