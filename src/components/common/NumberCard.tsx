const NumberCard = ({ cardData, primaryColor, secondaryColor, isArrow, ordered }: any) => {
  return (
    <div>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-0">
          {cardData?.map((item: any, index: number) => (
            <div
              key={index}
              className={`group relative flex flex-col h-fit
                ${ordered
                  ? "text-left lg:mb-10 sm:mb-6"
                  : index % 2 === 0
                    ? "text-left"
                    : "text-left md:mt-20"
                }`}
            >
              <span
                style={{
                  color:
                    index === 2 || index === 3 ? primaryColor : secondaryColor,
                }}
                className="group text-4xl lg:text-6xl font-bold mb-2 relative z-10 opacity-20"
              >
                {item?.number}
              </span>

              <h3
                style={{
                  ["--hover-color" as any]:
                    index === 2 || index === 3 ? primaryColor : secondaryColor,
                }}
                className="font-semibold text-gray-900 text-lg mb-2 
                  transition-all duration-150
                  group-hover:text-[color:var(--hover-color)]"
              >
                {item?.title}
              </h3>

              {Array.isArray(item?.description) ? (
                <ul className="list-disc pl-5 text-gray-500 text-sm leading-relaxed marker:text-blue-600 marker:text-base">
                  {item.description.map((desc: string, idx: number) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              ) : (
                <>
                  <p className="text-gray-500 text-base leading-relaxed">
                    {item?.description}
                  </p>
                  <p className="text-gray-500 text-base leading-relaxed hover:text-[#0F7CFF]">
                    {item?.text}
                  </p></>
              )}

              {isArrow &&
                !ordered &&
                index !== item.length - 1 &&
                index !== 4 &&
                index !== 3 && (
                  <div className="hidden md:flex h-12 w-0.5 bg-gray-300 absolute -bottom-16 left-6"></div>
                )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NumberCard;
