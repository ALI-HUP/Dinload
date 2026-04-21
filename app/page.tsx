"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

const images = [
  "/poster/arcane.jpg",
  "/poster/blue-eye-samurai.png",
  "/poster/loki.jpg",
  "/poster/true-detective.jpg",
  "/poster/wonder-woman.jpg",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <main className="min-h-screen bg-gray-700 text-white flex flex-col items-center overflow-x-hidden">

      <div className="w-full flex flex-col items-center">

        <div className="relative w-full h-65 sm:h-75 md:h-85 lg:h-90 xl:h-95 overflow-hidden">

          <img
            src={images[prevIndex]}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out
              ${
                prevIndex !== index
                  ? "opacity-0 scale-105 blur-sm"
                  : "opacity-100 scale-100 blur-sm"
              }
            `}
          />

          <img
            src={images[index]}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out opacity-100 scale-105 blur-sm"
          />

          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-x-0 bottom-0 h-32 sm:h-36 md:h-40 bg-linear-to-t from-gray-700 via-gray-700/70 to-transparent" />
        </div>

        <div className="relative w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-6xl h-35 sm:h-40 md:h-45 lg:h-50 flex items-center justify-center">

          {images.map((img, i) => {
            let position = i - index;

            if (position > 2) position -= images.length;
            if (position < -2) position += images.length;

            const isCenter = position === 0;

            let baseWidth = 90;
            let height = 150;
            let centerScale = 1.25;

            if (window.innerWidth >= 640) {
              baseWidth = 110;
              height = 180;
            }
            if (window.innerWidth >= 768) {
              baseWidth = 120;
              height = 200;
            }
            if (window.innerWidth >= 1024) {
              baseWidth = 140;
              height = 230;
              centerScale = 1.3;
            }

            const GAP = baseWidth * 0.1;
            const step = baseWidth * centerScale + GAP;

            return (
              <div
                key={i}
                className="absolute transition-all duration-700 ease-in-out"
                style={{
                  transform: `translateX(${position * step}px)`,
                  zIndex: 30 - Math.abs(position),
                }}
              >
                <img
                  src={img}
                  alt="poster"
                  className="rounded-2xl shadow-2xl object-cover transition-all duration-700"
                  style={{
                    width: `${baseWidth}px`,
                    height: `${height}px`,
                    transform: `scale(${isCenter ? centerScale : 1})`,
                    opacity: Math.abs(position) > 2 ? 0 : 1 - Math.abs(position) * 0.1,
                  }}
                />
              </div>
            );
          })}
        </div>

      </div>

      <Footer />

    </main>
  );
}
