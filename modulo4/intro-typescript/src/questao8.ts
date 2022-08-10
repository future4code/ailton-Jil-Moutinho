//Escreva uma função que receba uma string e retorne a string reversa. Em outras palavras, se o input da sua função for "abcd", a saída deve ser "dcba" .

function reverseString(word: string): string {
  if ((word = "")) {
    return "";
  } else {
    return word.split("").reverse().join("");
  }
}
