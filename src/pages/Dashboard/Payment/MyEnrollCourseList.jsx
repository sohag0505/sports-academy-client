import React from "react";

const MyEnrollCourseList = ({ details, index }) => {
  const { price, email, status, curseDetails } = details;
  return (
    <tr>
      <th>
        <label>{index + 1}</label>
      </th>

      <td>{curseDetails.name}</td>
      <td>{price}</td>
      <td>{email}</td>
      <td>{status}</td>
    </tr>
  );
};

export default MyEnrollCourseList;
