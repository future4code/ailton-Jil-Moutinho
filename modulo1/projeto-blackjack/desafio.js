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
      let textos = arrayUsuarios.map(texto)
      pontuacaoUsuario = pontuacaoUsuario + usuarioNovas.valor;
      confirm(`Suas cartas são ${textos}. A carta revelada do computador é ${computador1.texto}.
      Deseja comprar mais uma carta?`);
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















//Aqui
/* let comprando = true

   while(comprando){
      let textos = ""
      let pontos = 0
      for (let carta of jogador){
         textos += carta.texto + " "
         pontos += carta.valor
      }

      if (pontos > 21){
         comprando = false
      } else {
         let confirmCompra = confirm(
            `Suas cartas são ${textos}. A carta revelada do computador é ${computador[0].texto}.` +
            "\n"+ 
            "Deseja comprar mais uma carta?"
         )
      
         if (confirmCompra){
            jogador.push(comprarCarta())
         } else {
            comprando = false
         }
      }
   }
   
   // Cálculo dos pontos do usuário e do computador
   let pontosComputador = 0
   let pontosJogador = 0
   let textosComputador = ""
   let textosJogador = ""

   for (let carta of computador){
      pontosComputador += carta.valor
      textosComputador += carta.texto + " "
   }
   for (let carta of jogador){
      pontosJogador += carta.valor
      textosJogador += carta.texto + " "
   }

   // Compra de cartas do computador
   if (pontosJogador <= 21){
      while (pontosComputador < pontosJogador && pontosComputador <= 21){
         computador.push(comprarCarta())
         pontosComputador = 0
         textosComputador = ""
         for (let carta of computador){
            pontosComputador += carta.valor
            textosComputador += carta.texto + " "
         }
      }
   }
  
   let resultado = ""
   // Verificação de quem ganhou
   if (pontosJogador > pontosComputador && pontosJogador <= 21){
      resultado = "O usuário ganhou!"
   } else if (pontosComputador > pontosJogador && pontosComputador <= 21){
      resultado = "O computador ganhou!"
   } else if (pontosComputador > 21 && pontosJogador <= 21){
      resultado = "O usuário ganhou!"
   } else if (pontosJogador > 21 && pontosComputador <= 21){
      resultado = "O computador ganhou!"
   } else {
      resultado = "Empate!"
   }

   // Imprimir cartas dos dois lados
   alert(
      `Usuario - Cartas: ${textosJogador} - Pontuação: ${pontosJogador}` + 
      "\n" + 
      `Computador - Cartas: ${textosComputador} - Pontuação: ${pontosComputador}` + 
      "\n" + 
      resultado
   )
} else {
   alert("O jogo acabou.")
};*/
