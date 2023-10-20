import swal from "sweetalert";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const brand = form.brand.value;
    const ratings = form.ratings.value;
    const photo = form.photo.value;

    const addData = { name, type, price, description, brand, ratings, photo };

    console.log(addData);

    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Good job!", "Product Added Successfully", "success");
        }
      });

    // form.reset();
  };

  return (
    <div className="bg-gray-300 m-10 rounded-xl p-4 md:p-24">
      <h1 className="text-2xl md:text-4xl text-black font-bold ">
        Add A Product Here
      </h1>

      <form onSubmit={handleAddProduct}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-black text-xl">
                Product Name
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text text-black text-xl">
                Product Type
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                placeholder="Product Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-black text-xl">Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="price"
                placeholder="$"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text text-xl text-black">
                Short Description
              </span>
            </label>
            <label className="input-group">
              <textarea
                type="text"
                name="description"
                placeholder=" Short Description"
                className="input input-bordered w-full h-24"
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black text-xl">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brand"
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control w-3/4 mx-auto">
            <label className="label">
              <span className="label-text text-xl text-black">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="form-control w-1/2 mx-auto mb-4">
          <label className="label">
            <span className="label-text text-black text-xl">Ratings</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="ratings"
              placeholder="Ratings"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <input
          type="submit"
          value="Add Product"
          className="btn btn-block mb-8 bg-red-600 text-white"
        />
      </form>
    </div>
  );
};

export default AddProduct;
