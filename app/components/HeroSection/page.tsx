import React from "react";
import HeroLorem from "@/public/hero-section/Lorem.png";
import Image from "next/image";
import { Search } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  author: string;
  imageAuthor: string;
  backgroundColor: string;
  jobPosition: string;
}

const Card: React.FC<CardProps & { index: number }> = ({
  title,
  description,
  jobPosition,
  author,
  imageAuthor,
  backgroundColor,
  index,
}) => {
  return (
    <div
      className={`
        ${
          index === 0
            ? "md:h-[25rem] md:w-[25rem] h-[20rem] w-full"
            : " w-[5rem] md:h-[25rem] md:w-[8rem] h-[20rem] "
        } ${index === 2 ? "hidden md:block" : ""} 
        bg-white rounded-2xl shadow-md overflow-hidden my-2 md:my-4 p-2 md:p-4 transition-all object-cover object-center
      `}
      style={{
        backgroundColor,
      }}
    >
      <div className="flex flex-col justify-between h-full p-2 md:p-4">
        <div>
          <h2
            className={`
              ${
                index === 0
                  ? "text-xl md:text-2xl text-white"
                  : "text-sm md:text-md text-black  [writing-mode:vertical-lr] rotate-180  "
              } 
              font-bold mb-2
            `}
          >
            {title}
          </h2>
          <p
            className={`
            text-base md:text-lg 
            ${index === 0 ? "text-white" : "text-black"}
           
          `}
          >
            {description}
          </p>
        </div>
        <div
          className={`
          flex items-center mt-2 md:mt-4 self-start
          
        `}
        >
          <img
            src={imageAuthor}
            className="w-6 h-6 md:w-8 md:h-8 rounded-full mr-2"
            alt={author}
          />
          <div>
            <p className="text-xs md:text-sm text-white">{author}</p>
            <p className="text-xs md:text-sm text-white">{jobPosition}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSection: React.FC<{ cards: CardProps[] }> = ({ cards }) => {
  return (
    <div className="hero min-h-56 mt-4 md:mt-10 px-4 md:px-6">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6 hero-content">
        <div className="w-full">
          <p className="text-[#00665E] font-semibold text-sm md:text-base">
            Lorem Ipsum is simply dummy .
          </p>
          <h1 className="text-3xl md:text-5xl font-bold">
            <Image
              src={HeroLorem}
              alt="loremHero"
              priority
              className="w-full"
            />
          </h1>
          <div className="py-4 md:py-6">
            <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1">
              <Search className="text-gray-400 mr-2" size={20} />
              <input
                type="text"
                className="flex-grow outline-none text-sm md:text-base"
                placeholder="ค้นหาหลักสูตร"
              />
              <button className="bg-green-500 text-white px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-lg hover:bg-green-600 transition">
                ค้นหา
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full">
          {cards.map((card, index) => (
            <Card {...card} index={index} key={card.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
