// components/Footer.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-black px-6 dark:bg-gray-900 dark:text-white">
      <div className="max-w-9xl mx-auto space-y-6">
        {/* Logo */}
        <div className="w-[250px] sm:w-[250px] md:w-[270px] lg:w-[300px] xl:w-[350px]">
          <Image
            src="/logofont.svg"
            alt="Logo"
            width={400}
            height={40}
            className="w-full h-auto"
          />
        </div>

        {/* Deskripsi */}
        <p className="text-xs md:text-md xl:text-lg max-w-2xl xl:max-w-4xl">
          Since launching in 2025, ROOM COLLECTION develops niche perfumes that
          reduce distractions to help Bubu and Pipaw back together. We believe
          that scent is a portal to memories, and faraway places, transcending
          the physical realms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-6 lg:py-8 lg:grid-cols-5 xl:grid-cols-6">
          <div>
            <h2 className="mb-6 text-sm md:text-md xl:text-lg font-semibold uppercase">
              Connect with us
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 text-xs md:text-md xl:text-lg">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Tiktok
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm md:text-md xl:text-lg font-semibold uppercase">
              Marketplace
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 text-xs md:text-md xl:text-lg">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Shopee
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Tokopedia
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Tiktok Shop
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Amazon
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bagian bawah */}
        <div className="flex flex-col items-center justify-between text-xs lg:text-sm mb-6">
          <p>© 2025, ROOM COLLECTION Perfumes.</p>
        </div>
      </div>
    </footer>
  );
}
