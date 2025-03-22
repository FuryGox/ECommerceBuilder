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
      <h2 className="text-lg font-semibold">{name}</h2>
      {sale_price ? (
        <p className="">
          {sale_price}{" "}
          <span className="line-through text-gray-400 ml-2">{price}</span>
        </p>
      ) : (
        <p>{price}</p>
      )}
    </div>
  );
}
