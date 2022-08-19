//Ex3
export type Spend = {
  value: number,
  date: string,
  description: string
};

//Ex1
export type Client = {
  name: string;
  CPF: string;
  birthDate: string;
  balance: number;
//Ex4
  spends: Spend[];
};

//Ex2
export let clientsList: Client[] = [
  {
    name: "Mia",
    CPF: "123.123.123-01",
    birthDate: "01/01/2022",
    balance: 1000,
    spends: [
      {
        value: -2,
        date: "10/08/2022",
        description: "Whiskas sache",
      },
      {
        value:-5,
        date: "11/08/2022",
        description: "Felix sache",
      },
      {
        value: -30,
        date: "12/08/2022",
        description: "Areia",
      },
      {
        value: 10,
        date: "12/08/2022",
        description: "Depósito em dinheiro",
      },
    ],
  },
  {
    name: "Gatuno",
    CPF: "123.123.123-02",
    birthDate: "01/02/2022",
    balance: 200,
    spends: [],
  },
];
