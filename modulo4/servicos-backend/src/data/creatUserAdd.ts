import { UserAddress } from "../types/user";
import { connection } from "./dataBase";

export async function creatUser(newAddress: UserAddress) {
  //const {CEP, logradouro, bairro, cidade, estado, numero, complemento} = newAddress
  return await connection("AddressTable").insert({ newAddress });
}
