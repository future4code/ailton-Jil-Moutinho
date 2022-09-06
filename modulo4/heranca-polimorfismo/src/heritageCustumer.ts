import { User } from "./heritageUser";

export class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getPurchaseTotal(): number {
    return this.purchaseTotal;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}
