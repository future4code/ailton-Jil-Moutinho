//Crie uma função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato:
//  "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}"

const entregaFraseEx1 = (nome: string, dataDeNasc: string): string => {
  let dia: string = "";
  let mes: string = "";
  let ano: string = "";

  let arrayData: string[] = dataDeNasc.split("/");

  dia = arrayData[0];
  mes = arrayData[1];
  ano = arrayData[2];
  let frase: string = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`;

  return frase;
};
console.log(entregaFraseEx1("Mia", "01/04/2022"));
