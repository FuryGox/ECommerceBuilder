// CartModal.js
import { useCart } from "@/components/provider/cart-provider";
import { Trash, X } from "@phosphor-icons/react";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface CartModalProps {
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="h-screen w-screen absolute right-0 top-0">
      <div className="z-40 w-full h-full absolute opacity-30 bg-black"></div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[50vw] h-[50vh] max-w-[600px] max-h-[800px] opacity-100 absolute border border-foreground bg-background rounded-2xl px-8 py-4 z-50">
          <div className="flex flex-row h-1/12 justify-between">
            <h2 className="text-2xl">Cart</h2>
            <X size={32} onClick={onClose} />
          </div>
          <div className="w-full h-11/12 flex flex-col justify-between">
            {cartItems.length === 0 ? (
              <p>Giỏ hàng trống</p>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-row justify-evenly items-center"
                  >
                    <Image
                      src={item.images}
                      alt={item.id.toString()}
                      width={75}
                      height={75}
                      className="w-[75px] h-[75px] overflow-hidden rounded-[12px] bg-gray-200"
                    />
                    <div className="grid">
                      <span>{item.name}</span>
                      <span>{item.price}$</span>
                    </div>
                    <Input
                      type="number"
                      value={item.quantity}
                      className="w-1/5"
                    />
                    <Button 
                    
                    className="w-[32px] h-[32px]"
                    onClick={() => removeFromCart(item.id)}>
                      <Trash size={32} />
                    </Button> 
                  </li>
                ))}
              </ul>
            )}
            <Button onClick={clearCart}>Clear cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
