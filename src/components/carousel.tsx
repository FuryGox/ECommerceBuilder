"use client";

import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ComponentPropsWithRef, useEffect, useState } from "react";

const images = [
  '/images/dummy_600x400_000000_ffef87.png',
  '/images/dummy_600x400_000000_cfbcf4.png',
  '/images/dummy_600x400_000000_aef993.png',
  '/images/dummy_600x400_000000_83eaef.png',
];

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((src, index) => (
            <div className="embla__slide" key={index}>
              <img className="embla__slide__img" src={src} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="embla__dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
