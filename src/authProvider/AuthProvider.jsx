/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Retrieve user state from local storage on initial render
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : false;
  });

  useEffect(() => {
    // Update local storage whenever user state changes
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const login = (email) => {
    // Set user state to the logged-in user's email
    setUser(email);
    console.log("email set success");
  };

  const logout = () => {
    // Set user state to false when logging out
    setUser(false);
    console.log("email set to false");
    Swal.fire({
      title: "Logout successful!",
      text: "You have successfully logged out!",
      icon: "success"
    });
  };

  const authInfo = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
