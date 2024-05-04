/* eslint-disable react/prop-types */
const CartCard = ({item}) => {
    
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl mb-5 h-48 w-80 border">
        <figure>
          <img
            src={item?.image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item?.name}</h2>
          <p>{item?.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-error text-white">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
