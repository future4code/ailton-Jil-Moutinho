import { connection } from "./dataBase";

export default async function responsibleByTask(id: number) {
  const result = await connection()
    .select("UsersList.id as id", "nickname")
    .from("TaskWithResponsibleUser")
    .rightJoin(
      "UsersList",
      "UsersList.id",
      "TaskWithResponsibleUser.responsible_user"
    )
    .where("task_id", id);

  return result;
}
