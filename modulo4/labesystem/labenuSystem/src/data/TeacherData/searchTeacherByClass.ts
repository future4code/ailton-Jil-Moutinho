/* import { connection } from "../dataBase";

export const searchTeacherByClass = async (class_id: number): Promise<any> => {
  const result = await connection("teacher")
    .select("*")
    .where("class_id", `${class_id}`);

  return result;
};
 */