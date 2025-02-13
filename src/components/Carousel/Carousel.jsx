import React, { useState, useEffect, useRef } from "react";

const items = [
  {
    image: "https://cdn.pixabay.com/photo/2017/01/06/19/15/laptop-1956077_1280.jpg",
    title: "Laptop",
    price: "999.99",
  },
  {
    image: "https://cdn.pixabay.com/photo/2014/07/31/23/10/apple-407124_1280.jpg",
    title: "Smartphone",
    price: "699.99",
  },
  {
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/joystick-1869101_1280.jpg",
    title: "PlayStation",
    price: "499.99",
  },
  {
    image: "https://cdn.pixabay.com/photo/2020/08/07/18/47/headphones-5474202_1280.jpg",
    title: "Headphones",
    price: "129.99",
  },
  {
    image: "https://cdn.pixabay.com/photo/2019/05/17/18/26/virtual-reality-4209037_1280.jpg",
    title: "VR Headset",
    price: "199.99",
  },
  {
    image: "https://cdn.pixabay.com/photo/2017/06/07/09/11/airpods-2370472_1280.jpg",
    title: "AirPods",
    price: "149.99",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= items.length ? 0 : prevIndex + 4
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 4 < 0 ? items.length - 4 : prevIndex - 4
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden py-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg shadow-2xl">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-1/4 flex-shrink-0 px-4">
            <div className="bg-white p-5 shadow-lg rounded-xl flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-48 h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold text-gray-900 mt-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-lg font-semibold">${item.price}</p>
              <button className="mt-3 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all">
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Tugmalar */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-900 px-4 py-3 rounded-full shadow-lg hover:bg-gray-300 transition-all"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-900 px-4 py-3 rounded-full shadow-lg hover:bg-gray-300 transition-all"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
