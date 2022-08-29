import axios from "axios";
import { BASE_URL } from "./baseURL";

//Agora, para treinar um pouco da sintaxe, reescreva a função do exercício 1 utilizando arrow function
//a. Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function assíncrona
// A sintaxe da arrow e menor, o async vai pra depois do nome da const.

//b. Implemente a função solicitada, usando arrow function
const selectAllUsers = async (): Promise<any[]> => {
  const usersAll = await axios.get(`${BASE_URL}/subscribers`);
  console.log(usersAll.data);
  return usersAll.data;
};

const main = async () => {
  await selectAllUsers();
};

main();
