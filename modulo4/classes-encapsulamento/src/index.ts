// Ex1 Analise a classe `UserAccount` abaixo. Perceba quais propriedades são públicas e quais são privadas e responda as perguntas discursivas em comentários no arquivo `index.ts`

//a) *Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*
// É onde são recebidos os atributos da classe e dai é basicamente uma função de inicialização de uma classe, que quando invocadas no momento em que objetos desta classe são criadas

//b) *Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
import { Transaction } from "./types";

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: TransactionClass[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Console1:", "Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  public get(): string {
    return this.cpf;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public getBalance(): number {
    return this.balance;
  }

  public getTransactions(): TransactionClass[] {
    return this.transactions;
  }

  public postTransaction(spend: TransactionClass) {
    this.transactions.push(spend);
  }

  /*   public postTransaction(spend: TransactionClass): TransactionClass[] {
    return (
     this.transactions.push(spend);
    )  */
}

const client1 = new UserAccount("123.123.123-01", "Mia", 7);
const client2 = new UserAccount("123.123.123-02", "Gatuno", 9);
//Foi impressa uma a cada instancia criada.

//c) *Como conseguimos ter acesso às propriedades privadas de uma classe?*
// Se a classe, ou seja o dev que codou a classe determinou uma função dentro dela para acesso.

// Ex2 Transforme a variável de tipo abaixo, chamada Transaction em uma classe Transaction. Ela deve conter as mesmas propriedades: data, valor e descrição. Agora, porém, todas elas devem ser privadas. Portanto, crie métodos (getters) para a leitura desses valores, tanto para essa classe quanto para a classe UserAccount. Crie uma instância dessa classe e adicione à instância já criada de UserAccount
class TransactionClass {
  private description: string;
  private value: number;
  private date: string;

  constructor(description: string, value: number, date: string) {
    console.log(
      "Console2:",
      "Chamando o construtor da classe TransactionClass"
    );
    this.description = description;
    this.value = value;
    this.date = date;
  }

  public getDescription(): string {
    return this.description;
  }

  public getValue(): number {
    return this.value;
  }

  public getDate(): string {
    return this.date;
  }
}

const transaction1 = new TransactionClass("Whiskas sache", 2.3, "2022-09-05");

console.log(
  "Console3: cliente 1, e 2 transação 1.",
  client1,
  client2,
  transaction1
);

client1.postTransaction(transaction1);
client2.postTransaction(
  new TransactionClass("Whiskas sache Felix", 1.99, "2022-09-04")
);

console.log("Console4: cliente 1 e 2 com transações.", client1, client2);

// Ex3 Crie uma classe Bank, que será responsável por guardar todos os dados da aplicação. Ela deve possuir a propriedades accounts, privada (crie os getters e setters que achar apropriado).
class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

  public getAccounts(): UserAccount[] {
    return this.accounts;
  }

  public postNewUser(newUser: UserAccount) {
    this.accounts.push(newUser);
  }
}
