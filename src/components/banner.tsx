import {
  SlackLogo,
  ArrowRight,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function ProductBanner() {
  return (
    <div
      className="flex items-center w-full h-[50vh] -z-20"
      style={BannerStytle}
    >
      <div className="relative">
        <div className="absolute bottom-28 left-23 w-[20vw] h-full p-8">
          <div className="text-3xl  font-bold gap-2">AirNags</div>
          <div className="text-sm opacity-70 pb-4 pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="text-sm flex flex-row gap-2 border-b-2 w-max pb-1 border-gray-700">
            See Collection
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
      <div className="absolute flex justify-center items-center w-full h-full">
        <img
          src="/images/NIKE+REVOLUTION+7-removebg-preview.png"
          alt="Product Image"
          className=" -z-10 w-fit"
        />
      </div>
    </div>
  );
}

export function ProductBannerS() {
  return (
    <div className="w-full">
      <div className="flex items-center w-full h-[50vh] relative ">
        <div
          className="absolute flex justify-center w-full h-full items-center -z-10 "
          style={BannerStytleS}
        />
        <div className="w-1/2 hidden text-black md:block lg:block xl:block 2xl:block">
          <div className="text-5xl font-bold gap-2 p-8">
            <h1>Join our newsletter.</h1>
            <h1>Enjoy big discounts.</h1>
          </div>
          <div>
            <div className="flex flex-row items-center gap-2 mx-8 w-[40vw] border-b-2 border-gray-800">
              <EnvelopeSimple size={32} />
              <Input
                className="focus-visible:ring-0 rounded-none border-none shadow-none"
                type="email"
                placeholder="Your Email"
              />
              <Button className="rounded-none px-8 bg-transparent text-black shadow-none hover:bg-gray-800 hover:text-white transition-colors duration-300 ease-linear text-base">
                Subscribe
              </Button>
            </div>
            <div className="flex flex-row items-center gap-2 my-4 mx-8">
              <Checkbox
                id="terms"
                className="border-1 border-black rounded-full"
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none opacity-70"
              >
                I agree to receive marketing emails.
              </label>
            </div>
          </div>
          <div></div>
        </div>
        <div className="">
          <img
            src="/images/NIKE+REVOLUTION+7-removebg-preview.png"
            alt="Product Image"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="w-full  sm:block md:hidden lg:hidden xl:hidden 2xl:hidden ">
          <div className="text-5xl text-black font-bold gap-2 p-8">
            <h1>Join our newsletter.</h1>
            <h1>Enjoy big discounts.</h1>
          </div>
          <div>
            <div className="flex flex-row items-center gap-2 mx-8 w-[80vw] border-b-2 border-gray-800">
              <EnvelopeSimple size={32} />
              <Input
                className="focus-visible:ring-0 rounded-none border-none shadow-none"
                type="email"
                placeholder="Your Email"
              />
              <Button className="rounded-none px-8 bg-transparent text-black shadow-none hover:bg-gray-800 hover:text-white transition-colors duration-300 ease-linear text-base">
                Subscribe
              </Button>
            </div>
            <div className="flex flex-row items-center gap-2 my-4 mx-8">
              <Checkbox
                id="terms"
                className="border-1 border-black rounded-full"
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none opacity-70"
              >
                I agree to receive marketing emails.
              </label>
            </div>
          </div>
          <div></div>
        </div>
    </div>
  );
}

export function ProductBannerVideoS() {
  return (
    <div className="grid items-center w-full my-10">
      <div className="flex flex-col items-center w-full">
        <div className="text-5xl font-bold gap-2 p-8">AirNags</div>
        <div className="text-sm opacity-70 pb-4 pt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
      <div className="flex px-8 items-center w-full max-h-[70vh] ">
        <video
          autoPlay
          loop
          muted
          className="w-full max-h-[70vh] object-cover rounded-4xl overflow-hidden"
        >
          <source
            suppressHydrationWarning
            src="https://videos.pexels.com/video-files/4896531/4896531-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}

const BannerStytle: React.CSSProperties = {
  background:
    "linear-gradient(51deg, rgba(228,228,224,1) 13%, rgba(110,131,212,1) 26%, rgba(235,171,208,0.8594625350140056) 41%, rgba(231,103,76,0.8634259259259259) 55%, rgba(36,173,222,0.6362920168067228) 68%, rgba(29,253,222,0.37962962962962965) 76%, rgba(69,219,252,0.09755777310924374) 93%)",
  filter:
    'progid:DXImageTransform.Microsoft.gradient(startColorstr="#e4e4e0",endColorstr="#45dbfc",GradientType=1)',
};

const BannerStytleS: React.CSSProperties = {
  background:
    "linear-gradient(53deg, rgba(228,228,224,1) 40%, rgba(193,226,230,1) 75%, rgba(69,219,252,1) 100%)",
  filter:
    'progid:DXImageTransform.Microsoft.gradient(startColorstr="#e4e4e0",endColorstr="#45dbfc",GradientType=1)',
};
