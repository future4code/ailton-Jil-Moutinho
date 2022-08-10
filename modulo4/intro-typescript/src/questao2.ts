//A seguinte função em JavaScript pergunta ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores. Refatore a função para o Typescript.

// import inquirer = require("inquirer");

function imprimeTresCoresFavoritas(cor1:string, cor2:string, cor3:string): void {
  console.log(cor1, cor2, cor3);
}
imprimeTresCoresFavoritas('laranja', 'preto', 'lilás')