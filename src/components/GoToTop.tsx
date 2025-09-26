import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="group fixed bottom-20 right-8 z-50 w-12 h-12 rounded-full shadow-lg bg-white animate-bounce duration-700 border-[3px] border-cyan-500 text-black hover:bg-gradient-to-br from-cyan-500 to-emerald-500 transition-all hover:scale-110"
          size="icon"
        >
          <ChevronUp className="w-25 h-25 text-cyan-500 group-hover:text-white scale-[2.5]" />
        </Button>
      )}
    </>
  );
}
