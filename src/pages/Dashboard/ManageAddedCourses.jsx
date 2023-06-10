const ManageAddedCourses = () => {
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
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAddedCourses;
