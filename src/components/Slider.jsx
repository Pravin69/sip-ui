/* eslint-disable react/prop-types */
// src/components/Slider.js
import { useEffect, useState, useRef } from "react";
import Button from "../ui/Button";
// You can add custom styles if needed

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrent((current) => (current === 0 ? length - 1 : current - 1));
  };

  useEffect(() => {
    const autoSlide = () => {
      timeoutRef.current = setTimeout(nextSlide, 3000); // Change slide every 3 seconds
    };
    autoSlide();
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [current, length]);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="w-8/12 h-4/5">
      <div className="relative w-full flex justify-center items-center h-full overflow-hidden">
        <button
          className="absolute left-0 z-10 p-2 bg-gray-600 text-white rounded-full opacity-75 hover:opacity-100"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute right-0 z-10 p-2 bg-gray-600 text-white rounded-full opacity-75 hover:opacity-100"
          onClick={nextSlide}
        >
          &#10095;
        </button>
        <div
          className="w-full flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-full flex justify-center items-center bg-gray-200"
            >
              <img
                src={slide.image}
                alt={slide.caption}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <ul className="absolute bottom-2 flex space-x-2">
          {slides.map((_, index) => (
            <li
              key={index}
              type="radio"
              className={`w-3 h-3 rounded-full transition duration-500 border-2 border-blue-500 active:bg-cyan-600 ${
                index === current ? "bg-cyan-600" : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </ul>
      </div>

      <div className="flex w-full justify-center space-x-4 p-4">
        <Button
          color="bg-green-500"
          text="Login Account"
          icon={<span>&#128274;</span>}
        />
        <Button
          color="bg-blue-500"
          text="Create Account"
          icon={<span>&#128100;</span>}
        />
      </div>
    </div>
  );
};

export default Slider;
