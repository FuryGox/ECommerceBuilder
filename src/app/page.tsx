import ProductBanner, {
  ProductBannerS,
  ProductBannerVideoS,
} from "@/components/banner";
import EmblaCarousel from "@/components/carousel";
import Footer from "@/components/footer";
import Header from "@/components/site-header/header";
import Products from "@/components/products";
import { Service } from "@/components/service";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import LoginByGoogleComponent from "@/components/provider/google-login";
import { getRandomProducts, product_list_example } from "@/lib/tempdata";
import {
  Product_card_lg,
  Product_card_md,
  Product_card_sm,
} from "@/components/product_card/product_card";

const product_temp = product_list_example[0];
export default function Home() {
  return (
    <div>
      <div className="items-center justify-items-center min-h-screen w-full font-[family-name:var(--font-geist-sans)]">
        <Header />
        <div
          className="flex flex-col w-full mt-16 items-center sm:items-start "
          style={{ scrollbarWidth: "none" }}
        >
          <ProductBanner />
          <div className="mx-auto max-w-[1200px]">
            <EmblaCarousel />
            <Products />
            <Product_card_md product={product_temp} />
          </div>

          <ProductBannerVideoS />
          <ProductBannerS />
          <Service />
        </div>
        <Footer />
      </div>
    </div>
  );
}
