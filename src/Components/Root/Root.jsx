import { Outlet } from "react-router-dom";
import MenuBar from "../Header/MenuBar";

const Root = () => {
  return (
    <div className="w-full p-3 md:w-11/12 mx-auto my-3">
      <MenuBar />
      <Outlet />
    </div>
  );
};

export default Root;
