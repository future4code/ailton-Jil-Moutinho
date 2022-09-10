import { connection } from "./dataBase";

export default async function taskByCreator(creator: number): Promise<any> {
  const result = await connection("TasksList")
    .select("*")
    .where("creator", creator);

  return result;
}
