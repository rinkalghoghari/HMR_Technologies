import React, { useState } from "react";

const SolutionCard = ({ cardData }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {cardData?.map((item: any, index: number) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
          <div
            key={index}
            className="group space-y-2 sm:space-y-3 rounded-xl p-6 cursor-pointer text-left transform transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            style={{
              backgroundColor: item?.bgColor || "#ffffff",
              border: `1px solid ${isHovered ? item?.secondaryColor : item?.primaryColor}`,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Icon */}
            <div
              className={`size-10 sm:size-16 rounded-full flex items-center justify-center ${item?.stepBgColor}`}
            >
              {item?.icon}
            </div>
            {/* Title */}
            <h3
              className="text-base sm:text-lg font-bold transition-colors duration-300"
              style={{
                color: isHovered ? item?.secondaryColor : "black",
              }}
            >
              {item?.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-black">{item?.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SolutionCard;
