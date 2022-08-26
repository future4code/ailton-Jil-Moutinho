import { connection } from "./dataBase";

export const taskById = async (
  id: number
): Promise<any> => {
  const result = await connection("TasksList")
    .select("*")
    .where("id", id)

    return result[0];
};