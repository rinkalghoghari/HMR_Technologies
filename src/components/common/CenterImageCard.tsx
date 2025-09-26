import React from 'react'

const CenterImageCard = ({ cardData, centerImage }: any) => {

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 place-items-center">
      {/* top row */}
      {cardData?.slice(0, 2).map((item: any, idx: any) => (
        <div
          key={idx}
          className={`group rounded-xl p-6 md:p-8 ${item?.withBorder === true ? "border hover:shadow-xl" : ""
            }  cursor-pointer w-full ${item?.color}`}
        >
          <div className={`flex flex-col items-start mb-2 ${idx === 0 ? "lg:items-end" : ""}`}>
            <div className="text-xl transition-all duration-200">
              {item?.icon}
            </div>
            <div className="font-bold text-lg transition-all duration-200">
              {item?.title}
            </div>
          </div>
          <p className={`text-gray-700 text-sm sm:text-base ${idx === 0 ? "lg:text-right" : ""}`}>{item?.description}</p>
        </div>
      ))}

      <img
        src={centerImage}
        alt="centerImage"
        className="absolute left-1/2 -translate-x-1/2 h-48 hidden lg:block"
      />

      {/* Bottom row */}
      {cardData?.slice(2, 4).map((item: any, idx: any) => (
        <div
          key={idx}
          className={`group rounded-xl p-6 md:p-8 ${item?.withBorder === true ? "border hover:shadow-xl" : ""
            }  cursor-pointer w-full lg:w-auto lg:min-w-fit xl:min-w-[450px] 
     ${idx === 0 ? "lg:mr-auto lg:ml-0 lg:text-right" : ""}  
     ${idx === 1 ? "lg:ml-auto lg:mr-0" : ""} ${item?.color}`}
        >
          <div className={`flex flex-col mb-2 ${idx === 0 ? "lg:items-end" : ""}}`}>
            <div className={`text-xl transition-all duration-200`}>{item?.icon}</div>
            <div className={`font-bold text-lg transition-all duration-200`}>{item?.title}</div>
          </div>
          <p className="text-gray-700 text-sm sm:text-base">{item?.description}</p>
        </div>
      ))}

      {/* Bottom center card */}
      <div className="w-full md:w-fit col-span-1 md:col-span-2 flex lg:justify-center">
        <div
          className={`group rounded-xl p-6 md:p-8 ${cardData[4].withBorder === true ? "border hover:shadow-xl" : ""} cursor-pointer w-full ${cardData[4]?.color}`}
        >
          <div className="flex flex-col lg:items-center mb-2 lg:text-center">
            <div className={`text-xl group-hover:text-[#2F8CFF] transition-all duration-200`}>{cardData[4]?.icon}</div>
            <div className={`font-bold text-lg group-hover:text-[#2F8CFF] transition-all duration-200`}>{cardData[4]?.title}</div>
            <p className="text-gray-700 text-sm sm:text-base">{cardData[4].description}</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CenterImageCard
