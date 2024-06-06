import Accommodations from "../Accommodations/Accommodations";
import ExtraOneAccommodation from "../Accommodations/ExtraOneAccomodations";
import Banner from "../Header/Banner";
import ContatUs from "../Pages/ContatUs";
import HelmetTitle from "../Shared/HelmetTitle";

const Home = () => {
  return (
    <div>
      <div className="w-full p-3 md:w-10/12 mx-auto ">
        <HelmetTitle title={"Home"} />
        <Banner />
        <Accommodations />
        <ExtraOneAccommodation />
        <ContatUs />
      </div>
    </div>
  );
};

export default Home;
