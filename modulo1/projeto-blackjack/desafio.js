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

while (usuario1.valor === usuario2.valor === 11 || computador1.valor === computador2.valor === 11) {
   usuario1 = comprarCarta();
   usuario2 = comprarCarta();
   computador1 = comprarCarta();
   computador2 = comprarCarta();
}

let pontuacaoUsuario = usuario1.valor + usuario2.valor
let pontuacaoPc = computador1.valor + computador2.valor
let arrayUsuarios = [usuario1, usuario2];
if(confirm(
   `Suas cartas são ${usuario1.texto} ${usuario2.texto}. A carta revelada do computador é ${computador1.texto}.
   Deseja comprar mais uma carta?`
   )){
      let usuarioNovas = comprarCarta();
      arrayUsuarios.push(usuarioNovas);
      console.log(arrayUsuarios);
      pontuacaoUsuario = pontuacaoUsuario + usuarioNovas.valor;
      let textos = arrayUsuarios.map(item) => {
         return {...item.texto
      }}
      if(confirm(`Suas cartas são ${textos}. A carta revelada do computador é ${computador1.texto}.
      Deseja comprar mais uma carta?`){
         FUNCAO
      }

      } else {
      while (pontuacaoPc < pontuacaoUsuario){
      let computadorNovas = comprarCarta();
      pontuacaoPc = pontuacaoPc + computadorNovas.valor
      };
      console.log(`Usuário - cartas: ${usuario1.texto} ${usuario2.texto} - ${pontuacaoUsuario}`)
      console.log(`Computador - cartas: ${computador1.texto} ${computador2.texto} - ${pontuacaoPc}`)
   
      if (pontuacaoUsuario > pontuacaoPc) {
         alert("O usuário ganhou!")
         } else if (pontuacaoPc > pontuacaoUsuario) {
            alert("O computador ganhou!")
         } else if (pontuacaoUsuario === pontuacaoPc) {
            alert("Empate!")
         }
   }
}


