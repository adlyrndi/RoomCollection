// components/Footer.tsx
"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Footer() {
  const [visible, setVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // ✅ Detect Desktop Screen (≥ 1024px = lg)
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ✅ Intersection Observer (fade-in sekali)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
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
    <footer
      ref={sectionRef}
      className={`transition-all duration-1000 ease-out bg-white text-black px-6
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-9xl mx-auto space-y-6 mt-7 lg:mt-7">

        {/* Konten Utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-12 lg:gap-x-30">

          {/* Logo */}
          <div className="flex justify-start">
            <div className="max-md:mb-10 md:ml-5 w-54 sm:w-72 md:w-64 lg:w-72 xl:w-75 relative h-11 md:h-8 ">
              <Image
                src="/logo-test.svg"
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Connect with us */}
          <div className="mb-6 md:ml-15 lg:ml-20 font-neutralsans">
            <h2 className="mb-3 text-[16px] lg:text-[20px] xl:text-[24px] font-bold">
              Connect with us
            </h2>
            <ul className="text-black text-[12px] lg:text-[16px] xl:text-[18px] font-neutralsans">
              <li className="mb-4">
                <a href="https://instagram.com/room___collection" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://www.tiktok.com/@room___collection"
                  className="hover:underline"
                >
                  Tiktok
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://api.whatsapp.com/send/?phone=6285921119495"
                  className="hover:underline"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Marketplace */}
          <div className="md:ml-15 lg:ml-20 font-neutralsans">
            <h2 className="mb-3 text-[16px] lg:text-[20px] xl:text-[24px] font-bold font-neutralsans">
              Marketplace
            </h2>

            <ul className="text-black text-[12px] lg:text-[16px] xl:text-[18px] font-neutralsans">

              <li className="mb-4">
                <a
                  href="https://shopee.co.id/roomcollection"
                  className="hover:underline"
                >
                  Shopee
                </a>
              </li>

              <li className="mb-4">
                <a
                  href="https://www.tokopedia.com/room-collection-perfumes"
                  className="hover:underline"
                >
                  Tokopedia
                </a>
              </li>

              {/* ✅ TikTok Shop: link beda untuk desktop & mobile */}
              <li className="mb-4">
                <a
                  href={
                    isDesktop
                      ? "https://www.tiktok.com/@room___collection" // ✅ versi desktop
                      : "https://vt.tiktok.com/ZSyartMDj/?page=Mall" // ✅ versi mobile/tablet
                  }
                  className="hover:underline"
                >
                  Tiktok Shop
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bagian bawah */}
        <div className="flex flex-col items-center justify-between text-[12px] lg:text-[16px] xl:text-[18px] mb-12 font-neutralsans">
          <p>© 2025, ROOM COLLECTION Perfumes.</p>
        </div>
      </div>
    </footer>
  );
}
