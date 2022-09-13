import { connection } from "./dataBase";

export default async function selectUserByName(searchName: string): Promise<any> {
  const result = await connection.raw(`
        SELECT id, name, email, type
        FROM aula48_exercicio WHERE name LIKE "%${searchName}%"
     `);

  return result[0];
}

/* const getUserByName = await connection("aula48_exercicio")
.select()
.where("name", "LIKE", `%${search}`) */
