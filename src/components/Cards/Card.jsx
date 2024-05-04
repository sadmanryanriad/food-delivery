import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const Card = ({ foodItem }) => {
  const { user } = useContext(AuthContext);
  // eslint-disable-next-line no-unused-vars
  const { name, description, price, image } = foodItem;
  const handleButton = () => {
    const cartData = { name, description, price, image, user };
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: "Added!",
            text: "Product added to the cart successfully!",
            icon: "success",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "There was an error",
            text: "contact your admin",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
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
            <button
              className="btn bg-yellowSauce text-gray-200 text-lg"
              onClick={handleButton}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
