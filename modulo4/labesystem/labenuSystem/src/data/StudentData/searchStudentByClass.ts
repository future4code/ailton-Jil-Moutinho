/* import { connection } from "../dataBase";

export const searchStudentByClass = async (class_id: number): Promise<any> => {
  const result = await connection("student")
    .select("*")
    .where("class_id", `${class_id}`);

  return result;
};
 */