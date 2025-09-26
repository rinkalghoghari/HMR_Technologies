import React, { useState } from 'react'
import { Slide } from 'react-awesome-reveal';

const StepCard = ({ cardData, stepCount }: any) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="relative before:absolute before:left-1/2 before:top-3 before:-translate-x-1/2 before:h-[82%] before:w-[2px] before:bg-[#3493FD] overflow-hidden">
            {cardData.map((step: any, index: number) => {
                const isLeft = step.side === "left";
                const isHovered = hoveredIndex === index;

                return (
                    <div
                        key={index}
                        className={`mb-10 flex w-full relative ${isLeft ? "justify-start" : "justify-end"
                            } md:flex-row flex-col items-center`}
                    >
                        <div className={`hidden md:flex absolute left-1/2 top-2 -translate-x-1/2 border-2 border-[#3493FD] rounded-full size-10 items-center justify-center text-sm font-bold z-20 ${isHovered ? "bg-[#3493FD] text-white" : "bg-white text-[#3493FD]"}`} onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}>
                            {index + 1}
                        </div>
                        {stepCount && (
                             <div
                            className={`hidden md:flex absolute top-4 sm font-bold text-[#3493FD] z-20  ${isLeft ? "-translate-x-[112%] left-[62%] lg:left-[59%] xl:left-[57%]" : "translate-x-[112%] right-[62%] lg:right-[59%] xl:right-[57%]"}`}
                        >
                            Step {index + 1}
                        </div>
                        )}

                        <Slide direction={isLeft ? "left" : "right"} cascade triggerOnce className={`flex w-full relative ${isLeft ? "justify-start" : "justify-end"
                            } md:flex-row flex-col items-center`}>
                            <div className={`
                                step-card w-full md:w-5/12 p-[3px] rounded-lg 
                                shadow-[0_6px_35px_rgb(232,249,253)] relative z-10 
                                md:after:content-[''] after:absolute after:size-6 after:hidden md:after:block
                                ${isLeft ? "md:after:-right-2 md:after:rotate-45 lg:ms-6 xl:ms-12" : "md:after:-left-2 md:after:-rotate-[135deg] lg:me-6 xl:me-12"} 
                                md:after:top-4 transition-all duration-300
                            `}
                                style={{
                                    background: step.hoverBgColor,
                                    color: isHovered ? step.hoverTextColor : step.textColor,
                                    ['--after-bg-color' as any]: step.hoverArrowBgColor,
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className={`bg-white p-6 md:p-10 rounded-lg md:after:content-[''] after:absolute after:size-6 after:hidden md:after:block ${isLeft ? "md:after:-right-1 md:after:rotate-45" : "md:after:-left-1 md:after:-rotate-[135deg]"} md:after:top-4 ${isHovered ? `hover:after:${step.hoverArrowBgColor}` : 'after:bg-white'}`} style={{
                                    background: isHovered && step.hoverBgColor,
                                    color: isHovered ? step.hoverTextColor : step.textColor,
                                    ['--after-border-color' as any]: step.borderColor,
                                }}>
                                    <h3 className={`text-lg sm:text-xl mb-2 ${step.highlight ? "font-bold" : "font-semibold"}`}>
                                        {step.title}
                                    </h3>
                                    <p className="text-sm sm:text-base opacity-90">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </Slide>
                    </div>
                );
            })}
        </div>
    );
}

export default StepCard
