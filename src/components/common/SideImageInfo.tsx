import React, { useState } from 'react'

interface ICardData {
    id: number,
    title?: string,
    description?: string,
    icon?: React.ReactNode,
}

interface ISideImageInfo {
    cardData: ICardData[],
    sideImage: string,
    primaryColor: string,
    secondaryColor: string
}

const SideImageInfo = ({ cardData, sideImage, primaryColor, secondaryColor }: ISideImageInfo) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
                <img
                    src={sideImage}
                    alt="Technology team collaboration"
                    className="w-full h-auto rounded-xl shadow-lg"
                    loading="lazy"
                />
            </div>
            <div className="order-1 lg:order-2">
                <div className="space-y-10 sm:space-y-12">
                    {cardData.map((item: any, index: any) => (
                        <div
                            key={index}
                            className="group flex items-center space-x-4"
                        >
                            <div
                                className="text-2xl sm:text-3xl text-white size-11 sm:size-16 rounded-full flex items-center justify-center flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                                style={{
                                    background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
                                }}
                            >
                                {item?.icon}
                            </div>

                            <div
                                key={index}
                                className="flex items-center space-x-4 cursor-pointer"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div>
                                    <h3
                                        style={{
                                            color: hoveredIndex === index ? secondaryColor : "inherit",
                                            transition: "color 0.3s ease",
                                        }}
                                        className="text-base sm:text-lg font-semibold mb-1"
                                    >
                                        {item?.title}
                                    </h3>
                                    <p
                                        className="text-sm sm:text-base text-[#00000061]"
                                    >
                                        {item?.description}
                                    </p>
                                      <p
                                      style={{  
                                        color: hoveredIndex === index ? secondaryColor : "" }}
                                        className="text-sm sm:text-base text-[#00000061]"
                                    >
                                        {item?.hoverDescription}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SideImageInfo
