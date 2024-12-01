import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProviders/AuthProvider";
import { Result } from "postcss";

const SignUp = () => {
  const { UserSignUp } = useContext(AuthContext);

  const handleSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    UserSignUp(email, password)
      .then((res) => {
        const createdAt = res?.user?.metadata?.creationTime;
        const newUsers = { name, email, createdAt };
        console.log(res.user);
        fetch("https://coffee-hub-server-zeta.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUsers),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col w-3/4 mx-auto">
          <h2 className="text-3xl font-semibold">Sign up</h2>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form onSubmit={handleSingUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
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
                <button className="btn btn-primary">Register</button>
              </div>
              <p className="text-center py-4">
                Already have an account?{" "}
                <Link to="/signin" className="text-blue-500 underline">
                  SignIn
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
