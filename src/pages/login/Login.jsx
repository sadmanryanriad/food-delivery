import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
    const navigate = useNavigate('/');
  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const signUpData = {
      email: email,
      password: password,
    };
    //fetch data from server
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(signUpData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        login(data.email);
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      {/* Left: Image (visible only on large screens) */}
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="assets/hamburger-real.jpg"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right: Login Form */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl md:text-5xl font-semibold mb-4 text-center">
          Login
        </h1>
        <form onSubmit={handleForm}>
          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              email
            </label>
            <input
              type="email"
              required
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-yellowSauce"
              autoComplete="off"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              required
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-yellowSauce"
              autoComplete="off"
            />
          </div>

          {/* Remember Me Checkbox */}
          {/* <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-yellowSauce"
            />
            <label htmlFor="remember" className="text-gray-600 ml-2">
              Remember Me
            </label>
          </div> */}

          {/* Forgot Password Link */}
          <div className="mb-6 text-yellowSauce">
            <a className="hover:underline">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-yellowSauce hover:bg-yellowSauce text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-yellowSauce text-center">
          <Link to={"/signup"} className="hover:underline">
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
