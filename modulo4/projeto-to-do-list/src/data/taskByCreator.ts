import { connection } from "./dataBase";

export const taskByCreator = async (
    creator: number
): Promise<any> => {
  const result = await connection("TasksList")
    .select("*")
    .where("creator", creator)
    
    return result;
};