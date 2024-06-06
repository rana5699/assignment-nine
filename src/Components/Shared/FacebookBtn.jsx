import { useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const FacebookBtn = () => {
  const location = useLocation();
  console.log("location:", location.state);
  const { loginWithFacebook } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelFacebookLogin = () => {
    loginWithFacebook()
      .then((result) => {
        const user = result.user;
        console.log("user:", user);
        // toast.success("Succsessfull login with facebook");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("errorMessage:", errorMessage);
        // toast.warn(errorMessage);
      });
  };

  return (
    <div>
      <button
        onClick={handelFacebookLogin}
        className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mt-4"
      >
        <FaFacebook className="text-3xl" />
        <span className="ml-2">Sign in with Facebook</span>
      </button>
    </div>
  );
};

export default FacebookBtn;
