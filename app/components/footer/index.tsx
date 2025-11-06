// components/Footer.tsx
"use client"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Footer() {
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
    <footer ref={sectionRef}
    className={`transition-all duration-1000 ease-out bg-white text-black px-6
    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="max-w-9xl mx-auto space-y-6">
        {/* Konten Utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-45">
          {/* Logo */}
          <div className="flex justify-start">
            <div className="w-[250px] sm:w-[250px] md:w-[270px] lg:w-[300px] xl:w-[500px]">
              <Image
                src="/text-logo.svg"
                alt="Logo"
                width={400}
                height={40}
                className="w-full h-auto xl:-mt-19"
              />
            </div>
          </div>

          {/* Connect with us */}
          <div className="mb-6">
            <h2 className="mb-3 text-[18px] md:text-md xl:text-[24px] font-bold">
              Connect with us
            </h2>
            <ul className="text-black text-[14px] md:text-md xl:text-[18px]">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Tiktok
                </a>
              </li> 
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Marketplace */}
          <div className="">
            <h2 className="mb-3 text-[18px] md:text-md xl:text-[24px] font-bold">
              Marketplace
            </h2>
            <ul className="text-black text-[14px] md:text-md xl:text-[18px]">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Shopee
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Tokopedia
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Tiktok Shop
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bagian bawah */}
        <div className="flex flex-col items-center justify-between text-xs lg:text-[20px] mb-12">
          <p>© 2025, ROOM COLLECTION Perfumes.</p>
        </div>
      </div>
    </footer>
  );
}
