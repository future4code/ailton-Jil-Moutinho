"use strict"
console.log('Hello world!');

//Exercícios de interpretação de código
//1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
//r: 10

//2 Leia o código abaixo:
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
//a) O que vai ser impresso no console?
//r: 19 21 23 25 27 30

//b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
//r: indexOf

//3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
/* r: 
*
**
*** 
****
*/

//Exercícios de escrita de código
/* 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!" */
let qtddPets = Number(prompt('Qts bichos de estimação vc tem?'));
if (qtddPets === 0){
    console.log("Que pena! Você pode adotar um pet!");
}
//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
let pet = prompt('Qual o nome deles?')
let arrayPets = [pet];
if (qtddPets != 0){
    let i = 1;
    while (i < qtddPets){
    pet = prompt('Qual o nome deles?')
    arrayPets.push(pet);
    i += 1;
    }
    console.log(arrayPets);
}
//c. Por fim, imprima o array com os nomes dos bichinhos no console
console.log(arrayPets);

/* 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
a) Escreva um programa que **imprime** cada um dos valores do array original. */
//let arrayOriginal = [1,2,3,4,5];
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (const item of arrayOriginal) {
    console.log(item);
}

//b) Escreva um programa que imprime cada um dos valores do array original divididos por 10
for (const item of arrayOriginal) {
    console.log(item/10);
}

//c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
let novoArray = [];
for (const item of arrayOriginal) {
    if (item % 2 == 0) {
        novoArray.push(item);
    };
}
console.log(novoArray);

//d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.
let stringArray = [];
for (const item of arrayOriginal) {
    stringArray.push(`O elemento do index ${arrayOriginal.indexOf(item)} é: ${item}`);
};
console.log(stringArray);

//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
let valorMaximo = arrayOriginal[0];
let valorMinimo = arrayOriginal[0];
for (const item of arrayOriginal) {
    if (valorMaximo < item){
        valorMaximo = item;
    }
    if (valorMinimo > item){
        valorMinimo = item;
    } 
}

console.log(`Maior número é ${valorMaximo} e o menor número é ${valorMinimo}`);

//Desafios
/* 1. Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. 
Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida: */
