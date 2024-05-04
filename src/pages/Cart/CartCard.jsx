import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const CartCard = ({item, refetch}) => {

    const handleDelete = (id) =>{
        fetch(`http://localhost:5000/cart/${id}`, {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (!data.acknowledged) {
                  Swal.fire({
                      icon: "error",
                      title: "User already Exists",
                      text: "You already have an account! Please login",
                    });
              } else {
                refetch();
                Swal.fire({
                  title: "Deleted successfully!",
                  text: "Item removed from cart!",
                  icon: "success",
                });
              }
            })
            .catch((error) => {
              console.error("Error:", error);
            });
    }
    
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl  transform transition duration-700 hover:scale-105 hover:shadow-2xl">
        <figure>
          <img
            className="h-48 w-full object-cover transform transition duration-700 hover:scale-125"
            src={item?.image}
            alt={item?.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item?.name}</h2>
          <h2 className="card-title text-yellowSauce">{item?.price}৳</h2>
          <div className="card-actions justify-end">
            <button
              className="btn bg-error text-gray-200 text-lg"
              onClick={()=>handleDelete(item?._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
