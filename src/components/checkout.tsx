import { useEffect, useState } from "react";
import { PayOSConfig, usePayOS } from "@payos/payos-checkout";
import { CartItem } from "./provider/cart-provider";
import { useAuth } from "./provider/auth-provider";
import { Button } from "./ui/button";


interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkedProducts: CartItem[];
  totalAmount: number;
}

const PaymentModal = ({
  isOpen,
  onClose,
  checkedProducts,
  totalAmount,
}: PaymentModalProps) => {
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
  const { user } = useAuth();
  const { open, exit } = usePayOS({
    RETURN_URL: process.env.NEXT_PUBLIC_FRONTEND_HOST ?? "http://localhost:3000",
    ELEMENT_ID: "PAYOS_CHECKOUT",
    CHECKOUT_URL: paymentUrl || "",
    embedded: true,
    onSuccess: () => {
      onClose;
    },
    onCancel: () => {
      onClose;
    },
    onExit: () => {
      onClose;
    },
  });

  const checkout = async () => {
    if (!user) {
      alert("Vui lòng đăng nhập trước khi thanh toán.");
      return;
    }

    try {
      const transactionData = {
        userId: user.id,
        item_list: checkedProducts.map((item) => ({
          productId: item.id,
          option: item.option
            ? `${item.option.size || ""} ${item.option.color || ""}`.trim()
            : "Default",
          amount: item.quantity,
          price: Number(item.price),
        })),
        location: "HCM",
        PhoneNumber: "0995652",
        pay_amount: totalAmount,
      };

      // Gửi yêu cầu tạo giao dịch
      const createResponse = await fetch(
        process.env.NEXT_PUBLIC_API_HOST ?? "" + "/api/transaction/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(transactionData),
          credentials: "include",
        }
      );

      const createResult = await createResponse.json();
      if (!createResponse.ok) throw new Error("Lỗi khi tạo giao dịch");

      // Gửi yêu cầu lấy link thanh toán
      const payResponse = await fetch(
        process.env.NEXT_PUBLIC_API_HOST ?? "" + "/api/transaction/pay",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ transactionId: createResult.id }),
          credentials: "include",
        }
      );

      const payResult = await payResponse.json();
      if (!payResponse.ok) throw new Error("Lỗi khi tạo link thanh toán");

      window.location.href = payResult.paymentUrl;
    } catch (error) {
      console.error("Lỗi khi checkout:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại!");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="bg-white p-6 rounded-lg w-3/4 max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Xác nhận thanh toán</h2>
        <p className="mb-4">
          Tổng tiền: <strong>{totalAmount} VNĐ</strong>
        </p>

        <Button onClick={checkout}>Tạo Link Thanh Toán</Button>

        <Button
          onClick={() => {
            onClose();
          }}
          className="mt-4"
        >
          Hủy
        </Button>
      </div>
    </div>
  );
};

export default PaymentModal;
