// components/FragranceSection.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function MainPage() {
  const images = [
    "/prod1.png",
    "/prod2.png",
    "/prod4.png",
    "/prod3.png",
    "/prod5.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col-reverse lg:flex-row w-full max-w-7xl px-4 md:px-8 gap-40">
        <div className="flex items-center justify-center xl:justify-start lg:w-1/2 pl-0 xl:pl-20">
          <Image
            src="/Logo-room.svg"
            alt="Logo"
            width={80} 
            height={80}
            className="w-12 h-12 sm:w-20 sm:h-20 md:w-15 md:h-15 lg:w-15 lg:h-15 xl:w-18 xl:h-18"
          />
        </div>

        {/* Right Section - Image + Text */}
        <div className="flex flex-col items-center justify-center text-center lg:w-1/2 mt-15">
          <div className="w-full relative h-[140px] sm:h-[250px] md:h-[200px] lg:h-[150px] xl:h-[170px] 2xl:h-[200px]">
            {images.map((img, i) => (
              <Image
              key={i}
              src={img}
              alt="Fragrance Bottles"
              fill
              priority
              className={`object-contain absolute inset-0 ${
                i === index ? "block" : "hidden"
              }`}
            />
            
            
            ))}
          </div>
          <p className="font-neutralsans mt-4 md:mt-4 text-[15px] md:text-[18px] lg:text-[17px] xl:text-[19px] text-black">
          Fragrance — Made (from/for) moments

          </p>
        </div>
      </div>
    </div>
  );
}
