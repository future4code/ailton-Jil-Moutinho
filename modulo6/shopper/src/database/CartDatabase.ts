/* import { IPutProductInputDB } from "../models/Cart"; */
import { Cart } from "../models/Cart";
import { BaseDatabase } from "./BaseDatabase";

export class CartDatabase extends BaseDatabase {
  public static TABLE_CART = "Shopper_Cart";

  public createCart = async (cart: Cart): Promise<string> => {
    await BaseDatabase.connection(CartDatabase.TABLE_CART).insert({
      id_cart: cart.getIdCart(),
      client_name: cart.getName(),
      delivery_date: cart.getDelivery_date()
    });

    return `${cart.getName()} created successfully`;
  };

  public putTotalCart = async (id_cart: string, total: number
  ): Promise<string> => {
    await this.getConnection()
      .update({ total })
      .where({ id_cart })
      .from(CartDatabase.TABLE_CART);

    return `Total balance updated successfully`;
  };
}
