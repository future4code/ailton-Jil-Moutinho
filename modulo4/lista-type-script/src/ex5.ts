//Considerando o array de usuários abaixo, crie uma função que receba este array como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”.
type User = {
  name: string;
  email: string;
  role: string;
};

let arrayUsers = [
  { name: "Rogério", email: "roger@email.com", role: "user" },
  { name: "Ademir", email: "ademir@email.com", role: "admin" },
  { name: "Aline", email: "aline@email.com", role: "user" },
  { name: "Jéssica", email: "jessica@email.com", role: "user" },
  { name: "Adilson", email: "adilson@email.com", role: "user" },
  { name: "Carina", email: "carina@email.com", role: "admin" },
];

const usersFilter = (arrayUsers: User[]): string[] => {
  let arrayTest: string[] = arrayUsers
    .filter((item) => {
      return item.role === "admin";
    })
    .map((item) => {
      return item.email;
    });
  return arrayTest;
};

console.log(usersFilter(arrayUsers));
