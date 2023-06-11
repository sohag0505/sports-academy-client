import React, { useEffect, useState } from 'react';
import ManageAddedCoursesCard from './ManageAddedCoursesCard';
import SectionTittle from '../shared/SectionTittle';


const ManageAddedCourses = () => {
    const [classes, setClasses] = useState([])
    // only accepted are showed here
    // const currentStatus = 'accepted';
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <div className="overflow-x-auto">
         <SectionTittle heading={'Manage Added Course'} subHeading={'Approve Or Reject Courses'}></SectionTittle>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
               #
                </label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Instructor Name</th>
              <th>Available Seat</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
    
           {
            classes.map(((course,index)=><ManageAddedCoursesCard key={course._id} course={course} index={index}></ManageAddedCoursesCard>))
           }
          </tbody>
       
          
        </table>
      </div>
    );
};

export default ManageAddedCourses;