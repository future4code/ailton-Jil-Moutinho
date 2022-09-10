import { connection } from "./dataBase";

export const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  await connection
    .insert({
      user_name: name,
      nickname,
      email,
    })
    .into("UsersList");

    return await connection("UsersList").select("*").where({email});
};
