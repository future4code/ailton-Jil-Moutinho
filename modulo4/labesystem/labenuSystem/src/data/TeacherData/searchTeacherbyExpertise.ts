/* import { connection } from "../dataBase";

export const searchTeacherByExpertise = async (
  expertise_name: string
): Promise<any> => {
  const result = await connection("teacher_expertise")
    .select("*")
    .where("expertise_name", `${expertise_name}`);

  return result;
};
 */