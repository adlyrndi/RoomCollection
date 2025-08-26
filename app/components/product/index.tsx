import ProductCard from "../productCard";

const Product: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white pt-8">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl crushed-regular font-bold pb-4 text-black">New Arrivals</h2>
      </div>
      <div className="flex justify-start w-full gap-12 px-8">
        <ProductCard
          image="/Product_fix1.png"
          title="Eau de Parfum | 50ML"
          price="Rp 229.000"
          oldPrice="Rp 250.000"
          ProdName="Parlor Tux"
          discount="-20%"
        />
        <ProductCard
          image="/Product_fix2.png"
          title="Couch | Eau de Parfum"
          price="Rp 229.000"
          oldPrice="Rp 250.000"
          ProdName="Camellia Porch"
          discount="-20%"
        />
      </div>
      <div className="w-[100%] border-t-[1px] border-black mt-6 mx-auto"></div>
    </div>
  );
};

export default Product;
