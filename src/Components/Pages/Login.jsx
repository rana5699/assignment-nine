import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GoogleBtn from "../Shared/GoogleBtn";
import FacebookBtn from "../Shared/FacebookBtn";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import HelmetTitle from "../Shared/HelmetTitle";

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div>
      <HelmetTitle title={"Login"} />
      <div className="relative py-3 sm:max-w-xl sm:mx-auto my-5">
        <div className="relative px-4 py-10 bg-gray-200 mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <ToastContainer />
          <div className="max-w-md mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-zinc-800">
              Welcome Back!
            </h2>
            <p className="text-center text-zinc-600 dark:text-zinc-600 mt-3">
              We missed you, sign in to continue.
            </p>
            <form>
              <div className="mt-5">
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  E-mail
                </label>
                <input
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      Password
                    </label>
                  </div>
                  <div className="mt-2 relative">
                    <input
                      required
                      placeholder="Password"
                      type={showPassword ? "Password" : "text"}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      name="password"
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer"
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-2xl font-bold text-black" />
                      ) : (
                        <FaEye className="text-2xl font-bold text-black" />
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right mb-4">
                <Link
                  to="/forgatepassword"
                  className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="flex justify-center w-full items-center">
                <div>
                  <GoogleBtn />
                  <FacebookBtn />
                </div>
              </div>
              <div className="mt-5">
                <button
                  className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  type="submit"
                >
                  Log in
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
              <p className="text-lg text-gray-600">
                No account yet?
                <Link to="/register" className="underline">
                  Create one
                </Link>
              </p>
              <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
