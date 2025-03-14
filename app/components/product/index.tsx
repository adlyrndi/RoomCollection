import ProductCard from "../productCard";

const Product: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-200 pt-8">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl crushed-regular font-bold pb-4 text-black">New Arrivals</h2>
      </div>
      <div className="w-[97.8%] border-t-2 border-black mt-4 mb-8 mx-auto"></div>
      <div className="flex justify-start w-full gap-8 px-8">
        <ProductCard
          image="/Product_fix1.png"
          title="Suited | Eau de Parfum"
          price="Rp 229.000"
          ProdName="SUITED"
        />
        <ProductCard
          image="/Product_fix2.png"
          title="Couch | Eau de Parfum"
          price="Rp 229.000"
          ProdName="COUCH"
        />
      </div>
      <div className="w-[97.8%] border-t-2 border-black mt-6 mb-8 mx-auto"></div>
    </div>
  );
};

export default Product;
