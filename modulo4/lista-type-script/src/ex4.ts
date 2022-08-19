// O seguinte array traz as pessoas colaboradoras de uma empresa, com seus salários, setores e se trabalham presencialmente ou por home office:
// Considerando o arrayacima, crie um ENUM para os setores e um type para as pessoas colaboradoras. Em seguida, crie uma função que receba este arraycomo parâmetro e retorne apenas as pessoas do setor de marketing que trabalham presencialmente.
enum Departament {
  marketing = "marketing",
  sales = "sales",
  financial = "financial",
}

type Employee = {
  name: string;
  salary: number;
  departament: Departament;
  presential: boolean;
};

let arrayEmployeers: Employee[] = [
  {
    name: "Marcos",
    salary: 2500,
    departament: Departament.marketing,
    presential: true,
  },
  /* { name: "Maria", salary: 1500, departament: "sales", presential: false },
  { name: "Salete", salary: 2200, departament: "finantial", presential: true }, */
  {
    name: "João",
    salary: 2800,
    departament: Departament.marketing,
    presential: false,
  },
  /*   { name: "Josué", salary: 5500, departament: "finantial", presential: true },
  { name: "Natalia", salary: 4700, departament: "sales", presential: true }, */
  {
    name: "Paola",
    salary: 3500,
    departament: Departament.marketing,
    presential: true,
  },
];

const employeeFilter = (arrayEmployeers: Employee[]): Employee[] => {
  let arrayTest: Employee[] = arrayEmployeers.filter((item) => {
    return item.departament == Departament.marketing && item.presential;
  });
  return arrayTest;
};

console.log(employeeFilter(arrayEmployeers));
