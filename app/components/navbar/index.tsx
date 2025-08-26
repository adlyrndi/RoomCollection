"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    { name: "SHOP AT SHOPEE", path: "/" },
    { name: "SHOP AT TOKOPEDIA", path: "/A" },
    { name: "ABOUT US", path: "/B" },
    { name: "GIVE US FEEDBACK", path: "/C" },
  ];

  return (
    <nav className="bg-white shadow shadow-gray-300 w-full fixed top-[40px] left-0 z-50">
      <div className="flex items-center justify-between w-full h-16 px-4 md:px-6 lg:px-8">
        {/* Logo (mentok kiri) */}
        <div className="w-[200px] sm:w-[250px] md:w-[270px] lg:w-[300px] xl:w-[350px]">
          <Image
            src="/text-logo.svg"
            alt="Logo"
            width={400}
            height={40}
            className="w-full h-auto"
          />
        </div>

        {/* Hamburger Button (mentok kanan) */}
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
        <ul className="flex flex-col space-y-4 p-6 text-[8px] text-black lg:text-md xl:text-lg">
          {menus.map((menu) => (
            <li key={menu.path}>
              <Link
                href={menu.path}
                onClick={() => setOpen(false)}
                className="block px-2 py-1"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
