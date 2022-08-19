//Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”, e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”). A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:

/* - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
- Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
- Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos */

const renovation = (userBirth: string, CNHEmission: string): boolean => {
  const dateToTimeStamp = (data: string): number => {
    const fullDate = data.split("/");
    const year = Number(fullDate[2]);
    const month = Number(fullDate[1]) - 1;
    const day = Number(fullDate[0]);
    return new Date(year, month, day).getTime();
  };

  let timestampToday: number = new Date().getTime();

  let age: number = timestampToday - dateToTimeStamp(userBirth);
  let emissionTime: number = timestampToday - dateToTimeStamp(CNHEmission);

  //1 ano = 31536000000milisegundos
  let renew: boolean = false;
  if (age <= 20 * 31536000000) {
    renew = emissionTime >= 5 * 31536000000 ? true : false;
  } else if (age > 20 * 31536000000 && age <= 50 * 31536000000) {
    renew = emissionTime >= 10 * 31536000000 ? true : false;
  } else if (age > 50 * 31536000000) {
    renew = emissionTime >= 15 * 31536000000 ? true : false;
  }
  return renew;
};

console.log(renovation("01/02/2003", "01/02/2019"));
console.log(renovation("01/02/2003", "01/02/2014"));
console.log(renovation("01/02/1977", "01/02/2017"));
console.log(renovation("01/02/1977", "01/02/2007"));
console.log(renovation("01/02/1970", "01/02/2002"));
console.log(renovation("01/02/1970", "01/02/2017"));
