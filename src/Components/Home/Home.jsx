import Accommodations from "../Accommodations/Accommodations";
import Banner from "../Header/Banner";
import HelmetTitle from "../Shared/HelmetTitle";

const Home = () => {
  return (
    <div className="w-full p-3 md:w-10/12 mx-auto ">
      <HelmetTitle title={"Home"} />
      <Banner />
      <Accommodations />
    </div>
  );
};

export default Home;
