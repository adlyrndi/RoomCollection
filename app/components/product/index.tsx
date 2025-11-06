"use client";
import ProductCard from "../productCard";
import { useState, useEffect, useRef } from "react";

const Product: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);   // ✅ hanya set ke true, tidak pernah set false lagi
          observer.unobserve(entry.target); // ✅ stop observe biar ga trigger ulang
        }
      },
      { threshold: 0.2 }
    );
  
    if (sectionRef.current) observer.observe(sectionRef.current);
  
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  return (
    <div ref={sectionRef}
    className={`w-full min-h-screen flex flex-col bg-white pt-6 transition-all duration-1000 ease-out
    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      {/* <div className="flex items-center justify-center">
        <h2 className="text-[20px] md:text-[35px] font-semibold pb-6 text-black">
        
        </h2>
      </div> */}

      {/* Ganti flex jadi grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 py-5 md:px-8 md:py-4 mb-5">
        <ProductCard
          image="/ptv2.png"
          title="Eau de Parfum | 50ML"
          price="Rp 228.650"
          oldPrice="Rp 269.000"
          ProdName="Parlor Tux"
          discount="-15%"
          hoverTopText="Vanilla / Lavender / Sandalwood"
          hoverBottomText="Parlor Tux is our exclusive EDP variants inspired by the elegance of a parlor room filled with tuxedos. Designed for special occasions and as a true signature scent, it lets you carry the feeling of quiet luxury and timeless sophistication wherever you go."
        />

        <ProductCard
          image="/cpv2.png"
          title="Eau de Parfum | 50ML"
          price="Rp 228.650"
          oldPrice="Rp 269.000"
          ProdName="Camellia Porch"
          discount="-15%"
          hoverTopText="Fruity / Violet / Cashmeran"
          hoverBottomText="Camellia Porch is our exclusive EDP variants that captures the serene beauty of camellias blooming on a porch. From day to night, their charm never fades; always graceful, always captivating. That’s the exact feeling we want you to experience with every wear."
        />
      </div>
    </div>
  );
};

export default Product;
