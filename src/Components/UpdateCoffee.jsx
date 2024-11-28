import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const newCoffees = useLoaderData();
  const {_id, name, chef, supplier, taste, category, details, photo} = newCoffees ;

  const handelUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const coffee = {name, chef, supplier, taste, category, details, photo};
    console.log(coffee)

    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div>
      <div className="p-12 mt-12 w-3/4 m-auto bg-[#F4F3F0]">
        <div>
          <h2 className="text-3xl font-extrabold text-center py-6">
            Update Coffee : {name}
          </h2>
        </div>
        <form onSubmit={handelUpdateCoffee}>
          <div className="flex flex-col">
            <div className="flex items-center justify-center gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Chef</span>
                </label>
                <input
                  type="text"
                  name="chef"
                  defaultValue={chef}
                  placeholder="Chefs name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-center gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Enter the supplier name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Enter coffee taste"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-center gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Enter category"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter details"
                  name="details"
                  defaultValue={details}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-center gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Enter photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="py-4">
              <button  className="bg-[#D2B48C] w-full py-2 rounded-md font-semibold">
                Update Coffee
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
