//EXERCÍCIOS DE INTERPRETAÇÃO
/* 1.Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
let a = 10
let b = 10

console.log(b) */
//R: 10

/* b = 5
console.log(a, b) */
//R: 10 5

//2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
/* let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) */
//R: 10 10 10

/*3. Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`) */
//R: p trocaria por horasDiarias
//R: t trocaria por salarioDiario

//EXERCÍCIOS DE ESCRITA
//1. 1. Construa um programa, seguindo os seguintes passos:
/*    
    a) Declare uma variável para armazenar um nome, sem atribuir um valor.
    
    b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
    
    c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
    
    d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
    
    e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar
*/

let nome;
let idade = null;

console.log(typeof nome, typeof idade);
//Foi impresso undefined e objeto; porque criei as caixinhas das variáveis, e uma não defini nada mesmo, e outra criei o objeto variável, mas não abribuí um valor específico ainda.

nome = prompt ("Qual seu nome?");
idade = +prompt ("Qual sua idade?");
console.log(nome, idade);

// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
console.log(typeof nome, typeof idade);
//Foi impresso string e number; string, ok, porque abriu uma palavra e o que sai do prompt é string; porém a idade saiu como number... Buguei.

//g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu 
console.log("Olá", nome,"! Você tem", idade, "anos.");

/* 2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
    
    a) Crie três novas variáveis, contendo as respostas
    
    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo: */

let estaVestido = prompt ("Você esta vestido (s/n)?");
let ehRoupaDeFrio = prompt ("Sua roupa é de frio (s/n)?");
let corDaRoupaEhAzul = prompt ("Se esta vestido, sua roupa é azul (s/n)?");

console.log("Você esta vestido (s/n)? -", estaVestido);
console.log("Sua roupa é de frio (s/n)? -",ehRoupaDeFrio);
console.log("Se esta vestido, sua roupa é azul (s/n)? -", corDaRoupaEhAzul);

/* 3.Suponha que temos duas variáveis a e b, cada uma com um valor inicial
Aqui faremos uma lógica para trocar os valores
Depois de trocados, teremos o seguinte resultado: */
let a = 10;
let b = 25;
let cAntigoA = a;
a = b;
b = cAntigoA;

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);

/* DESAFIO
Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:
1. O primeiro número somado ao segundo número resulta em: x.
2. O primeiro número multiplicado pelo segundo número resulta em: y. */
let primeiroNum = prompt ("Escreva um número.");
let segundoNum = prompt ("Escreva outro número.");
let x = Number(primeiroNum) + Number(segundoNum);
let y = Number(primeiroNum) * Number(segundoNum);
console.log(x, y);