const ExtraOneAccommodations = () => {
  return (
    <div className="border-2 border-[#AB916C] p-5 rounded-t-2xl">
      <section className="relative bg-blue-50 mT-10 ">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75 rounded-t-2xl">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover rounded-t-2xl"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/gJ3bw5G/gerson-repreza-Cep-Dp-Ei-ALq-M-unsplash.jpg",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl font-marcellus">
                    Your story starts with us.
                  </h1>
                  <p className="mt-4 text-lg text-white font-jost">
                    Family amenities include a crib, high chair, baby bath, and
                    childrens books, making it perfect for families. swimming
                    pool, kitchen, gym, spa, parking, and bar.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <section className="pb-10 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold font-marcellus">
                      Awarded Hotel
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500 font-jost">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough...
                    </p>
                    <p className="mt-2 mb-4 text-blueGray-500 font-jost cursor-pointer text-lg underline hover:no-underline hover:text-green-700">
                      Discover More
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold font-marcellus">
                      {" "}
                      Booked Online
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500 font-jost">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                    <p className="mt-2 mb-4 text-blueGray-500 font-jost cursor-pointer text-lg underline hover:no-underline hover:text-green-700">
                      Discover More
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold font-jost">
                      100% secure
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500 font-jost">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                    <p className="mt-2 mb-4 text-blueGray-500 font-jost cursor-pointer text-lg underline hover:no-underline hover:text-green-700">
                      Discover More
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="relative pt-8 pb-6 mt-1">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center"></div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default ExtraOneAccommodations;
