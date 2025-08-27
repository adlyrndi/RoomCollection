import Navbar from "./components/navbar";
// import Slider from "./components/slider";
// import Product from "./components/product";
import Footerv2 from "./components/footerv2";
import AdsBar from "./components/adsbar";
import Feedback from "./components/feedback";
import Mainpage from "./components/mainPage";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <AdsBar/>
      <Navbar />
      <Mainpage/>
      {/* <Slider /> */}
      {/* <Product /> */}
      <hr className="border-t border-black w-screen" />
      <Feedback />
      <hr className="border-t border-black w-screen" />
      <Footerv2/>
    </div>
  );
}
