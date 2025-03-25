"use client";

import { product_data } from "@/lib/datatype/product";

import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Eye,
  EyeClosed,
  Heart,
  Scales,
  Star,
  StarHalf,
} from "@phosphor-icons/react";
import Product_card_title from "./product_card_title";
import Product_card_hover from "./product_card_hover";
import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import ProductActions from "./product_card_hover";
import { useCart } from "../provider/cart-provider";

export function Product_card_xl({
  product,
  title_pos,
}: {
  product: product_data;
  title_pos?: "center" | "end" | "start";
}) {
  const router = useRouter();

  return (
    <div
      className="flex flex-col gap-y-2 w-fit"
      onClick={() => {
        router.push(`/product/${product.id}`);
      }}
    >
      <div className="relative group w-fit rounded-2xl">
        <div className=" w-fit relative ">
          <Image
            src={product.image}
            alt="Product Image"
            width={500}
            height={900}
            className="bg-transparent rounded-2xl w-[500px] h-[900px] "
          />
          <ProductActions productId={product.id} />
        </div>
        <span className="flex gap-1 my-2">
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
        <Product_card_title
          name={product.name}
          price={product.price}
          sale_price={product.sale_price}
          pos={title_pos}
        />
      </div>
    </div>
  );
}

export function Product_card_lg({
  product,
  title_pos,
}: {
  product: product_data;
  title_pos?: "center" | "end" | "start";
}) {
  const router = useRouter();

  return (
    <div
      className="flex flex-col gap-y-2 w-fit"
      onClick={() => {
        router.push(`/product/${product.id}`);
      }}
    >
      <div className="relative group w-fit rounded-2xl">
        <div className=" w-fit relative ">
          <Image
            src={product.image}
            alt="Product Image"
            width={400}
            height={700}
            className="bg-transparent rounded-2xl w-[400px] h-[700px] "
          />
          <ProductActions productId={product.id} />
        </div>
        <span className="flex gap-1 my-2">
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
        <Product_card_title
          name={product.name}
          price={product.price}
          sale_price={product.sale_price}
          pos={title_pos}
        />
      </div>
    </div>
  );
}

export function Product_card_md({
  product,
  title_pos,
  imageWidth = 300,
  imageHeight = 300,
  imageClassName = "",
}: {
  product: product_data;
  title_pos?: "center" | "end" | "start";
  imageWidth?: number;
  imageHeight?: number;
  imageClassName?: string;
}) {
  const router = useRouter();
  const {addToCart} = useCart();
  return (
    <div
      className="flex flex-col gap-y-2 w-fit shadow-lg rounded-xl pt-4 pb-5 px-4 border"
      onClick={() => {
        router.push(`/product/${product.id}`);
      }}
    >
      <div className="relative group w-[300px] rounded-2xl">
        <div className="w-fit relative">
          <Image
            src={product.image}
            alt="Product Image"
            width={imageWidth}
            height={imageHeight}
            className={`bg-transparent rounded-2xl w-[300px] h-[300px] `}
          />
          <ProductActions productId={product.id} />
        </div>
        <span className="flex gap-1 my-2">
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
        <Product_card_title
          name={product.name}
          price={product.price}
          sale_price={product.sale_price}
          pos={title_pos}
        />
      </div>
    </div>
  );
}

export function Product_card_sm({
  product,
  title_pos,
}: {
  product: product_data;
  title_pos?: "center" | "end" | "start";
}) {
  const router = useRouter();

  return (
    <div
      className="flex flex-col gap-y-2 w-fit"
      onClick={() => {
        router.push(`/product/${product.id}`);
      }}
    >
      <div className="relative group w-fit rounded-2xl">
        <div className=" w-fit relative ">
          <Image
            src={product.image}
            alt="Product Image"
            width={200}
            height={300}
            className="bg-transparent rounded-2xl w-[200px] h-[300px] "
          />
          <ProductActions productId={product.id} />
        </div>
        <span className="flex gap-1 my-2">
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
        <Product_card_title
          name={product.name}
          price={product.price}
          sale_price={product.sale_price}
          pos={title_pos}
        />
      </div>
    </div>
  );
}

export function Product_card_tiny({
  product,
  title_pos,
}: {
  product: product_data;
  title_pos?: "center" | "end" | "start";
}) {
  const router = useRouter();

  return (
    <div
      className="flex flex-col gap-y-2 w-fit"
      onClick={() => {
        router.push(`/product/${product.id}`);
      }}
    >
      <div className="relative group w-fit rounded-2xl">
        <div className=" w-fit relative ">
          <Image
            src={product.image}
            alt="Product Image"
            width={100}
            height={200}
            className="bg-transparent rounded-2xl w-[100px] h-[200px] "
          />
          <ProductActions productId={product.id} />
        </div>
        <span className="flex gap-1 my-2">
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
        <Product_card_title
          name={product.name}
          price={product.price}
          sale_price={product.sale_price}
          pos={title_pos}
        />
      </div>
    </div>
  );
}
