/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PrimaryBtn = ({ text, passFunction, path, data }) => {
  return (
    <div className="my-3">
      <Link to={path} state={data}>
        {" "}
        <button
          onClick={passFunction}
          className="relative font-marcellus px-8 py-3 rounded-md w-2/4  isolation-auto z-10 border-2 border-[#AB916C] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#AB916C] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center  font-semibold text-black bg-white  shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        >
          {text}
        </button>
      </Link>
    </div>
  );
};

export default PrimaryBtn;
