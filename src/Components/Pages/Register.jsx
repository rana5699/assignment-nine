import { Link, useNavigate } from "react-router-dom";
import GoogleBtn from "../Shared/GoogleBtn";
import FacebookBtn from "../Shared/FacebookBtn";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import HelmetTitle from "../Shared/HelmetTitle";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [error, setError] = useState(null);
  const { updateProfileInfo, createUser } = useContext(AuthContext);

  const verifyPassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }

    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);

    if (!uppercase) {
      return "Password must have at least one uppercase letter.";
    }

    if (!lowercase) {
      return "Password must have at least one lowercase letter.";
    }

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const userPhoto = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("name:", name, email, password, userPhoto);
    setError(null);

    const passwordError = verifyPassword(password);
    if (passwordError) {
      setError({ message: passwordError });
      toast.warn(passwordError);
      return;
    }

    createUser(email, password)
      .then((result) => {
        toast.success("Created new user");
        updateProfileInfo(result.user, {
          displayName: name,
          photoURL: userPhoto,
        })
          .then(() => {
            console.log("Profile Updated");
          })
          .catch((error) => {
            console.log("error:", error);
          });
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("errorMessage:", errorMessage);
        toast.warn(errorMessage);
      });
  };

  return (
    <div>
      <HelmetTitle title={"Register"} />
      <div className="">
        <section className="rounded-md p-2 bg-gray-200 my-5">
          <div className="flex items-center justify-center my-3 ">
            <div className="xl:mx-auto shadow-md p-5 xl:w-full xl:max-w-sm 2xl:max-w-md bg-white rounded-lg ">
              <div className="mb-2"></div>
              <h2 className="text-2xl font-bold leading-tight">
                Sign up to create account
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Already have an account?{" "}
                <Link to="/login">
                  {" "}
                  <span className="text-lg font-bold text-green-500">
                    Sign In
                  </span>
                </Link>
              </p>
              <form onSubmit={handleSubmit} className="mt-5">
                <div className="space-y-4">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      User Name
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="Full Name"
                        type="text"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        name="name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      User Photo
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="Image Link "
                        type="url"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        name="photoUrl"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        required
                        placeholder="Email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        name="email"
                      />
                    </div>
                  </div>
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
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
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
                  <div>
                    <button
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>
                </div>
                {error && <p className="text-red-500 my-3">{error.message}</p>}
              </form>
              <div className="flex justify-center w-full items-center my-5">
                <div>
                  <GoogleBtn />
                  <FacebookBtn />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
