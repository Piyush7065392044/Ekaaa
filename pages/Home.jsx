import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import CustomProcess from "./CustomDesighn";
import WhyChooseEKAA from "./WhyChouseEkka";


const Home = () => {
  return (
    <div className="bg-black text-white">
     <Navbar/>
     <HeroSection/>
     <CustomProcess/>
     <WhyChooseEKAA/>
    <Footer/>
    </div>
  );
};

export default Home;
