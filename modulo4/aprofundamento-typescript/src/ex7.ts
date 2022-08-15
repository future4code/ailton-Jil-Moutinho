//Tendo este pequeno texto em mente, você deve criar uma função que determine a que idade histórica (em negrito no texto) um ano pertence. Ela deve esperar receber o ano e um outro parâmetro que seja a sigla "AC" ou "DC". Algumas características a mais desta função:

/* - Caso ela seja chamada sem passar uma sigla, ela deve automaticamente concluir que se trata de um ano "DC"
- Caso ela seja chamada passando um valor inválido (tanto para o ano como para a sigla), ela deve retornar uma mensagem indicando um erro. */

enum Periodo {
  prehistoria = "Pré-história",
  idadeAntiga = "Idade Antiga",
  idadeMedia = "Idade Média",
  idadeModerna = "Idade Moderna",
  idadeContemporanea = "Idade Contemporânea",
}

enum Cristo {
  AC = -1,
  DC = 1,
  null = 1
}

function anoPeriodoHistorico(ano: number, jesus: Cristo) {
  let periodoHistorico: string = "Erro na leitura de período";
  let anoComNegativo:number = ano * jesus
if (anoComNegativo < -4000) {
  periodoHistorico = "Perído Pré-histórico";
} else if (anoComNegativo >= -4000 && anoComNegativo < 476) {
    periodoHistorico = "Perído da Idade Antiga";
} else if (anoComNegativo >= 476 && anoComNegativo < 1453) {
  periodoHistorico = "Perído da Idade Média";
} else if (anoComNegativo >= 1453 && anoComNegativo < 1789) {
  periodoHistorico = "Perído da Idade Moderna";
} else if (anoComNegativo >= 1789 && anoComNegativo <= 2022) {
  periodoHistorico = "Perído da Idade Contemporânea";
}
  return periodoHistorico;
}

console.log(anoPeriodoHistorico(20, null));
console.log(anoPeriodoHistorico(20, Cristo.DC));
console.log(anoPeriodoHistorico(20, Cristo.AC));
console.log(anoPeriodoHistorico(4100, Cristo.AC));
console.log(anoPeriodoHistorico(1800, Cristo.DC))
