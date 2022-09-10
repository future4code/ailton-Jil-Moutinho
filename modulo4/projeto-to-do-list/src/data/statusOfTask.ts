import { connection } from "./dataBase";

export default async function statusOfTask(
  task_status: string,
  task_id: number
) {
  const updatedStatus = await connection("TasksList")
    .update({ task_status })
    .where("id", task_id);

  return await connection("TasksList").select("*").where("id", task_id);
}
