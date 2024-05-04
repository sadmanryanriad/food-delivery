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
        console.log(data)
      });
  }, []);
  if (!isLoading) return <h1 className="text-2xl">Loading...</h1>;
  return (
    <>
      <div className="w-full md:w-fit m-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          cartData.map(item=>{
            return <CartCard key={item._id} item={item}></CartCard>
          })
        }
      </div>
    </>
  );
};

export default Cart;
