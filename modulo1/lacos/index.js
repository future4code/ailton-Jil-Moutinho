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
Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida: 
a) Solicitar que o primeiro jogador escolha um número, através do prompt. Neste momento, deve-se imprimir no console a mensagem Vamos jogar!*/
let num1 = prompt('Escolha um número');
console.log('Vamos jogar!');
let num2 = prompt('Chute um número');
let contador = 1;
while (num2 !== num1){
    console.log(`O número chutado foi: ${num2}`);
    contador = contador + 1;
    if (num2 > num1) {
        console.log(`Errou. O número a ser adivinhado é menor`); 
    } else {
        console.log(`Errou. O número a ser adivinhado é maior`);
    }
    num2 = prompt('Chute um número');
}
if (num2 === num1){
    console.log(`Acertou!
    O número de tentativas foi : ${contador}`);
};

/* 2. Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar. Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.
Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração? O que você poderia ter feito para que fosse mais fácil? **Deixe comentários no seu código sobre esta reflexão.** */
let numComputador = Math.random().toFixed(2) * 100
console.log(numComputador);
console.log('Vamos jogar contra o computador!');
let numusuario = Number(prompt('Chute um número contra o computador'));
let contador2 = 1;
while (numusuario != numComputador){
    console.log(`O número chutado foi: ${numusuario}`);
    contador2 = contador2 + 1;
    if (numusuario > numComputador) {
        console.log(`Errou. O número escolhido pelo computador é menor`); 
    } else {
        console.log(`Errou. O número escolhido  pelo computador é maior`);
    }
    numusuario = prompt('Chute outro número');
}
if (numusuario == numComputador){
    console.log(`Acertou!
    O número de tentativas foi : ${contador2}`);
}; 
//r: achei dificil a questão de deixar ambos os números como mesmo tipo de variavel, na verdade tive q tirar um dos = pra que o código considerasse iguais mesmo.
