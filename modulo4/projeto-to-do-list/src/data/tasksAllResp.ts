import { connection } from "./dataBase";

export default async function  tasksAllResp (): Promise<any> {
  const result = await connection("TaskWithResponsibleUser")
    .select("*")

    return result;
};