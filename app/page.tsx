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
    <main className="min-h-screen bg-gray-700 text-white flex flex-col items-center">

      <div className="w-full flex flex-col items-center">

        <div className="relative w-full h-90 overflow-hidden">

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
            className="absolute opacity-100 inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out scale-105 blur-sm"
          />

          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-gray-700 via-gray-700/70 to-transparent" />
        </div>

        <div className="relative w-full max-w-6xl h-20 flex items-center justify-center">

          {images.map((img, i) => {
            let position = i - index;

            if (position > 2) position -= images.length;
            if (position < -2) position += images.length;

            const isCenter = position === 0;

            const baseWidth = 140;
            const centerScale = 1.3;
            const sideScale = 1;

            const centerWidth = baseWidth * centerScale;
            const sideWidth = baseWidth * sideScale;

            const GAP = 15;

            const step = centerWidth + GAP;

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
                    height: "230px",

                    transform: `scale(${isCenter ? centerScale : sideScale})`,

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
