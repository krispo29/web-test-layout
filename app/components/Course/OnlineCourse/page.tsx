"use client";
import React, { useState } from "react";
import IconVideo from "@/public/video-vertical.png";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface CarouselCardProps {
  title: string;
  description: string;
  height: string;
  width: string;
  imageAuthor: string;
  author: string;
  jobPosition: string;
  backgroundColor: string;
  topic: string;
}

const CarouselCard: React.FC<CarouselCardProps & { index: number }> = ({
  title,
  description,
  height,
  width,
  backgroundColor,
  imageAuthor,
  author,
  jobPosition,
  topic,
  index,
}) => {
  return (
    <div
      className=" bg-white rounded-2xl shadow-md overflow-hidden my-4 p-4 h-full"
      style={{
        backgroundColor,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height,
        width,
      }}
    >
      <button className="btn btn-outline rounded-full text-gray-400">
        {topic}
      </button>
      <div className="flex flex-col justify-between h-72 p-4">
        <div className="flex-1">
          <h2
            className={`${
              index % 2 === 0 ? "text-black" : "text-white"
            } text-2xl font-bold mb-2`}
          >
            {title}
          </h2>
          <p
            className={`${
              index % 2 === 0 ? "text-black" : "text-white"
            } text-lg`}
          >
            {description}
          </p>
        </div>
        <div className="flex items-center  self-start">
          <img
            src={imageAuthor}
            className="w-8 h-8 rounded-full mr-2"
            alt={author}
          />
          <div>
            <p
              className={`${
                index % 2 === 0 ? "text-black" : "text-white"
              } text-sm`}
            >
              {author}
            </p>
            <p
              className={`${
                index % 2 === 0 ? "text-black" : "text-white"
              } text-sm`}
            >
              {jobPosition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const OnlineCourse: React.FC<{ cards: CarouselCardProps[] }> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto relative mt-8 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src={IconVideo} alt="icon" className="mr-2" />
          <h1 className="text-lg font-semibold">คอร์สออนไลน์</h1>
        </div>
        <button className="hidden md:block btn btn-outline text-[#A8AD00] rounded-full">
          ดูทั้งหมด
        </button>
      </div>
      <div className="flex space-x-4  snap-x snap-mandatory scrollbar-hide mt-4 justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-64 transition-transform duration-300 ${
              index === currentIndex ? "scale-105" : "scale-100"
            }`}
          >
            <CarouselCard {...card} index={index} />
          </div>
        ))}
      </div>
      <div className=" absolute top-1/2 -translate-y-1/2 w-full md:flex justify-between px-4 hidden ">
        <button
          onClick={handlePrev}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-colors"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      <div className="flex w-full mt-4">
        <button className="btn btn-outline text-[#A8AD00] rounded-full mt-8 mx-auto w-2/3 md:hidden">
          ดูทั้งหมด
        </button>
      </div>
    </div>
  );
};

export default OnlineCourse;
