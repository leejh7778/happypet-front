import React from 'react';
import dall1 from '../../assets/newimage/DALL1.webp';
import dall2 from '../../assets/newimage/DALL2.webp';

const Subsection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 gap-10">
      <div className="my-10 rounded-lg text-center space-y-4">
        <h2 className="text-3xl lg:text-6xl sm:text-5xl font-En tracking-tighter bg-gradient-to-l from-green-400 to-green-800 text-transparent bg-clip-text font-semibold">
          For your pet's health
        </h2>
        <h2 className="text-3xl lg:text-6xl sm:text-5xl font-En tracking-tighter bg-gradient-to-r from-green-400 to-green-800 text-transparent bg-clip-text font-semibold">
          and
        </h2>
        <h2 className="text-3xl lg:text-6xl sm:text-5xl font-En tracking-tighter bg-gradient-to-l from-green-400 to-green-800 text-transparent bg-clip-text font-semibold">
          happiness
        </h2>
        <h2 className="text-3xl lg:text-6xl sm:text-5xl font-En tracking-tighter bg-gradient-to-r from-green-400 to-green-800 text-transparent bg-clip-text font-semibold">
          The best choice
        </h2>
      </div>

      <img src={dall1} alt="" className="w-4/5 lg:w-3/4 rounded-lg" />

      <p className="w-11/12 md:w-4/5 text-center text-green-700 max-w-4xl lg:text-lg md:text-md font-Kr py-10 lg:py-20">
        저희 동물병원은 사랑하는 반려동물의 건강을 책임지며, 최상의 의료
        서비스를 제공하는 것을 목표로 하고 있습니다.
      </p>

      <img src={dall2} alt="" className="w-4/5 lg:w-3/4 rounded-lg" />

      <h1 className="text-green-800 text-3xl md:text-4xl font-Kr py-10 lg:py-20 text-center">
        사랑을 넘은 생명:
        <span className="bg-gradient-to-l from-green-400 to-green-800 text-transparent bg-clip-text">
          {' '}
          반려동물과 함께하는 세상
        </span>
      </h1>
    </div>
  );
};

export default Subsection;
