import { CartItem, useCart } from "@/components/provider/cart-provider";
import { Trash, X } from "@phosphor-icons/react";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import PaymentModal from "./checkout"; 

interface CartModalProps {
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [isPaymentOpen, setIsPaymentOpen] = useState<boolean>(false); // State hiển thị modal thanh toán

  // Xử lý chọn/bỏ chọn sản phẩm
  const handleCheck = (id: string) => {
    setCheckedItems((prevChecked) =>
      prevChecked.includes(id)
        ? prevChecked.filter((item) => item !== id)
        : [...prevChecked, id]
    );
  };

  // Lọc sản phẩm đã chọn
  const checkedProducts = cartItems.filter((item) =>
    checkedItems.includes(item.id)
  );

  // Tính tổng tiền
  const totalAmount = checkedProducts.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className="h-screen w-screen absolute right-0 top-0">
      <div className="z-40 w-full h-full absolute opacity-30 bg-black"></div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[65vw] h-[50vh] max-w-[700px] max-h-[800px] opacity-100 absolute border border-foreground bg-background rounded-2xl px-8 py-4 z-50">
          <div className="flex flex-row h-1/12 justify-between">
            <h2 className="text-2xl">Cart</h2>
            <X size={32} onClick={onClose} />
          </div>
          <div className="w-full h-10/12 flex flex-col justify-between overflow-auto">
            {cartItems.length === 0 ? (
              <p>Giỏ hàng trống</p>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="h-[100px] flex flex-row justify-evenly items-center my-4"
                  >
                    <Input
                      type="checkbox"
                      className="w-[24px]"
                      checked={checkedItems.includes(item.id)}
                      onChange={() => handleCheck(item.id)}
                    />
                    <Image
                      src={item.images}
                      alt={item.id.toString()}
                      width={75}
                      height={75}
                      className="w-[100px] h-[100px] overflow-hidden rounded-[12px] bg-gray-200"
                    />
                    <div className="grid">
                      <div className="w-56 truncate whitespace-nowrap overflow-hidden text-xl">
                        {item.name}
                      </div>
                      <div>{item.price}$</div>
                    </div>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                      className="w-1/5"
                    />
                    <div className="cursor-pointer rounded-md hover:bg-gray-300 w-[44px] h-[44px] flex items-center justify-center">
                      <Trash
                        onClick={() => removeFromCart(item.id)}
                        size={32}
                        color="#f00a0a"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex flex-row justify-between">
            <Button
              className="w-8/12 h-1/12"
              onClick={() => setIsPaymentOpen(true)}
              disabled={checkedProducts.length === 0}
            >
              Checkout
            </Button>
            <Button onClick={clearCart} className="w-3/12 h-1/12">
              Clear cart
            </Button>
          </div>
        </div>
      </div>

      {/* Hiển thị modal thanh toán */}
      {isPaymentOpen && (
        <PaymentModal
          isOpen={isPaymentOpen}
          onClose={() => setIsPaymentOpen(false)}
          checkedProducts={checkedProducts}
          totalAmount={totalAmount}
        />
      )}
    </div>
  );
};

export default CartModal;
