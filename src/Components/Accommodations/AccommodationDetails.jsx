import { useLocation, useParams } from "react-router-dom";
import PrimaryBtn from "../Shared/PrimaryBtn";
import { FaChartArea } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { IoBed } from "react-icons/io5";
import HelmetTitle from "../Shared/HelmetTitle";
import Loader from "../Shared/Loader";

const AccommodationDetails = () => {
  const { id } = useParams();
  const [loadingData, setLoadingData] = useState(true);
  const [roomData, setRoomData] = useState(null);
  console.log("roomData:", roomData);
  const location = useLocation();
  const data = location.state;
  if (loadingData) {
    return <Loader />;
  }

  return (
    <div className="my-10">
      <HelmetTitle title={`${data?.room_title}`} />
      <div>
        <div
          className="relative   overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600 "
          style={{
            backgroundImage: `url(${data?.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px",
          }}
        >
          {" "}
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div
            className="my-3  mx-3 flex justify-between relative text-white z-10"
            data-aos="zoom-in-up"
          >
            <div className=" ">
              <p className="py-2 px-3 border-2 bg-white border-[#b99d75] w-fit rounded-md  font-jost font-bold text-black">
                {data?.segment}
              </p>
            </div>
            <div className="">
              <p className="py-2 px-3 border-2 bg-white border-[#b99d75] w-fit rounded-md  font-jost font-bold  text-black ">
                {data?.status}
              </p>
            </div>
          </div>
          {/* content  */}
          <div className="relative text-white z-10 flex justify-center items-center">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold font-marcellus">
                  {data?.room_title}
                </h1>
                <p className="py-6 font-jost">
                  {data?.description && data?.description?.length > 200
                    ? data?.description.slice(0, 200)
                    : data?.description}
                </p>

                <div
                  className="flex items-center justify-center"
                  data-aos="zoom-in-up"
                >
                  <div className="flex items-center gap-5 mx-auto">
                    <div className="">
                      <p className="py-2 px-3 border-2 bg-white border-[#b99d75] w-fit rounded-md  font-marcellus font-bold  text-black ">
                        Per Night : $
                        <span className="font-jost">{data?.price}</span>
                      </p>
                    </div>
                    <div className="">
                      <p className="py-2 px-3 border-2 bg-white border-[#b99d75] w-fit rounded-md  font-marcellus font-bold  text-black ">
                        <span className="font-jost">{data?.location}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <PrimaryBtn text={"Book Your Stay"} path={"/booking"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* descriptions  */}

      <div className="my-10 ">
        <div className=" flex gap-x-5 items-center flex-wrap">
          <div className="flex gap-2 items-center">
            <FaChartArea className="text-2xl" />
            <p className="text-lg font-jost">{data?.space}</p>
          </div>
          <div className="flex gap-2 items-center">
            <AiOutlineTeam className="text-3xl" />
            <p className="text-lg font-jost">{data?.guests} Person</p>
          </div>
          <div className="flex gap-2 items-center">
            <IoBed className="text-3xl" />
            <p className="text-lg font-jost"> {data?.bed} Bed</p>
          </div>
        </div>
        <dir>
          <p className="py-6 font-jost">
            {data?.description && data?.description}
          </p>
        </dir>
      </div>

      <div>
        <h2 className="text-3xl font-marcellus text-center md:text-left">
          Family Amenities
        </h2>
        <div className="flex gap-x-5 flex-wrap justify-center md:justify-start">
          {data?.family_amenities.map((animiti, index) => (
            <p
              className="py-3 px-5 bg-[#FAF7F4] w-fit my-5 text-lg font-jost font-medium rounded-sm"
              key={index}
            >
              {animiti}
            </p>
          ))}
        </div>
      </div>

      <div className="my-5 text-center md:text-left">
        <h2 className="text-3xl font-marcellus"> Room Amenities</h2>
        <div className="flex gap-x-5 flex-wrap justify-center md:justify-start">
          {data?.room_amenities.map((animiti, index) => (
            <p
              className="py-3 px-5 bg-[#FAF7F4] w-fit my-5 text-lg font-jost font-medium rounded-sm"
              key={index}
            >
              {animiti}
            </p>
          ))}
        </div>
      </div>

      <div className="my-5 text-center md:text-left">
        <h2 className="text-3xl font-marcellus">Facilities</h2>
        <div className="flex gap-x-5 flex-wrap justify-center md:justify-start">
          {data?.facilities.map((animiti, index) => (
            <p
              className="py-3 px-5 bg-[#FAF7F4] w-fit my-5 text-lg font-jost font-medium rounded-sm"
              key={index}
            >
              {animiti}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccommodationDetails;
