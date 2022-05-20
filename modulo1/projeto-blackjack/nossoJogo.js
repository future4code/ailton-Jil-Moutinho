"use strict"
console.log("Hello world!");

alert("Boas vindas ao jogo de Blackjack!");
if(confirm("Quer iniciar uma nova rodada?")) {
	jogar(comprarCarta);
} else {
	console.log("O jogo acabou");
};

function jogar(comprarCarta) {

let usuario1 = comprarCarta()
let usuario2 = comprarCarta()
let computador1 = comprarCarta()
let computador2 = comprarCarta()

let pontuacaoUsuario = usuario1.valor + usuario2.valor
let pontuacaoPc = computador1.valor + computador2.valor

console.log(`Usuário - cartas: ${usuario1.texto} ${usuario2.texto} - ${pontuacaoUsuario}`)
console.log(`Computador - cartas: ${computador1.texto} ${computador2.texto} - ${pontuacaoPc}`)

if (pontuacaoUsuario > pontuacaoPc) {
    console.log("O usuário ganhou!")
} else if (pontuacaoPc > pontuacaoUsuario) {
    console.log("O computador ganhou!")
} else if (pontuacaoUsuario === pontuacaoPc) {
    console.log("Empate!")
}
}

