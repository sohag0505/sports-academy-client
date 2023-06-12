import React from "react";
import { useForm } from "react-hook-form";

const ManageCourseModal = ({ selected, classes, setClasses }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, price, image, availableSeats } = data;
    const courseData = {
      name: selected?.name,
      price: parseInt(price),
      image,
      availableSeats: parseInt(availableSeats),
      instructorName: selected?.instructorName,
      instructorEmail: selected?.instructorEmail,
      status: selected.status,
      _id: selected._id,
    };
    console.log(courseData);
    fetch(
      `https://sports-academies-server-pink.vercel.app/updateCourse/${selected._id}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(courseData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = classes.filter((c) => c._id !== selected._id);
          setClasses([courseData, ...remaining]);
          alert("Updated");
        }
      });
  };
  return (
    <dialog id="my_modal_1" className="modal">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg  mx-auto bg-white rounded-lg shadow-md p-6"
      >
        <button
          htmlFor="my_modal_1"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">Update Course</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Course Name
          </label>
          <input
            id="name"
            defaultValue={selected?.name}
            disabled
            placeholder="Enter Course Name"
            {...register("name")}
            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2">
            Photo URL
          </label>
          <input
            id="image"
            defaultValue={selected?.image}
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
            defaultValue={selected?.price}
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
            defaultValue={selected?.availableSeats}
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
    </dialog>
  );
};

export default ManageCourseModal;
