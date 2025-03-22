import { product_detail } from "@/lib/datatype/product";
import { product_list_example } from "@/lib/tempdata";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import Header from "../site-header/header";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = product_list_example.find(
    (product) => product.id === Number(id)
  );

  if (!product) return <p>Không tìm thấy sản phẩm!</p>;

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const colors = ["#00FF00", "#C8A2C8", "#800080", "#000000"];
  const sizes = ["S", "M", "L", "XL", "2XL"];

  return (
    <div>
      <Header />

      <div className="container mx-auto p-8">
        <div className="flex gap-8">
          <div className="w-1/2">
            <img
              src="/product-image.jpg"
              alt="Kensho Pants"
              className="rounded-lg"
            />
            <div className="flex mt-4 gap-2">
              {[1, 2, 3, 4].map((item) => (
                <img
                  key={item}
                  src={`/thumbnail-${item}.jpg`}
                  alt={`Thumbnail ${item}`}
                  className="w-16 h-16 rounded-lg"
                />
              ))}
            </div>
          </div>

          <div className="w-1/2">
            <h1 className="text-2xl font-bold">Kensho Pants</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet...</p>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-xl font-bold">$86.00</span>
              <span className="text-gray-400 line-through">$104.00</span>
            </div>

            <p className="text-sm text-gray-500">
              32 people are looking at this product
            </p>

            <div className="mt-4">
              <p className="text-sm font-medium">Color:</p>
              <div className="flex gap-2 mt-2">
                {colors.map((color) => (
                  <div
                    key={color}
                    className={`w-8 h-8 rounded-full cursor-pointer ${
                      selectedColor === color ? "ring-2 ring-black" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium">Size:</p>
              <div className="flex gap-2 mt-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-4 items-center">
              <input
                type="number"
                className="w-16 p-2 border rounded-lg"
                defaultValue={1}
                min={1}
              />
              <Button className="w-full">Add to Cart</Button>
            </div>

            <div className="mt-4 flex gap-4 text-sm text-gray-500">
              <span>Wishlist</span>
              <span>Ask question</span>
              <span>Share</span>
            </div>
          </div>
        </div>
        <Tabs
          defaultValue="description"
          orientation="vertical"
          className="mt-8"
        >
          <TabsList className="flex-col">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="info">Additional Info</TabsTrigger>
            <TabsTrigger value="reviews">Reviews (23)</TabsTrigger>
            <TabsTrigger value="questions">Questions</TabsTrigger>
          </TabsList>
          <TabsContent value="description">
            <p>At vero eos et accusamus et iusto odio...</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Fabric: Denim</li>
              <li>Fit type: Loose fit</li>
              <li>Feature: Adjustable straps</li>
              <li>Front and back pockets</li>
            </ul>
          </TabsContent>
          <TabsContent value="info">
            Additional Info content here...
          </TabsContent>
          <TabsContent value="reviews">Reviews content here...</TabsContent>
          <TabsContent value="questions">Questions content here...</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetail;
