"use client";

import { useState } from "react";
import Image from "next/image";

export default function Feedback() {
  const [submitted, setSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const message = (form.elements.namedItem("feedback") as HTMLTextAreaElement)
      .value;

    // notif langsung
    setSubmitted(true);
    setFadeOut(false);

    form.reset();

    // submit ke server (proxy)
    fetch("api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    // fade out notif
    setTimeout(() => setFadeOut(true), 3000);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <section id="feedback" className="w-full p-8  md:p-12 lg:p-10 xl:p-12 flex flex-col lg:flex-row items-start justify-between gap-6">
      {/* Left Content */}
      <div className="flex flex-col max-w-xl m-0 lg:ml-10 2xl:ml-30 text-left">
        <h2 className="font-neutralsans text-[16px] lg:text-[30px] font-bold text-black">
          Let us know anything
        </h2>
        <p className="font-neutralsans text-black text-[8px] lg:text-[15px] mt-2">
          We&apos;d really love to hear from you.
        </p>
      </div>

      {/* Right Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-700 lg:max-w-[550px] xl:max-w-[700px] 2xl:max-w-[800px] m-0 lg:mr-10 2xl:mr-30 relative"
      >
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

        {/* Notification tetap di bawah */}
        {submitted && (
          <p
            className={`absolute font-neutralsans left-0 mt-2 text-gray-500 font-semibold text-xs md:text-base transition-opacity duration-500 ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
          >
            Submitted! Thank you for your feedback.
          </p>
        )}
      </form>
    </section>
  );
}
