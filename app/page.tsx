import Navbar from "./components/navbar";
import Slider from "./components/slider";
import Product from "./components/product";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Navbar />
      <Slider />
      <Product />
      <Footer />
    </div>
  );
}
