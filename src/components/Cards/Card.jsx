/* eslint-disable react/prop-types */
const Card = ({ foodItem }) => {
    // eslint-disable-next-line no-unused-vars
    const { name, description, price } = foodItem;
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title text-yellowSauce">{price}৳</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-yellowSauce text-gray-200 text-lg ">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
