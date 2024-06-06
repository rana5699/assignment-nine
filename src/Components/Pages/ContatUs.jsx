import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";

const ContatUs = () => {
  return (
    <div className="w-full px-3 md:w-10/12  mx-auto mt-14  rounded-t-xl border-2 border-[#AB916C] mb-3">
      <div className="text-center w-3/4 mx-auto">
        <h2 className="text-3xl font-marcellus">Contact US</h2>
        <p className="font-jost my-3">
          Spacious family suite withFamily-friendly amenities include a crib,
          high chair, baby bath, childrens books, and a play area, catering to
          the needs of younger guests.
        </p>
      </div>
      <section>
        <div className="relative w-full h-96 rounded-lg ">
          <img
            className="absolute h-full w-full object-cover object-center rounded-t-xl"
            src="https://i.ibb.co/m8XVcJP/yayaq-destination-ptj2x-DWx-EJU-unsplash.jpg"
            alt="nature image"
          />
          <div className="absolute inset-0 h-full w-full bg-black/50"></div>
          <div className="relative pt-28 text-center">
            <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl">
              Contact Information
            </h2>
            <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-9 opacity-70">
              Spacious family suite withFamily-friendly amenities include a
              crib, high chair, baby bath, childrens books, and a play area,
              catering to the needs of younger guests.
            </p>
          </div>
        </div>
        <div className="-mt-16 mb-8 px-8 ">
          <div className="container mx-auto">
            <div className="py-12 flex justify-center rounded-xl border border-white bg-white shadow-md shadow-black/5 saturate-200">
              <div className="my-8 grid gap-6 px-4">
                <div className="flex items-center gap-4">
                  <FaLocationDot className="text-2xl" />
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">
                    145 Main Street,Kahipur,Barishal
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <IoCall className="text-2xl" />
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">
                    +1 123 456 7890
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <SiGmail className="text-2xl" />
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">
                    hotel@fiesta.com
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <TbWorldWww className="text-2xl" />
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">
                    Open Support Ticket{" "}
                  </p>
                </div>
              </div>
              <div className="py-4">
                <form>
                  <div className="mb-4">
                    <div className="relative w-full h-11 !min-w-full">
                      <input
                        type="text"
                        name="Name"
                        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900"
                        placeholder=" "
                      />
                      <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[&#x27; &#x27;] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[&#x27; &#x27;] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                        Enter your name{" "}
                      </label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="relative w-full h-11 !min-w-full">
                      <input
                        type="email"
                        name="Email"
                        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900"
                        placeholder=" "
                      />
                      <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[&#x27; &#x27;] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[&#x27; &#x27;] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                        Enter your email{" "}
                      </label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="relative w-full  h-11 !min-w-full">
                      <input
                        type="tel"
                        name="Phone Number"
                        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900"
                        placeholder=" "
                      />
                      <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[&#x27; &#x27;] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[&#x27; &#x27;] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                        Enter your phone number{" "}
                      </label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="relative w-full min-w-[200px] h-11 ">
                      <input
                        type="textarea"
                        name="Message"
                        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900"
                        placeholder=" "
                      />
                      <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[&#x27; &#x27;] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[&#x27; &#x27;] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                        Enter your message{" "}
                      </label>
                    </div>
                  </div>
                  <div className="inline-flex items-center">
                    <label className="relative flex items-center cursor-pointer p-3 rounded-full -ml-2.5">
                      <input
                        type="checkbox"
                        className="peer relative appearance-none w-5 h-5 border rounded-md border-blue-gray-200 cursor-pointer transition-all before:content[&#x27;&#x27;] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-gray-900 checked:border-gray-900 checked:before:bg-gray-900"
                        id=":R1a:"
                      />
                      <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                        <TbWorldWww className="text-2xl" />
                      </span>
                    </label>
                    <label className="text-gray-700 font-light select-none cursor-pointer mt-px">
                      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500">
                        You agree to{" "}
                        <a className="font-medium text-gray-700 hover:text-gray-900">
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </label>
                  </div>
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mt-6"
                    type="button"
                  >
                    Contact Us
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContatUs;
