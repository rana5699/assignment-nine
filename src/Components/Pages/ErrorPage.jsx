import PrimaryBtn from "../Shared/PrimaryBtn";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h3 className="text-5xl my-3 font-marcellus">Page Not Found</h3>
        <p className="font-jost text-lg">
          Sorry but we could nott find the page you are looking for. It might
          have been moved or deleted.
        </p>

        <PrimaryBtn text={"Back to Home"} path={"/"} />
      </div>
    </div>
  );
};

export default ErrorPage;
