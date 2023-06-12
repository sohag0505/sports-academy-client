import { useEffect, useState } from "react";

const Slider = () => {
  const [sportsData, setSportsData] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch sports data
    const fetchSportsData = async () => {
      try {
        // Make an API call to fetch sports data
        const response = await fetch(
          "https://sports-academies-server-pink.vercel.app/classes"
        );
        const data = await response.json();

        // Update the state with the fetched sports data
        setSportsData(data);
      } catch (error) {
        console.error("Error fetching sports data:", error);
      }
    };

    fetchSportsData();
  }, []);

  return (
    <div className="slider-container">
      <div className="slider grid grid-cols-1 md:grid-cols-3 gap-5">
        {sportsData.map((sport) => (
          <div key={sport.id} className="card">
            <div>
              <div className="card w-full bg-base-100 shadow-xl">
                <figure className="p-1">
                  <img
                    src={sport.image}
                    alt="Shoes"
                    className="rounded-xl w-full object-cover h-[250px]"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{sport.name}</h2>
                  <h2 className="font-bold">
                    Instructor Name: {sport.instructorName}
                  </h2>
                  <p>{sport.description}</p>
                  <p className="font-semibold">Location: {sport.location}</p>
                  <p className="text-rose-500 font-semibold text-3xl">
                    Price: ${sport.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
