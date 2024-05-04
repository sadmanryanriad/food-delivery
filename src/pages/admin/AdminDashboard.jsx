import { FaHome, FaList, FaNetworkWired } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";

const AdminDashboard = () => {
    const isLoading = false;
    

  return (
    <>
{isLoading? <Spinner></Spinner> : 
      <div className="flex max-w-screen-2xl mx-auto">
      {/* side bar */}
      <div className="w-64 min-h-screen bg-yellowSauce">
        <ul className="menu p-4">
         {
            <>
              <li>
                <NavLink to={"users-list"}>
                  <p className="text-xl flex items-center gap-5 font-bold">Users List <FaList /></p>
                </NavLink>
              </li>
              <li>
                <NavLink to={"add-product"}>
                  <p className="text-xl flex items-center gap-5 font-bold">Add Product <FaNetworkWired /></p>
                </NavLink>
              </li>
              <div className="divider"></div>
              <li>
              <NavLink to={"/"}>
                <p className="text-xl flex items-center gap-5 font-bold">Home <FaHome></FaHome></p>
              </NavLink>
            </li>
            </>
          }

        </ul>
      </div>
      {/* content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
}
    </>
  );
};

export default AdminDashboard;