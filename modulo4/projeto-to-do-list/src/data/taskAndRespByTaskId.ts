import { connection } from "./dataBase";

export default async function taskAndRespByTaskId(id: number) {
  const responsablesUsers = await connection()
    .select("UsersList.id as id", "nickname")
    .from("TaskWithResponsibleUser")
    .rightJoin(
      "UsersList",
      "UsersList.id",
      "TaskWithResponsibleUser.responsible_user"
    )
    .where("task_id", id);

  const taskInfo = await connection()
    .select("*")
    .from("TasksList")
    .rightJoin("TaskWithResponsibleUser", "TaskWithResponsibleUser.task_id", "TasksList.id")
    .where("task_id", id);

  const result = {
    ...taskInfo[0],
    responsablesUsers,
  };
  return result;
}
