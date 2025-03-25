
import { product_data } from "../datatype/product";

const API_URL = process.env.NEXT_PUBLIC_API_HOST;

export const getProduct = async (id: string) => {
  const res = await fetch(`${API_URL}/api/product/${id}`);
  const data = await res.json();
  return data;
};
export const getProducts = async (limit?: number) => {
  const res = await fetch(`${API_URL?? "https://api.egram.solutions"}/api/product?limit=${limit || 10}`, {
    method: "GET", 
    headers: {  
      "Content-Type": "application/json",
    },  
    credentials: "include"
  });   
  const data = await res.json();
  const products_data = data.docs.map((product: any) =>
    convertProductData(product)
  );
  return products_data;
};

function convertProductData(data: any): product_data {
  return {
    id: (data.id),
    name: data.name,
    price: data.price.toString(),
    sale_price: data.sale_price.toString(),
    discount: data.discount,
    description: data.description,
    long_description:
      data.long_description?.map((desc: any) => desc.text) || [],
    rating: data.rating,
    image: data.image.url,
    images: data.images?.map((img: any) => img.file.url) || [],
    category_id: data.category_id?? 0,
    brand: data.brand,
    property: {
      size: data.property?.size?.map((s: any) => s.value) || [],
      color:
        data.property?.color?.map((c: any) => ({ value: c.value, id: c.id })) ||
        [],
      other: data.property?.other || {},
      stock:
        data.property?.stock?.map((s: any) => ({
          size: s.size,
          color: { value: s.color, id: s.id },
          quantity: s.quantity,
        })) || [],
    },
  };
}
