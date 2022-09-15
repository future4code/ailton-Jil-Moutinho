// Ex1 Analise a classe User. Perceba quais propriedades são públicas e quais são privadas. Copie esse código para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, email, etc que você quiser) e imprima, no terminal, o id, o nome e o email desse usuário.
// a) Seria possível imprimir a senha (password) atrelada a essa instância?
// Sim, se damos console aparece no terminal. O certo seria dizer não, rs pq é private e não tem função de mostrar o item.

// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
import { User } from "./heritageUser";
import { Customer } from "./heritageCustumer";

const userTeste = new User("a", "@", "A", "A");
/* console.log(userTeste); */

// Ex2 Analise a Customer. Perceba quais propriedades são públicas e quais são privadas. Copie esse código para o seu exercício de hoje e crie uma instância dessa classe (com as informações que você quiser). Atente-se ao fato de que o Customer é uma subclasse (ou classe filha) da classe User. Sabemos disso porque há a palavra extends na declaração da classe Customer; e, em seu construtor, foi usado o super.
// a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal?
// O custumer só 1 a cada criação de cliente, e o user 2x devido ao ex1.

const custumerTeste = new Customer("a", "@", "A", "P", "123");
console.log("console que queremos testar password:", custumerTeste);

// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
// 2x devido ao ex1 e mais o ex2.

// Ex3 Agora, imprima todas as informações possíveis da instância que você criou: o id, o nome, o email, o valor total de compra (purchaseTotal) e o cartão de crédito (creditCard). Perceba que as propriedades públicas da classe pai (User) foram "herdadas" pela classe filha (Customer).
console.log(custumerTeste.getId());
console.log(custumerTeste.getName());
console.log(custumerTeste.getEmail());
console.log(custumerTeste.getPurchaseTotal());
console.log(custumerTeste.getCreditCard());

// a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
console.log(custumerTeste);
// O certo seria dizer não, rs pq é private e não tem função de mostrar o item, porém se damos console aparece no terminal.

// Ex4 Adicione um método público à classe User. Esse método deve ter o nome de introduceYourself("apresente-se") e deve retornar a mensagem: "Olá, bom dia!". As classes filhas sempre têm acesso aos métodos públicos da classe pai. Então, para realizar o teste dessa sua função, faça com que a instância que você criou para a classe Customer chame esse método.
console.log(custumerTeste.introduceYourself());

// Ex5 Altere o método que você acabou de criar para que ele imprima a mensagem: "Olá, sou ${nome do usuário}. Bom dia!". Realize os mesmos testes anteriores.
// Já feito.

//POLIMORFISMO
// Ex1 Comece criando um objeto dessa interface, colocando a tipagem correta. Perceba que você terá que dar uma implementação para o método calculateBill(). Por enquanto, implemente de tal forma que sempre retorne 2 (ou qualquer outro número). Imprima todas as informações que forem possíveis no terminal. (poliClient)
import { Client } from "./poliClient";

const clientTeste: Client = {
  name: "Cliente teste",
  registrationNumber: 1,
  consumedEnergy: 100,
  calculateBill: () => {
    return 2;
  },
};

const clienteTeste2 = new Client("Cliente teste2", 2, 101);

console.log(clienteTeste2, clienteTeste2.calculateBill(2));

// a) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
// Então o calculateBill não foi impresso pq é uma função, se chamar cliente.calculateBill conseguimos imprimir.

// Ex2 Essa classe é abstrata porque está representando um tipo de informação que simplesmente abstrai e armazena as características em comum de um conjunto de outras classes. Por ser abstrata, não podemos criar uma instância dela. Essa é uma regra da Programação Orientada a Objetos e válida para todas as linguagens.
// a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?
/* import { Place } from "./poliPlace";
const placeteste = new Place("09750-320"); */
// Não se pode criar uma instancia d euma classe abstrata

// b) Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
import { NewPlaceClass } from "./poliPlace";
const placeteste2 = new NewPlaceClass("09750-320");
console.log(placeteste2);
