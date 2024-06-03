// import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
// import { AuthContext } from "../Auth/AuthProvider";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

const GoogleBtn = () => {
  //   const { googleLogin } = useContext(AuthContext);
  //   const navigate = useNavigate();

  //   const handleGoogleLogin = () => {
  //     googleLogin()
  //       .then((result) => {
  //         console.log("result:", result);
  //         toast.success("Congratulations ! You are our new member");
  //         navigate("/");
  //       })
  //       .catch((error) => {
  //         const errorMessage = error.message;
  //         console.log("errorMessage:", errorMessage);
  //         toast.warn(errorMessage);
  //       });
  //   };

  return (
    <div>
      <button
        // onClick={handleGoogleLogin}
        className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        <FcGoogle className="text-3xl" />
        <span className="ml-2">Sign in with Google</span>
      </button>
    </div>
  );
};

export default GoogleBtn;
