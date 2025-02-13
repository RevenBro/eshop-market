import React from "react";
import Carousel from "../../components/Carousel/Carousel";

const ProductsShop = () => {
  const items = [
    {
      image: "https://cdn.pixabay.com/photo/2014/07/31/23/10/apple-407124_1280.jpg",
      title: "Laptop",
      price: "999.99",
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/07/31/23/10/apple-407124_1280.jpg",
      title: "Smartphone",
      price: "699.99",
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/07/31/23/10/apple-407124_1280.jpg",
      title: "PlayStation",
      price: "499.99",
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/07/31/23/10/apple-407124_1280.jpg",
      title: "Headphones",
      price: "129.99",
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/07/31/23/10/apple-407124_1280.jpg",
      title: "VR Headset",
      price: "199.99",
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/07/31/23/10/apple-407124_1280.jpg",
      title: "AirPods",
      price: "149.99",
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/07/31/23/10/apple-407124_1280.jpg",
      title: "VR Headset",
      price: "199.99",
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/07/31/23/10/apple-407124_1280.jpg",
      title: "AirPods",
      price: "149.99",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Carousel items={items} />
    </div>
  );
};

export default ProductsShop;
