import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black pt-8 w-full">
      <div className="w-full mb-4">
        <div className="flex flex-wrap justify-between w-full">
          <div className="w-full lg:w-6/12 px-5 flex flex-col h-full">
            <div>
              <h4 className="text-[43px] crushed-regular font-semibold text-gray-300 mb-5 text-left">
                Room Collection
              </h4>
              <h5 className="text-md mt-0 mb-2 px-0 text-gray-400 max-w-xs text-justify">
                Since launching in 2025, ROOM COLLECTIONㆍ develops niche
                perfumes that reduce distractions to help Bubu and Pipaw back
                together.
              </h5>
            </div>

            {/* Mendorong ke bawah */}
            <div className="mt-auto flex pt-16 justify-between w-full max-w-lg">
              <h5 className="text-md px-0 text-gray-400 text-justify">
                © 2025, Room Collection Fragrances.
              </h5>
              <Link
                href="#"
                className="text-md px-0 text-gray-400 text-justify hover:text-gray-600"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-6/12 flex justify-end pr-10 gap-100">
            <div className="text-right">
              <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                Connect with us
              </span>
              <ul className="list-unstyled">
                {[
                  { text: "Instagram", href: "#" },
                  { text: "Tiktok", href: "#" },
                  { text: "Youtube", href: "#" },
                  { text: "Twitter", href: "#" },
                  { text: "Contact Us", href: "#" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-gray-600 font-semibold block pb-2 text-sm"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-right pl-10">
              <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                Marketplace
              </span>
              <ul className="list-unstyled">
                {[
                  { text: "Tokopedia", href: "#" },
                  { text: "Shopee", href: "#" },
                  { text: "Tiktok Shop", href: "#" },
                  { text: "Blibli", href: "#" },
                  { text: "Lazada", href: "#" },
                  { text: "Sociolla", href: "#" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-gray-600 font-semibold block pb-2 text-sm"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
