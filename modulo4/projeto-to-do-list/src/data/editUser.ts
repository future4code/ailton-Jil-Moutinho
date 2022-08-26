import { connection } from "./dataBase";

export const editUser = async (
  id: number,
  user_name: string,
  nickname: string
): Promise<any> => {
  console.log(id, user_name, nickname);
  
  const result = await connection("UsersList")
    .where("id", id)
    .update({ user_name, nickname });


  return result;
};
