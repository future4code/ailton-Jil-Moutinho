"use strict"
console.log("Hello world!");
    
alert("Boas vindas ao jogo de Blackjack!");
if(confirm("Quer iniciar uma nova rodada?")) {
   jogar(comprarCarta);
   } else {
   console.log("O jogo acabou");
};

function jogar(comprarCarta) {
    
let usuario1 = comprarCarta();
let usuario2 = comprarCarta();
let computador1 = comprarCarta();
let computador2 = comprarCarta();

if (usuario1.valor === usuario2.valor === 11 || computador1.valor === computador2.valor === 11) {
   usuario1 = comprarCarta();
   usuario2 = comprarCarta();
   computador1 = comprarCarta();
   computador2 = comprarCarta();
}

let pontuacaoUsuario = usuario1.valor + usuario2.valor
while (pontuacaoUsuario < 21){
   if(confirm(
      `Suas cartas são ${usuario1.texto} ${usuario2.texto}. A carta revelada do computador é ${computador1.texto}.
      Deseja comprar mais uma carta?`
      )){
         let usuarioNovas = comprarCarta();
         pontuacaoUsuario = pontuacaoUsuario + usuarioNovas.valor
      } else {
      let pontuacaoPc = computador1.valor + computador2.valor
      while (pontuacaoPc < pontuacaoUsuario){
      let computadorNovas = comprarCarta();
      pontuacaoPc = pontuacaoPc + computadorNovas.valor
      };
   
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
}   
}


/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 */ 
 