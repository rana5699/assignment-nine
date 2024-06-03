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
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import "aos/dist/aos.css";

// Import Swiper styles

const Banner = () => {
  const [banner, setBanner] = useState(null);
  useEffect(() => {
    fetch("/sliders.json")
      .then((response) => response.json())
      .then((data) => {
        setBanner(data);
      })
      .catch((error) => console.error("Error loading the banner:", error));
  }, []);
  return (
    <Swiper
      className=" my-5"
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      effect="fade"
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {banner &&
        banner.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative text-lg  bg-gray-100 flex justify-center items-center rounded-lg"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "500px",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              <div
                className="relative text-white z-10 "
                data-aos="fade-zoom-in"
              >
                <div className="hero border-2 rounded-md border-[#AB916C] my-5">
                  <div className="hero-content text-center">
                    <div className="max-w-xl">
                      <h1 className="text-5xl font-bold font-marcellus">
                        {item?.title}
                      </h1>
                      <p className="py-6 font-jost">{item?.subTitle}</p>
                      <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#AB916C] shadow-[inset_0px_-2px_0px_1px_#AB916C] group hover:bg-[#AB916C] transition duration-300 ease-in-out">
                        <span className="font-medium text-[#333] group-hover:text-white font-jost">
                          Stay Booking
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Banner;
