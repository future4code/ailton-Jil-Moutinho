"use strict"
console.log('Hello world!');

//Exercícios de interpretação de código
/*1. Leia o código abaixo
a) O que vai ser impresso no console? */
/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  }) */
//r: Irá imprimir todos os itens do array usuários, todos os indices de posição de cada item e 3x o array

/*2. Leia o código abaixo
a) O que vai ser impresso no console? */
/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB) */
//r: Será impresso o novo array (novoArrayB) porém cada item será apenas o nome dos itens do array usuarios.

/*3. Leia o código abaixo
a) O que vai ser impresso no console? */
/* const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
console.log(novoArrayC) */
//r: Será impresso o novo array (novoArrayC) porém cada item será apenas aqueles que o apelido não é Chijo.

//Exercícios de escrita de código
//Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
//a) Crie um novo array que contenha apenas o nome dos doguinhos
const nomePets = pets.map((item, index, array) => {
    return item.nome
 });
 console.log(nomePets);

 //b) Crie um novo array apenas com os cachorros salsicha
 const soSalsicha = pets.filter((item, index, array) => {
     return item.raca === "Salsicha"
  })
  
console.log(soSalsicha);

//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
const soPoodle = pets.filter((item, index, array) => {
    return item.raca === "Poodle"
 }).map((item) => {
     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
 })

console.log(soPoodle);

//2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a) Crie um novo array que contenha apenas o nome de cada item 
const nomeProdutos = produtos.map((item, index, array) => {
    return item.nome
 });
 console.log(nomeProdutos);

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
const desconto = produtos.map((item, index, array) => {
    return item.nome, item.preco * 0.95
 });
 console.log(desconto);

 //c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
 const Bebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
 })
 console.log(Bebidas);

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const soYpê = produtos.filter((item, index, array) => {
    if (item.nome.includes('Ypê')) {
        return item
    }
 })

console.log(soYpê);

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
const frase = produtos.filter((item, index, array) => {
    if (item.nome.includes('Ypê')) {
        return item
    }
 }).map((item) => {
     return `Compre ${item.nome} por ${item.preco}!`
 })

console.log(frase);

//Desafios
/* Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:
a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética */
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

const nomePokemons = pokemons.map((item, index, array) => {
    return item.nome
 }).sort();
 console.log(nomePokemons);

//b) Crie um novo array apenas com os tipos dos pokémons, sem repetição
const tipos = pokemons.map((item, index, array) => {
    return item.tipo;
 })
const tiposUnico = [...new Set(tipos)];

console.log(tiposUnico);
