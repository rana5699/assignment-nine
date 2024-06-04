import { useContext, useState } from "react";
import HelmetTitle from "../Shared/HelmetTitle";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { user, updateProfileInfo } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user ? user?.displayName : "");
  const [photoURL, setPhotoURL] = useState(user ? user?.photoURL : "");
  const [error, setError] = useState(null);

  const handleUpdate = (e) => {
    e.preventDefault();

    setError(null);

    if (!user) {
      setError("No user is logged in.");
      return;
    }

    updateProfileInfo(user, {
      displayName,
      photoURL,
    })
      .then((result) => {
        console.log("result:", result);
        toast.success("Profile updated successfully!");
        navigate("/");
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  return (
    <div className="my-10">
      <HelmetTitle title={"Update Profile"} />
      <div className="w-full mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          Update Your Profile
        </h2>

        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">
              Your Name
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">
              Photo URL
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              name="email"
              type="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>

          <div className="flex justify-end">
            <button
              className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
              type="submit"
            >
              Update Profile
            </button>
          </div>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default UpdateProfile;
