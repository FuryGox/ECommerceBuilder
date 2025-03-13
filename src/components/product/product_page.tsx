import { product_detail } from "@/lib/datatype/product";
import { useRouter } from "next/router";

const products: product_detail[] = [
    {
      id: 1, name: "iPhone 15", price: "25,000,000 VND", description: "Điện thoại cao cấp của Apple.", image: "", rating: 5,
      images: [],
      category_id: 0,
      brand: "",
      stock: 0,
      sale_price: "",
      discount: 0
    },
    {
      id: 2, name: "Samsung Galaxy S23", price: "22,000,000 VND", description: "Siêu phẩm Android từ Samsung.", image: "", rating: 4.5,
      images: [],
      category_id: 0,
      brand: "",
      stock: 0,
      sale_price: "",
      discount: 0
    },
    {
      id: 3, name: "Google Pixel 8", price: "20,000,000 VND", description: "Camera AI siêu đỉnh từ Google.", image: "", rating: 4.7,
      images: [],
      category_id: 0,
      brand: "",
      stock: 0,
      sale_price: "",
      discount: 0
    },
  ];

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((product) => product.id === Number(id));

  if (!product) return <p>Không tìm thấy sản phẩm!</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Giá: {product.price}</p>
      <p>Mô tả: {product.description}</p>
      <button onClick={() => router.push("/")}>🔙 Quay lại trang chủ</button>
    </div>
  );
};

export default ProductDetail;
