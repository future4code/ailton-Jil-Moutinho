/* Escreva uma função para converter de números normais para algarismos romanos (`string`).

Os romanos eram bem inteligentes. Eles conquistaram a maior parte da Europa e a governaram por centenas de anos. Inventaram estradas de concreto e até biquínis. Uma coisa que eles nunca descobriram foi o número zero. Isso tornou a escrita e a datação de histórias extensas de suas façanhas um pouco mais desafiadoras, mas o sistema de números que eles criaram ainda está em uso hoje. 

Os romanos escreviam números usando letras - I, V, X, L, C, D, M. Não há necessidade de converter números maiores que cerca de 3000. (Os próprios romanos não tendiam a ir mais alto)

A Wikipedia diz: Os algarismos romanos modernos são escritos expressando cada dígito separadamente, começando com o dígito mais à esquerda e pulando qualquer dígito com valor zero.

Para ver isso na prática, considere o exemplo de 1990.

Em algarismos romanos 1990 é MCMXC: 1000=M 900=CM 90=XC */

/* - **Dica 1** Os principais dígitos dos números romanos são: M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1. Qualquer digito a ser construído pode ser feito utilizando esses como base. */

/* - **Dica 2** Uma possível solução é construir um array de objetos com os principais dígitos do maior pro menor, percorra o vetor de dígitos decrementando sempre que possível aquele valor do ano base. Exemplo:
    
    Array de objetos: [
    {letra: M, valor: 1000},
    {letra: CM, valor: 900},
    {letra: D, valor: 500},
    {letra: CD, valor: 400},
    {letra: C, valor: 100},
    {letra: XC, valor: 90},
    {letra: L, valor: 50}, */

const toRomans = (yearToConvert: number): string => {
  let roman: string = "";

  if (yearToConvert > 3000) {
    roman = "Não converte acima de 3000 em romanos";
  } else if (yearToConvert === 0) {
    roman = "Não existe 0 em romanos";
  } else if (yearToConvert < 0) {
    roman = "Não converte abaixo de 0 em romanos";
  }

  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romansLetters = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  for (let i = 0; i <= numbers.length; i++) {
    while (yearToConvert % numbers[i] < yearToConvert) {
      roman += romansLetters[i];
      yearToConvert -= numbers[i];
    }
  }

  return roman;
};

console.log(toRomans(2000));
console.log(toRomans(1985));
console.log(toRomans(3100));
console.log(toRomans(3000));
console.log(toRomans(2022));
console.log(toRomans(35));
console.log(toRomans(555));
console.log(toRomans(0));
console.log(toRomans(-200));
