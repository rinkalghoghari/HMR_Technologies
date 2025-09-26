import React from "react";

const SlidingStroke = ({ cardData,hoverColor }: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 justify-items-center">
      {cardData?.map((item: any, idx: number) => {
        const isLastTwo = idx === 3 || idx === 4; 

        return (
          <div
            key={idx}
            className={`group relative flex flex-col gap-4 
              w-full h-full min-h-[210px]
              px-6 py-8 
              bg-white rounded-2xl shadow-md 
              hover:shadow-lg transition-shadow duration-300 
              border border-gray-200
              cursor-pointer overflow-hidden
              ${isLastTwo ? "lg:col-span-3 lg:w-[378px] lg:justify-end" : "lg:col-span-2"}
              ${idx===3 ? "lg:ms-auto" : idx ===4 ? "lg:me-auto" : ''} 
            `}
          >
            <div className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${hoverColor || "bg-gradient-to-r from-[#31EBFF] to-[#4091FF]"}`}/>
            <div className="text-4xl text-black-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-[#3B8CFB]">
              {item?.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-black-700 transition-colors duration-300 group-hover:text-[#3B8CFB]">
              {item?.title}
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              {item?.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SlidingStroke;
