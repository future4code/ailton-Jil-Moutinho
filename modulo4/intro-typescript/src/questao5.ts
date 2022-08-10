/* A função abaixo recebo por parâmetro  o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função retorna  uma string que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:

- Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
- Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
- Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos

Dito isso, refatore a função para o Typescript. */

function checaRenovacaoRG(
  anoAtual: number,
  anoNascimento: number,
  anoEmissao: number
): string {
  let idade: number = anoAtual - anoNascimento;
  let tempoCarteira: number = anoAtual - anoEmissao;

  if (idade <= 20) {
    return tempoCarteira >= 5
      ? "passou dos 5 anos precisa renovar"
      : "ainda não passou os 5 anos";
  } else if (idade >= 20 || idade <= 50) {
    return tempoCarteira >= 10
      ? "passou dos 10 anos precisa renovar"
      : "ainda não passou os 10 anos";
  } else if (idade > 50) {
    return tempoCarteira >= 15
      ? "passou dos 15 anos precisa renovar"
      : "ainda não passou os 15 anos";
  } else {
    return "error";
  }
}

console.log(checaRenovacaoRG(2022, 2003, 2021));
console.log(checaRenovacaoRG(2022, 1986, 2021));
console.log(checaRenovacaoRG(2022, 1986, 2000));
