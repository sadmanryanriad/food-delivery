// import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiHome, FiLogIn } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { MdDeliveryDining } from "react-icons/md";
import { useState } from "react";
// import { AuthContext } from "../provider/AuthProvider";

const menu = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "btn border-none text-white rounded-full bg-primary text-lg hover:scale-105"
            : ""
        }
      >
        Home <FiHome></FiHome>
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/cart"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "btn border-none text-white rounded-full bg-primary text-lg hover:scale-105"
            : ""
        }
      >
        Card <BsCart></BsCart>
      </NavLink>
    </li>
  </>
);

const Navbar = () => {
  //   const { user, logout } = useContext(AuthContext);
  const user = false;

  const [changeHeader, setChangeHeader] = useState(false);

  //header change function
  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };
  //change header by scrolling
  window.addEventListener("scroll", onChangeHeader);

  return (
    <header
      className={
        changeHeader
          ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500"
          : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"
      }
    >
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-sm btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              {menu}
            </ul>
          </div>
          <Link to={"/"} className=" normal-case text-xl">
            <div className="flex gap-2 items-center font-semibold pl-3 uppercase">
              <div className="bg-gradient-to-r from-yellow-400 to-red-500 hover:from-red-500 hover:to-yellow-500 flex items-center gap-3 p-2 rounded-full text-gray-100 text-xs lg:text-xl">
                Food Delivery{" "}
                <span className="text-2xl lg:text-3xl">
                  <MdDeliveryDining />
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-semibold">
            {menu}
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm text-green-600 btn-ghost">
                    {user.displayName}
                  </button>
                </li>
                <li>
                  <button
                    className="btn-warning bg-green-400 hover:text-white text-lg"
                    //   onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn h-10 border-none text-white rounded-full bg-indigo-500 hover:scale-105  text-sm lg:text-lg flex items-center">
                Login
                <span>
                  <FiLogIn></FiLogIn>
                </span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
