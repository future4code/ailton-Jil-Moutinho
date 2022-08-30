import { connection } from "./dataBase";

export default async function selectUsersAllFilters(
  search_name: string,
  searchType: string,
  orderBy: string,
  offset: number
): Promise<any> {
  console.log(searchType);
  
  const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE type = "${searchType}" AND name LIKE "%${search_name}%"
      ORDER BY ${orderBy} DESC
      limit 5
      offset ${offset}
   `);

  return result[0];
}
