import ProductBanner, { ProductBannerS, ProductBannerVideoS } from "@/components/banner";
import EmblaCarousel from "@/components/carousel";
import Footer from "@/components/footer";
import Header from "@/components/site-header/header";
import Products from "@/components/products";
import { Service } from "@/components/service";
import { EmblaOptionsType } from 'embla-carousel'
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <div className="items-center justify-items-center min-h-screen w-full font-[family-name:var(--font-geist-sans)]">
        <Header />
        <div className="flex flex-col w-full mt-16 items-center sm:items-start " style={{scrollbarWidth: 'none'}} >
          
          <ProductBanner />
          <EmblaCarousel />
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
