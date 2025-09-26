import { useState } from "react";


const TransparentCard = ({ cardData, stepColor, borderColor,hoverBorderColor, hoverBgColor, hoverTextColor ,titleColor,descColor,inOrder}: any) => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <div className="grid md:grid-cols-2 gap-8">
            {cardData.map((item: any, idx: number) => {
                const isLast = idx === cardData.length - 1;
                const isHovered = hoveredCard === idx;

                return (
                    <div
                        key={idx}
                        className={`relative rounded-xl shadow-md p-6 transition ${isLast ? "w-full md:col-span-2 md:w-1/2 mx-auto" : ""
                            }`}
                        style={{
                            backgroundColor: isHovered ? hoverBgColor : "rgba(255,255,255,0.4)",
                            border: isHovered
                            ? `2px solid ${hoverBorderColor}`  
                            : `2px solid ${borderColor}`,    
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={() => setHoveredCard(idx)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div
                            className={`
                                    absolute -top-6 text-white font-bold w-10 h-10 
                                    flex items-center justify-center rounded-full shadow
                                       ${
                                        inOrder
                                            ? "left-12"
                                            : idx === 0
                                            ? "left-12"
                                            : idx === 1
                                            ? "right-20"
                                            : idx === 2
                                            ? "left-16"
                                            : idx === 3
                                            ? "right-16"
                                            : idx === 4
                                            ? "left-12"
                                            : ""
                                        }
                            `}
                            style={{
                                background: `linear-gradient(to right, ${stepColor})`,
                            }}
                        >
                            {idx + 1}
                        </div>

                        <h1
                            className="font-bold text-base sm:text-lg transition"
                            style={{
                                color: isHovered ? hoverTextColor : titleColor,
                            }}
                        >
                            {item?.title}
                        </h1>

                        <p
                            className="text-base sm:text-lg transition"
                            style={{
                                color: isHovered ? hoverTextColor : descColor,
                            }}
                        >
                            {item?.description}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default TransparentCard;