import HelmetTitle from "../Shared/HelmetTitle";

const BookingForm = () => {
  return (
    <div className="bg-[#FAF7F4] shadow-2xl py-5 items-center justify-center my-5 p-5 font-jost rounded-lg">
      <HelmetTitle title={"Bokking"} />
      {/* form  */}
      <div>
        <div className="border-2 border-[#b99d75] p-2 flex justify-between rounded-md">
          <labe className="text-lg font-medium">Check In</labe>
          <input
            className="bg-transparent text-lg font-medium focus:outline-none cursor-pointer"
            type="date"
            name="date"
          />
        </div>
        <div className="border-2 border-[#b99d75] p-2 flex justify-between rounded-md my-3">
          <labe className="text-lg font-medium">Check Out</labe>
          <input
            className="bg-transparent text-lg font-medium focus:outline-none cursor-pointer"
            type="date"
            name="date"
          />
        </div>
        <div className="border-2 border-[#b99d75] p-2  rounded-md my-3 flex justify-between items-center">
          <label className="text-lg font-medium">Rooms</label>

          <select className="bg-transparent text-lg font-medium focus:outline-none cursor-pointer">
            <option>1 Room</option>
            <option>2 Rooms</option>
            <option>3 Rooms</option>
          </select>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-5">
          <div className="border-2 border-[#b99d75] p-2  rounded-md my-3 flex justify-between items-center">
            <label className="text-lg font-medium"> Adults</label>
            <select className="bg-transparent text-lg font-medium focus:outline-none cursor-pointer">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="border-2 border-[#b99d75] p-2  rounded-md my-3 flex justify-between items-center">
            <label className="text-lg font-medium"> Adults</label>
            <select className="bg-transparent text-lg font-medium focus:outline-none cursor-pointer">
              <option selected>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-marcellus">Extra Services</h2>
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center space-x-2">
              <input
                className="form-checkbox h-6 w-6 text-[#b99d75] border-2 border-[#b99d75] "
                type="checkbox"
              />
              <label className="text-xl ">Room Clean</label>
            </div>

            <div>
              <p className="text-lg ">$12/Night</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-5">
            <div className="flex items-center space-x-2">
              <input
                className="form-checkbox h-6 w-6 text-[#b99d75] border-2 border-[#b99d75] "
                type="checkbox"
              />
              <label className="text-xl ">Massage</label>
            </div>

            <div className="flex gap-3">
              <p className="text-lg ">$30/Person</p>
              <select className="w-12 bg-transparent border-2 border-[#b99d75]">
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between items-center mt-5">
            <div className="flex items-center space-x-2">
              <input
                className="form-checkbox h-6 w-6 text-[#b99d75] border-2 border-[#b99d75] "
                type="checkbox"
              />
              <label className="text-xl ">Day Spa</label>
            </div>

            <div className="flex gap-3">
              <p className="text-lg ">$45/Person</p>
              <select className="w-12 bg-transparent border-2 border-[#b99d75]">
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
              </select>
            </div>
          </div>
        </div>
        <hr className=" font-extrabold my-7" />

        <div className="my-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-marcellus">Total Cost </h2>
            <p className="text-2xl font-jost">$559</p>
          </div>
          <button className="w-full p-4 bg-black text-white text-xl font-marcellus mt-10 rounded-lg hover:bg-[#b99d75] transition duration-300 ease-in-out">
            Book Your Stay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
