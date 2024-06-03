import { FaFacebook } from "react-icons/fa";

const FacebookBtn = () => {
  return (
    <div>
      <button className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mt-4">
        <FaFacebook className="text-3xl" />
        <span className="ml-2">Sign in with Apple</span>
      </button>
    </div>
  );
};

export default FacebookBtn;
