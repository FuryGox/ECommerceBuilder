import { ArrowRight } from "@phosphor-icons/react";

export default function Product_card_title({
  name,
  sale_price,
  price,
  pos,
  className,
}: {
  name: string;
  sale_price?: string;
  price: string;
  pos?: "start" | "center" | "end";
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-${pos} ${className}`}>
      <h2
        className="text-lg font-semibold leading-tight"
        style={{
          display: "-webkit-box",
          overflow: "hidden",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {name}
      </h2>
      {sale_price ? (
        <p className="text-orange-600">
          <span className="underline">
            {new Intl.NumberFormat("vi-VN").format(Number(sale_price))} đ
          </span>
          <span className="line-through text-gray-400 ml-2 ">
            {new Intl.NumberFormat("vi-VN").format(Number(price))} đ
          </span>
        </p>
      ) : (
        <p className="underline text-orange-600">
          {new Intl.NumberFormat("vi-VN").format(Number(price))} đ
        </p>
      )}
    </div>
  );
}
