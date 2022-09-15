/* import { connection } from "../dataBase";

export const selectActiveClasses = async (): Promise<any> => {
  const result = await connection()
    .select("*")
    .from("classes")
    .where("module", "not like", "%0%");

  return result;
};
 */