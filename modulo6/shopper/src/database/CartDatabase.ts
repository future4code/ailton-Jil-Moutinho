
import { BaseDatabase } from "./BaseDatabase";

export class CartDatabase extends BaseDatabase {
  public static TABLE_CART = "Shopper_Cart";
  public static TABLE_PURCHASES = "Shopper_Purchases";

/*   public createUser = async (user: User) => {
    const userDB: IUserDB = {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
    };

    await BaseDatabase.connection(UserDatabase.TABLE_CARTS).insert(userDB);
  }; */

/*   public getUserByEmail = async (email: string) : Promise<IUserDB | undefined>=> {
    const usersDB: IUserDB[] = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_CARTS)
      .where({ email });

    return usersDB[0];
  }; */
}
