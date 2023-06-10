import { useEffect, useState } from "react";

const Courses = () => {
  const [sportsData, setSportsData] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch sports data
    const fetchSportsData = async () => {
      try {
        // Make an API call to fetch sports data
        const response = await fetch("http://localhost:5000/classes");
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
      <div className="slider grid grid-cols-1 md:grid-cols-3 gap-10">
        {sportsData.map((sport) => (
          <div key={sport.id} className="card">
            <div>
              <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
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

                  <p className="font-semibold">Location: {sport.location}</p>
                  <div className="flex justify-center items-center mb-3 gap-8">
                    <p className="text-rose-500 font-semibold text-2xl">
                      Price: ${sport.price}
                    </p>
                    <p>{sport.seats}</p>
                  </div>
                  <button className="btn btn-block btn-outline btn-error">
                    Select Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
