import { connection } from "./dataBase";

export default async function userid(id: number) {
  const result = await connection("UsersList")
    .select("id", "nickname")
    .where({ id });

  return result[0];
}
