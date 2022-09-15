/* import { connection } from "../dataBase";

export const searchStudentByHobby = async (hobby_name: string): Promise<any> => {
  const result = await connection("student_hobby")
    .select("*")
    .where("hobby_name", `${hobby_name}`);

  return result;
};
 */