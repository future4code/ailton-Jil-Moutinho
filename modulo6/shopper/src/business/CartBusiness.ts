import { CartDatabase } from "../database/CartDatabase";
import { ProductDatabase } from "../database/ProductDatabase";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
import { Cart, ICartInputDB } from "../models/Cart";
import { IPurchaseInputDB } from "../models/Products";
import { IdGenerator } from "../services/IdGenerator";

export class CartBusiness {
  constructor(
    private cartDatabase: CartDatabase,
    private idGenerator: IdGenerator,
    private productDatabase: ProductDatabase
  ) {}

  public async createNewCart(input: ICartInputDB): Promise<any> {
    const { client_name, delivery_date } = input;

    if (!client_name || !delivery_date) {
      throw new ParamsError();
    }
    const id_cart = this.idGenerator.generate();

    const newCart = new Cart(id_cart, client_name, delivery_date);

    const result = await this.cartDatabase.createCart(newCart);

    return { message: result, id_cart: newCart.getIdCart() };
  }

  public async putTotal(id_cart: string): Promise<any> {
    if (!id_cart) {
      throw new ParamsError();
    }

    const allPurchase: IPurchaseInputDB[] | undefined =
      await this.productDatabase.getAllPurchaseById(id_cart);

    if (!allPurchase || allPurchase.length === 0) {
      throw new NotFoundError("There's no cart with this id");
    }

    let balance = 0;
    if (allPurchase) {
      for (let i = 0; i < allPurchase.length; i++) {
        balance += allPurchase[i].price * allPurchase[i].quantity;
      }
    }

    const result = await this.cartDatabase.putTotalCart(id_cart, balance);

    return { message: result, totalBalance: balance };
  }
}
