//DESAFIO 6
//Você foi contratado por um escritório médico para organizar a agenda de consultas. A sua tarefa é criar uma função que receba o array acima como parâmetro e retorne um array de consultas ordenado pelos nomes dos pacientes (em ordem alfabética). Para isso crie um type para as consultas.

type Paciente = {
  nome: string;
  idade: number;
  dataDaConsulta: string;
};

let pacientesLista: Paciente[] = [
  { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
  { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" },
];


const patientsSorted: Paciente[] = pacientesLista.sort( (a, b) => {
    return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0)
})

console.log(patientsSorted)


/* function ordena(listaDePacientes: Paciente[]): Paciente[] {
  const listaOrdenada = listaDePacientes.sort(
    (a, b) => {(a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0)}
  );
  return listaOrdenada;
} */
