"use scrict"
console.log('Hello world!');

//Exercícios de interpretação de código
//1. Leia o código abaixo:
/* const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
} */

//a) Explique o que o código faz. Qual o teste que ele realiza? 
//r: O código verifica se o número é divisível por 2.

//b) Para que tipos de números ele imprime no console "Passou no teste"? 
//r: Para números pares

//c) Para que tipos de números a mensagem é "Não passou no teste"?
//r: Números impares

//2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
/* let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) */

//a) Para que serve o código acima?
//r: Para informar o valor a fruta que se quer perguntar.

//b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//r: O preço da fruta Maçã é R$ 2.25

//c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
//r: O preço da fruta Pêra é R$ 5. Porque ele iria "testar a questão do default e viria como 5"

//3. Leia o código abaixo:
/* const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}
console.log(mensagem) */

//a) O que a primeira linha está fazendo?
/* r: Esta perguntano um número pro usuário e armazenando ele em tipo de number na variável de nome numero.
Ou se for a linha do if, esta testando se a variável numero é maior que zero*/

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//r: Em ambos os casos dá erro porque porque o console.log não pede nada da função, logo não acessa a mensagem dentro dela.

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//r: Sim, em ambos os casos dará erro porque porque o console.log não pede nada da função, logo não acessa a mensagem dentro dela (escopo local). Se mensagem estivesse declarada fora do if, da função seria de escopo global e essim poderia ser impressa.

//Exercícios de escrita de código
/* 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável. */
/* const idade = Number(prompt('Qual sua idade'));
function podeDirigir(param) {
    if (param >= 18) {
        console.log('Você pode dirigir');
    } else {
        console.log('Você não pode dirigir');
    }
}
podeDirigir(idade); */

//b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.
//r: Já esta.

//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."
//r: Já esta.

//2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco
/* const turno = prompt('Qual turno você estuda? Favor digitar M (matutino) ou V (Vespertino) ou N (Noturno)');

if (turno === 'M') {
    console.log('Bom dia!');
    } else if (turno === 'V') {
    console.log('Boa tarde!')
        } else {
        console.log('Boa noite!')
        } */

//3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
/* const turnoEx3 = prompt('Qual turno você estuda? Favor digitar M (matutino) ou V (Vespertino) ou N (Noturno)');
switch (turnoEx3) {
    case 'M':
        console.log('Bom dia!');
        break;
    case 'V':
        console.log('Boa tarde!');
        break;
    case 'N':
        console.log('Boa noite!');
        break;
    default:
        console.log('Turno não encontrado. Você digiitou com letra maiuscula?');
        break;
} */

//4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
/* const genero = prompt('O genero do filme é fantasia? Responda com S ou N -letra maiúscula-.');
const preco = Number(prompt('Qual o valor do ingresso?'));

function vamosAoCinema(genero,preco) {
    if (genero === 'S' && preco < 15) {
        console.log("Bom filme!");
    } else {
        console.log("Escolha outro filme!");
    }
}
vamosAoCinema(genero,preco); */

//Desafios
//1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.


/* function vamosAoCinemaDesafio(genero,preco) {
    if (genero !== 'S' || preco >= 15) {
        console.log("Escolha outro filme!");
    } else {
        const snack = prompt('Qual snack que você quer comprar?');
        console.log(`Bom filme!
        Aproveite o seu ${snack}`);
    }
}
vamosAoCinemaDesafio(genero,preco); */

/* 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
    - Nome completo;
    - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    - Categoria: pode ser as opções 1, 2, 3 ou 4;
    - Quantidade de ingressos */

const nome = prompt('Qual seu nome completo?');
const tipo = prompt('Qual tipo? Digite IN para internacional; e DO para doméstico.');
const etapa = prompt('Qual etapa? Note que: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final ');
const categoria = prompt('Qual categoria? Há apenas 1, 2, 3 ou 4.');
const qtdd = Number(prompt('Quantidade de ingressos? Digite numeral'));
const dol = 4.1;
let preco2 = 0;

function Vendas(tipo, etapa, categoria, qtdd) {
    if (etapa === 'SF') {
        if (categoria === '1'){
        preco2 = 1320;
        console.log(preco2);
        } else if (categoria === '2') {
        preco2 = 880;
        } else if (categoria === '3') {
        preco2 = 550;
        } else if (categoria === '4') {
        preco2 = 220;
       }
    } else if (etapa === 'DT') {
        if (categoria === '1') {
            preco2 = 660;
        } else if (categoria === '2') {
            preco2 = 440;
        } else if (categoria === '3') {
            preco2 = 330;
        } else if (categoria === '4') {
            preco2 = 170;
        }
    } else if (etapa === 'FI') {
        if (categoria === '1') {
            preco2 = 1980;
        } else if (categoria === '2') {
            preco2 = 1320;
        } else if (categoria === '3') {
            preco2 = 880;
        } else if (categoria === '4') {
            preco2 = 330
        }
    }
console.log(preco2);
    let total1 = qtdd * preco2;
    let etapaImpresso = 'Etapa X';
    if (etapa === 'FI'){
        etapaImpresso = 'Final';
    } else if (etapa === 'DT') {
        etapaImpresso = 'Decisão do 3º lugar'
    } else if (etapa === 'SF') {
        etapaImpresso = 'Semifinais'
    }
    if (tipo === 'IN'){
        total1 = total1 / dol;
        preco2 = preco2 / dol;
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nome} 
        Tipo do jogo:  Internacional 
        Etapa do jogo:  ${etapaImpresso} 
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qtdd} ingressos 
        ---Valores--- 
        Valor do ingresso:  U$ ${preco2}
        Valor total:  U$ ${total1}
        `);
    } else if (tipo === 'DO'){
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nome} 
        Tipo do jogo:  Nacional 
        Etapa do jogo:  ${etapaImpresso} 
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qtdd} ingressos 
        ---Valores--- 
        Valor do ingresso:  U$ ${preco2}
        Valor total:  U$ ${total1}
        `);
    }
}
Vendas(tipo, etapa, categoria, qtdd);