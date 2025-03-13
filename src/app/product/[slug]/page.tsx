"use client";

import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";

type ProductType = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  rating: number;
};

const products: ProductType[] = [
  { id: 1, name: "iPhone 15", price: "25,000,000 VND", description: "Điện thoại cao cấp của Apple.", image: "", rating: 5 },
  { id: 2, name: "Samsung Galaxy S23", price: "22,000,000 VND", description: "Siêu phẩm Android từ Samsung.", image: "", rating: 4.5 },
  { id: 3, name: "Google Pixel 8", price: "20,000,000 VND", description: "Camera AI siêu đỉnh từ Google.", image: "", rating: 4.7 },
];

export default function ProductDetail() {
  const router = useRouter();
  const { slug } = useParams();

  const product = products.find((product) => product.id === Number(slug));

  if (!product) return <p>Không tìm thấy sản phẩm!{slug}</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Giá: {product.price}</p>
      <p>Mô tả: {product.description}</p>
      <Button onClick={() => router.push("/")}> Quay lại trang chủ</Button>
    </div>
  );
}
