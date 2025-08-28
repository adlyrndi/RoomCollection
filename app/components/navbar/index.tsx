"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    { name: "GIVE US FEEDBACK", id: "feedback" }, // pake id, bukan path
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="bg-white shadow shadow-gray-300 w-full fixed top-[24px] md:top-[32px] lg:top-[32px] xl:top-[38px] 2xl:top-[38px] left-0 z-50">
      <div className="flex items-center justify-between w-full h-16 px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="w-[200px] sm:w-[250px] md:w-[270px] lg:w-[300px] xl:w-[350px]">
          <Image
            src="/text-logo.svg"
            alt="Logo"
            width={400}
            height={40}
            className="w-full h-auto"
          />
        </div>

        {/* Hamburger Button */}
        <button
          className="text-gray-700 focus:outline-none"
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
          className="fixed inset-0 bg-transparent z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 md:w-1/4 bg-white shadow-lg z-50 
          transform transition-all duration-300 ease-in-out
          ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
      >
        {/* Tombol close */}
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

        {/* Menu Items */}
        <ul className="flex flex-col space-y-4 p-6 font-semibold text-[12px] md:text-[13px] lg:text-[17px] xl:text-[20px] text-black">
          {menus.map((menu) => (
            <li key={menu.id}>
              <button
                onClick={() => handleScroll(menu.id)}
                className="block px-2 py-1 text-left w-full"
              >
                {menu.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
