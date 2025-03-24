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
import { getRandomProducts,  } from "@/lib/tempdata";
import { getProducts } from "@/lib/api/product";
import { product_data } from "@/lib/datatype/product";

const product_temp =  await getProducts(1) 
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
