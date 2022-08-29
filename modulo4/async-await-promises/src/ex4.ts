import axios from "axios";
import { BASE_URL } from "./baseURL";
import { user } from "./types";

//Vamos continuar as nossas funcionalidades da API. Crie uma função que permita criar uma nova notícia.
//a. Qual é o tipo dessa função? Por quê?
// O mais indicado seria POST, mas usei PUT pq quem criou a PAI colocou com PUT, e o put pode ser usado para editar e criar enquanto o POST apenas pra criar.

//b. Implemente a função solicitada
export const createNews = async (
  title: string,
  content: string,
  date: number
): Promise<any> => {
  try {
    const result = await axios.put(`${BASE_URL}/news`, {
      title: title,
      content: content,
      date: date,
    });
    if (result) {
      console.log("News created successfully!");
    }
  } catch (error) {
    console.log("Something wrong is not right!");
  }
};

const main = async () => {
  await createNews(
    "The best dessert",
    "Jil said that ice crema is the best dessert ever.",
    Date.now()
  );
};
main();
