import React from 'react'

type ScreenSliderProps = {
  screenImage: {
    slideImages: string[];
    middle: string;
  };
};

const ScreenSlider: React.FC<ScreenSliderProps> = ({ screenImage }) => {

  return (
    <div>
                    {/* Screen section */}
            <section className="relative bg-[#0A1A3E] py-44 md:py-56 lg:py-96 mt-[80px] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5">
                    <div className="flex flex-wrap justify-center gap-8 xl:gap-16 absolute top-20 left-11 md:left-24 lg:left-80">
                        <div className="h-[400px] lg:h-[850px]">
                            <div className="animate-vertical-scrollUp flex flex-col space-y-6">
                                {screenImage?.slideImages?.map((imgSrc:any, idx:any) => (
                                    <img
                                        key={idx}
                                        src={imgSrc}
                                        alt={`Vertical Scroll Up ${idx}`}
                                        className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[650px] w-auto"
                                    />
                                ))}
                            </div>
                        </div>
                        <img
                            src={screenImage?.middle}
                            alt="Collection Screen"
                            className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[650px] w-auto"
                        />
                        <div className="h-[400px] lg:h-[850px]">
                            <div className="animate-vertical-scrollDown flex flex-col space-y-6">
                                {screenImage?.slideImages?.map((imgSrc:any, idx:any) => (
                                    <img
                                        key={idx}
                                        src={imgSrc}
                                        alt={`Vertical Scroll Down ${idx}`}
                                        className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[650px] w-auto"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
    </div>
  )
}

export default ScreenSlider
