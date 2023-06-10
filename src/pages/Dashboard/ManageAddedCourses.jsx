import { useEffect, useState } from "react";

const ManageAddedCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);

        console.log(data);
      });
  }, []);
  return (
    <div className="mb-16">
      <h2 className="font-bold text-center text-3xl mb-14">
        Manage Added Courses
      </h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th> NAME</th>
              <th>PRICE</th>
              <th>INSTRUCTOR NAME</th>
              <th>AVIAILABLE SEAT</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={course.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{course.name}</td>
                <td>{course.price}</td>
                <td>{course.instructorName}</td>
                <td>{course.seats}</td>
                <td>{course.location}</td>
                <th>
                  <button className="btn btn-outline btn-primary">
                    VIEW DETAILS
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAddedCourses;
