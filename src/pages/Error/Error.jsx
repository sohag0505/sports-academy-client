import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold mt-6 text-center">OPS!!!!</h2>
      <p className="text-red-600 text-3xl text-center font-semibold mt-4 mb-4">
        You write wrong url..Please provide correct path.
      </p>
      <div className="flex justify-center items-center">
        <Link to="/">
          <button className="btn btn-outline">Back to Home</button>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg"
          alt="Error-pic"
        />
      </div>
    </div>
  );
};

export default Error;
