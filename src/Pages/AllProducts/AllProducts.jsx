import { useLoaderData } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

const AllProducts = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <h1 className="text-center text-5xl my-8">
        All Products: {products.length}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-8 p-8">
        {products.map((product) => (
          <div key={product._id}>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img className="w-full h-96" src={product.photo} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {product.name}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <p className="flex items-center gap-1">
                  {" "}
                  <AiOutlineStar></AiOutlineStar> {product.ratings}
                </p>
                <div className="flex justify-between items-center">
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">{product.brand}</div>
                  </div>
                  <div>
                    <button className="btn">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
