import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
  image: StaticImageData | string;
  title: string;
  price?: string;
  ProdName: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, ProdName }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="relative w-full h-[480px] sm:h-[500px] lg:h-[760px] bg-white shadow-lg overflow-hidden group">
        <Image
          src={typeof image === "string" ? image : image.src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 
          bg-transparent group-hover:bg-black/40 group-hover:backdrop-blur-md transition-all duration-300 ease-in-out">
          <h3 className="text-xl md:text-5xl font-bold crushed-regular uppercase">{ProdName}</h3>
          <p className="text-xs md:text-md mt-2 uppercase mb-7">{title}</p>
          <button className="mt-7 px-8 py-2 bg-white text-black rounded-[200px] font-bold uppercase 
            transition-all duration-300 ease-in-out transform hover:bg-gray-300 hover:scale-105 hover:shadow-lg">
            SHOP
          </button>
        </div>
      </div>
      <div className="flex justify-between w-full mt-4">
        <h3 className="text-xs md:text-md text-gray-800">{title}</h3>
        {price && <p className="text-xs md:text-md text-gray-900">{price}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
