import axios from "axios";
import { user } from "./types";
import { BASE_URL } from "./baseURL";
import { selectAllUsers } from "./ex1";
import { createNews } from "./ex4";

//Agora, implemente uma função que receba um array de usuários e uma mensagem e envie essa mensagem como notificação para todos os usuários. A princípio, não utilize o

const notification = async (
  AllUsers: user[],
  notific: string
): Promise<void> => {
  try {
    if (!AllUsers || AllUsers === [] || !notific || notific === "") {
    }
    AllUsers.forEach(async (item) => {
      await axios.post(`${BASE_URL}/notifications`, {
        subscriberId: item.id,
        message: notific,
      });
    });

    console.log("All notifications were sent.");
  } catch (error: any) {
    console.log(error.message || "Something wrong is not right!");
  }
};

const main = async () => {
  await notification(await selectAllUsers(), "Notifications sent.");
};
main();

/* const notification = async (AllUsers: user[]): Promise<any> => {
  try {
    if (!AllUsers || AllUsers === []) {
    }
    AllUsers.forEach(async (item) => {
      await axios.post(`${BASE_URL}/notifications`, {
        subscriberId: item.id,
        message: "Sent",
      });
      console.log(item.id);
      
    });

    console.log("All notific were sent.");
  } catch (error: any) {
    console.log(error.message || "Something wrong is not right!");
  }
};

createNews(news)
  .then(selectAllUsers)
  .then(notification)
  .catch((error) => error.response?.data || error.message) */
