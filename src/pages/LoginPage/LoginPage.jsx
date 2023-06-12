import { useContext, useState } from "react";
// import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const LoginPage = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  //   const navigate = useNavigate();
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // form.reset();
        // toast.success("Login Successfully !");
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const handleGoogleLogin = () => {
    setError("");
    console.log("i am here");
    googleLogin()
      .then((result) => {
        const loggedInUser = result.user;
        // toast.success("Login Successfully!");
        // const user = result.user;
        // navigate(from, { replace: true });
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          role: "student",
          img: loggedInUser?.photoURL,
        };
        fetch("https://sports-academies-server-pink.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            alert("logged");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log(error.message);
        setError(errorMessage);
      });
  };

  return (
    <div className="hero  bg-base-200">
      <div className="hero-content">
        <form onSubmit={handleSubmit}>
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-3xl font-semibold text-center">Login</h2>
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
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <button onClick={handleGoogleLogin} className="btn">
                Sign-with-google
              </button>
              <p>
                New user? Please..
                <Link className="text-red-700" to="/registation">
                  Registation
                </Link>
              </p>
            </div>
          </div>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
