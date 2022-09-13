import { connection } from "./dataBase";

export const selectAllProducts = async (
  order: string,
  search: string
): Promise<any> => {
  let arrayProductsOrdered = [];
  if (order === "none") {
    arrayProductsOrdered = await connection("labecommerce_products").select(
      "*").where("name_product", "LIKE", `%${search}%`);
  } else {
    arrayProductsOrdered = await connection("labecommerce_products")
      .select("*")
      .where("name_product", "LIKE", `%${search}%`)
      .orderBy("name_product", `${order}`);
  }
  return arrayProductsOrdered;
};
