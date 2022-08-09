//QUESTÃO 3
const tasks = ['Wake up',
'Brush teeth',
'Drink water'];
let newtask = process.argv[2];
let tasksList = [...tasks, newtask]

if (process.argv[3]) {
    console.log('Escreva a tarefa com - no lugar de espaço')
} else {
    console.log('Tarefa adicionada com sucesso:', tasksList);    
}
