import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Coffee from "./Components/Coffee";
import { useState } from "react";

function App() {
  const coffees = useLoaderData();
  const [deleteCoffee, setDeleteCoffee] = useState(coffees)
  console.log(coffees)
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto py-12 grid grid-cols-3 gap-6">
        {
          deleteCoffee.map(coffee => <Coffee key={coffees._id} coffee={coffee} deleteCoffee={deleteCoffee} setDeleteCoffee={setDeleteCoffee} coffees={coffees}></Coffee>)
        }
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default App
