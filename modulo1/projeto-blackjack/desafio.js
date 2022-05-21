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
let usuarios3 = '';
//computador1.texto + computador2.texto;
console.log(computador3);
if(!confirm(
   `Suas cartas são ${usuario1.texto} ${usuario2.texto}. A carta revelada do computador é ${computador1.texto}.
   Deseja comprar mais uma carta?`
   )){
      {while (pontuacaoPc < pontuacaoUsuario && pontuacaoPc < 22){
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
      } else {
         {while (pontuacaoUsuario < 21){
            let usuarioNovas = comprarCarta();
            arrayUsuarios.push(usuarioNovas);
            pontuacaoUsuario = pontuacaoUsuario + usuarioNovas.valor
            };
         }
         console.log(pontuacaoUsuario);
         for (let cartas of arrayUsuarios){
            usuarios3 += cartas.texto;
         }
         let resultadoDoJogo2 = '';
         if (pontuacaoUsuario === pontuacaoPc) {
            resultadoDoJogo2 = "Empate!"
         } else if (pontuacaoUsuario > pontuacaoPc && pontuacaoUsuario <= 21) {
            resultadoDoJogo2 = "O usuário ganhou!"
      } else if (pontuacaoUsuario > 21) {
         resultadoDoJogo2 = "O computador ganhou!"
         };

      alert('Usuário - cartas: ' + usuarios3 + ' - ' + pontuacaoUsuario +
      "\n"+
      "Computador - cartas: " + computador3 + ' - ' + pontuacaoPc + 
      "\n"+
      resultadoDoJogo2
      )
   }
}





