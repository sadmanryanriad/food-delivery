import { useContext } from "react";
import CartCard from "./CartCard";
import { AuthContext } from "../../authProvider/AuthProvider";

const Cart = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <>
      <div className="w-full md:w-fit m-auto grid grid-cols-1 md:grid-cols-2 gap-5">
      <CartCard></CartCard>
      <CartCard></CartCard>
      </div>
    </>
  );
};

export default Cart;
