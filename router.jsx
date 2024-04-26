import { createBrowserRouter } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import App from "./src/App";
import Cart from "./src/pages/Cart";

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
        element: <Cart></Cart>
      }
    ],
  },
]);

export default router;
