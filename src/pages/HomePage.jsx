import AboutUs from "../components/About/AboutUs";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
