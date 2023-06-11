import { useEffect, useState } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    // Simulating API call or data fetch
    const fetchInstructors = async () => {
      try {
        // Replace this with your actual API call to fetch the instructor data
        const response = await fetch("http://localhost:5000/instructors");
        const data = await response.json();
        setInstructors(data);
      } catch (error) {
        console.log("Error fetching instructors:", error);
      }
    };

    fetchInstructors();
  }, []);
console.log(instructors)
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Instructors</h2>
      <div className="grid grid-cols-1  md:grid-cols-4 gap-4">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="bg-white p-4 shadow-md rounded-lg"
          >
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-full h-[320px] object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-bold mb-2">{instructor.name}</h3>
            <p className="text-gray-600 mb-2 font-semibold">
              Email: {instructor.email}
            </p>
            <p className="text-gray-600 mb-2">
              Specialty: {instructor.specialty}
            </p>
            <p className="font-bold text-rose-500">
              Experience: {instructor.experience}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
