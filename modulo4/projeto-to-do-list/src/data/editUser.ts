import { connection } from "./dataBase";

export default async function editUser (
  id: number,
  user_name: string,
  nickname: string
): Promise<any> {
  const result = await connection()
    .where("id", id)
    .from("UsersList")
    .update({ user_name, nickname });

    return await connection("UsersList").select("*").where({id});
};
