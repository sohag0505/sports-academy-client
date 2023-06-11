import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Courses from "../pages/Courses/Courses";
import AddedCourses from "../pages/Dashboard/AddedCourses";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import ManageAddedCourses from "../pages/Dashboard/ManageAddedCourses";
import ManageCourses from "../pages/Dashboard/ManageCourses";
import MangeUsers from "../pages/Dashboard/MangeUsers";
import MyEnrollClasses from "../pages/Dashboard/MyEnrollClasses";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory";
import SelectedCourses from "../pages/Dashboard/SelectedCourses";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import PrivateRoute from "./PrivateRoute";

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
        path: "/classes",
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
        path: "/registation",
        element: <RegistrationPage></RegistrationPage>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "home",
        element: (
          <PrivateRoute>
            <DashboardHome></DashboardHome>
          </PrivateRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <MangeUsers></MangeUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manageAddedCourses",
        element: (
          <AdminRoute>
            <ManageAddedCourses></ManageAddedCourses>
          </AdminRoute>
        ),
      },
      {
        path: "manageCourses",
        element: (
          <InstructorRoute>
            <ManageCourses></ManageCourses>
          </InstructorRoute>
        ),
      },
      {
        path: "addedCourses",
        element: (
          <InstructorRoute>
            <AddedCourses></AddedCourses>
          </InstructorRoute>
        ),
      },
      {
        path: "selectedCourses",
        element: (
          <PrivateRoute>
            <SelectedCourses></SelectedCourses>
          </PrivateRoute>
        ),
      },
      {
        path: "myEnrollClass",
        element: (
          <PrivateRoute>
            <MyEnrollClasses></MyEnrollClasses>
          </PrivateRoute>
        ),
      },
      {
        path: "payment/:paymentId",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <PrivateRoute>
            <PaymentHistory></PaymentHistory>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
