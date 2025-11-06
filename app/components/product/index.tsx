import ProductCard from "../productCard";

const Product: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white pt-6">
      <div className="flex items-center justify-center">
        <h2 className="text-[20px] md:text-[50px] font-semibold pb-6 text-black">
        Dry Down Specialist Series
        </h2>
      </div>

      {/* Ganti flex jadi grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 md:px-8 mb-5">
        <ProductCard
          image="/fixpt.jpg"
          title="Eau de Parfum | 50ML"
          price="Rp 228.650"
          oldPrice="Rp 269.000"
          ProdName="Parlor Tux"
          discount="-15%"
          hoverTopText="Vanilla / Lavender / Sandalwood"
          hoverBottomText="Parlor Tux is our exclusive EDP variants inspired by the elegance of a parlor room filled with tuxedos. Designed for special occasions and as a true signature scent, it lets you carry the feeling of quiet luxury and timeless sophistication wherever you go."
        />

        <ProductCard
          image="/fixcp.jpg"
          title="Couch | Eau de Parfum"
          price="Rp 228.650"
          oldPrice="Rp 269.000"
          ProdName="Camellia Porch"
          discount="-15%"
          hoverTopText="Fruity / Violet / Cashmeran"
          hoverBottomText="Camellia Porch is our exclusive EDP variants that captures the serene beauty of camellias blooming on a porch. From day to night, their charm never fades; always graceful, always captivating. That’s the exact feeling we want you to experience with every wear."
        />
      </div>
    </div>
  );
};

export default Product;
