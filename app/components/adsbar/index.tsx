"use client";

export default function AdsBar() {
  const words = [
    "OUR WEBSITE IS CURRENTLY STILL UNDER DEVELOPMENT ",
    "──────",
    "WE’RE HAVING AN EXCLUSIVE DROP THIS OCTOBER",
    "──────",
  ];

  return (
    <div className="bg-black sm:p-1 2xl:p-1 sticky top-0 left-0 w-full z-50">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
          {words.map((word, i) => (
            <li
              key={i}
              className="font-neutralsans text-[12px] md:text-[12px] lg:text-[15px] xl:text-[17px] font-medium text-white whitespace-nowrap"
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
              className="font-neutralsans text-[12px] md:text-[12px] lg:text-[15px] xl:text-[17px] font-medium text-white whitespace-nowrap"
            >
              {word}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
