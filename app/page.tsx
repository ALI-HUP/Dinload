"use client";

import { useEffect, useState } from "react";
import { motion, PanInfo } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategorySection from "@/components/CategorySection";
import Badge from "@/components/Badge";
import Logo from "@/public/logo/dinisir-head.jpg";


const movieData = [
  { title: "Arcane ", year: "2021", genre: "Animation" },
  { title: "Blue Eye Samurai", year: "2023", genre: "Action" },
  { title: "Loki", year: "2021", genre: "Sci-Fi" },
  { title: "True Detective", year: "2014", genre: "Crime" },
  { title: "Wonder Woman", year: "2017", genre: "Action" },
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
    <main className="min-h-screen flex flex-col items-center mb-20 overflow-x-hidden" dir="rtl">
      <div className="w-full flex justify-between items-center p-5 md:px-12 lg:px-20 z-50">
        <Link href="/" className="flex items-center gap-2 group"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform group-hover:scale-105">
            <Image 
              src={Logo} 
              alt="logo" 
              className="w-9 h-9 md:w-12 md:h-12 object-cover"
            />
          </div>
          <p className="text-lg md:text-xl font-black text-blue-bold tracking-tighter transition-transform group-hover:scale-105">
            DINLOAD
          </p>
        </Link>

        <Link 
          href="/profile" 
          className="
            flex items-center gap-2 
            p-1 pr-2 md:pr-3 md:pl-1
            rounded-full 
            bg-bg-dark/20 backdrop-blur-md border border-text-primary/30
            hover:bg-text-primary/10 transition-all active:scale-95
          "
        >
          <p className="text-sm lg:text-base font-bold whitespace-nowrap mb-0.5">
            علی شیخ بهایی
          </p>
          <AccountCircleIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'white' }} />
        </Link>
      </div>

      <div className="relative w-full -mt-22 min-h-[85vh] lg:h-screen flex flex-col lg:flex-row items-center lg:justify-between justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            key={`bg-${index}`}
            src={images[index]}
            className="w-full h-full object-cover opacity-60 transition-opacity duration-1000"
            alt="background"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-bg-primary via-bg-primary to-transparent" />
        </div>

        <div className="relative z-20 w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-right mt-10 lg:mt-0 space-y-4 md:space-y-6 lg:pl-12">
          
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

          <div className="flex flex-wrap items-center gap-2 space-x-reverse text-sm font-bold">
            <Badge variant="blue">
              {movieData[index].genre}
            </Badge>
            
            <Badge variant="yellow">
              8.5
            </Badge>
            
            <Badge variant="white">
              {movieData[index].year}
            </Badge>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              variant="white" 
              text="تماشا کنید" 
              icon={<VisibilityIcon sx={{ fontSize: { xs: 18, sm: 20, md: 24 } }} />}
              onClick={() => console.log("Watch Clicked")} 
            />
          </div>
        </div>

        <div className="relative z-20 w-full lg:w-1/2 h-[40vh] sm:h-[45vh] lg:h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none">
          {images.map((img, i) => {
            let position = i - index;
            if (position > 2) position -= images.length;
            if (position < -2) position += images.length;

            const absPos = Math.abs(position);
            
            let scale = 1;
            if (absPos === 0) scale = width < 640 ? 1.1 : width > 1920 ? 1.4 : 1.3;
            else if (absPos === 1) scale = width < 640 ? 0.9 : 1;
            else if (absPos === 2) scale = width < 640 ? 0.6 : 0.8;
            
            const baseWidth = width < 400 ? 105 : width < 640 ? 140 : width < 1280 ? 150 : width < 1920 ? 170 : 220;
            const height = baseWidth * 1.5; 
            const step = baseWidth * (width < 640 ? 0.7 : 0.8); 

            return (
              <motion.div
                key={i}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
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
                <div className={`relative group overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${absPos === 0 ? 'ring-1 ring-text-primary/50' : ''}`}>
                  <img
                    src={img}
                    className="object-cover pointer-events-none"
                    style={{ width: `${baseWidth}px`, height: `${height}px` }}
                  />
                  <div className="absolute inset-0 bg-bg-dark/20 transition-opacity group-hover:opacity-10" />
                  {absPos === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <PlayCircleIcon 
                          sx={{ 
                            fontSize: { xs: 35, sm: 45, md: 55 },
                            color: 'white',
                            filter: 'drop-shadow(0px 4px 12px rgba(0,0,0,0.5))'
                          }} 
                        />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="w-full relative z-30 flex flex-col items-center -mt-10 gap-10">
        <CategorySection 
          title="آخرین فیلم‌ها" 
          items={[...movieData, ...movieData].map((m, i) => ({
            ...m,
            image: images[i % images.length],
          }))} 
        />

        <div className="w-full max-w-6xl px-12 opacity-20">
          <div className="h-0.5 w-full bg-linear-to-r from-transparent via-text-primary to-transparent" />
        </div>

        <CategorySection 
          title="سریال‌های بروز" 
          items={[...movieData, ...movieData].map((m, i) => ({
            ...m,
            image: images[(i + 2) % images.length],
            genre: "Series",
          }))} 
        />
      </div>

      <Footer />

      <Footer />
    </main>
  );
} 