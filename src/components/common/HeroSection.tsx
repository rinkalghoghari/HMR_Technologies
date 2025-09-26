import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";


interface HeroProps {
  breadcrumb: string,
  title: string;
  highlight?: string;
  description: string;
  buttonText?: string;
  imageSrc?: string;
  primaryColor?: string,
  secondaryColor?: string
}

interface ICardData {
  cardData: HeroProps
}

const HeroSection = ({ cardData }: ICardData) => {
  return (
    <section className="py-10 sm:py-20 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-5 lg:space-y-10">
            {/* Breadcrumbs */}
            <p className='pb-7 flex flex-wrap items-center gap-3'><Link className="text-gray-500" to="/">Home</Link><MdArrowForwardIos className='text-sm text-gray-500' />{`${cardData.breadcrumb}`}</p>


            {/* Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-[47px] font-bold !leading-[1.3] text-black">
              {cardData.title}{" "}
              {cardData.highlight && (
                <span
                  style={{
                    background: `linear-gradient(7deg, ${cardData.primaryColor} 0.6%, ${cardData.secondaryColor} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 800,
                  }}
                >
                  {cardData.highlight}
                </span>

              )}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-500 lg:max-w-lg">
              {cardData.description}
            </p>

            {/* CTA */}
            {cardData.buttonText && (
              <Link
                to="/contact"
                className={`inline-block 
                          hover:bg-gradient-to-l 
                          transition-all duration-500 ease-in-out 
                          text-white px-5 sm:px-8 py-4 rounded-lg 
                          text-sm sm:text-base lg:text-lg font-semibold 
                          hover:shadow-lg transform hover:-translate-y-1`}
                style={{
                  background: `linear-gradient(to right, ${cardData.primaryColor}, ${cardData.secondaryColor})`,
                }}
              >
                {cardData.buttonText}
              </Link>
            )}
          </div>

          {/* Right image */}
          {cardData.imageSrc && (
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={cardData.imageSrc}
                  alt={"Hero illustration"}
                  className="rounded-3xl w-100 h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/20 rounded-3xl"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


// Json data example

// const HeroSectionData=
//  {
//   breadcrumb: "Booking Platforms",
//   title:"Smart, Scalable",
//   highlight: "Booking Platforms for Every Industry",
//   description: "Whether it’s healthcare appointments, transport bookings, event tickets, or salon schedules, we build powerful booking platforms that simplify scheduling and improve customer experiences.",
//   buttonText: "Build Your Booking Platform Today",
//   imageSrc: BookingPlatformsHeroPng,
//   primaryColor: "#31E7FF",
//   secondaryColor: "#1660D0"
// }


// <HeroSection cardData={HeroSectionData}/>
