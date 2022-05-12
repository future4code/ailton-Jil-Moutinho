/* //Exercícios de interpretação de código
//1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
let array
console.log('a. ', array)
//r: a. undefined

array = null
console.log('b. ', array)
//r: b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//r:c. (11)

let i = 0
console.log('d. ', array[i])
//r: d. 3

array[i+1] = 19
console.log('e. ', array)
//r: e .[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
//r: f. 9

//SOBRE O CÓDIGO ABAIXO. Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"? */
/* const frase1 = prompt("Digite uma frase")

console.log(frase1.toUpperCase().replaceAll("A", "I"), frase1.length)
 */
//SUBI NUM ÔNIBUS EM MIRROCOS 27

//Exercícios de escrita de código
/* 1 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:  
O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`! */
const nome = prompt("Qual seu nome?");
const email = prompt("Qual seu e-mail?");
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`);

//2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
//a) Imprima no console o array completo
const comidasPreferidas = ["Brócolis", "Japonesa", "Quejo, de qqr jeito", "Sorvete", "Doces árabes"];
console.log(comidasPreferidas);

// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
console.log(`Essas são as minhas comidas preferidas:,
${comidasPreferidas[0]},
${comidasPreferidas[1]},
${comidasPreferidas[2]},
${comidasPreferidas[3]},
${comidasPreferidas[4]}`);

console.log(`Essas são as minhas comidas preferidas:`);
console.log(comidasPreferidas[0]);
console.log(comidasPreferidas[1]);
console.log(comidasPreferidas[2]);
console.log(comidasPreferidas[3]);
console.log(comidasPreferidas[4]);

//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista
const usuarioComida = prompt("Qual sua comida preferida?");

comidasPreferidas.splice(1,1, usuarioComida);
// tbm poderia só renomear: comidasPreferidas[1] = usuarioComida
console.log(comidasPreferidas);

//3. Faça um programa, seguindo os passos:a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
const listaDeTarefas = [];

//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
const primeiraTarefa = prompt("Qual sua primeira tarefa do dia?");
const segundaTarefa = prompt("Qual sua segunda tarefa do dia?");
const terceiraTarefa = prompt("Qual sua terceira tarefa do dia?");

listaDeTarefas.push(primeiraTarefa, segundaTarefa, terceiraTarefa);

//c) Imprima o array no console
console.log(listaDeTarefas);

//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
const tarefaFeita = prompt("Qual tarefa já realizou? Sendo a primera = 0, segunda = 1 e terceira = 2.");
const tarefaFeitaEmNumero = Number(tarefaFeita);

//e) Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(tarefaFeitaEmNumero,1);

//f) Imprima o array no console
console.log(listaDeTarefas);

//Desafios
//1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
const frase = prompt("Digite uma frase.");
const arrayDesafio1 = [];

arrayDesafio1.push(frase.replaceAll(" ",","));
// Poderia ser arrayDesafio1 = frase.split(" ")

console.log(arrayDesafio1);

//2. Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
const indiceAbacaxi = frutas.indexOf("Abacaxi");
console.log(indiceAbacaxi, frutas.length);
