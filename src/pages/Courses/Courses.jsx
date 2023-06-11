import { useContext, useEffect, useState } from "react";
import useRole from "../../hooks/useRole";
import { AuthContext } from "../providers/AuthProvider";

const Courses = () => {
  const [sportsData, setSportsData] = useState([]);
  const { user } = useContext(AuthContext);
  const { role } = useRole();
  const currentStatus = "accepted";
  useEffect(() => {
    // Simulating an API call to fetch sports data
    const fetchSportsData = async () => {
      try {
        // Make an API call to fetch sports data
        const response = await fetch(
          `http://localhost:5000/classes?status=${currentStatus}`
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
  const handleSelect = (singleClass) => {
    const { _id, ...rest } = singleClass;
    const newData = { studentEmail: user.email, ...rest };
    // console.log(newData)

    fetch("http://localhost:5000/selectedClass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Added");
          // reset()
        }
      });
  };

  return (
    <div className="slider-container">
      <div className="slider grid grid-cols-1 md:grid-cols-3 gap-10">
        {sportsData.map((sport) => (
          <div key={sport.id} className="card">
            <div>
              <div className="card w-full bg-base-100 shadow-xl">
                <figure className=" ">
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
                  <button
                    onClick={() => handleSelect(sport)}
                    disabled={role !== "student"}
                    className="btn btn-block btn-outline btn-error"
                  >
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
