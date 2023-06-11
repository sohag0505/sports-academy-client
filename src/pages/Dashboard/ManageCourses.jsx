import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ManageCourseModal from "./ManageCourseModal";
import ManageCoursesCard from "./ManageCoursesCard";
import SectionTittle from "../shared/SectionTittle";
// import { useQuery } from '@tanstack/react-query';

const ManageCourses = () => {
  const [classes, setClasses] = useState([]);
  const [change, setChange] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/classes?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  // const {data: classes = [], isLoading: loading, refetch} = useQuery({
  //     queryKey: ['classes'],
  //     queryFn: async() => {
  //         const res = await fetch(`http://localhost:5000/classes?email=${user?.email}`);
  //         return res.json();
  //     }
  // })
  // if (loading) {
  //     return <p className='text-2xl'>Loading....</p>
  // }
  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/deleteCourse/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = classes.filter((c) => c._id !== _id);
          setClasses(remaining);
          console.log(remaining, classes);
          alert("deleted");
        }
      });
  };
  const [selected, setSelected] = useState({});
  const showUpdater = (data) => {
    window.my_modal_1.showModal();
    setSelected(data);
  };

  return (
    <div>
      {/* Open the modal using ID.showModal() method */}
      <ManageCourseModal
        selected={selected}
        classes={classes}
        setClasses={setClasses}
      ></ManageCourseModal>
      <div className="overflow-x-auto">
        <SectionTittle
          heading={"Manage Your Course"}
          subHeading={"Edit Or Delete Course"}
        ></SectionTittle>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Instructor Name</th>
              <th>Available Seat</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes?.map((course, index) => (
              <ManageCoursesCard
                key={course._id}
                course={course}
                index={index}
                handleDelete={handleDelete}
                showUpdater={showUpdater}
              ></ManageCoursesCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCourses;
