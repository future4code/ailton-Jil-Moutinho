/* //QUESTÃO 1a
//process.argv[X] sendo x índice a posição do argumento

//QUESTÃO 1b
console.log("Olá, ", process.argv[2],"! Você tem ", process.argv[3]," anos.");

//QUESTÃO 1c
const futureAge = Number(process.argv[3]) + 7
console.log("Olá, ", process.argv[2],"! Você tem ", process.argv[3]," anos. Em sete anos você terá ", futureAge,".");

//QUESTÃO 2
const operation = process.argv[4];
const number1 = Number(process.argv[5]);
const number2 = Number(process.argv[6]);

let result = '';
if (operation === 'add') {
    result = `A soma é ${number1 + number2}`
} else if (operation === 'sub') {
    result = `A subtração é ${number1 - number2}`
} else if (operation === 'mult') {
    result = `A multiplicação é ${number1 * number2}`
} else if (operation === 'division') {
    result = `A divisão é ${number1 / number2}`
} else if (operation === 'module') {
    result = `O resto da divisão é ${number1 % number2}`
} else {
    result = 'Operação não reconhecida'
}

console.log(result); */

//QUESTÃO 3
const tasks = ['Wake up',
'Brush teeth',
'Drink water'];

let newtask = process.argv[2];

let tasksList = [...tasks, newtask]

let testeString = tasksList.toString();

console.log('Tarefa adicionada com sucesso:', tasksList);

import { writeFile, readFile } from 'fs';

writeFile('lista.txt', testeString, (err) => {
    if (err) throw err;
  console.log('O arquivo foi criado!');
});

readFile('lista.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});

//O data tem q ser string e tem q importar e colocar no json o type module