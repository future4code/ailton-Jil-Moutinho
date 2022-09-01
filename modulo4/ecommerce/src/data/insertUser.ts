import { connection } from "./dataBase";

export const insertUser = async (
  name: string,
  email: string,
  password: string
): Promise<any> => {
  return await connection("labecommerce_users").insert({
    name,
    email,
    password,
  });
};
