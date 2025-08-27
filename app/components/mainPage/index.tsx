// components/FragranceSection.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function MainPage() {
  const images = [
    "/prod1.png",
    "/prod2.png",
    "/prod3.png",
    "/prod4.png",
    "/prod5.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-7xl px-4 md:px-8 gap-40">
        <div className="flex items-center justify-center xl:justify-start md:w-1/2 pl-0 lg:pl-20">
          <Image
            src="/Logo-room.svg"
            alt="Logo"
            width={80} 
            height={80}
            className="w-12 h-12 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-22 lg:h-22"
          />
        </div>

        {/* Right Section - Image + Text */}
        <div className="flex flex-col items-center justify-center text-center md:w-1/2 mt-15">
          <div className="w-full relative h-[140px] sm:h-[250px] md:h-[300px] lg:h-[250px]">
            {images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="Fragrance Bottles"
                fill
                className={`object-contain transition-opacity duration-700 ease-in-out ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <p className="mt-7 md:mt-4 text-sm md:text-lg text-black">
            FRAGRANCE, REPRESENTED
          </p>
        </div>
      </div>
    </div>
  );
}
