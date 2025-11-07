"use client";

export default function AdsBar() {
  const words = [
    // "OUR WEBSITE IS CURRENTLY STILL UNDER DEVELOPMENT ",
    // "──────",
    "Don’t miss our 11.11 Pay Day Sale! Available on all marketplaces only until 11 November 2025!",
    "──────",
    "Don’t miss our 11.11 Pay Day Sale! Available on all marketplaces only until 11 November 2025!",
    "──────",
  ];

  return (
    <div className="bg-black sm:p-1 2xl:p-1 fixd top-0 left-0 w-full z-50">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
          {words.map((word, i) => (
            <li
              key={i}
              className="font-neutralsans text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-white whitespace-nowrap"
            >
              {word}
            </li>
          ))}
        </ul>

        {/* Copy persis sama, jangan ganti text size */}
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
          aria-hidden="true"
        >
          {words.map((word, i) => (
            <li
              key={i}
              className="font-neutralsans text-[12px] lg:text-[16px] xl:text-[18px] font-medium text-white whitespace-nowrap"
            >
              {word}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
