import { connection } from "./dataBase";

export const allUsers = async (): Promise<any> => {
  const result = await connection("UsersList")
    .select("*")

    return result;
};
