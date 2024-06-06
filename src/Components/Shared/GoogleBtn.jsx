import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const GoogleBtn = () => {
  const { loginWithGooogle } = useContext(AuthContext);
  const location = useLocation();
  console.log("location:", location.state);

  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    loginWithGooogle()
      .then((result) => {
        console.log("result:", result);
        toast.success("Congratulations ! You are our new member");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.warn(errorMessage);
        console.log("errorMessage:", errorMessage);
      });
  };

  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        <FcGoogle className="text-3xl" />
        <span className="ml-2">Sign in with Google</span>
      </button>
    </div>
  );
};

export default GoogleBtn;
