import { connection } from "./dataBase";

export default async function userByName(search: string) {
  const result = await connection.raw(
  `SELECT id, nickname FROM UsersList WHERE nickname LIKE "%${search}%" OR EMAIL like "%${search}%"`)

  return result[0];
};