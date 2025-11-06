"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const marketplaces = [
  {
    id: 1,
    name: "Shopee",
    iconDefault: "/shopee-before.svg",
    iconHover: "/shopee-after1.svg",
    link: "https://shopee.co.id/roomcollection",
    hoverColor: "#EE4D2D",
  },
  {
    id: 2,
    name: "Tokopedia",
    iconDefault: "/tokped-before.svg",
    iconHover: "/toped-after.svg",
    link: "https://www.tokopedia.com/room-collection-perfumes",
    hoverColor: "#42B549",
  },
  {
    id: 3,
    name: "TikTok Shop",
    iconDefault: "/tiktok-before.svg",
    iconHover: "/tiktok-after.svg",
    link: "https://vt.tiktok.com/ZSyartMDj/?page=Mall",
    hoverColor: "#000000",
  },
];

export default function Marketplace() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  // ✅ perbaikan tipe state
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div ref={sectionRef}
    className={`transition-all duration-1000 ease-out w-full px-4 md:px-12 mb-12 text-center
    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <h2 className="text-xl md:text-[30px] text-black font-semibold mb-6">
        Shop on a marketplace
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
        {marketplaces.map((item) => {
          const isHovered = hoveredId === item.id;

          return (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border-[1px] rounded-lg px-6 py-4 md:py-5 text-[16px] lg:text-[20px] text-black hover:text-white transition shadow-md md:shadow-lg"
              style={{
                backgroundColor: isHovered ? item.hoverColor : "transparent",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={
                  isHovered && item.iconHover
                    ? item.iconHover
                    : item.iconDefault
                }
                alt={item.name}
                width={30}
                height={30}
                className={
                  isHovered && !item.iconHover ? "filter invert brightness-0" : ""
                }
              />
              <span>{item.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}