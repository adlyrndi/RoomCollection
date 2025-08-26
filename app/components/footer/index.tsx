// components/Footer.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-black px-6">
      <div className="max-w-9xl mx-auto space-y-6">
        {/* Konten Utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-45">
          {/* Logo */}
          <div className="flex justify-start">
            <div className="w-[250px] sm:w-[250px] md:w-[270px] lg:w-[300px] xl:w-[500px]">
              <Image
                src="/text-logo.svg"
                alt="Logo"
                width={400}
                height={40}
                className="w-full h-auto xl:-mt-19"
              />
            </div>
          </div>

          {/* Connect with us */}
          <div className="mt-11 mb-12">
            <h2 className="mb-3 text-sm md:text-md xl:text-[30px]">
              Connect with us
            </h2>
            <ul className="text-black underline text-xs md:text-md xl:xl:text-[20px]">
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
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Marketplace */}
          <div className="mt-11">
            <h2 className="mb-3 text-sm md:text-md xl:text-[30px]">
              Marketplace
            </h2>
            <ul className="text-black underline text-xs md:text-md xl:text-[20px]">
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
            </ul>
          </div>
        </div>

        {/* Bagian bawah */}
        <div className="flex flex-col items-center justify-between text-xs lg:text-[20px] mb-12">
          <p>© 2025, ROOM COLLECTION Perfumes.</p>
        </div>
      </div>
    </footer>
  );
}
