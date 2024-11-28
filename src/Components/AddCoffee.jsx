import Swal from "sweetalert2";
import Navbar from "./Navbar";

const AddCoffee = () => {
  const handleAddCoffee = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffees = {name, chef, supplier, taste, category, details, photo};
    console.log(newCoffees);
    fetch('http://localhost:5000/coffees',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(newCoffees)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Coffee added successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }
  return (
    <div>
      <Navbar></Navbar>
    <div className="p-12 mt-12 w-3/4 m-auto bg-[#F4F3F0]">
      
      <div>
        <h2 className="text-3xl font-extrabold text-center py-6">Add Coffee</h2>
      </div>
        <form onSubmit={handleAddCoffee}>
        <div className="flex flex-col">
        <div className="flex items-center justify-center gap-6">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Chef</span>
          </label>
          <input type="text" name="chef" placeholder="Chefs name" className="input input-bordered" required />
        </div>
        </div>

        <div className="flex items-center justify-center gap-6">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <input type="text" name="supplier" placeholder="Enter the supplier name" className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered" required />
        </div>
        </div>

        <div className="flex items-center justify-center gap-6">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" name="category" placeholder="Enter category" className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" name="details" placeholder="Enter details" className="input input-bordered" required />
        </div>
        </div>

        <div className="flex items-center justify-center gap-6">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered" required />
        </div>
        </div>
        <div className="py-4">
            <button className="bg-[#D2B48C] w-full py-2 rounded-md font-semibold">Add Coffee</button>
        </div>
        </div>
        </form>
    </div>
    </div>
  );
};

export default AddCoffee;
