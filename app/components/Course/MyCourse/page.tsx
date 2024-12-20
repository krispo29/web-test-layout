"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CourseCard {
  id: string;
  title: string;
  description: string;
  image: string;
  process: number;
}

interface CarouselCardProps extends CourseCard {
  className?: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  description,
  image,
  process,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md overflow-hidden h-full flex flex-col ${className}`}
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-0 left-0 w-full p-4 ">
          <h3 className="text-white text-xl font-bold line-clamp-2">{title}</h3>
        </div>
      </div>

      <div className="p-4 flex-grow">
        <p className="text-gray-600 line-clamp-2">{description}</p>
      </div>

      <div className="p-4 pt-0 mt-auto">
        <p className="mb-2 text-sm text-gray-600">เรียนไปแล้ว {process}%</p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#A8AD00] h-2 rounded-full transition-all duration-300"
            style={{ width: `${process}%` }}
          />
        </div>
      </div>
    </div>
  );
};

interface MyCourseProps {
  cards: CourseCard[];
}

const MyCourse: React.FC<MyCourseProps> = ({ cards }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const getCardsPerPage = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };

  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage());

  React.useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(getCardsPerPage());
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxPages = Math.ceil(cards.length / cardsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? maxPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === maxPages - 1 ? 0 : prev + 1));
  };

  const visibleCards = cards.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="relative w-6 h-6">
            <Image
              src="/video-vertical.png"
              alt="Course icon"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-lg font-semibold">คอร์สของฉัน</h1>
        </div>
        <button className="hidden md:block btn btn-outline text-[#A8AD00] rounded-full">
          ดูทั้งหมด
        </button>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleCards.map((card) => (
            <CarouselCard key={card.id} {...card} />
          ))}
        </div>

        {cards.length > cardsPerPage && (
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between -mx-4 pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors pointer-events-auto transform -translate-x-1/2 focus:outline-none focus:ring-2 focus:ring-[#A8AD00]"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors pointer-events-auto transform translate-x-1/2 focus:outline-none focus:ring-2 focus:ring-[#A8AD00]"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 md:hidden">
        <button className="hidden md:block btn btn-outline text-[#A8AD00] rounded-full">
          ดูทั้งหมด
        </button>
      </div>
    </div>
  );
};

export default MyCourse;
