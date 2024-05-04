import { createBrowserRouter } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import App from "./src/App";
import Cart from "./src/pages/Cart/Cart";
import AdminDashboard from "./src/pages/admin/AdminDashboard";
import SignUp from "./src/pages/login/SignUp";
import Login from "./src/pages/login/Login";
import PrivateRoute from "./src/pages/privateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <div>ERror 404</div>,
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
    path: '/admin',
    element: <AdminDashboard></AdminDashboard>
  }
]);

export default router;
