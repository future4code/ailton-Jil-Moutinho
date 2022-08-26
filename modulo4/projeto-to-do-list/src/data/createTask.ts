import { connection } from "./dataBase";

export const createTask = async (
  title: string,
  task_description: string,
  limit_date: string,
  creator:string
): Promise<any> => {
  await connection
    .insert({
        title,
        task_description,
        limit_date,
        creator
    })
    .into("TasksList");
    
    return await connection("TasksList").select("*");
};