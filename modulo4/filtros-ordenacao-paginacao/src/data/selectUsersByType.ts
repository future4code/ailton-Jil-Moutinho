import { connection } from "./dataBase";

export default async function selectUsersByType(searchType: string): Promise<any> {
  const result = await connection.raw(`
        SELECT id, name, email, type
        FROM aula48_exercicio WHERE TYPE = "${searchType}"
     `);

  return result[0];
}