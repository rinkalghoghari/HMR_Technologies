
import { useState } from "react";

export const ToFroCard = ({ cardData }: any) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <>
            {cardData.map((item: any, idx: number) => (
                <div
                    key={idx}
                    className={`relative rounded-xl p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-700 ease-in-out hover:scale-105 space-y-3 overflow-hidden ${idx % 2 === 1 && 'lg:translate-y-16'}`}
                    style={{
                        backgroundColor: item?.bgColor,
                        color: item?.textColor,
                        animation: `floatUpDown 3s ease-in-out ${idx * 200}ms infinite alternate`,
                        transition: "transform 0.3s",
                    }}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <span
                        className="absolute size-4 rounded-full z-0 transition-transform duration-500 ease-out left-1 bottom-1"
                        style={{
                            backgroundColor: item?.hoverBgColor,
                            transform: hoveredIndex === idx
                                ? 'translate(-50%, -50%) scale(50)'
                                : 'translate(-50%, -50%) scale(0)',
                        }}
                    />
                    <div className="relative z-10 space-y-2">
                        <p className="text-3xl text-white text-center">{item?.icon}</p>
                        <h3 className="font-semibold text-lg text-white">{item?.title}</h3>
                        <p className="text-sm">{item?.description}</p>
                    </div>
                </div>
            ))}
        </>
    );
};
