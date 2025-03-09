import {
  LockKey,
  MoneyWavy,
  Phone,
  Truck,
} from "@phosphor-icons/react/dist/ssr";
import { Separator } from "./ui/separator";

export function Service() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-between w-full bg-white px-8 py-12 gap-4">
      <div className="flex flex-col w-1/5 justify-start gap-2">
        <h1 className="text-2xl font-bold flex flex-row gap-2">
          <Truck size={28} />
          Free Shipping
        </h1>
        <span className="text-sm opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div className="bg-[#636363] w-[1px] h-[5rem] " />
      <div className="flex flex-col w-1/5 justify-start gap-2">
        <h1 className="text-2xl font-bold flex flex-row gap-2">
          <MoneyWavy size={28} />
          Money-back
        </h1>
        <span className="text-sm opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div className="bg-[#636363] w-[1px] h-[5rem] " />
      <div className="flex flex-col w-1/5 justify-start gap-2">
        <h1 className="text-2xl font-bold flex flex-row gap-2">
          <Phone size={28} />
          Premium support
        </h1>
        <span className="text-sm opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div className="bg-[#636363] w-[1px] h-[5rem] " />
      <div className="flex flex-col w-1/5 justify-start gap-2">
        <h1 className="text-2xl font-bold flex flex-row gap-2">
          <LockKey size={28} />
          Secure Payments
        </h1>
        <span className="text-sm opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
    </div>
  );
}
