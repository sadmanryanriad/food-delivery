import { createBrowserRouter } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import App from "./src/App";
import Cart from "./src/pages/Cart/Cart";
import AdminDashboard from "./src/pages/admin/AdminDashboard";
import SignUp from "./src/pages/login/SignUp";
import Login from "./src/pages/login/Login";
import PrivateRoute from "./src/pages/privateRoute/PrivateRoute";
import UsersList from "./src/pages/admin/UsersList";
import AddProduct from "./src/pages/admin/AddProduct";
import DashboardMessage from "./src/pages/admin/DashboardMessage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <div>Error 404</div>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ],
  },
  {
    path: 'admin',
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path:'',
        element: <DashboardMessage></DashboardMessage>
      }
      ,{
        path: 'users-list',
        element: <UsersList></UsersList>
      },
      {
        path: 'add-product',
        element: <AddProduct></AddProduct>
      },
    ]
  }
]);

export default router;
