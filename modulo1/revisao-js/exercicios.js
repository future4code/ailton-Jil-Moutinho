// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01 Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele.
function retornaTamanhoArray(array) {
   return array.length
}
let arrayTeste = [3, 2, 1, 4, 7]
console.log(retornaTamanhoArray(arrayTeste));


// EXERCÍCIO 02 Escreva uma função que recebe um array como parâmetro e retorne este array invertido. 
function retornaArrayInvertido(array) {
    return array.reverse()
}
console.log(retornaArrayInvertido(arrayTeste));

// EXERCÍCIO 03 Escreva uma função que recebe um array de números e retorne o array com os números em ordem crescente. 
function retornaArrayOrdenado(array) {
    return array.sort((a,b) => a-b);
}
console.log(retornaArrayOrdenado(arrayTeste));

//Usado o a-b pq se não considera as itens do array como string e ai 80 vem antes de 9 por exemplo.

// EXERCÍCIO 04 Escreva uma função que receba um array de números e retorne um novo array com apenas os números pares desse array de entrada.
function retornaNumerosPares(array) {
  let novo = [];
  for (item of array){
    if (item % 2 === 0){
        novo.push(item);
    }
    }
    return novo
}
console.log(retornaNumerosPares(arrayTeste));

// EXERCÍCIO 05 Escreva uma função que recebe um array de números e retorna um array com os números pares elevados a 2.
function retornaNumerosParesElevadosADois(array) {
    let novo5 = [];
    for (item of array){
      if (item % 2 === 0){
          novo5.push(Math.pow(item,2));
      }
      }
      return novo5;
}
console.log(retornaNumerosParesElevadosADois(arrayTeste));

// EXERCÍCIO 06 Escreva uma função que receba um array de números e retorne o maior número dele.
function retornaMaiorNumero(array) {
  let maior = array[0];
  for (let i=1; i<array.length;i += 1){
      if (array[i]>maior) {
          maior = array[i]
      }
  }
  return maior;
}
console.log(retornaMaiorNumero(arrayTeste));

// EXERCÍCIO 07
/* Escreva uma função que, dados dois números, retorne um objeto com as seguintes propriedades:
- `maiorNumero` → contém o maior número
- `maiorDivisivelPorMenor` → booleano indicando se o maior é divisível pelo menor
- `diferenca` → contém a diferença entre eles (deve ser um **número positivo** sempre) */
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = num1;
    let maiorDivisivelPorMenor = false;
    let diferenca = Math.abs(num1-num2);
    if (num2>num1){
        maiorNumero = num2;
        maiorDivisivelPorMenor = (maiorNumero % num1 === 0);
    } else {
        maiorDivisivelPorMenor = (maiorNumero % num2 === 0);
    };

    let obj = {maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
    }
    return obj;
}
console.log(retornaObjetoEntreDoisNumeros(4, 2));

// EXERCÍCIO 08 Escreva uma função que, recebendo um número N como parâmetro, retorne os N primeiros números pares 
function retornaNPrimeirosPares(n) {
   let arrayDeParesDeTamanhoN = [];
   for (let i = 0; arrayDeParesDeTamanhoN.length < n; i +=1){
       if (i % 2 === 0){
           arrayDeParesDeTamanhoN.push(i)
       }
   }
   return arrayDeParesDeTamanhoN;
}
console.log(retornaNPrimeirosPares(5));

// EXERCÍCIO 09 Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: ladoA, ladoB, ladoC e retorne se ele é equilátero, isósceles ou escaleno (não é necessário validar se os lados fecham um triângulo).
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let tipoTriangulo = ''
    if (ladoA === ladoB && ladoB === ladoC) {
        tipoTriangulo = 'Equilátero';
    } else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC){
        tipoTriangulo = 'Escaleno';
    } else {
        tipoTriangulo = 'Isósceles'
    }
    return tipoTriangulo;
}
console.log(classificaTriangulo(2,2,2));

// EXERCÍCIO 10 Escreva uma função que receba um array de números e retorne um novo array com apenas 2 valores (NESTA ORDEM): o segundo maior e o segundo menor número do array original. 
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a,b) => a-b);
    let novo10 = [];
    novo10.push(array[array.length-2], array[1]);
    return novo10;
}
console.log(retornaSegundoMaiorESegundoMenor(arrayTeste));

// EXERCÍCIO 11
let teste = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
 }
function retornaChamadaDeFilme(filme) {
    let chamada = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
    return chamada;
}
console.log(retornaChamadaDeFilme(teste));

//join escreve o array com o que escrever entre aspas, neste caso (virgula e espaço)

