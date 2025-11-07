"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Feedback() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // ✅ Modal states
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

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
    <>
      {/* ✅ SUCCESS MODAL */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div className="bg-white rounded-2xl px-8 py-7 shadow-xl flex flex-col items-center animate-fadeIn scale-95">
            <svg className="w-16 h-16 mb-3" viewBox="0 0 52 52">
              <circle
                cx="26"
                cy="26"
                r="25"
                fill="none"
                stroke="#4CAF50"
                strokeWidth="2"
              />
              <path
                fill="none"
                stroke="#4CAF50"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 27 l8 8 l16 -16"
                className="checkmark"
              />
            </svg>

            <p className="font-neutralsans text-[16px] lg:text-[20px] xl:text-[24px] font-bold text-black">Feedback Sent</p>
          </div>
        </div>
      )}

      {/* ✅ FAIL MODAL */}
      {failed && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div className="bg-white rounded-2xl px-8 py-7 shadow-xl flex flex-col items-center animate-fadeIn scale-95">
            <svg className="w-16 h-16 mb-3" viewBox="0 0 52 52">
              <circle
                cx="26"
                cy="26"
                r="25"
                fill="none"
                stroke="#E53935"
                strokeWidth="2"
              />
              <path
                fill="none"
                stroke="#E53935"
                strokeWidth="4"
                strokeLinecap="round"
                d="M18 18 L34 34"
                className="crossline"
              />
              <path
                fill="none"
                stroke="#E53935"
                strokeWidth="4"
                strokeLinecap="round"
                d="M34 18 L18 34"
                className="crossline2"
              />
            </svg>

            <p className="font-neutralsans text-[16px] lg:text-[20px] xl:text-[24px] font-bold text-black">Failed to Submit</p>
          </div>
        </div>
      )}

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
            <h2 className="font-neutralsans text-[16px] lg:text-[20px] xl:text-[24px] font-bold text-black">
              Let us know anything
            </h2>
            <p className="font-neutralsans text-black text-[12px] lg:text-[16px] xl:text-[18px] mt-2">
              We&apos;d really love to hear from you.
            </p>
          </div>

          {/* Right Form (DESAIN TETAP) */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const message = (e.target as HTMLFormElement).feedback.value;

              const res = await fetch("/api/feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message }),
              });

              if (res.ok) {
                setSuccess(true);
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setSuccess(false), 1800);
              } else {
                setFailed(true);
                setTimeout(() => setFailed(false), 1800);
              }
            }}
            className="w-full max-w-700 lg:max-w-[550px] xl:max-w-[700px] 2xl:max-w-[800px] m-0 lg:mr-10 2xl:mr-30 relative"
          >
            <div className="flex w-full border border-black rounded-xl overflow-hidden">
              <textarea
                name="feedback"
                placeholder="Tell us anything..."
                className="font-neutralsans flex-1 min-h-[60px] px-2 py-2 md:py-3 text-black text-[12px] lg:text-[16px] xl:text-[18px] text-start resize-none focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black px-6 flex items-center justify-center hover:bg-black/80 transition"
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

      {/* ✅ ANIMATIONS */}
      <style jsx>{`
        @keyframes draw {
          from {
            stroke-dashoffset: 48;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .checkmark {
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: draw 0.6s ease forwards;
        }

        .crossline,
        .crossline2 {
          stroke-dasharray: 36;
          stroke-dashoffset: 36;
          animation: draw 0.45s ease forwards;
        }
        .crossline2 {
          animation-delay: 0.1s;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
      `}</style>
    </>
  );
}
