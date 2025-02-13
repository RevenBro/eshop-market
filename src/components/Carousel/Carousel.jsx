import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const ProductCarousel = ({ items }) => {
  const products = Array(6).fill({
    title: "Laptop Model X",
    price: "$999",
    image: "https://via.placeholder.com/200"
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  const updateItemsPerView = () => {
    const width = window.innerWidth;
    if (width >= 1024) setItemsPerView(3);
    else if (width >= 768) setItemsPerView(2);
    else setItemsPerView(1);
  };

  useEffect(() => {
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Laptops</h2>
        <a href="#" className="text-blue-600 hover:underline">View all &gt;</a>
      </div>

      {/* Carousel container */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            width: `${(products.length * (100 / itemsPerView))}%`
          }}
        >
          {items.map((product, index) => (
            <div 
              key={index}
              className="p-4"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="bg-white rounded-lg shadow-md p-4 h-full">
                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.price}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Buy
                  </button>
                  <a href="#" className="text-blue-600 hover:underline">More</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button 
          onClick={prevSlide} 
          className={`absolute top-1/2 -translate-y-1/2 left-2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors ${currentIndex === 0 ? 'opacity-50 cursor-default' : ''}`}
          disabled={currentIndex === 0}
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
        </button>
        
        <button 
          onClick={nextSlide} 
          className={`absolute top-1/2 -translate-y-1/2 right-2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors ${currentIndex >= maxIndex ? 'opacity-50 cursor-default' : ''}`}
          disabled={currentIndex >= maxIndex}
        >
          <ChevronRightIcon className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Bottom View All */}
      <div className="text-center mt-6 md:hidden">
        <a href="#" className="text-blue-600 hover:underline">View all &gt;</a>
      </div>
    </div>
  );
};

export default ProductCarousel;