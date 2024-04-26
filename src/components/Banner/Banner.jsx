const Banner = () => {
  return (
    <section className="bg-[url('assets/cheeseburger.jpg')] bg-center bg-no-repeat bg-cover h-screen md:h-screen w-full ">
      <div className="flex flex-col items-center justify-center h-full">
        <h1  style={{  textShadow: '0 0 10px black, 0 0 10px black, 0 0 10px black' }}
         className="text-center text-3xl md:text-4xl lg:text-7xl poppins font-semibold text-yellowSauce">
          Best food waiting for your belly
        </h1>

        <div className="rounded-full p-1 box-border mt-8 bg-gray-100 overflow-hidden ring-red-300 focus:ring-4 w-96 flex items-center">
          <input
            type="text"
            className=" rounded-full px-4 focus:outline-none w-full bg-transparent"
            placeholder="Search here..."
          />
          <button className="text-sm bg-primary py-3 px-6 rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
