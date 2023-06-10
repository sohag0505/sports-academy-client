import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <div className="flex justify-center items-center gap-2 mb-8">
              <img
                className="object-cover"
                src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/279619836/original/a6a22f36615452c07d9515efb04334048ef85394/design-a-professional-modern-sports-logo.jpg"
                height={40}
                width={60}
                alt=""
              />
              <h2>Sports Academies</h2>
            </div>
            {/* Sidebar content here */}
            <li>
              <NavLink to="/dashboard/manageuser">Manage User</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageAddedCourses">
                Manage Added Course
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addCourse">Add Course</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageCourse">Manage Course</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/selectedCourse">Selected Course</NavLink>
            </li>

            <div className="divider"></div>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
