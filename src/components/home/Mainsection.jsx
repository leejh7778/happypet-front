import React, { useState } from 'react';
import { mainImage } from '../../constants/data';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import DallMain from '../../assets/image/DallMain.webp';
import { Link } from 'react-router-dom';

function Slider({ slideIndex, moveToPrevSlide, moveToNextSlide }) {
  return (
    <div className="relative w-full">
      <img
        src={mainImage[slideIndex].image}
        alt=""
        className="rounded-md cursor-pointer w-full object-cover"
        onClick={moveToNextSlide}
      />
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-sm text-white bg-black bg-opacity-50 p-3 rounded-full"
        onClick={moveToPrevSlide}
      >
        <SlArrowLeft />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-white bg-black bg-opacity-50 p-3 rounded-full"
        onClick={moveToNextSlide}
      >
        <SlArrowRight />
      </button>
    </div>
  );
}

const Mainsection = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const moveToPrevSlide = () => {
    setSlideIndex((prev) => (prev !== 0 ? prev - 1 : mainImage.length - 1));
  };

  const moveToNextSlide = () => {
    setSlideIndex((prev) => (prev !== mainImage.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center rounded-lg py-10">
      <div className="mb-10 text-center">
        <p className="font-En font-semibold text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          Click{' '}
          <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
            for your
          </span>{' '}
          Family
        </p>
      </div>

      <div className="w-[90%] lg:w-[80%] flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-y-6 lg:gap-x-10 h-auto">
          <div className="w-full lg:w-1/2">
            <Slider
              slideIndex={slideIndex}
              moveToPrevSlide={moveToPrevSlide}
              moveToNextSlide={moveToNextSlide}
            />
          </div>
          <Link to="/community" className="w-full lg:w-1/2">
            <img
              src={DallMain}
              alt="DallMain"
              className="rounded-lg w-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mainsection;
