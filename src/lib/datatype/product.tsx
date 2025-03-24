interface product {
  id: string;
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
  long_description?: string[];
  brand: string;
  sale_price: string;
  discount: number;
}

interface product_data extends product_detail {
  property?: product_property;
}

export type {
    product,
    product_card,
    product_detail,
    product_data
}