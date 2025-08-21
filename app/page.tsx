import Navbar from "./components/navbar";
// import Slider from "./components/slider";
import Product from "./components/product";
import Footer from "./components/footer";
import AdsBar from "./components/adsbar";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Navbar />
      <AdsBar/>
      {/* <Slider /> */}
      <Product />
      <Footer />
    </div>
  );
}
