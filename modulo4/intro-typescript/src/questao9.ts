/* Escreva uma função que valida se uma pessoa pode ser estudante da Labenu. Para isso a função deve receber como parâmetro as respostas dessas 4 perguntas:

- Qual a sua idade?
- Você possui ensino médio completo?
- Quantas horas você tem disponível na semana para o curso?
- O seu curso será o “integral” ou “noturno”?

A função deve retornar um booleano (true ou false) que indica se a inscrição para o curso é válida, ou seja, se o usuário pode ou não fazer o curso da Labenu. A inscrição é válida quando todos os seguintes requisitos forem atendidos:

- A pessoa possui mais de 18 anos;
- Possui ensino médio completo;
- Possui pelo menos 40 horas livres na semana para o curso integral e 20 horas para o curso noturno. */

function canStudy(
  age: number,
  hightSchool: boolean,
  hours: number,
  time: string
): boolean {
  /*   if (age >= 18 && hightSchool === true) {
    if (time === "Daytime" && hours >= 40) {
      return "Sim, a inscrição no curso é valida";
    } else if (time === "Night time" && hours >= 20) {
      return "Sim, a inscrição no curso é valida";
    } else {
      return "Não, a inscrição no curso não é valida";
    }
  } else {
    return "Não, a inscrição no curso não é valida";
  } */
  if (
    (age >= 18 && hightSchool === true && time == "Daytime" && hours >= 40) ||
    (time == "Night time" && hours >= 20)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(canStudy(20, true, 41, "Daytime"));
console.log(canStudy(17, true, 41, "Daytime"));
console.log(canStudy(20, false, 41, "Daytime"));
console.log(canStudy(20, true, 38, "Daytime"));
console.log(canStudy(20, true, 38, "Night time"));
console.log(canStudy(20, true, 18, "Night time"));
