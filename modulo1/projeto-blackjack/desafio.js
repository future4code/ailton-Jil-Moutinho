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

let pontuacaoUsuario = usuario1.valor + usuario2.valor
let pontuacaoPc = computador1.valor + computador2.valor

while (pontuacaoUsuario > 21 || pontuacaoPc > 21) {
   usuario1 = comprarCarta();
   usuario2 = comprarCarta();
   computador1 = comprarCarta();
   computador2 = comprarCarta();
}

let arrayUsuarios = [usuario1, usuario2];
let arrayComputador = [computador1, computador2];
let computador3 = '';
//computador1.texto + computador2.texto;
console.log(computador3);
if(!confirm(
   `Suas cartas são ${usuario1.texto} ${usuario2.texto}. A carta revelada do computador é ${computador1.texto}.
   Deseja comprar mais uma carta?`
   )){while (pontuacaoPc < pontuacaoUsuario && pontuacaoPc < 22){
      let computadorNovas = comprarCarta();
      arrayComputador.push(computadorNovas);
      pontuacaoPc = pontuacaoPc + computadorNovas.valor
      };
   }
   console.log(pontuacaoPc);
   for (let cartas of arrayComputador){
      computador3 += cartas.texto;
   }
      console.log(`Usuário - cartas: ${usuario1.texto} ${usuario2.texto} - ${pontuacaoUsuario}`)
      console.log(`Computador - cartas: ${computador3} - ${pontuacaoPc}`);
   let resultadoDoJogo = '';
   if (pontuacaoUsuario === pontuacaoPc) {
         resultadoDoJogo = "Empate!"
      } else if (pontuacaoPc > pontuacaoUsuario && pontuacaoPc <= 21) {
         resultadoDoJogo = "O computador ganhou!"
      } else if (pontuacaoPc > 21) {
         resultadoDoJogo = "O usuário ganhou!"
         };

      alert('Usuário - cartas: ' + usuario1.texto + usuario2.texto + ' - ' + pontuacaoUsuario +
      "\n"+
      "Computador - cartas: " + computador3 + ' - ' + pontuacaoPc + 
      "\n"+
      resultadoDoJogo
      )
}

   
    /* else {
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
 */




