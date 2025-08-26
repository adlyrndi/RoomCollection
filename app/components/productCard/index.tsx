import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
  image: StaticImageData | string;
  title: string;
  price?: string; 
  ProdName: string;
  oldPrice?: string; 
  discount?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  ProdName,
  title,
  price,
  oldPrice,
  discount,
}) => {
  return (
    <div className="w-full flex flex-col">
      {/* Image */}
      <div className="relative w-full h-[480px] sm:h-[500px] lg:h-[760px] bg-white shadow-lg overflow-hidden group rounded-2xl">
        <Image
          src={typeof image === "string" ? image : image.src}
          alt={ProdName}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="w-full mt-4 space-y-1">
        {/* Row 1: ProductName + Price */}
        <div className="flex justify-between items-center">
          <h3 className="text-xs md:text-md lg:text-[25px] xl:text-[30px] text-gray-800 font-bold">
            {ProdName}
          </h3>

          {/* Price Box */}
          {price && (
            <div className="flex items-center border-[2px] border-[#B81818] rounded-4xl px-4 xl:px-6 py-1">
              <Image
                src="/disc-icon.svg"
                alt="Discount"
                width={0}
                height={0}
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 xl:w-9 xl:h-9 mr-10"
              />
              <span className="text-xs md:text-md lg:text-[18px] xl:text-[23px] text-[#B81818]">
                {price}
              </span>
            </div>
          )}
        </div>

        {/* Row 2: Title + Old Price (coret + discount) */}
        <div className="flex justify-between items-center">
          <p className="text-[11px] md:text-sm lg:text-[15px] xl:text-[20px] text-black">{title}</p>

          <div className="flex items-center gap-2">
            {oldPrice && (
              <p className="text-[11px] md:text-sm lg:text-[17px] xl:text-[21px] text-gray-700 line-through">
                {oldPrice}
              </p>
            )}
            {discount && (
              <span className="text-[11px] md:text-sm lg:text-[17px] xl:text-[21px] text-black">
                {discount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 space-y-6">
        <button className="w-full border-[1.4px] border-black py-4 text-sm md:text-md lg:text-[14px] xl:text-[18px] font-medium text-black hover:bg-gray-100 transition">
          Shop at Shopee
        </button>
        <button className="w-full border-[1.4px] border-black py-4 text-sm md:text-md lg:text-[14px] xl:text-[18px] font-medium text-black hover:bg-gray-100 transition">
          Shop at Tokopedia
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
