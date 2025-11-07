"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// ✅ Desktop + Tablet + Mobile
const images = [
  { src: "/slider1-rev.png", tab: "/tabv1.png", mobile: "/fix-slider.png" },
  { src: "/slider2-rev.png", tab: "/tabv2.png", mobile: "/slider-mbl2.png" },
];

export default function FullSlider() {
  const [index, setIndex] = useState(0);
  const [screen, setScreen] = useState<"mobile" | "tablet" | "desktop">("desktop");

  // ✅ Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      const w = window.innerWidth;
      if (w < 768) setScreen("mobile");
      else if (w < 1024) setScreen("tablet");
      else setScreen("desktop");
    };
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
      {images.map((img, i) => {
        const src =
          screen === "mobile"
            ? img.mobile
            : screen === "tablet"
            ? img.tab
            : img.src;
        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-out ${
              index === i ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={src} alt="" fill priority className="object-cover" />
          </div>
        );
      })}

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
