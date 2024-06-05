import { Outlet } from "react-router-dom";
import MenuBar from "../Header/MenuBar";
import Footer from "../Pages/Footer";

const Root = () => {
  return (
    <div className=" my-3">
      <MenuBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
