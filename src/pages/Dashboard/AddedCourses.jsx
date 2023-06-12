import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { AuthContext } from "../providers/AuthProvider";
import SectionTittle from "../shared/SectionTittle";

const AddedCourses = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = (data) => {
    const { name, price, image, availableSeats } = data;
    const courseData = {
      name,
      price: parseInt(price),
      image,
      availableSeats: parseInt(availableSeats),
      instructorName: user?.displayName,
      instructorEmail: user?.email,
      status: "pending",
    };
    fetch("https://sports-academies-server-pink.vercel.app/addCourse", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(courseData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Added");
          // reset()
        }
      });
  };
  return (
    <div>
      <SectionTittle
        heading={"Add Your Course"}
        subHeading={"The Courses For Student"}
      ></SectionTittle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-2xl font-bold mb-4">Add Course</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Course Name
          </label>
          <input
            id="name"
            placeholder="Enter Course Name"
            {...register("name", { required: true })}
            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">
              Field required. Please check again.
            </span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2">
            Photo URL
          </label>
          <input
            id="image"
            placeholder="Enter Photo URL"
            {...register("image", { required: true })}
            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.image && (
            <span className="text-red-500 text-sm">
              Field required. Please check again.
            </span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2">
            Price
          </label>
          <input
            id="price"
            placeholder="Enter Price"
            {...register("price", { required: true })}
            type="number"
            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.price && (
            <span className="text-red-500 text-sm">
              Field required. Please check again.
            </span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="availableSeats" className="block mb-2">
            Available Seats
          </label>
          <input
            id="availableSeats"
            placeholder="Enter Available Seats"
            {...register("availableSeats", { required: true })}
            type="number"
            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.availableSeats && (
            <span className="text-red-500 text-sm">
              Field required. Please check again.
            </span>
          )}
        </div>
        <input className="btn btn-outline btn-error" type="submit" />
      </form>
    </div>
  );
};

export default AddedCourses;
