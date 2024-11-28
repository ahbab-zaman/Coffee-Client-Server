import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full py-6 flex justify-center item-center list-none gap-12">
        <NavLink className={({isActive}) => isActive ? 'underline' : ''} to="/">
          <li>Home</li>
        </NavLink>
        <NavLink className={({isActive}) => isActive ? 'underline' : ''} to="/addCoffee">
          <li>Add Coffee</li>
        </NavLink>
        <NavLink className={({isActive}) => isActive ? 'underline' : ''} to="/updateCoffee">
          <li>Update Coffee</li>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
