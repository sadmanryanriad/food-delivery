import { useContext, useEffect, useState } from "react";
import CartCard from "./CartCard";
import { AuthContext } from "../../authProvider/AuthProvider";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cartData, setCartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/cart/${user}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCartData(data);
        setIsLoading(true)
      });
  }, [user]);
  if (!isLoading) return <h1 className="text-2xl">Loading...</h1>;
  return (
    <>
    <h1 className="text-4xl font-bold text-center mb-12">Items in your cart</h1>
      <div className="w-full md:w-fit m-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-40">
        {
          cartData.map(item=>{
            return <CartCard key={item._id} item={item} refetch={refetch}></CartCard>
          })
        }
      </div>
    </>
  );

  function refetch(){
    fetch(`http://localhost:5000/cart/${user}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCartData(data);
        setIsLoading(true)
      });
  }
};

export default Cart;
