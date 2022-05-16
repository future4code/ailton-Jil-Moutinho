"use scrict"
console.log("Hello world!");

//Exercícios de interpretação de código
//1. Leia o código: 
/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2]) */

//a) O que vai ser impresso no console?
/* r:   "Matheus Nachtergaele"
        "Virginia Cavendish"
        canal: "Globo", horario: "14h" */

//2.Leia o código:
/* const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga) */

//a) O que vai ser impresso no console?
/* r: 	nome: "Juca", 
idade: 3, 
raca: "SRD",
nome: "Juba", 
idade: 3, 
raca: "SRD",
nome: "Jubo", 
idade: 3, 
raca: "SRD" */

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//r: Copia / Tras todas as propriedades do obejto referenciado.

/* 3.Leia o código:
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura")) */

//a) O que vai ser impresso no console?
//r: false, undefined

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//r: Primeiro ele procurou o valor dentro da chave backender de pessoa e encontrou false. No segundo caso, ele procurou o valor da chave altura de pessoa e não encontrou a propriedade existente.

//Exercícios de escrita de código
/* 1. Resolva os passos a seguir: 
a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo */

const pessoaEx1 = {
    nome: "Laura", 
    apelidos: ["Lala", "Laurinha", "D. Laura"]
 }

function apresentacao(objPessoa) {
    console.log(`Eu sou ${objPessoa.nome}, mas pode me chamar de: ${objPessoa.apelidos[0]}, ${objPessoa.apelidos[1]} ou ${objPessoa.apelidos[2]}.`);
}

apresentacao(pessoaEx1)

//b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

const pessoaEx1b = {...pessoaEx1,
    apelidos: ["Harue", "Lorra", "Raura sam"]
}
apresentacao(pessoaEx1b)

/* 2. Resolva os passos a seguir: 
a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. */

const pessoaEx2a = {
    nome: "Laura", 
    idade: 38,
    profissao: "adm."
}
const pessoaEx2b = {
    nome: "Julio", 
    idade: 36,
    profissao: "eng. civil"
}

//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
function exercicio2(obj) {
    const a = obj.nome;
    const b = obj.nome.length;
    const c = obj.idade;
    const d = obj.profissao;
    const e = obj.profissao.length;
return arrayEx2 = [a,b,c,d,e]
}

console.log(exercicio2(pessoaEx2a));
console.log(exercicio2(pessoaEx2b));

/* 3. Resolva os passos a seguir: 
a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho` */
const carrinho = [];

//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

const melancia = {
    nome: 'Melancia',
    disponibilidade: true
}
const coco = {
    nome: 'Coco',
    disponibilidade: true
}
const uva = {
    nome: 'Uva',
    disponibilidade: true
}

//c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados.
function exercicio3(obj, arrayEx3) {
    arrayEx3.push(obj);
}
exercicio3(melancia, carrinho);
exercicio3(coco, carrinho);
exercicio3(uva, carrinho);

//d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 
console.log(carrinho);

//Desafios
//1.Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.
/* Tambem funciona: 
function desafio1() {
    const nome = prompt("Qual seu nome?");
    const idade = prompt("Qual sua idade?");
    const profissao = prompt("O que vc faz?");
    const objDesafio = {
        nome,
        idade,
        profissao
    }
    console.log(objDesafio);
    console.log(typeof(objDesafio));
} */
function desafio1() {
    const objDesafio = {
        nome: prompt("Qual seu nome?"),
        idade: prompt("Qual sua idade?"),
        profissao: prompt("Qual sua idade?")
    }
    console.log(objDesafio);
    console.log(typeof(objDesafio));
}
desafio1()

//2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:
const Seven = {
    lancamento: 1995,
    nome: 'Seven'
}
const FightClub = {
    lancamento: 1999,
    nome: 'FightClub'
}
function comparadaLancamentos(filme1, filme2) {
    const antes = filme1.lancamento < filme2.lancamento;
    const mesmo = filme1.lancamento === filme2.lancamento
    console.log(`O primeiro filme foi lançado antes do segundo? ${antes}.
    O primeiro filme foi lançado no mesmo ano do segundo? ${mesmo}.`);
}
comparadaLancamentos(Seven, FightClub);

//3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido. 
function estoque(fruta) {
    return estoqueFruta = {...fruta,
        disponibilidade: !fruta.disponibilidade
    }
}
console.log(estoque(melancia));
