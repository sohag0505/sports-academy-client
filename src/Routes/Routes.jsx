import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Courses from "../pages/Courses/Courses";
import AddCourse from "../pages/Dashboard/AddCourse";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageAddedCourses from "../pages/Dashboard/ManageAddedCourses";
import ManageCourse from "../pages/Dashboard/ManageCourse";
import ManagerUser from "../pages/Dashboard/ManagerUser";
import SelectedCourse from "../pages/Dashboard/SelectedCourse";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/registration",
        element: <RegistrationPage></RegistrationPage>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "manageuser",
        element: <ManagerUser></ManagerUser>,
      },
      {
        path: "addCourse",
        element: <AddCourse></AddCourse>,
      },
      {
        path: "manageAddedCourses",
        element: <ManageAddedCourses></ManageAddedCourses>,
      },
      {
        path: "manageCourse",
        element: <ManageCourse></ManageCourse>,
      },
      {
        path: "selectedCourse",
        element: <SelectedCourse></SelectedCourse>,
      },
    ],
  },
]);
