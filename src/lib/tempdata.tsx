import { product_data } from "./datatype/product";
import { getProducts } from "./api/product";


export const getRandomProducts = async (length:number) => {
  const product_list_example: product_data[] = await getProducts(20) 
  const shuffled = [...product_list_example].sort(() => 0.5 - Math.random());
  return shuffled.slice(1, length);
};