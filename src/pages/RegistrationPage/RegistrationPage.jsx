import { useContext, useState } from "react";
// import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");

    if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }
    createUser(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(name, photoUrl)
        .then(() => {
          const saveUser = {
            name: name,
            email: email,
            role: "student",
            img: photoUrl,
          };
          fetch("https://sports-academies-server-pink.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                alert("crated");
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content width=[600px]">
        <form onSubmit={handleSubmit}>
          <div className="card w-full max-w-screen-2xl shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-3xl font-semibold text-center">
                Registation
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo-url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Registation"
                />
              </div>

              <p>
                Already an acount? Please..
                <Link className="text-red-700" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
          {error && <p className="text-danger">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
