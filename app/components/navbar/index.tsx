"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import AdsBar from "../adsbar";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const menus = [
    { name: "SHOPEE", link: "https://shopee.co.id/roomcollection" },
    {
      name: "TOKOPEDIA",
      link: "https://www.tokopedia.com/room-collection-perfumes",
    },
    {
      name: "TIKTOK SHOP",
      link: isMobile
        ? "https://vt.tiktok.com/ZSyartMDj/?page=Mall" 
        : "https://www.tiktok.com/@room___collection", 
    },
    { name: "GIVE US FEEDBACK", id: "feedback" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="w-full sticky top-0 left-0 z-50" id="nav">
      <AdsBar />

      <nav
        className="bg-white shadow shadow-gray-300 w-full left-0 z-40 
        sticky top-0 transition-all duration-300"
      >
        <div className="flex items-center justify-between w-full h-16 px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <div className="w-[190px] md:w-[200px] lg:w-[230px] xl:w-[300px] 2xl:w-[300px] ">
            <Image
              src="/text-logo.svg"
              alt="Logo"
              width={400}
              height={40}
              className="w-full h-auto"
            />
          </div>

          {/* Hamburger */}
          <button
            className="
              text-black p-2 rounded-full hover:bg-black/6 hover:scale-110 
              transition-all duration-300 focus:outline-none
            "
            onClick={() => setOpen(true)}
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-transparent z-30"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-1/2 md:w-1/4 bg-white shadow-lg z-40 
          transform transition-all duration-300 ease-in-out
          ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button onClick={() => setOpen(false)}>
              <svg
                className="w-6 h-6 text-black font-bold"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu */}
          <ul className="flex flex-col space-y-4 p-6 font-semibold text-[12px] lg:text-[16px] xl:text-[18px] text-black font-neutralsans">
            {menus.map((menu) => (
              <li key={menu.name} className="text-right">
                {menu.link ? (
                  <a
                    href={menu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-2 py-1 hover:underline"
                  >
                    {menu.name}
                  </a>
                ) : (
                  <button
                    onClick={() => handleScroll(menu.id!)}
                    className="block px-2 py-1 w-full text-right hover:underline"
                  >
                    {menu.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
