"use client";

import { useEffect, useState } from "react";
import { motion, PanInfo } from "framer-motion";
import Footer from "@/components/Footer";

const movieData = [
  { title: "Arcane", year: "2021", genre: "Animation" },
  { title: "Blue Eye Samurai", year: "2023", genre: "Action" },
  { title: "Loki", year: "2021", genre: "Sci-Fi" },
  { title: "True Detective True Detective True Detective", year: "2014", genre: "Crime" },
  { title: "Wonder Woman Wonder Woman Wonder Woman", year: "2017", genre: "Action" },
];

const images = [
  "/poster/arcane.jpg",
  "/poster/blue-eye-samurai.png",
  "/poster/loki.jpg",
  "/poster/true-detective.jpg",
  "/poster/wonder-woman.jpg",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    const swipeThreshold = 40;
    if (info.offset.x > swipeThreshold) {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    } else if (info.offset.x < -swipeThreshold) {
      setIndex((prev) => (prev + 1) % images.length);
    }
  };

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary flex flex-col items-center overflow-x-hidden" dir="rtl">
      <div className="relative w-full min-h-[90vh] lg:h-screen flex flex-col lg:flex-row items-center lg:justify-between justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48 overflow-hidden">
        
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            key={`bg-${index}`}
            src={images[index]}
            className="w-full h-full object-cover opacity-30 transition-opacity duration-1000"
            alt="background"
          />
          <div className="absolute inset-0 bg-bg-primary/40" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-bg-primary via-bg-primary/80 to-transparent" />
        </div>

        <div className="relative z-20 w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-right mt-10 lg:mt-0 space-y-4 md:space-y-6 lg:pl-12">
          <div className="flex items-center space-x-2 space-x-reverse text-blue-primary font-medium">
            <span className="px-2 py-1 bg-blue-primary/20 rounded text-[10px] md:text-xs uppercase tracking-tighter sm:tracking-widest font-bold">Featured</span>
            <span className="text-text-primary text-xs md:text-sm">{movieData[index].year} • {movieData[index].genre}</span>
          </div>
          
          <h1 
            className="font-black tracking-tighter drop-shadow-2xl uppercase leading-none line-clamp-3 overflow-hidden text-balance"
            style={{ 
              fontSize: "clamp(1.5rem, 5vw, 4rem)",
              maxWidth: "100%",
              maxHeight: "4.5em" 
            }}
          >
            {movieData[index].title}
          </h1>

          <div className="flex items-center space-x-4 pt-2">
            <button className="px-6 md:px-10 py-3 md:py-4 bg-text-primary text-bg-dark font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl text-sm md:text-base xl:text-lg">
              Watch Now
            </button>
            <button className="p-3 md:p-4 bg-bg-light/40 backdrop-blur-xl border border-text-primary/10 rounded-full hover:bg-bg-light transition-all active:scale-90">
              <PlusIcon />
            </button>
          </div>
        </div>

        <div className="relative z-20 w-full lg:w-1/2 h-[35vh] sm:h-[45vh] lg:h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none" dir="ltr">
          {images.map((img, i) => {
            let position = i - index;
            if (position > 2) position -= images.length;
            if (position < -2) position += images.length;

            const absPos = Math.abs(position);
            
            let scale = 1;
            if (absPos === 0) scale = width < 640 ? 1.15 : width > 1920 ? 1.4 : 1.3;
            else if (absPos === 1) scale = width < 640 ? 0.85 : 1;
            else if (absPos === 2) scale = width < 640 ? 0.6 : 0.75;
            
            const baseWidth = width < 400 ? 80 : width < 640 ? 100 : width < 1280 ? 140 : width < 1920 ? 160 : 220;
            const height = baseWidth * 1.5; 
            const step = baseWidth * (width < 640 ? 0.7 : 0.9); 

            return (
              <motion.div
                key={i}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
                animate={{
                  x: position * step,
                  scale: scale,
                  opacity: absPos > 2 ? 0 : 1,
                  zIndex: 30 - absPos,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className="absolute"
                style={{ pointerEvents: absPos > 1 ? "none" : "auto" }}
              >
                <div className={`relative group overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${absPos === 0 ? 'ring-2 ring-text-primary/50' : ''}`}>
                  <img
                    src={img}
                    className="object-cover pointer-events-none"
                    style={{ width: `${baseWidth}px`, height: `${height}px` }}
                  />
                  <div className="absolute inset-0 bg-bg-dark/20" />
                  {absPos === 0 && (
                     <div className="absolute inset-0 flex items-center justify-center">
                        <PlayIcon />
                     </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}

function PlusIcon() {
  return <svg width="20" height="20" className="md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg>;
}

function PlayIcon() {
  return (
    <div className="bg-text-primary/20 backdrop-blur-md p-3 md:p-4 rounded-full">
      <svg width="24" height="24" className="md:w-8 md:h-8 translate-x-0.5" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
    </div>
  );
}