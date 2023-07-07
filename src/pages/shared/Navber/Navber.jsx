import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/miu.png";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {user && (
        <>
          <li>
            <Link to="/classes">Courses</Link>
          </li>
        </>
      )}
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      {user && (
        <>
          <li>
            <Link to="/dashboard/home">Dashboard</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden"></label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="normal-case text-xl">
            <img src={logo} height={80} width={450} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {!user && (
            <div>
              <Link className="mr-4" to="/login">
                Login
              </Link>
              <Link to="/registration">Registration</Link>
            </div>
          )}
        </div>
        {user && (
          <div>
            <img
              src={user?.photoURL}
              title={user?.displayName}
              width={35}
              height={35}
              alt=""
            />
            <button onClick={logOut} className=" mr-10">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
