import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ coffee, setDeleteCoffee, deleteCoffee }) => {
  const { _id, name, chef, details, category, supplier, photo, taste } = coffee;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-hub-server-zeta.vercel.app/coffees/${_id}`,{
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = deleteCoffee.filter(cof => cof._id !== _id)
              setDeleteCoffee(remaining)
            }
          });
      }
    });
  };
  return (
    <div className="">
      <div className="card h-[500px] shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo} alt="coffee" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name: {name}</h2>
          <p>Details: {details}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Details</button>
            <Link to={`/updateCoffee/${_id}`}><button className="btn btn-primary">Edit</button></Link>
            <button onClick={() => handleDelete(_id)} className="btn btn-error">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
