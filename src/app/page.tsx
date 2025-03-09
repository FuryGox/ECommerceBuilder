import ProductBanner, { ProductBannerS, ProductBannerVideoS } from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Products from "@/components/products";
import { Service } from "@/components/service";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="items-center justify-items-center min-h-screen w-full font-[family-name:var(--font-geist-sans)]">
        <Header />
        <div className="flex flex-col w-full mt-16 items-center sm:items-start">
          
          <ProductBanner />
          <Products />
          <ProductBannerVideoS />
          <ProductBannerS />
          <Service />
        </div>
        <Footer />
      </div>
    </div>
  );
}
