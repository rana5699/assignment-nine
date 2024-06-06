import { useParams } from "react-router-dom";
import PrimaryBtn from "../Shared/PrimaryBtn";
import { FaChartArea } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { IoBed } from "react-icons/io5";
import HelmetTitle from "../Shared/HelmetTitle";
import { useEffect, useState } from "react";
import Loader from "../Shared/Loader";

const AccommodationDetails = () => {
  const { id } = useParams();
  const [dataInfo, setDataInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/hotel.json")
      .then((response) => {
        return response.json();
      })
      .then((Clickeddata) => {
        console.log("Clickeddata:", Clickeddata);
        const findData = Clickeddata.find((item) => {
          console.log("item:", item);
          return item.id == id;
        });
        console.log("findData:", findData);
        setDataInfo(findData);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="my-10 px-3 w-full md:w-10/12 mx-auto">
      {loading && <Loader />}
      <HelmetTitle title={`${dataInfo?.room_title}`} />
      <div>
        <div
          className="relative overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
          style={{
            backgroundImage: `url(${dataInfo?.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="my-3 mx-3 flex justify-between relative text-white z-10">
            <div>
              <p className="py-2 px-3 border-2 bg-white border-[#b99d75] w-fit rounded-md font-jost font-bold text-black">
                {dataInfo?.segment}
              </p>
            </div>
            <div>
              <p className="py-2 px-3 border-2 bg-white border-[#b99d75] w-fit rounded-md font-jost font-bold text-black">
                {dataInfo?.status}
              </p>
            </div>
          </div>
          <div className="relative text-white z-10 flex justify-center items-center">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold font-marcellus">
                  {dataInfo?.room_title}
                </h1>
                <p className="py-6 font-jost">
                  {dataInfo?.description && dataInfo?.description.length > 200
                    ? dataInfo?.description.slice(0, 200)
                    : dataInfo?.description}
                </p>
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-5 mx-auto">
                    <div>
                      <p className="py-2 px-3 border-2 bg-white border-[#b99d75] w-fit rounded-md font-marcellus font-bold text-black">
                        Per Night : $
                        <span className="font-jost">{dataInfo?.price}</span>
                      </p>
                    </div>
                    <div>
                      <p className="py-2 px-3 border-2 bg-white border-[#b99d75] w-fit rounded-md font-marcellus font-bold text-black">
                        <span className="font-jost">{dataInfo?.location}</span>
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
      <div className="my-10">
        <div className="flex gap-x-5 items-center flex-wrap">
          <div className="flex gap-2 items-center">
            <FaChartArea className="text-2xl" />
            <p className="text-lg font-jost">{dataInfo?.space}</p>
          </div>
          <div className="flex gap-2 items-center">
            <AiOutlineTeam className="text-3xl" />
            <p className="text-lg font-jost">{dataInfo?.guests} Person</p>
          </div>
          <div className="flex gap-2 items-center">
            <IoBed className="text-3xl" />
            <p className="text-lg font-jost"> {dataInfo?.bed} Bed</p>
          </div>
        </div>
        <div>
          <p className="py-6 font-jost">
            {dataInfo?.description && dataInfo?.description}
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-marcellus text-center md:text-left">
          Family Amenities
        </h2>
        <div className="flex gap-x-5 flex-wrap justify-center md:justify-start">
          {dataInfo?.family_amenities.map((animiti, index) => (
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
          {dataInfo?.room_amenities.map((animiti, index) => (
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
          {dataInfo?.facilities.map((animiti, index) => (
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
