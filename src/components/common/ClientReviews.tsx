import React from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import type { CarouselApi } from "../ui/carousel";

export default function ClientReviews() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnMouseEnter: false })
  );

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

    const reviewsData = {
    overallRating: 4.9,
    totalReviews: "55+",
    reviews: [
      {
        id: 1,
        name: "David S.",
        position: "California, USA",
        image: "/images/ClientReview/Client-1.jpg",
        rating: 5,
        text: "HMR Technologies transformed our business with their AI-powered development approach. We launched our product 3 months ahead of schedule and saw a 250% increase in user engagement. Their team's expertise and dedication is unmatched.",
        cardStyle: "bg-[#F2F6FF] border-blue-100",
        positionColor: "text-primary",
      },
      {
        id: 2,
        name: "Jin G.",
        position: "Balkans, Albania",
        image: "/images/ClientReview/Client-4.jpeg",
        rating: 5,
        text: "Outstanding work! The team delivered beyond our expectations with exceptional attention to detail and innovative solutions.",
        cardStyle: "bg-[#FCF3F9] border-pink-100",
        positionColor: "text-primary",
      },
      {
        id: 3,
        name: "Javier M.",
        position: "Castellón, Spain",
        image: "/images/ClientReview/Client-3.jpeg",
        rating: 5,
        text: "Professional, reliable, and innovative. Their AI-powered approach helped us launch faster than we ever imagined possible.",
        cardStyle: "bg-[#FEF4F0] border-orange-100",
        positionColor: "text-primary",
      },
      {
        id: 4,
        name: "Ronald JR.",
        position: "California, USA",
        image: "/images/ClientReview/Client-2.jpeg",
        rating: 5,
        text: "Exceptional quality and lightning-fast delivery. The AI-powered development process exceeded all our expectations.",
        cardStyle: "bg-[#EEFDF5] border-green-100",
        positionColor: "text-primary",
      },
    ],
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          } fill-current`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center sm:mb-12 mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Client Reviews
          </h2>
        </div>

        {/* Highlighted First Review (Static Big Card) */}
        <div
          className={`relative ${reviewsData.reviews[0].cardStyle} border-2 rounded-2xl p-8 md:p-12 mb-12 max-w-5xl mx-auto`}
        >
          <div className="lg:space-y-6">
            <div className="flex gap-3 justify-start">
              <img
                src={reviewsData.reviews[0].image}
                alt={reviewsData.reviews[0].name}
                className="size-14 md:w-24 md:h-24 rounded-full object-cover shadow"
              />
              <div>
                <h4 className="font-bold text-lg md:text-2xl text-gray-900">
                  {reviewsData.reviews[0].name}
                </h4>
                <p className={`${reviewsData.reviews[0].positionColor} font-medium text-sm md:text-base`}>
                  {reviewsData.reviews[0].position}
                </p>
                <div className="flex mt-1 mb-3">
                  <StarRating rating={reviewsData.reviews[0].rating} />
                </div>
              </div>
            </div>
            <div className="text-left">
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                "{reviewsData.reviews[0].text}"
              </p>
            </div>
          </div>
        </div>

        {/* Carousel for Remaining Reviews */}

        <div className="relative max-w-5xl mx-auto">
          <Carousel
            setApi={setApi}
            plugins={[autoplay.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviewsData.reviews.map((review) => (
                <CarouselItem
                  key={review.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 select-none"
                >
                  <Card className={`bg-gradient-to-br ${review.cardStyle} border-2 shadow-xl h-full`}>
                    <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                      <div className="flex items-center mb-4 lg:mb-6">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-14 h-14 lg:w-16 lg:h-16 rounded-full mr-3 lg:mr-4 object-cover"
                        />
                        <div>
                          <h4 className="font-bold text-lg lg:text-xl text-gray-900">{review.name}</h4>
                          <p className={`${review.positionColor} font-medium text-sm lg:text-base`}>
                            {review.position}
                          </p>
                          <div className="flex mt-1">
                            <StarRating rating={review.rating} />
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-base lg:text-lg leading-relaxed flex-grow">
                        "{review.text}"
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Arrows */}
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviewsData.reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  api?.scrollTo(index);
                  autoplay.current.stop();            // stop immediately
                  setTimeout(() => autoplay.current.reset(), 3000); // resume after 3s
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${current - 1 === index
                    ? "bg-primary scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Showing reviews from {reviewsData.totalReviews} satisfied clients
          </p>
        </div>
      </div>
    </section>
  );
}


