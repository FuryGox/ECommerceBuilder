interface product {
  id: number;
  name: string;
  price: string;
  description: string;
  rating: number;
}

interface product_card extends product {
  image: string;
}

interface product_detail extends product {
  image: string;
  images: string[];
  category_id: number;
  brand: string;
  stock: number;
  sale_price: string;
  discount: number;
}

export type {
    product,
    product_card,
    product_detail
}