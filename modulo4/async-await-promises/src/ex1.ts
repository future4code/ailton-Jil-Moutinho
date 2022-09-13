import axios from "axios";
import { BASE_URL } from "./baseURL";

//Vamos começar fazendo uma função nomeada simples que retorne todos os assinantes da nossa aplicação. Ela deve ser assíncrona, porque utiliza o async para fazer a comunicação com o banco de dados. Além disso, por ora, indique que ela vai retornar um array de "qualquer coisa".
//a. Qual endpoint você deve utilizar para isso?
// GET. http://labenews.herokuapp.com/subscribers

//b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
// Promise<any[]>

//c. Implemente uma função nomeada que faça o que foi pedido.
export async function selectAllUsers(): Promise<any[]> {
  const usersAll = await axios.get(`${BASE_URL}/subscribers`);
  //console.log(usersAll.data);
  return usersAll.data;
}

const main = async () => {
  await selectAllUsers();
};

main();
