/* eslint-disable react/prop-types */
import { FaChartArea } from "react-icons/fa";
import PrimaryBtn from "../Shared/PrimaryBtn";
import { AiOutlineTeam } from "react-icons/ai";
import { IoBed } from "react-icons/io5";

const AccommodationCrad = ({ item }) => {
  const {
    image,
    room_title,
    bed,
    guests,
    space,
    id,
    description,
    segment,
    price,
  } = item;

  return (
    <div>
      <div
        className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-14"
        data-aos="zoom-in-up"
      >
        <div className=" mx-4 -mt-6  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600 relative">
          <img
            className="w-full bg-cover h-full md:h-[300px] lg:h-[400px]"
            src={image}
            alt={room_title}
          />
        </div>
        <div className=" absolute left-7">
          <p className="py-2 px-3 border-2 bg-white border-[#b99d75] w-fit rounded-md  font-jost font-medium">
            {segment}
          </p>
        </div>
        <div className="absolute right-7 top-0">
          <p className="py-2 px-3 border-2 bg-white border-[#b99d75] w-fit rounded-md  font-jost font-medium">
            ${price}/ Night
          </p>
        </div>
        <div className="p-6">
          <h5 className="mb-2 block  text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased font-marcellus">
            {room_title}
          </h5>
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex gap-2 items-center">
              <FaChartArea className="text-2xl" />
              <p className="text-lg font-jost">{space}</p>
            </div>
            <div className="flex gap-2 items-center">
              <AiOutlineTeam className="text-3xl" />
              <p className="text-lg font-jost">{guests} Person</p>
            </div>
            <div className="flex gap-2 items-center">
              <IoBed className="text-3xl" />
              <p className="text-lg font-jost"> {bed} Bed</p>
            </div>
          </div>
          <p className="block font-jost text-base font-light leading-relaxed text-inherit antialiased mt-5">
            {description.length > 20 ? description.slice(0, 200) : description}
            ...
          </p>
        </div>
        <div className="p-6 pt-0">
          <PrimaryBtn
            text={"View Details"}
            path={`/accommodationDetails/${id}`}
            data={item}
          />

          {/* <button className="btn" ></button> */}
        </div>
      </div>
    </div>
  );
};

export default AccommodationCrad;
