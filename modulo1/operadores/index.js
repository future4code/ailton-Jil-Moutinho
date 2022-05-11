"use strict"
console.log("Hello world!");

//Exercícios de interpretação de código
//1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
/* const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
//R: a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
//R: b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
//R: c. true

console.log("d. ", typeof resultado)
//R: d. boolean */

//2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 
/* let primeiroNumero = prompt("Digite um numero!");
let segundoNumero = prompt("Digite outro numero!");

const soma = primeiroNumero + segundoNumero

console.log(soma) */

// O prompt sempre tem saídas de formato string, mesmo que o conteúdo seja um número, portanto, o sinal de + será entendido como concatenação e irá imprimir o primeiro número e depois o segundo.

//3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

/* R: const somaEx3 = Number(primeiroNumero) + Number(segundoNumero);

console.log(somaEx3); */


//Exercícios de escrita de código
/* 1. Faça um programa que:
    
    a) Pergunte a idade do usuário
    
    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo) */

let age = prompt("Qual sua idade?");
let bestFriendsAge = prompt("Qual a idade da sua melhor amiga(o)?");
let idadeMaior = Number(age) > Number(bestFriendsAge);

console.log(
"Sua idade é maior do que a da sua melhor amiga?", idadeMaior);

let diferencaIdade = Number(bestFriendsAge) - Number(age);
console.log("A diferença de idade é de", diferencaIdade);

/* 2. Faça um programa que:
    
    a) Peça ao usuário que insira um número **par**
    
    b) Imprima na console **o resto da divisão** desse número por 2.
    
    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código */

let value1 = prompt("Insira um número par.");
console.log((Number(value1)) % 2);

//R: c. O valor deverá ser sempre zero pois números pares não tem resto na divisão por 2.
//R: d. Haverá resto, o resultado será diferente de zero, será 1.

/* 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    
    b) A idade do usuário em dias
    
    c) A idade do usuário em horas */

let age1 = prompt("Qual sua idade -em anos-?");

let ageMonths = Number(age1)*12;
let ageDays = Number(age1)*365;
let ageHours = Number(age1)*(365*24);

console.log("A idade em anos, meses, dias e horas, respectivamente é de", age1, ageMonths,ageDays, ageHours, "!");

/* 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações. */

let value2 = prompt("Insira um número novamente");
let value3 = prompt("Insira só mais um último número");
let firstQuestion = Number(value2) > Number(value3);
let secondQuestion = Number(value2) === Number(value3);
let thirdQuestion = (Number(value2) % Number(value3)) === 0;
let fourthQuestion = (Number(value3) % Number(value2)) === 0;

console.log("O primeiro numero é maior que segundo?", firstQuestion);
console.log("O primeiro numero é igual ao segundo?", secondQuestion);
console.log("O primeiro numero é divisível pelo segundo?", thirdQuestion);
console.log("O segundo numero é divisível pelo primeiro?", fourthQuestion);

//Desafios
/* 1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
    - Graus Fahrenheit(°F) para Kelvin(K)
    (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
    - Graus Celsius(°C) para Graus Fahrenheit (°C)
    (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
    
    a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.*/

let KelvinTempA = (77 - 32) * (5 / 9) + 273.15;
console.log("Desafio a =", KelvinTempA, "Kelvin");

//b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

let FahrenTempB = 80 * (9 / 5) + 32;
console.log("Desafio b =", FahrenTempB, "Fahrenheit");

//c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

let FahrenTempC = 30 * (9 / 5) + 32;
let KelvinTempC = (FahrenTempC - 32) * (5 / 9) + 273.15;
console.log("Desafio c =", FahrenTempC, "Fahrenheit ou", KelvinTempC, "Kelvin");

//d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter 

let CelsiusUsuario = prompt("Insira Celsius para converter em Fahrenheit e Kelvin.")
let FahrenTempCUsuario = Number(CelsiusUsuario) * (9 / 5) + 32;
let KelvinTempCUsuario = (FahrenTempCUsuario - 32) * (5 / 9) + 273.15;
console.log("Desafio d =", FahrenTempCUsuario, "Fahrenheit ou", KelvinTempCUsuario, "Kelvin");

/* 2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
    
    a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
    
    b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto */

let quilowattHora = 0.05;
let residentialUse = 280;
let amountPay = quilowattHora * residentialUse;
console.log(amountPay);

let discount = 15;
let discountedAmount = amountPay * (1 - (discount / 100));
console.log(discountedAmount);

/* 3. Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:
    
a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
    `20lb equivalem a X kg` */

let librasPeso = 20;
let kgPesoDeLibra = librasPeso / 2.20462
console.log("20lb equivalem a", kgPesoDeLibra, "kg");

/* b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
    `10.5oz equivalem a X kg` */
    
let oncaPeso = 10.5;
let kgPesoOnca = oncaPeso / 35.274;
console.log("10.5oz equivalem a", kgPesoOnca, "kg");
    
/*     c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
    `100mi equivalem a X m` */
 
let milhaDistancia = 100;
let metroDistanciaMilha = milhaDistancia * 1609.34;
console.log("100mi equivalem a", metroDistanciaMilha, "m");

/*     d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
    `50ft equivalem a X m` */
    
let pesDistancia = 50;
let metroDistanciapes = pesDistancia * 0.3048;
console.log("50ft equivalem a", metroDistanciapes, "m");

/*     e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
    `103.56gal equivalem a X l` */
    
let galoesVolume = 130.56;
let litrosVolumeGaloes = galoesVolume * 3.78541;
console.log("103.56gal equivalem a", litrosVolumeGaloes, "l");

/*     f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
    `450 xic equivalem a X l` */
    
let xicarasVolume = 450;
let litrosVolumeXicara = xicarasVolume * 0.284131;
console.log("450xic equivalem a", litrosVolumeXicara, "l");

/*     g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter */

let xicarasVolumeUsuario = prompt("Insira quantidade de xicaras");
let litrosVolumeXicaraUsuario = Number(xicarasVolumeUsuario) * 0.284131;
console.log(xicarasVolumeUsuario, "xic equivalem a", litrosVolumeXicaraUsuario, "l");
