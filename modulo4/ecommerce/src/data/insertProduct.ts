import { connection } from "./dataBase";

export const insertProduct = async (
  name_product: string,
  price: number,
  image_url: string
): Promise<any> => {
  return await connection("labecommerce_products").insert({
    name_product,
    price,
    image_url
  });
};