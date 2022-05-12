"use strict"
console.log("Hello world!");

//Exercícios de interpretação de código
//1.Leia o código abaixo
/* function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10)) */

//a) O que vai ser impresso no console?
//r: Será impresso 10 20

//b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//r: Nada, pois não foi solicitado o resultado

//2.Leia o código abaixo
/* let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) */

//a. Explique o que essa função faz e qual é sua utilidade
//r: Pede um texto pro usuário, coloca em letras minúsculas e verifica se tem a palavra cenoura. Traz como resultado só se tem cenoura.

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
/* i.   Eu gosto de cenoura
ii.  CENOURA é bom pra vista
iii. Cenouras crescem na terra */
//r: true, true e true - achei o ultimo seria false, mas como é string, vem como true.

//Exercícios de escrita de código
/* 1. Escreva as funções explicadas abaixo:
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: */
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

function mensagem1a (){
    console.log("Eu sou Jil, tenho 36 anos, moro em São Bernardo do Campo e sou formada.");
};
mensagem1a ();

//b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
function mensagem1b (nome, idade, end, prof){
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${end} e sou ${prof}`;
}

console.log(mensagem1b("Jil","36","São Bernardo", "Eng. civil"));

/* 2. Escreva as funções explicadas abaixo:
a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado. */
function soma (num1, num2){
    return num1 + num2
};
console.log(soma(2,3));

//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
function ehMaiorOuIgual (num1, num2){
    return num1 >= num2
};
console.log(ehMaiorOuIgual(2,3));
console.log(ehMaiorOuIgual(3,3));
console.log(ehMaiorOuIgual(4,3));

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
function ehPar (num1){
    return `O número ${num1} é par? ${num1 % 2 === 0}`
};
console.log(ehPar(0));
console.log(ehPar(1));
console.log(ehPar(2));

//d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
function tamanhoMaiusculas (texto){
    return `O número tamanha da mensagem é ${texto.length} e a ela em maiúscula fica assim: ${texto.toUpperCase()}`
};
console.log(tamanhoMaiusculas("Teste de 2d"));

//3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
/* Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10 */
let num1 = Number(prompt("Digite um número"));
let num2 = Number(prompt("Digite outro número"));
function operacoesMatematicas (num1, num2){
    let soma = num1 + num2;
    let diferenca = num1 - num2;
    let mult = num1 * num2;
    let divisao = num1 / num2;
    return `Soma: ${soma}
Diferença: ${diferenca}
Multiplicação: ${mult}
Divisão: ${divisao}`
};

console.log(operacoesMatematicas(num1,num2));

//Desafios
/* 1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro */
const imprima = parametro => {
    return parametro
    };

console.log(imprima("desafio1"));

//b) Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno. Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo
let somaDesafio1 = (num1, num2) => num1 + num2;
console.log(imprima(somaDesafio1(3,5)));

//2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. 
function pitagoras(cat1,cat2) {
    return Math.sqrt(cat1**2 + cat2**2);
};
console.log(pitagoras(30,40));