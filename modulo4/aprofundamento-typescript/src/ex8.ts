//Não é segredo para ninguém que as lojas tendem a lucrar bastante próximo ao período natalino. O faturamento delas é o principal indicativo disto. Normalmente, em documentos contáveis, representa-se um valor negativo com a cor vermelha; e um valor positivo com a cor preta. Esta é a razão pela qual a sexta-feira depois da Ação de Graças é chamada de Black Friday, indicando que as empresas tendem a ter um faturamento muito alto. Neste exercício, você vai implementar uma funcionalidade importante de uma loja de roupas o valor final do produto durante a black friday. Para isto, ela classifica as roupas em: de verão, de inverno, para banho e íntimas. Cada uma tem a sua própria porcentagem de desconto: 5% (verão), 10% (inverno), 4% (banho) e 7% (íntimas).
//a) Escreva uma função que receba um array de produtos com nome, preço e classificação; e retorne um array com essas informações e um campo mais: "preço com desconto"
enum Classification {
  verão = 0.05,
  inverno = 0.1,
  banho = 0.04,
  intimas = 0.07,
}

type Product = {
  name: string;
  price: number;
  discountClassification: Classification;
};

type newProduct = {
  name: string;
  price: number;
  discountClassification: Classification;
  discountPrice: number;
};

let arrayOfProducts: Product[] = [
  { name: "Toalha", price: 100, discountClassification: Classification.banho },
  { name: "Touca", price: 100, discountClassification: Classification.inverno },
  { name: "Bikini", price: 100, discountClassification: Classification.verão },
];

let newArray: newProduct[] = [];
let discountPrice: number = 0;
let newItem: {} = {};

function productWithDiscount(arrayOfProducts: Product[]): newProduct[] {
  for (let item of arrayOfProducts) {
    /* let discountItem: number = item.discountClassification; */
    newArray.push(
      (newItem = {
        ...item,
        discountPrice: item.price * (1 - item.discountClassification),
      })
    );
  }
  return newArray;
}

console.log(productWithDiscount(arrayOfProducts));
console.table(productWithDiscount(arrayOfProducts));