"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// ✅ Desktop + Mobile version
const images = [
  { src: "/slider1-rev.png", mobile: "/fix-slider.png" },
  { src: "/slider2-rev.png", mobile: "/slider-mbl2.png" },
];

export default function FullSlider() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect mobile screen
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "calc(100vh - 88px)" }}
    >
      {/* Image Slides */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-out ${
            index === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={isMobile ? img.mobile : img.src}
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-50">
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
