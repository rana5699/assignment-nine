import { IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import PrimaryBtn from "../Shared/PrimaryBtn";
import "animate.css";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const MenuBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log Out Success");
      })
      .catch((error) => {
        toast.success(error.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink className="mr-3 text-lg font-semibold hover:underline" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="mr-3 text-lg font-semibold hover:underline"
          to="/booking"
        >
          Booking
        </NavLink>
      </li>
      <li>
        <NavLink
          className="mr-3 text-lg font-semibold hover:underline"
          to="/updateprofile"
        >
          Update Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <ToastContainer />
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IoMdMenu className="text-4xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="text-2xl font-bold text-center animate__animated animate__bounceIn"
          >
            Hotel Mayami
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center">
              <section className="flex justify-center items-center mr-3 ">
                <div className="group flex justify-center p-1 rounded-full drop-shadow-xl from-gray-800 bg-[#a21caf] text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:from-[#331029] hover:to-[#310413] cursor-pointer">
                  <img className="w-14 rounded-full" src={user?.photoURL} />
                  <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700 w-full">
                    {user?.displayName}
                  </span>
                </div>
              </section>
              <PrimaryBtn
                text={"LogOut"}
                path={"/login"}
                passFunction={handleLogOut}
              />
            </div>
          ) : (
            <PrimaryBtn text={"Login"} path={"/login"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
