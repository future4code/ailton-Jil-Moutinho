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
