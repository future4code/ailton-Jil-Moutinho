import { connection } from "./dataBase";

export const userDelFromResp = async (
  task_id: number,
  responsible_user: number
) => {
  const result = await connection
    .from("TaskWithResponsibleUser")
    .where({ task_id })
    .andWhere({ responsible_user })
    .delete("responsible_user")

  return await connection("TaskWithResponsibleUser").select("*");
};
