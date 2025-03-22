"use client";

import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ComponentPropsWithRef, useEffect, useState } from "react";

const images = [
  "https://picsum.photos/600/200?random=237.jpg",
  "https://picsum.photos/600/200?random=8949.jpg",
  "https://picsum.photos/600/200?random=232.jpg",
  "https://picsum.photos/600/200?random=33.jpg",
];

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((src, index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={src}
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="embla__dots absolute bottom-[30px] right-0 w-full">
        <div className="flex  justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              className={`embla__dot ${
                index === selectedIndex ? "embla__dot--selected" : ""
              }`}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
