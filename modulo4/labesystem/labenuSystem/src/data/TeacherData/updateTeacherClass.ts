/* import { connection } from "../dataBase";

export const updateTeacherClass = async (
  teacher_id: number,
  class_id: number
): Promise<any> => {
  await connection("teacher")
    .update({ class_id })
    .where("teacher_id", `${teacher_id}`);
};
 */