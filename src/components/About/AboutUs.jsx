import { useState } from "react";
import AboutItem from "./AboutItem";

const data = [
  {
    id: 1,
    image: "./assets/Image/adult-blur-blurred-background-687824.png",
    icon: "./assets/ICON/Group 204.png",
    title: "Fast Delivery",
    description:
      "Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.",
  },
  {
    id: 2,
    image: "./assets/Image/chef-cook-food-33614.png",
    icon: "./assets/ICON/Group 1133.png",
    title: "A Good Auto Responder",
    description:
      "Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.",
  },
  {
    id: 3,
    image: "./assets/Image/architecture-building-city-2047397.png",
    icon: "./assets/ICON/Group 245.png",
    title: "Home Delivery",
    description:
      "Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.",
  },
];

const AboutUs = () => {
  const [aboutData] = useState(data);

  //fetching about us data
//   setAboutData(data);
  return (
    <div className="max-w-screen-xl mx-auto my-12 px-6">
      <h1 className="text-4xl poppins pb-4">Why you choose us</h1>
      <p className="text-gray-500 text-sm poppins w-2/4">
        Barton waited twenty always repair in within we do. AN delighted
        offending curiosity my is dashwoods at. Boy prosperous increasing
        surrounded.
      </p>

      {/* about us cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
        {aboutData.map((item) => (
          <AboutItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
