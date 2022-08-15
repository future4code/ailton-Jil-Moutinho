/* Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:

a) A soma desses números

b) A subtração desses números

c) A multiplicação desses números

d) Qual deles é o maior

Você pode fazer todas as operações na mesma função.

Como estamos usando o TypeScript, devemos passar para o código o tipo de parâmetro que é esperado pela função, afinal, no javascript, nada nos impede de passar parâmetros sem especificação. */

function operations(num1: number, num2: number): void {
  let biggerNumber: string = "";
  if (num1 > num2) {
    biggerNumber = `O maior número é o ${num1}`;
  } else if (num2 > num1) {
    biggerNumber = `O maior número é o ${num2}`;
  } else {
    biggerNumber = `Os números ${num1} e ${num2} são iguais.`;
  }
  console.log(num1 + num2);
  console.log(num1 - num2);
  console.log(num1 * num2);
  console.log(biggerNumber);
}

operations(1, 2);
operations(2, 2);
operations(2, 3);