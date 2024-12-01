import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="w-11/12 mx-auto py-6 flex justify-between item-center list-none gap-12">
        <div></div>
        <div className="flex justify-center items-center gap-5">
          <NavLink
            className={({ isActive }) => (isActive ? "underline" : "")}
            to="/"
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "underline" : "")}
            to="/addCoffee"
          >
            <li>Add Coffee</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "underline" : "")}
            to="/users"
          >
            <li>Users</li>
          </NavLink>
        </div>
        <div>
          <button className="btn">
            <Link to="/signup">Sign up</Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
