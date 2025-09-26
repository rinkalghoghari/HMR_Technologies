import { usePageTitle } from "@/hooks/usePageTitle";
import React from "react";

export default function Calendar() {
  const [iframeHeight, setIframeHeight] = React.useState("100vh");
  const [iframeLoading, setIframeLoading] = React.useState(true);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  usePageTitle(
    "Book a Meeting",
    "Schedule a meeting with us to discuss how we can bring your AI-powered ideas to life. We're ready to help you achieve your goals.",
  );

  const iFrameLoad = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    const iframe = e.target as HTMLIFrameElement;
    const gparent = iframe.offsetParent as HTMLElement;
    const parent = gparent.offsetParent as HTMLElement;
    if (parent) setIframeHeight(`${parent.offsetHeight - 500}px`);

    // Hide iframe loading indicator
    setIframeLoading(false);
  };

  return (
    <div
      style={{ width: "100%", height: iframeHeight }}
      className="page-transition"
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-full relative">
        <iframe
          ref={iframeRef}
          src="https://calendar.app.google/htBxZU5Aeyy1TbyZ9"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          title="Book a Meeting | Calendar"
          onLoad={iFrameLoad}
        />
        {iframeLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600">
              <b>Loading meeting scheduler...</b>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
