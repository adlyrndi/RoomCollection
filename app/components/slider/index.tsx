"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import slide1 from "../../images/Tabpanel.png";

export default function Slider() {
  const images = [slide1, slide1, slide1];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <Image src={img} alt={`Slide ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-13">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-[2px] w-28 rounded-full transition-all ${
              currentSlide === index ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
