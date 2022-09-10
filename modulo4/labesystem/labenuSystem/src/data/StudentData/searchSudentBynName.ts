/* import { connection } from "../dataBase";

export const searchStudentByName = async (
  student_name: string
): Promise<any> => {
  const result = await connection("student")
    .select("*")
    .where("student_name", "like", `%${student_name}%`);

  return result;
};
 */