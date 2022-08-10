//A seguinte função em JavaScript pergunta ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores. Refatore a função para o Typescript.

/* import {  } from "";

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdin
});
readline.question('Qual sua cor favorita?', cor=>{
console.log(`cor é ${cor}`);

  readline.close()
}) */

/* import inquirer = require("inquirer");

import { inquirer } from 'dependencyies'

let question = [
  {
    type: "input",
    cor1: "cor1",
    message: "Insira sua primeira cor favorita.",
  },
];

inquirer.prompt(question).then((answer:[]) => {
  console.log(`nome é ${answer["cor1"]}`);
}); */

function imprimeTresCoresFavoritas(): void {
  const cor4: string = prompt("Insira sua primeira cor favorita");
  const cor5: string = prompt("Insira sua segunda cor favorita");
  const cor6: string = prompt("Insira sua terceira cor favorita");
  console.log([cor4, cor5, cor6]);
}
