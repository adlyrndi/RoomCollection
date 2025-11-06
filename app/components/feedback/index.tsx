"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Feedback() {
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
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ease-out
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Garis atas */}
      <hr className="border-t border-black w-screen" />

      <section
        id="feedback"
        className="w-full p-8 md:p-12 lg:p-10 xl:p-12 flex flex-col lg:flex-row items-start justify-between gap-6"
      >
        {/* Left Content */}
        <div className="flex flex-col max-w-xl m-0 lg:ml-10 2xl:ml-30 text-left">
          <h2 className="font-neutralsans text-[16px] lg:text-[30px] font-bold text-black">
            Let us know anything
          </h2>
          <p className="font-neutralsans text-black text-[12px] lg:text-[15px] mt-2">
            We&apos;d really love to hear from you.
          </p>
        </div>

        {/* Right Form */}
        <form className="w-full max-w-700 lg:max-w-[550px] xl:max-w-[700px] 2xl:max-w-[800px] m-0 lg:mr-10 2xl:mr-30 relative">
          <div className="flex w-full border border-black rounded-xl overflow-hidden">
            <textarea
              name="feedback"
              placeholder="Tell us anything..."
              className="font-neutralsans flex-1 min-h-[60px] px-2 py-2 md:py-3 text-gray-700 text-xs xl:text-lg text-start resize-none focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black px-6 flex items-center justify-center hover:bg-gray-800 transition"
            >
              <Image
                src="/enter.svg"
                alt="Send Feedback"
                width={20}
                height={20}
                className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
              />
            </button>
          </div>
        </form>
      </section>

      {/* Garis bawah */}
      <hr className="border-t border-black w-screen" />
    </div>
  );
}
