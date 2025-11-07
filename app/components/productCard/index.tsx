"use client";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";

interface ProductCardProps {
  image: StaticImageData | string;
  title: string;
  price?: string; 
  ProdName: string;
  oldPrice?: string; 
  discount?: string;
  hoverTopText?: string;    
  hoverBottomText?: string; 
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  ProdName,
  title,
  price,
  oldPrice,
  discount,
  hoverTopText = "Shop Now",
  hoverBottomText = "View Details"
}) => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  // detect screen size
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // auto-hide overlay 5 detik untuk tab/mobile
  useEffect(() => {
    if (overlayVisible && !isDesktop) {
      const timer = setTimeout(() => setOverlayVisible(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [overlayVisible, isDesktop]);

  return (
    <div className="w-full flex justify-center px-1 lg:px-1">
      <div className="w-full max-w-screen-xl flex flex-col">
        {/* Image */}
        <div
          className="relative w-full h-[430px] lg:h-[500px] xl:h-[600px] bg-white shadow-lg overflow-hidden group rounded-xl cursor-pointer"
          onClick={() => !isDesktop && setOverlayVisible(!overlayVisible)} // hanya tab/mobile
        >
          <Image
            src={typeof image === "string" ? image : image.src}
            alt={ProdName}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />

          {/* Hover Overlay */}
          <div
            className={`absolute inset-0 bg-[#414141]/60 flex flex-col justify-between transition duration-300
              ${
                isDesktop
                  ? "opacity-0 group-hover:opacity-100"
                  : overlayVisible
                  ? "opacity-100"
                  : "opacity-0"
              }`}
          >
            <div className="mt-10 text-center">
              <p className="text-white text-[16px] lg:text-[20px] xl:text-[24px]">{hoverTopText}</p>
            </div>
            <div className="mb-10 ml-10 mr-10 lg:ml-15 lg:mr-15 text-justify">
              <p className="text-white text-[12px] lg:text-[16px] xl:text-[18px]">{hoverBottomText}</p>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="w-full mt-4 space-y-1">
          <div className="flex justify-between items-center">
            <h3 className="font-neutralsans text-[16px] lg:text-[20px] xl:text-[24px] text-black font-bold">
              {ProdName}
            </h3>

            {price && (
              <div className="flex items-center border-[1.2px] md:border-[2px] border-[#B81818] rounded-4xl px-4 xl:px-6 py-0 md:py-1">
                <Image
                  src="/disc-icon.svg"
                  alt="Discount"
                  width={0}
                  height={0}
                  className="w-4.5 h-5 xl:h-6 xl:w-6 mr-3 md:mr-5"
                />
                <span className="font-neutralsans text-[12px] lg:text-[16px] xl:text-[18px] text-[#B81818]">
                  {price}
                </span>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center">
            <p className="text-[12px] lg:text-[16px] xl:text-[18px] text-black font-neutralsans">
              {title}
            </p>

            <div className="flex items-center gap-2">
              {oldPrice && (
                <p className="text-[12px] lg:text-[16px] xl:text-[18px] text-black line-through font-neutralsans">
                  {oldPrice}
                </p>
              )}
              {discount && (
                <span className="text-[12px] lg:text-[16px] xl:text-[18px] text-black font-neutralsans">
                  {discount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
