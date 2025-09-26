import React from 'react'
import { GoDotFill } from 'react-icons/go';

type CardItem = {
    id: string | number;
    image: string;
    title: string;
    icon: React.ReactNode;
    points: string[];
};

type StickyCardProps = {
    cardData: CardItem[];
};


const StickyCard = ({ cardData }: StickyCardProps) => {
    return (
        <div className='space-y-8'>
            {cardData.map((item: any, index: any) => (
                <div
                    key={item.id}
                    className={`
                            sticky z-10 
                            grid grid-cols-1 md:grid-cols-2 items-center 
                            gap-y-12 md:gap-x-16 
                            py-20
                            px-4 sm:px-10 md:px-16 
                            top-0 sm:top-24 lg:top-44 bg-white/80 backdrop-blur-md 
                            border border-gray-200 rounded-3xl 
                            shadow-xl transition-all duration-500 
                            overflow-hidden
                        `}
                >
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-[#31EBFF] to-[#4091FF] opacity-10 rounded-full blur-3xl" />
                    </div>
                    <div className={`flex justify-center ${index % 2 === 1 ? 'order-last md:order-none' : ''}`}>
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-[260px] sm:w-[300px] md:w-[360px] rounded-2xl hover:scale-[1.03] transition-transform duration-500 ease-in-out"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-[#2457C5] flex flex-wrap md:flex-nowrap items-center gap-3 mb-6">
                            <span className="text-xl lg:text-2xl">{item.icon}</span>
                            {item.title}
                        </h3>
                        <ul className="space-y-5 text-gray-700 text-base md:pl-8">
                            {item.points.map((point: any, i: any) => (
                                <li key={i} className="flex items-start gap-3">
                                    <GoDotFill className="text-blue-600 size-3 xl:size-4 mt-1.5 xl:mt-1 flex-shrink-0" />
                                    <span className="text-sm md:text-base">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StickyCard
