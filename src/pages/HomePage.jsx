import AboutUs from "../components/About/AboutUs";
import Banner from "../components/Banner/Banner";
import FoodItems from "../components/foodItems/FoodItems";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <FoodItems></FoodItems>
      <AboutUs></AboutUs>
    </div>
  );
};

export default HomePage;
