import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [user, setUser] = useState(loadedUsers);

  const handleDeleteUser = (id) => {
    fetch(`https://coffee-hub-server-zeta.vercel.app/users/${id}`,{
        method:'DELETE'
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          console.log(data);
          alert("User Delete Successfully");
        }
      });

      const remainingUser = user.filter(user => user._id !== id)
      setUser(remainingUser)
  };

  console.log(user);
  return (
    <div>
        <div>
            <Navbar></Navbar>
        </div>
      <div className="overflow-x-auto mx-auto w-3/4 py-6">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Created At</th>
              <th>Last Sign in Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastLoginTime}</td>
                <td className="space-x-2">
                  <button className="btn">Edit</button>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
