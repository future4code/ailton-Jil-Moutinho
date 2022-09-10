import { connection } from "./dataBase";

export const taskDel = async (id: number) => {
  await connection("TaskWithResponsibleUser").delete().where("task_id", id);
  await connection("TasksList").delete().where({ id });

  return connection("TasksList").select("*");
};
