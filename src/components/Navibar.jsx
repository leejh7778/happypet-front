import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // 햄버거 메뉴와 X 아이콘 사용
import PetLogo from '../assets/logoimage/파트라슈.png';

const Navibar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // 메뉴 열림/닫힘 상태 관리

  // 화면 크기 변경 시 모바일 메뉴 자동으로 닫기
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // 화면이 md 이상일 때 메뉴 닫기
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // 메뉴 토글 함수
  };

  return (
    <div className="z-10 h-auto flex items-center justify-between px-4 md:px-8 lg:px-10 text-lg md:text-xl lg:text-2xl">
      {/* 로고를 왼쪽 끝에 배치 */}
      <div className="logoAndHome flex items-center">
        <Link
          to="/"
          className="font-Kr flex justify-center items-center text-cyan-700"
        >
          <img
            src={PetLogo}
            alt="Logo"
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
          />
          <span className="ml-2 font-bold">해피펫</span>
        </Link>
      </div>

      {/* 햄버거 메뉴를 오른쪽 끝에 배치 (작은 화면에서만 보임) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-cyan-700">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* 큰 화면에서는 네비 메뉴 보이게 함 */}
      <div className="hidden md:flex w-1/2 lg:w-1/3 justify-around items-center gap-x-6 lg:gap-x-20 font-bold">
        <span className="font-En text-green-600 hover:text-green-800">
          <Link to="/about">About</Link>
        </span>
        <span className="font-En text-green-600 hover:text-green-800">
          <Link to="/map">Map</Link>
        </span>
        <span className="font-En text-green-600 hover:text-green-800">
          <Link to="/community">Community</Link>
        </span>
      </div>

      {/* 햄버거 메뉴 클릭 시 모바일 화면에서 네비 메뉴 표시 (아래쪽으로 이동) */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full flex flex-col items-center bg-gray-100 py-2 space-y-0 transition-all duration-300 ease-in-out transform md:hidden backdrop-blur-lg">
          <span className="font-En text-green-600 hover:text-green-800 text-base w-full text-center py-2 border-b">
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </span>
          <span className="font-En text-green-600 hover:text-green-800 text-base w-full text-center py-2 border-b">
            <Link to="/map" onClick={toggleMenu}>
              Map
            </Link>
          </span>
          <span className="font-En text-green-600 hover:text-green-800 text-base w-full text-center py-2">
            <Link to="/community" onClick={toggleMenu}>
              Community
            </Link>
          </span>
        </div>
      )}
    </div>
  );
};

export default Navibar;
