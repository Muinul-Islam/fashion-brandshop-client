/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword } from "firebase/auth";
import { BsGoogle } from "react-icons/bs";
import auth from "../../firebase.config";
import { useState } from "react";
import swal from "sweetalert";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setError("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
        swal("Good job!", "Successfully Logged In", "success");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-gray-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-black font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <button className="btn mt-4 bg-blue-600 text-white">
                Login With
                <BsGoogle></BsGoogle>
              </button>
            </form>

            <div className="p-4 text-red-600">{error && <p>{error}</p>}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
