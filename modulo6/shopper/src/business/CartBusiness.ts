import { CartDatabase } from "../database/CartDatabase";
import { AuthenticationError } from "../errors/AuthenticationError";
import { ConflictError } from "../errors/ConflictError";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
import {
  Cart
} from "../models/Cart";
import { IdGenerator } from "../services/IdGenerator";

export class CartBusiness {
  constructor(
    private CartDatabase: CartDatabase
  ) {}

  /* public signupCart = async (input: ISignupInputDTO) => {
    const name = input.name;
    const email = input.email;
    const password = input.password;

    if (!name || !email || !password) {
      throw new ParamsError("Um ou mais parâmetros faltando");
    }

    if (typeof name !== "string" || name.length < 3) {
      throw new ParamsError("Parâmetro 'name' inválido: mínimo de 3 caracteres");
    }

    if (email.length < 7 ||
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new ParamsError("Parâmetro 'email' inválido");
    }

    if (typeof password !== "string" || password.length < 6) {
      throw new ParamsError("Parâmetro 'password' inválido: mínimo de 6 caracteres");
    }

    const CartDB = await this.CartDatabase.getCartByEmail(email);

    if (CartDB) {
      throw new ConflictError("E-mail já cadastrado");
    }

    const id = this.idGenerator.generate();

    const Cart = new Cart(id, name, email, password, Cart_ROLES.NORMAL);

    await this.CartDatabase.createCart(Cart);

    const response = {
      message: "Cadastro realizado com sucesso",
    };

    return response;
  }; */

  /* public loginCart = async (input: ILoginInputDTO) => {
    const email = input.email;
    const password = input.password;

    if (!email || !password) {
      throw new ParamsError("Um ou mais parâmetros faltando");
    }

    if (email.length < 7 ||
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new ParamsError("Parâmetro 'email' inválido");
    }

    if (typeof password !== "string" || password.length < 6) {
      throw new ParamsError("Parâmetro 'password' inválido: mínimo de 6 caracteres");
    }

    const CartDB = await this.CartDatabase.getCartByEmail(email);

    if (!CartDB) {
      throw new NotFoundError("Email não cadastrado");
    }

    const Cart = new Cart(
      CartDB.id,
      CartDB.name,
      CartDB.email,
      CartDB.password,
      CartDB.role
    );

    const response = {
      message: "Login realizado com sucesso",
    };

    return response;
  }; */
}
