// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ExtraTwo = () => {
  return (
    <div>
      <div className="mt-5 flex justify-between items-center ">
        <h2 className="text-3xl font-marcellus">The Accommodations</h2>
        <Link to="/norfount">
          <button className="px-3 py-2 border-2 text-lg font-jost border-[#AB916C]">
            Dscover All
          </button>
        </Link>
      </div>
      <Swiper
        className=" my-5"
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div>
          <SwiperSlide>
            {" "}
            <div className="flex  items-center justify-center my-10">
              <div className="relative flex w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                  <img
                    src="https://i.ibb.co/64phDSD/sasha-kaunas-TAg-GZWz6-Qg8-unsplash.jpg"
                    alt="image"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                    startups
                  </h6>
                  <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Fiesta Twin Room
                  </h4>
                  <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    The suite covers 1300 square feet, providing ample space for
                    a comfortable stay.The Fiesta Deluxe King Room in Dhaka
                    offers a luxurious stay with a king-size bed, seafront view,
                    and modern amenities including free Wi-Fi, air conditioning,
                    TV, minibar, and coffee maker. Family-friendly, it provides
                    cribs, high chairs, and childrens books.
                  </p>
                  <Link className="inline-block">
                    <button
                      className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Learn More
                      <FaLongArrowAltRight className="text-xl" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex  items-center justify-center my-10">
              <div className="relative flex w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                  <img
                    src="https://i.ibb.co/LYjcWvF/hwang-inkeom-HVN4-Rj-Sxd-BY-unsplash.jpg"
                    alt="image"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                    startups
                  </h6>
                  <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Fiesta Superior
                  </h4>
                  <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    Additionally, guests have access to top-notch facilities
                    including a living room,In Chittagong, the Fiesta Standard
                    Single Room is perfect for solo travelers. This cozy
                    500-square-foot room features free Wi-Fi, air conditioning,
                    and a minibar.
                  </p>
                  <Link className="inline-block">
                    <button
                      className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Learn More
                      <FaLongArrowAltRight className="text-xl" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex  items-center justify-center my-10">
              <div className="relative flex w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                  <img
                    src="https://i.ibb.co/gJ3bw5G/gerson-repreza-Cep-Dp-Ei-ALq-M-unsplash.jpg"
                    alt="image"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                    startups
                  </h6>
                  <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Fiesta Presidential Suite
                  </h4>
                  <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    Whether you are here for business or leisure, this room
                    ensures a memorable stay with its blend of luxury, comfort,
                    and breathtaking views.The Fiesta Family Suite in Coxs Bazar
                    offers spacious comfort for families with a king-size bed,
                    separate living area, and beautiful sea views.
                  </p>
                  <Link className="inline-block">
                    <button
                      className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Learn More
                      <FaLongArrowAltRight className="text-xl" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default ExtraTwo;
