import { connection } from "./dataBase";

export default async function taskById(task_status: string): Promise<any> {
  const result = await connection("TasksList")
    .select("*")
    .where({ task_status });
  return result;
}

/* `SELECT TasksList.id, title, task_description, limit_date, task_status, creator, nickname FROM TasksList JOIN UsersList ON TasksList.creator = UsersList.id WHERE TasksList.task_status = ${task_status}` */
