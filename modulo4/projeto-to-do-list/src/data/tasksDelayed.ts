import { connection } from "./dataBase";

export default async function tasksDelayed(): Promise<any> {
  const result = await connection("TasksList")
    .select("*")
    .where("limit_date", ">", new Date());
    console.log();
    
  return result;
};