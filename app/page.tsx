import Navbar from "./components/navbar";
// import Slider from "./components/slider";
import Product from "./components/product";
// import Footerv2 from "./components/footerv2";
import Footer from "./components/footer";
// import AdsBar from "./components/adsbar";
import Feedback from "./components/feedback";
import Marketplace from "./components/marketplace";
// import Mainpage from "./components/mainPage";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      {/* <AdsBar/> */}
      <Navbar />
      {/* <Mainpage/> */}
      {/* <Slider /> */}
      <Product />
      <Marketplace/>
      {/* <hr className="border-t border-black w-screen" /> */}
      <Feedback />
      {/* <hr className="border-t border-black w-screen" /> */}
      {/* <Footerv2/> */}
      <Footer/>
    </div>
  );
}
