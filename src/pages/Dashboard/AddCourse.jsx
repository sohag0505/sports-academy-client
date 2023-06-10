import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const AddCourse = () => {
  const { user } = useContext(AuthContext);
  const handleAddCourse = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;

    const price = form.price.value;

    const quantity = form.quantity.value;

    const photo = form.photo.value;

    const coursesData = {
      name,

      price,

      quantity,

      photo,
      inatructorName: user.displayName,
      instructorEmail: user.email,
    };

    console.log(coursesData);

    fetch("http://localhost:5000/classes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coursesData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("User added successfully");
          // toast.success("Added Toy successfully!");
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-16 mb-6">ADD COURSE</h2>
      <form onSubmit={handleAddCourse}>
        <div className="card-body">
          <div className="grid grid-cols-1 gap-6">
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                placeholder="Available Quantity"
                name="quantity"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-4">
            <input
              type="text"
              placeholder="Photo Url"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex justify-center items-center mb-12">
          <input
            type="submit"
            className="btn btn-outline "
            value={"ADD COURSE"}
          />
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
