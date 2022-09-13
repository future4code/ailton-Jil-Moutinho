import axios from "axios";
import { user } from "./types";
import { BASE_URL } from "./baseURL";
import { selectAllUsers } from "./ex1";
import { createNews } from "./ex4";

//Vamos reescrever a função anterior utilizando o Promise.all. Antes disso, responda as perguntas abaixo:
//a. O que o `Promise.all` faz?
//Traz o retorno conforme terminou a execução, sem ser em order. Retorna uma única Promise que resolve quando todas as promises no argumento iterável forem resolvidas ou quando o iterável passado como argumento não contém promises.

//b. Quais as vantagens de se utilizar o `Promise.all` no caso de se enviar as notificações para todos os usuários?
//

//c. Reimplemente a função utilizando `Promise.all`
const notificationPromiseAll = async (
  AllUsers: user[],
  notific: string
): Promise<any> => {
  try {
    if (!AllUsers || AllUsers === [] || !notific || notific === "") {
      throw new Error("Inform all request data.");
    }
    const arrayNotific = AllUsers.map(async (item) => {
      return await axios.post(`${BASE_URL}/notifications`, {
        subscriberId: item.id,
        message: notific,
      });
    });

    const teste = await Promise.all(arrayNotific);
/* 
    if (!teste) {
      console.log(teste);
    } */
    console.log("Ok");
  } catch (error: any) {
    console.log(error.message || "Something wrong is not right!");
  }
};

const main = async () => {
  await notificationPromiseAll(await selectAllUsers(), "Notifications sent.");
};
main();
