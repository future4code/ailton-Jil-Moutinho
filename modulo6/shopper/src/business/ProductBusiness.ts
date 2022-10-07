import { ProductDatabase } from "../database/ProductDatabase";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
import { UnprocessableError } from "../errors/UnprocessableError";
import {
  IPostInputDB,
  IPostInputIdDB,
  IProductDB,
  IPutPurchaseInputDB,
  ISearchProduct,
  IPurchaseInputDB,
  Product,
} from "../models/Products";
import { IdGenerator } from "../services/IdGenerator";

export class ProductBusiness {
  constructor(
    private productDatabase: ProductDatabase,
    private idGenerator: IdGenerator
  ) {}

  public getAll = async (input: ISearchProduct) => {
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

    const allNewProducts = allProducts.map((item) => {
      const newItem = new Product(
        item.id,
        item.name,
        item.price,
        item.qty_stock
      );

      return newItem;
    });

    return allNewProducts;
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

  public postPurchase = async (input: IPostInputDB) => {
    const { id_cart, id_product } = input;
    const price = Number(input.price);

    if (!id_cart || !id_product || !price) {
      throw new ParamsError("You must inform all data");
    }

    if (typeof price !== "number") {
      throw new ParamsError("You must inform quantity and price as numbers");
    }

    const existEnoughProduct = await this.productDatabase.getProductById(
      id_product
    );

    if (!existEnoughProduct) {
      throw new NotFoundError("Product with this id not found");
    }

    if (existEnoughProduct.qty_stock === 0) {
      throw new UnprocessableError(
        "There is not enough units to add in your cart!"
      );
    }

    const existPurchase = await this.productDatabase.getPurchase(
      id_product,
      id_cart
    );

    if (existPurchase) {
      throw new UnprocessableError(
        "This item is already in your cart. You can add more units in your list"
      );
    }

    const id_purchase = this.idGenerator.generate();

    const newPurchase: IPostInputIdDB = {
      id_purchase,
      id_cart,
      id_product,
      price,
    };

    const result = await this.productDatabase.postPurchase(newPurchase);
    await this.productDatabase.putStockByIdSum(id_product);

    return { message: result, id_purchase: id_purchase };
  };

  public putSumPurchaseInCart = async (input: IPutPurchaseInputDB) => {
    const { id_product, id_purchase } = input;

    if (!id_purchase) {
      throw new ParamsError("You must inform all data");
    }

    const existEnoughProduct = await this.productDatabase.getProductById(
      id_product
    );

    if (!existEnoughProduct) {
      throw new NotFoundError("Product with this id not found");
    }

    if (existEnoughProduct.qty_stock == 0) {
      throw new UnprocessableError(
        "There is not enough units to add in your cart!"
      );
    }

    const result = await this.productDatabase.putPurchaseById(id_purchase);

    await this.productDatabase.putStockByIdSum(id_product);

    return result;
  };

  public putSubPurchaseInCart = async (input: IPutPurchaseInputDB) => {
    const { id_product, id_purchase } = input;
    if (!id_purchase) {
      throw new ParamsError("You must inform all data");
    }

    const existEnoughProductInCart =
      await this.productDatabase.getPurchaseById(id_purchase);

    if (!existEnoughProductInCart) {
      throw new NotFoundError("Product with this id not found");
    }

    if (existEnoughProductInCart.quantity === 0) {
      throw new UnprocessableError("You didn't buy that much!");
    }

    const result = await this.productDatabase.putDelPurchaseById(id_purchase);

    await this.productDatabase.putStockByIdSub(id_product);

    return result;
  };

  public getAllPurchase = async (id_cart: string) => {
    if (!id_cart) {
      throw new ParamsError("You must inform all data");
    }
    const allPurchase: IPurchaseInputDB[] | undefined =
      await this.productDatabase.getAllPurchaseById(id_cart);

    if (!allPurchase || allPurchase?.length === 0) {
      throw new NotFoundError("There is no purchse in this cart");
    }

    return allPurchase;
  };

  public delPurchaseFromCart = async (id_purchase: string) => {
    if (!id_purchase) {
      throw new ParamsError("You must inform all data");
    }

    const existPurchase = await this.productDatabase.getPurchaseById( id_purchase );

    if (!existPurchase) {
      throw new NotFoundError("Product with this id not found in the cart");
    }

    const result = await this.productDatabase.delPurchaseFromCart(id_purchase)
    const result2 = await this.productDatabase.putStockByIdDelPurchase(existPurchase.id_product, existPurchase.quantity);

    return { message: result };
  };
}
