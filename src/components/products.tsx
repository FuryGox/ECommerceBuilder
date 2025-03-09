import { Star, StarHalf } from "@phosphor-icons/react/dist/ssr";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";
import { Button } from "./ui/button";
import exp from "node:constants";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
export default function Products() {
  return (
    <div className="flex justify-center items-center flex-col max-w-[1440px] w-full mx-auto">
      <CardSliderH />
      <ProductTabs />
    </div>
  );
}
export function Product() {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="bg-gray-200">
        <Image
          src="/product.jpg"
          alt="Product Image"
          width={270}
          height={350}
          className="bg-gray-200"
        />
      </div>
      <span className="flex gap-1">
        <Star size={18} weight="fill" />
        <Star size={18} weight="fill" />
        <Star size={18} weight="fill" />
        <Star size={18} weight="fill" />
        <StarHalf size={18} weight="fill" />
      </span>
      <h3>Product Name</h3>
      <span className="flex justify-start gap-1">
        <p className="font-semibold">$200 </p>
        <p className="line-through text-base">$900 </p>
      </span>
    </div>
  );
}

export function CardSliderH() {
  return (
    <div className="w-full max-w-[80vw]">
      <div className="text-2xl font-bold px-4 py-8">
        New Arrivals
      </div>
      <ScrollArea>
        <div className="flex w-full max-w-[80vw] space-x-4 p-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export function ProductCard() {
  return (
    <div className="flex flex-col gap-1 bg-gray-100 p-4 rounded-2xl">
      <div className="bg-gray-200 mb-5">
        <Image
          src="/product.jpg"
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
          Product Name
        </Button>
      </span>
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

export function ProductList() {
  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 justify-between gap-y-8 mb-4">
      {Array.from({ length: 24 }).map((_, i) => (
        <Product key={i} />
      ))}
    </div>
  );
}
