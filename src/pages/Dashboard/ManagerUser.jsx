const ManagerUser = () => {
  return (
    <div className="mb-16">
      <h2 className="font-bold text-center text-3xl mb-14">Manage User</h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>PICTURE</th>
              <th> NAME</th>
              <th>EMAIL</th>
              <th>ROLE</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagerUser;
