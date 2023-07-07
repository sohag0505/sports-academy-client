import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../providers/AuthProvider";
import SectionTittle from "../shared/SectionTittle";
import MyEnrollCourseList from "./Payment/MyEnrollCourseList";

const MyEnrollClasses = () => {
  const [details, setDetails] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://sports-academies-server-pink.vercel.app/paymentHistory/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  console.log(details);
  return (
    <div>
      <SectionTittle heading={"My Enroll Classes"}></SectionTittle>
      <div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>

              <th>Name</th>
              <th>Price</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {details?.map((det, index) => (
              <MyEnrollCourseList
                details={det}
                key={index}
                index={index}
              ></MyEnrollCourseList>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrollClasses;
