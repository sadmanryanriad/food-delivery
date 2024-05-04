/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to={'/login'}></Navigate>

  return children;
};

export default PrivateRoute;