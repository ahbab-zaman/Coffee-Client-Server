import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { AuthContext } from "../../AuthProviders/AuthProvider";
import { useContext } from "react";

const SignIn = () => {
  const { userSignIn } = useContext(AuthContext);

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;


    userSignIn(email, password)
    .then(res => {
        const lastLoginTime = res?.user?.metadata?.lastSignInTime;
        const updatedInfo = {email, lastLoginTime}
        console.log(res.user)
        fetch('https://coffee-hub-server-zeta.vercel.app/users', {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedInfo),
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })
    })
    .catch(error => {
        console.log(error)
    })
  }

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col w-3/4 mx-auto">
          <h2 className="text-3xl font-semibold">Sign In</h2>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
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
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-center py-4">
                New to this site?{" "}
                <Link to="/signup" className="text-blue-500 underline">
                  SignUp
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
