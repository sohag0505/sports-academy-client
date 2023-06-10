const AddCourse = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-16 mb-6">ADD COURSE</h2>
      <form>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                placeholder="Sub Category"
                name="category"
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
                placeholder="Rating"
                name="rating"
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
            <div className="form-control">
              <input
                type="text"
                placeholder="Details"
                name="details"
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
          <button className="btn btn-outline ">ADD COURSE</button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
