import Navbar from "./components/navbar";
// import Slider from "./components/slider";
import Product from "./components/product";
import Footer from "./components/footer";
import AdsBar from "./components/adsbar";
import Feedback from "./components/feedback";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Navbar />
      <AdsBar/>
      {/* <Slider /> */}
      <Product />
      <Feedback />
      <Footer />
    </div>
  );
}
