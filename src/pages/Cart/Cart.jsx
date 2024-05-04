import { useContext, useEffect, useState } from "react";
import CartCard from "./CartCard";
import { AuthContext } from "../../authProvider/AuthProvider";
import Swal from "sweetalert2";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cartData, setCartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/cart/${user}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCartData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cart data:", error);
        setIsLoading(false);
      });
  }, [user]);

  const refetch = () => {
    fetch(`http://localhost:5000/cart/${user}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCartData(data);
      })
      .catch((error) => {
        console.error("Error refetching cart data:", error);
      });
  };

  const handleBuyNow = () =>{
    fetch(`http://localhost:5000/cartAll`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.deletedCount) {
          Swal.fire({
              icon: "error",
              title: "There was an error",
              text: "Contact your admin",
            });
      } else {
        refetch();
        Swal.fire({
          title: "Purchased successfully!",
          text: "Thank your for purchasing!",
          icon: "success",
        });
      }
      })
      .catch((error) => {
        console.error("Error refetching cart data:", error);
      });
  }


  if (isLoading) return <h1 className="text-2xl">Loading...</h1>;

  const totalPrice = cartData.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-12">Items in your cart</h1>
      <div className="flex flex-col md:flex-row w-[80%] m-auto ">
        <div className="w-2/3 md:w-full m-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-40">
          {cartData.map((item) => (
            <CartCard key={item._id} item={item} refetch={refetch} />
          ))}
        </div>
        <div className="w-1/3  p-5">
          <h1 className="text-2xl font-bold text-center mb-5">Total Calculations</h1>
          {cartData.map((item) => (
            <h2 key={item._id}>{item.name}</h2>
          ))}
          <div className="divider my-5"></div>
          <h2 className="font-bold text-xl">Total price: ${totalPrice.toFixed(2)}</h2>
          <button className="btn w-full btn-accent text-base-200 mt-7" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
