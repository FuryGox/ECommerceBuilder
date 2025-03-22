"use client";
import { Star, StarHalf } from "@phosphor-icons/react/dist/ssr";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {  product_data } from "@/lib/datatype/product";
import Image from "next/image";
import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { useRouter } from "next/navigation";

import { product_list_example } from "@/lib/tempdata";
import { Card } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import {
  Product_card_lg,
  Product_card_md,
  Product_card_sm,
} from "./product_card/product_card";

export default function Products() {
  return (
    <div className="flex justify-center items-center flex-col max-w-[1440px] w-full mx-auto">
      <CardSliderH />
      <ProductTabs />
    </div>
  );
}
export function Product({ product }: { product: product_data }) {
  const router = useRouter();

  return (
    <div
      className="flex flex-col gap-y-2"
      onClick={() => {
        router.push(`/product/${product.id}`);
      }}
    >
      <div className="bg-gray-200">
        <Image
          src={product.image}
          alt="Product Image"
          width={270}
          height={350}
          className="bg-gray-200"
        />
      </div>
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
      <h3>{product.name}</h3>
      <span className="flex justify-start gap-1">
        <p className="font-semibold">${product.sale_price} </p>
        <p className="line-through text-base">${product.price} </p>
      </span>
    </div>
  );
}

export function ProductCard({ product }: { product: product_data }) {
  return (
    <div className="flex flex-col gap-1 bg-gray-100 p-4 rounded-2xl">
      <div className="bg-gray-200 mb-5">
        <Image
          src={product.image}
          alt="Product Image"
          width={250}
          height={300}
          className="bg-gray-200"
        />
      </div>

      <span className="flex gap-1 justify-center">
        <Button
          variant={"outline"}
          className="rounded-4xl px-4 h-[2.25rem] text-base border-black-[0.25px]"
        >
          {product.name}
        </Button>
      </span>
    </div>
  );
}

export function ProductList() {
  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 justify-between gap-y-8 mb-4">
      {product_list_example.map((product) => (
        <Product_card_md
          key={product.id}
          product={product}
          imageClassName="2xl:h-[400px] xl:h-[380px] md:h-[350px] sm:h-[320px] h-[300px]"
        />
      ))}
    </div>
  );
}

export function CardSliderH() {
  return (
    <div className="max-w-[80vw] ">
      <h1 className="text-2xl">New Arrivals</h1>
      <div className="w-full">
        <ScrollArea>
          <div className="flex w-max space-x-4 p-4">
            {product_list_example.map((product) => (
              <Product_card_md
                key={product.id}
                product={product}
                imageClassName="2xl:h-[400px] xl:h-[380px] md:h-[350px] sm:h-[320px] h-[300px]"
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}

export function LoadMore() {
  return (
    <div className="flex justify-center">
      <Button className="rounded-4xl my-4 px-12 h-[3rem] text-base">
        Load More
      </Button>
    </div>
  );
}

export function ProductTabs() {
  return (
    <Tabs defaultValue="Best" className="w-full">
      <TabsList className="flex justify-center w-full items-center gap-4 font-bold my-8 text-xl bg-transparent shadow-none">
        <div>
          <TabsTrigger
            className="rounded-none text-lg pb-1 data-[state=active]:border-b-2 border-black-[0.25px]"
            style={{ boxShadow: "none" }}
            value="Best"
          >
            Best Sellers
          </TabsTrigger>
          <TabsTrigger
            className=" rounded-none text-lg pb-1 data-[state=active]:border-b-2 border-black-[0.25px]"
            style={{ boxShadow: "none" }}
            value="New"
          >
            New Arrivals
          </TabsTrigger>
          <TabsTrigger
            className=" rounded-none text-lg pb-1 data-[state=active]:border-b-2 border-black-[0.25px]"
            style={{ boxShadow: "none" }}
            value="Sale"
          >
            Sale
          </TabsTrigger>
        </div>
      </TabsList>
      <TabsContent value="Best">
        <div className="flex w-full flex-wrap gap-4 justify-center ">
          <ProductList />
        </div>

        <LoadMore />
      </TabsContent>
      <TabsContent value="New">
        <div className="flex w-full flex-wrap gap-4 justify-center ">
          <ProductList />
        </div>

        <LoadMore />
      </TabsContent>
      <TabsContent value="Sale">
        <div className="flex w-full flex-wrap gap-4 justify-center ">
          <ProductList />
        </div>
        <LoadMore />
      </TabsContent>
    </Tabs>
  );
}

export function Random_productLine({
  product_list,
}: {
  product_list: product_data[];
}) {
  const router = useRouter();

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">You might also like</h2>
      <div className="w-full">
        <ScrollArea>
          <div className="flex w-max space-x-4 p-4">
            {product_list.map((product) => (
              <Product_card_md
                key={product.id}
                product={product}
                imageClassName="2xl:h-[400px] xl:h-[380px] md:h-[350px] sm:h-[320px] h-[300px]"
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
//product_list_example.slice(1, 5)