// EXERCÍCIO 12 Crie uma função que recebe um objeto com as propriedades nome, idade, endereco e email  e retorne um novo objeto com as mesmas propriedades, mas com o valor "ANÔNIMO" para a propriedade nome. 
let pessoaTeste = {
	nome: "Astrodev",
	idade: 25,
	email: "astrodev@labenu.com.br",
	endereco: "Rua do Futuro, 4"
}

function retornaPessoaAnonimizada(pessoa) {
   pessoa.nome = "ANÔNIMO"
   return pessoa;
}
console.log(retornaPessoaAnonimizada(pessoaTeste));

// EXERCÍCIO 13A
/* Imagine que você trabalhe num parque de diversões, como pessoa desenvolvedora. As suas tarefas são sempre com o intuito de ajudar a automação de alguns processos internos do parque. Uma das atrações principais dele é a montanha russa do terror. As filas são muito grandes e todas as pessoas de várias idades insistem entrar no brinquedo, mesmo sabendo que não podem. As regras para entrar na montanha russa do terror são: 

- Ter, no mínimo, 1.5m de altura;
- Ser mais velho do que 14 anos e
- Ser mais novo do que 60 anos.

Dados esses requisitos, escreva: 

A) uma **função** que receba um array e devolva outro contendo as pessoas que **tem permissão para entrar** no brinquedo */
let arrayPessoasTeste = [{"nome":"A","idade":12,"altura":1.8},{"nome":"B","idade":20,"altura":1.3},{"nome":"C","idade":15,"altura":1.9},{"nome":"D","idade":22,"altura":1.8},{"nome":"E","idade":10,"altura":1.2},{"nome":"F","idade":70,"altura":1.9}]


function retornaPessoasAutorizadas(pessoas) {
    let quemPode = pessoas.filter((obj, indice, array) => {
        return obj.altura >= 1.5 && obj.idade > 14 && obj.idade < 60;
    })
    return quemPode;
}

console.log(retornaPessoasAutorizadas(arrayPessoasTeste));

// EXERCÍCIO 13B B) uma função que receba um array e devolva outro contendo as pessoas que não tem permissão para entrar no brinquedo
function retornaPessoasNaoAutorizadas(pessoas) {
    let quemNaoPode = pessoas.filter((obj, indice, array) => {
        return obj.altura < 1.5 || obj.idade <= 14 || obj.idade >= 60;
    })
    return quemNaoPode;
}

console.log(retornaPessoasNaoAutorizadas(arrayPessoasTeste));

// EXERCÍCIO 14 
/* Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas as compras realizadas pelo cliente. 
A sua tarefa é: faça uma função que receba um array com os objetos do tipo acima como parâmetro e atualize o saldo total individual de cada um, sem criar um novo array. Retorne o array original.  */
let contasTeste = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
];

function retornaContasComSaldoAtualizado(contas) {
    let comprinhas = contas.map((ObjCliente) => {
        for (let compra of ObjCliente.compras){
            ObjCliente.saldoTotal = ObjCliente.saldoTotal - compra; 
        }
        return {...ObjCliente,
        saldoTotal: ObjCliente.saldoTotal,
        compras: []
        }
    })
    return comprinhas;
}



// EXERCÍCIO 15A A sua tarefa é criar uma função que receba o array acima como parâmetro e retorne um array de consultas ordenado pelos nomes dos pacientes (em ordem alfabética)
let clientesConsultas = [
    { nome: "João", dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", dataDaConsulta: "04/05/2021" }
  ];

function ordenarNome(a,b) {
    if (a.nome < b.nome) {
    return -1;
    }
    if (a.nome > b.nome){
    return 1;
    }
    return 0;
}

function retornaArrayOrdenadoAlfabeticamente(consultas) {
  let clientesOrdenados = consultas.sort(ordenarNome);
    return clientesOrdenados
}

console.log(retornaArrayOrdenadoAlfabeticamente(clientesConsultas));

// EXERCÍCIO 15B A sua segunda tarefa é criar uma função que receba o array acima como parâmetro e retorne um array de consultas ordenado pelas datas das consultas(da menor para a maior)
function ordenarDatas(a,b) {
    if (Date (a) < Date(b)) {
    return -1;
    }
    if (Date(a) > Date(b)){
    return 1;
    }
    return 0;
}
function ordenarDatas(a,b) {
    let aCorreto = new Date(a.dataDaConsulta);
    let bCorreto = new Date(b.dataDaConsulta);
    return aCorreto - bCorret}

console.log(ordenarDatas(10/01/2022, 01/01/2021));

function retornaArrayOrdenadoPorData(consultas) {
    let clientesOrdenadosPorDatas = consultas.dataDaConsulta.sort(ordenarDatas);
    return clientesOrdenadosPorDatas;
}

console.log(retornaArrayOrdenadoPorData(clientesConsultas));