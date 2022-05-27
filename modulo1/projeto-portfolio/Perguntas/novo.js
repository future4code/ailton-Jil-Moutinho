"use strict"
console.log('Hello world!');

alert("Ola! Bora só verificar se o computador esta entendendo as suas respostas!?");

//Exercícios de escrita de código
/* 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!" */
let qtddPets = Number(prompt('Quantos bichos de estimação vc tem?'));
if (qtddPets === 0){
    alert("Que pena! Você pode adotar um pet! Se quiser, me envie um e-mail!");
}
//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
let pet = ""
if (qtddPets != 0){
    prompt('Se vc tiver, Qual o nome deles? - escreva apenas um por vez, ok?')
}
let arrayPets = [pet];
if (qtddPets != 0){
    let i = 1;
    while (i < qtddPets){
    pet = prompt('Qual o nome deles? - escreva apenas um por vez, ok?')
    arrayPets.push(pet);
    i += 1;
    }
    console.log(arrayPets);
}
//c. Por fim, imprima o array com os nomes dos bichinhos no console
console.log(arrayPets);
if (qtddPets != 0){
    confirm("Que legal! Então os nomes dos seus pets sâo: " + arrayPets);
}

alert("Agora, bora ver se o computador sabe fazer contas!?");
let qtddnumeroPortifolios = Number(prompt('Escreva um número de 1 a 10 para ser sua quantidade de números a testar. Obs: Vc terá que definir esses numeros.'));
let numeroPortifolio = prompt(`Escreva o primeiro númbero dentre os seus ${qtddnumeroPortifolios} números. Obs: Pode ser de 0 a 100`);
let arraynumeroPortifolios = [numeroPortifolio];
if (qtddnumeroPortifolios != 0){
    let i = 1;
    while (i < qtddnumeroPortifolios){
    numeroPortifolio = prompt('Mais um número, lembrando que pode ser de 0 a 100')
    arraynumeroPortifolios.push(numeroPortifolio);
    i += 1;
    }
    console.log(arraynumeroPortifolios);
}

alert(`Seus números escolhidos foram: ${arraynumeroPortifolios}`)

//c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
let novoArray = [];
for (const item of arraynumeroPortifolios) {
    if (item % 2 == 0) {
        novoArray.push(item);
    };
}
console.log(novoArray);
alert(`O computador consegue verificar quais dos seus números são pares. Pense um pouquinho se vc sabe quais são os pares...`)
alert(`O computador calculou e diante dos números que você passou, temos os seguintes números pares: ${novoArray}`)


//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
let valorMaximo = arraynumeroPortifolios[0];
let valorMinimo = arraynumeroPortifolios[0];
for (const item of arraynumeroPortifolios) {
    if (valorMaximo < item){
        valorMaximo = item;
    }
    if (valorMinimo > item){
        valorMinimo = item;
    } 
}

console.log(`Maior número é ${valorMaximo} e o menor número é ${valorMinimo}`);

alert(`O computador tbm consegue verificar qual o maior e o menor número dentre os que vc falou. Vocẽ se lembra?`)
alert(`O computador calculou aqui e o maior número é ${valorMaximo} e o menor número é ${valorMinimo}.`)

alert('Agora o jogo de adivinhar!!! Vamos jogar?')

let numComputador = Math.random().toFixed(2) * 100
console.log(numComputador);

let numusuario = Number(prompt('Chute um número contra o computador, sendo de 1 a 100.'));
let contador2 = 1;
while (numusuario != numComputador){
    console.log(`O número chutado foi: ${numusuario}`);
    contador2 = contador2 + 1;
    if (numusuario > numComputador) {
        console.log(`Errou. O número escolhido pelo computador é menor`); 
        alert(`O número chutado foi: ${numusuario}. Errrrrrrou! (ler com entonação do Faustão). O número escolhido pelo computador é menor`);
    } else {
        console.log(`Errou. O número escolhido  pelo computador é maior`);
        alert(`O número chutado foi: ${numusuario}. Errrrrrrou! (ler com entonação do Faustão). O número escolhido  pelo computador é maior`)
    }
    numusuario = prompt('Chute outro número');
}
if (numusuario == numComputador){
    console.log(`Acertou!
    O número de tentativas foi : ${contador2}`);
    alert(`Acertou!
    O número de tentativas foi : ${contador2}`);
};

