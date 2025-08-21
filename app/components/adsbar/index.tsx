"use client";

export default function AdsBar() {
  const words = [
    "FREE shipping for Rp559,000 and above.",
    "Big Sale 50% Off!",
    "Free Shipping Worldwide",
    "New Arrivals Available Now",
    "Join Our Membership Today",
    "Exclusive Deals Just For You",
  ];

  return (
    <div className="bg-black py-2 mt-20 md:mt-16 lg:mt-16">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
          {words.map((word, i) => (
            <li
              key={i}
              className="text-base font-medium text-white whitespace-nowrap"
            >
              {word}
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
          aria-hidden="true"
        >
          {words.map((word, i) => (
            <li
              key={i}
              className="text-base font-medium text-white whitespace-nowrap"
            >
              {word}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
