"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/slider1.png" },
  { src: "/slider2.png" },
  { src: "/slider3.png" },
  { src: "/slider4.png" },
];

export default function FullSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-[16/9] bg-black overflow-hidden">
      {/* Image Slides */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-out ${
            index === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.src}
            alt=""
            fill
            priority
            className="
              object-cover
              object-center
            "
          />
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`
              transition-all duration-500 rounded-full
              ${index === idx
                ? "h-[4px] w-16 bg-white"
                : "h-[2px] w-10 bg-white/40"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
