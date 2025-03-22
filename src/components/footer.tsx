import { SlackLogo } from "@phosphor-icons/react/dist/ssr";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="w-full bg-background px-6 pt-8">
      <div className="flex flex-row w-full my-2 pb-4 items-center justify-between">
        <div className="w-2/6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <SlackLogo size={46} />
            Logo Name
          </h1>
          <span className="text-sm opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>
        <div className="flex-row justify-between justify-items-start w-3/6 px-8 hidden md:flex lg:flex xl:flex">
          <div>
          <ul className="grid gap-[0.5rem]">
              <span className="font-medium ">Shop</span>
              <li className="text-sm opacity-70 hover:underline">My Account</li>
              <li className="text-sm opacity-70 hover:underline">Login</li>
              <li className="text-sm opacity-70 hover:underline">Wishlist</li>
              <li className="text-sm opacity-70 hover:underline">Cart</li>
            </ul>
          </div>
          <div>
            <ul className="grid gap-[0.5rem]">
              <span className="font-medium">Information</span>
              <li className="text-sm opacity-70 hover:underline">Shipping Policy</li>
              <li className="text-sm opacity-70 hover:underline">Returns & Refunds</li>
              <li className="text-sm opacity-70 hover:underline">Cookies Policy</li>
              <li className="text-sm opacity-70 hover:underline">Frequently asked</li>
            </ul>
          </div>
          <div>
          <ul className="grid gap-[0.5rem]">
              <span className="font-medium">Company</span>
              <li className="text-sm opacity-70 hover:underline">About us</li>
              <li className="text-sm opacity-70 hover:underline">Privacy Policy</li>
              <li className="text-sm opacity-70 hover:underline">Terms & Conditions</li>
              <li className="text-sm opacity-70 hover:underline">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <Separator />
      <div className="flex flex-row w-full mt-2 px-8 py-2 items-center justify-between">
        <div>
          <p className="text-center text-sm">© 2022 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
