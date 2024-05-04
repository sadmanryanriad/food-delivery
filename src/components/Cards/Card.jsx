/* eslint-disable react/prop-types */
const Card = ({ foodItem }) => {
    // eslint-disable-next-line no-unused-vars
    const { name, description, price, image } = foodItem;
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl  transform transition duration-700 hover:scale-105 hover:shadow-2xl">
        <figure>
          <img
          className="h-48 w-full object-cover transform transition duration-700 hover:scale-125"
            src={image}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title text-yellowSauce">{price}৳</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-yellowSauce text-gray-200 text-lg ">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
