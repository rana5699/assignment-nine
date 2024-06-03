import { useEffect, useState } from "react";
import AccommodationCrad from "./AccommodationCrad";
import Loader from "../Shared/Loader";

const Accommodations = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./hotel.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="my-7">
      <div className="text-center w-3/4 mx-auto">
        <h2 className="text-3xl font-marcellus">Estate Accommodations</h2>
        <p className="font-jost my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dicta
          quas atque laboriosam deserunt, praesentium id ullam quia asperiores
          at labore rem dolorem quo fugit cumque! Corrupti quod unde nobis.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {data &&
          data.map((item) => <AccommodationCrad key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Accommodations;
