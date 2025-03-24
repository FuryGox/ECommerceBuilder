"use client";
import {
  Bag,
  CaretDown,
  MagnifyingGlass,
  MoonStars,
  SlackLogo,
  Translate,
  User,
} from "@phosphor-icons/react/dist/ssr";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import User_header from "../user/user_header";
import { ThemeToggle } from "./theme-toggle";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "../provider/i18next-provider";
import { useCart } from "../provider/cart-provider";
import CartModal from "../cart";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full  py-4 px-6 fixed top-0 mx-auto z-50 shadow-md bg-white dark:bg-black">
      <HeaderLogo />
      <HeaderNav />
      <HeaderIconMenu />
    </div>
  );
}

export function HeaderPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button>Open</button>
      </PopoverTrigger>
      <PopoverContent>
        <div>Content</div>
      </PopoverContent>
    </Popover>
  );
}

export function HeaderLogo() {
  return (
    <a href="/" className="font-bold text-2xl">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <SlackLogo size={32} />
        Logo Name
      </h1>
    </a>
  );
}

export function HeaderIconMenu() {
  const { t } = useTranslation();
  const { changeLanguage } = useChangeLanguage();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="flex gap-4">
      <div className="flex items-center justify-center">
        <MagnifyingGlass size={24} />
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex items-center justify-center">
            <Translate size={24} className="cursor-pointer" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col gap-4 items-center justify-center">
          <Button variant="ghost" onClick={() => changeLanguage("en")}>
            {t("lang_en")}
          </Button>
          <Button variant="ghost" onClick={() => changeLanguage("vi")}>
            {t("lang_vi")}
          </Button>
        </PopoverContent>
      </Popover>

      <ThemeToggle />

      <User_header />
      <span className="relative w-10 h-10 flex items-center justify-center" onClick={handleOpenCart}>
        <Bag size={24} />
        <CartNumber quantity={(cartItems.length) > 9 ? "9+": cartItems.length.toString() } />
      </span>
      {isCartOpen && <CartModal onClose={handleCloseCart} />}
    </div>
  );
}

export function HeaderNav() {
  return (
    <nav>
      <ul className="gap-4 hidden sm:hidden md:flex lg:flex xl:flex">
        <li>
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:underline">
            Shop
          </a>
        </li>
        <li className="flex flex-row items-center gap-1">
          <a href="/" className="hover:underline">
            Product
          </a>
          <CaretDown size={14} weight="bold" />
        </li>
        <li className="flex flex-row items-center gap-1">
          <a href="/about" className="hover:underline">
            Pages
          </a>
          <CaretDown weight="bold" size={14} />
        </li>
      </ul>
    </nav>
  );
}

interface CartNumberProps {
  quantity: string;
}
export function CartNumber({ quantity }: CartNumberProps) {
  return (
    <div className="absolute bottom-[25px] left-[30px] flex items-center justify-center w-5 h-5 rounded-full bg-black text-white dark:bg-white dark:text-black">
      <div className="flex items-center justify-center w-5 h-5 rounded-full text-[12px] bg-black text-white dark:bg-white dark:text-black">
        {quantity}
      </div>
    </div>
  );
}
