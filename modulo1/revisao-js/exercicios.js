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
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}