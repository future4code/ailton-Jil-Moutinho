//Escreva uma função que receba uma string e retorne a string reversa. Em outras palavras, se o input da sua função for "abcd", a saída deve ser "dcba" .

function reverseString(word: string): string {
  if (word === "") {
    return "";
  } else {
    let newWord: string = "";
    let i: number = word.length - 1;
    for (i; i >= 0; i--) {
      (newWord += word[i]);
    }
    return newWord;

    //Outra opcao bem mais simples:
    /* return word.split("").reverse().join(""); */
  }
}

console.log(reverseString("ABACAXI"));
console.log(reverseString("AbacaxI"));
console.log(reverseString("Socorram"));
