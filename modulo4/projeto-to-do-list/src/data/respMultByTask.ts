import { connection } from "./dataBase";

export default async function respMultByTask( task_id: number,
    responsibles: []) {
        await connection("TaskWithResponsibleUser")
        .insert({responsible_user: responsibles})
        .where({task_id})
  return 
};
