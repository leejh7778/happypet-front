import React from 'react';
import PageTitle from '../PageTitle';

const Board = ({ image, title, text }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageTitle title="Community" className="py-2" />
      <h2 className="font-Kr font-bold text-2xl md:text-3xl mb-5 text-center">
        {title}
      </h2>{' '}
      {/* 반응형 텍스트 크기 조정 및 중앙 정렬 */}
      <div className="flex flex-col items-center bg-[#f1f3ea] py-8 rounded-lg px-6 md:px-10 space-y-8 md:space-y-12">
        {' '}
        {/* 패딩과 간격 조정 */}
        <img
          src={image}
          alt=""
          className="mb-5 w-full max-w-md object-cover rounded-lg"
        />{' '}
        {/* 이미지 크기 제한 및 라운드 처리 */}
        <p className="font-Kr text-lg md:text-xl bg-[#d5dfdb] py-5 rounded-lg px-5 max-w-[90%] md:max-w-[70%] text-center">
          {' '}
          {/* 텍스트 중앙 정렬, 반응형 크기 및 간격 */}
          {text}
        </p>
      </div>
    </div>
  );
};

export default Board;
