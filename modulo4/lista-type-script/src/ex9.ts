//Uma operação matemática bastante utilizada em probabilidade e estatística é o fatorial, representado por um ! (ponto de exclamação). Ele consiste em realizar a multiplicação de todos os números (a partir de 1) até aquele colocado na operação. Veja os exemplos abaixo:

/* 
- `3! = 3*2*1 = 6`
- `4! = 4*3*2*1 = 24`
- `5! = 5*4*3*2*1 = 120`
- `6! = 6*5*4*3*2*1 = 720`
 */

//Isso vale para todos os números inteiros não negativos (também chamados de "números naturais"). Dois valores para se tomar cuidado são:  `1! = 1` e `0! = 1` (uma exceção da regra!).
//Uma aplicação interessante do fatorial é o cálculo de anagramas de uma palavra. Anagrama é uma outra palavra (não precisa existir em português) com as mesmas letras da anterior em ordem diferentes. Por exemplo, anagramas da palavra `mesa` são: `ames`, `maes`, `meas`, `emsa`, `smea` e muitos outros.
//A quantidade de anagramas de uma palavra sem nenhuma letra repetida é o fatorial da quantidade de letras. Para `mesa`, a quantidade é `4! = 24`
//Considerando tudo o que foi mencionado, escreva uma função que receba uma `palavra` (sem letras repetidas) e devolva a quantidade de anagramas que ela possui.

const anagrams = (word: string): number => {
  let anagramsQtt: number = 1;

  if (word === "") {
    anagramsQtt = 1;
  } else {
    for (let index = word.length; index > 0; index = index - 1) {
      anagramsQtt = anagramsQtt * index;
    }
  }
  return anagramsQtt;
};

console.log(anagrams("pa"));
console.log(anagrams("par"));
console.log(anagrams("pare"));
console.log(anagrams("parei"));
console.log(anagrams("pareis"));
console.log(anagrams(""));
