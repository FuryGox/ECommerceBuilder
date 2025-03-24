"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { product_data, product_detail } from "@/lib/datatype/product";
import { getRandomProducts } from "@/lib/tempdata";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import Header from "@/components/site-header/header";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Star, StarHalf } from "@phosphor-icons/react/dist/ssr";
import { useCart } from "@/components/provider/cart-provider";
import { getProducts } from "@/lib/api/product";
import { Random_productLine } from "@/components/products";

const random_product = await getRandomProducts(5)
const product_list_example: product_data[] = await getProducts(20) 

export default function ProductDetail() {
  const router = useRouter();
  const { slug } = useParams();

  const product = product_list_example.find(
    (product) => product.id === slug
  );
  const handleImageError = (e: any) => {
    e.target.src = "/images/dummy_600x400_000000_ffef87.png"; // Placeholder image
  };

  if (!product) return <p>Không tìm thấy sản phẩm!{slug}</p>;

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quality, setQuality] = useState(1);
  const [mainImage, setMainImage] = useState(product.image);

  const {addToCart} = useCart();
  const handleAddToCart = (e:any) => {
    e.stopPropagation();
    if (product != undefined){
      addToCart(
        {
          id: product.id,
          name: product.name,
          price: product.sale_price? product.sale_price : product.price,
          quantity: quality,
          images: product.image,
          option: {
            size: selectedSize ?? "_",
            color: selectedColor ?? "_",
          }
        }
      )
    }
  };

  const sizes = product.property?.size ?? [];
  const colors = product.property?.color ?? [];
  return (
    <div className="w-full ease-in-out transition-all duration-500">
      <Header />
      <div className="container mx-auto p-8 mt-16">
        <div className="flex gap-8">
          <div className="w-1/2">
            <Image
              src={mainImage}
              alt={product.name}
              className="rounded-lg max-w-full h-auto object-contain"
              width={500}
              height={500}
              onError={handleImageError}
            />
            <div className="flex mt-4 gap-2">
              {[product.image, ...product.images].map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className={`w-16 h-16 rounded-lg object-contain cursor-pointer ${
                    mainImage === img
                      ? "border-2 dark:border-white border-black"
                      : ""
                  }`}
                  width={64}
                  height={64}
                  onClick={() => setMainImage(img)}
                  onError={handleImageError}
                />
              ))}
            </div>
          </div>

          <div className="w-1/2">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-gray-500">{product.description}</p>
            <span className="flex gap-1">
              {[...Array(Math.floor(product.rating))].map((_, i) => (
                <Star key={i} size={18} weight="fill" />
              ))}
              {product.rating % 1 !== 0 && <StarHalf size={18} weight="fill" />}
              {[...Array(5 - Math.ceil(product.rating))].map((_, i) => (
                <Star
                  key={i + Math.ceil(product.rating)}
                  size={18}
                  weight="regular"
                />
              ))}
            </span>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xl font-bold">${product.sale_price}</span>
              <span className="text-gray-400 line-through">
                ${product.price}
              </span>
            </div>

            <p className="text-sm text-gray-500">{} in stock</p>

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
            <div className="mt-4">
              <p className="text-sm font-medium">colors:</p>
              <div className="flex gap-2 mt-2">
                {colors.map((color) => (
                  <Button
                    key={color.id}
                    variant={selectedColor === color.value ? "default" : "outline"}
                    onClick={() => setSelectedColor(color.value)}
                  >
                    {color.value}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-6 flex gap-4 items-center flex-wrap">
              <span>
                <p>Quantity</p>
                <Input
                  type="number"
                  className="w-16 p-2 border rounded-lg"
                  defaultValue={1}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  min={1}
                />
              </span>
              <Button className="w-full" onClick={(e) => handleAddToCart(e)}>Add to Cart</Button>
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
          className="mt-8 flex flex-row "
        >
          <TabsList className="flex flex-col h-full bg-transparent">
            <TabsTrigger
              value="description"
              className="px-4 py-2 hover:underline bg-transparent data-[state=active]:underline border-none rounded-none data-[state=active]:shadow-none ease-in-out transition-all duration-300"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="info"
              className=" px-4 py-2  hover:underline bg-transparent data-[state=active]:underline border-none rounded-none data-[state=active]:shadow-none ease-in-out transition-all duration-300"
            >
              Additional Info
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="px-4 py-2 hover:underline bg-transparent data-[state=active]:underline border-none rounded-none data-[state=active]:shadow-none ease-in-out transition-all duration-300"
            >
              Reviews (23)
            </TabsTrigger>
            <TabsTrigger
              value="questions"
              className="px-4 py-2 hover:underline bg-transparent data-[state=active]:underline border-none rounded-none data-[state=active]:shadow-none ease-in-out transition-all duration-300"
            >
              Questions
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="py-2">
            <p>{product.description}</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Brand: {product.brand}</li>
              <li>Stock: {}</li>
              <li>Discount: {product.discount}%</li>
            </ul>
          </TabsContent>
          <TabsContent value="info" className="py-2">
            Additional Info content here...
          </TabsContent>
          <TabsContent value="reviews" className="py-2">
            Reviews content here...
          </TabsContent>
          <TabsContent value="questions" className="py-2">
            Questions content here...
          </TabsContent>
        </Tabs>
        <div>
          <Random_productLine product_list={random_product} />
        </div>
      </div>
    </div>
  );
}
