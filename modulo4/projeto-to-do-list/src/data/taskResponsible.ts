import { connection } from "./dataBase";

export default async function taskResponsible(
  task_id: number,
  responsible_user: number
) {
  const result = await connection("TaskWithResponsibleUser").insert({
    responsible_user,
    task_id,
  });

  return await connection("TaskWithResponsibleUser").select("*");
}
