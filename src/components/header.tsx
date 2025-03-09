import {
  Bag,
  CaretDown,
  MagnifyingGlass,
  SlackLogo,
  User,
} from "@phosphor-icons/react/dist/ssr";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full  py-4 px-6 fixed top-0 mx-auto z-50 bg-white shadow-md">
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
  return (
    <div className="flex gap-4">
      <MagnifyingGlass size={24} />
      <User size={24} />
      <span className="relative">
        <Bag size={24} />
        <CartNumber items="2" />
      </span>
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
  items: string;
}
export function CartNumber({ items }: CartNumberProps) {
  return (
    <div className="absolute bottom-5 left-5 flex items-center justify-center w-4 h-4 bg-black text-white rounded-full">
      <div className="flex items-center justify-center w-4 h-4 bg-black text-white rounded-full text-[12px]">
        {items}
      </div>
    </div>
  );
}
