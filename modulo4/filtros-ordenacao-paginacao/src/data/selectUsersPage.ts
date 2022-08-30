import { connection } from "./dataBase";

export default async function selectUsersPage(
  offset: number
): Promise<any> {
  const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      limit 5
      offset ${offset}
   `);

  return result[0];
};
