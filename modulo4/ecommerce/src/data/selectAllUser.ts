import { connection } from "./dataBase";

export const selectAllUsers = async (): Promise<any> => {
  return await connection("labecommerce_users").select("*");
};
