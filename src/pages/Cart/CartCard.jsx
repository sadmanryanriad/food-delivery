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
      <div className="card card-side bg-base-100 shadow-xl mb-5 h-48 w-96 border">
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
            <button className="btn btn-error text-white" onClick={()=>handleDelete(item?._id)}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
