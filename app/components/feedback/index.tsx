import Image from "next/image";

export default function Feedback() {
  return (
    <section className="w-full border border-black p-6 md:p-13 flex flex-col lg:flex-row items-start lg:items-start justify-between gap-6">
      {/* Left Content */}
      <div className="flex flex-col max-w-xl m-0 lg:ml-20 text-center lg:text-left">
        <h2 className="text-[16px] md:text-[30px] font-bold text-black">
          Let us know anything
        </h2>
        <p className="text-black text-[10px] md:text-[15px] ml-[-10px] md:ml-0 mt-2">
        We&apos;d really love to hear from you.
        </p>
      </div>

      {/* Right Form */}
      <form className="w-full lg:max-w-[800px] m-0 lg:mr-20">
        <div className="flex w-full border border-black rounded-xl overflow-hidden">
          <textarea
            placeholder="Tell us anything..."
            className="flex-1 min-h-[60px] px-2 py-2 md:py-3 text-gray-700 resize-none focus:outline-none"
          />
          <button
            type="submit"
            className="bg-black px-4 flex items-center justify-center hover:bg-gray-800 transition"
          >
            <Image
              src="/enter.svg"
              alt="Send Feedback"
              width={24}
              height={24}
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
            />
          </button>
        </div>
      </form>
    </section>
  );
}
