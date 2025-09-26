
import React, { useState } from "react";

interface DiagonalCardProps {
  cardData: { title: string; description: string }[];
  vectorImg: string;
  bgColor?: string;
  bgHoverColor?: string;
}

const DiagonalCard: React.FC<DiagonalCardProps> = ({
  cardData,
  vectorImg,
  bgColor = "#2567CB36",
  bgHoverColor = "#2567CB",
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap gap-6 justify-center relative overflow-hidden">
      <img
        src={vectorImg}
        alt="EcommerceVector"
        className="absolute z-10 -top-28 max-h-[580px]"
      />
      {cardData?.map((item, idx) => (
        <div
          key={idx}
          className={`relative z-20 group w-full sm:max-w-72 md:max-w-[360px] lg:max-w-[389px] p-6 md:p-10 rounded-xl rounded-tr-none rounded-bl-none shadow-sm  transition cursor-pointer hover:shadow-lg hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-xl hover:rounded-bl-xl           
          ${idx === 3 ? "md:col-start-1 md:col-end-2" : ""}
          ${idx === 4 ? "md:col-start-2 md:col-end-2" : ""}`}
          style={{
            background: hoveredIndex === idx ? bgHoverColor : bgColor,
          }}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h3 className="text-lg lg:text-xl font-bold mb-2 text-[#1d4ed8] group-hover:text-white transition-colors duration-300">
            {item?.title}
          </h3>
          <h1 className="text-base lg:text-lg text-[#4b5563] group-hover:text-white transition-colors duration-300">
            {item?.description}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default DiagonalCard;
