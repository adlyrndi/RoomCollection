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
    <section className="w-full p-6 md:p-12 flex flex-col lg:flex-row items-start justify-between gap-6">
      {/* Left Content */}
      <div className="flex flex-col max-w-xl m-0 lg:ml-20 text-left">
        <h2 className="text-[16px] md:text-[30px] font-bold text-black">
          Let us know anything
        </h2>
        <p className="text-black text-[10px] md:text-[15px] mt-2">
          We&apos;d really love to hear from you.
        </p>
      </div>

      {/* Right Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full lg:max-w-[800px] m-0 lg:mr-20 relative"
      >
        <div className="flex w-full border border-black rounded-xl overflow-hidden">
          <textarea
            name="feedback"
            placeholder="Tell us anything..."
            className="flex-1 min-h-[60px] px-2 py-2 md:py-3 text-gray-700 text-xs xl:text-lg text-start resize-none focus:outline-none"
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
            className={`absolute left-0 mt-2 text-green-600 text-sm md:text-base transition-opacity duration-500 ${
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
