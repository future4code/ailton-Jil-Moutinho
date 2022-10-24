import { BaseDatabase } from "../../src/database/BaseDatabase";
import { Cart } from "../../src/models/Cart";

export class CartDatabaseMock extends BaseDatabase {
  public static TABLE_CART = "Shopper_Cart";

  public createCart = async (cart: Cart): Promise<string> => {
    return `${cart.getName()} created successfully`;
  };

  public putTotalCart = async (id_cart: string, total: number
    ): Promise<any> => {  
      return "Total balance updated successfully"
    
    };
}
