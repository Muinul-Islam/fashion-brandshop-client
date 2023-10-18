import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);

  const product = useLoaderData();
  console.log(product);

  return (
    <div>
      {/* banner section */}
      <div className="carousel h-70vh w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="
            https://images.unsplash.com/photo-1509983165097-0c31a863e3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmlrZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/premium-vector/spring-fashion-sale-banner-design-template_2239-1180.jpg "
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://image.isu.pub/150119004707-dda6a9316bd1d2bcbe115a622e86ab11/jpg/page_1.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://21run.com/blog/app/uploads//2019/11/ultraboost20-banner-1024x442-1.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 w-11/12 mx-auto">
        {/* brands */}
        {cardData.map((card) => (
          <Link
            key={card.id}
            to=""
            className="card w-3/4 mx-auto bg-base-100 shadow-xl mb-8"
          >
            <figure>
              <img className="w-full h-80" src={card.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="text-3xl text-center">{card.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
