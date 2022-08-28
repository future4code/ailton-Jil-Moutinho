import { connection } from "./dataBase";

export const userDel = async (id: number) => {
  await connection("TaskWithResponsibleUser")
    .where("responsible_user", id)
    .delete();

  await connection("TasksList").where("creator", id).delete();

  await connection("UsersList").where({ id }).delete();
};
