"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu"; 
import CloseIcon from "@mui/icons-material/Close";

export default function Footer() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    const el = inputRef.current;
    el.scrollLeft = el.scrollWidth;
  }, [query]);



  return (
    <div
      className="
        fixed bottom-5 m-auto left-0 right-0
        w-[85%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[50%]
        max-w-5xl shadow-2xl z-50
      "
    >
      <div className="bg-black text-white rounded-full flex items-center justify-around border border-white/35 relative overflow-hidden">
        
        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          isSearchOpen ? "opacity-0" : "opacity-100"
        }`}>
          <div className="absolute top-1/2 -translate-y-1/2 h-5 w-px bg-white/20 rounded-full" style={{ left: "25%" }} />
          <div className="absolute top-1/2 -translate-y-1/2 h-5 w-px bg-white/20 rounded-full" style={{ left: "50%" }} />
          <div className="absolute top-1/2 -translate-y-1/2 h-5 w-px bg-white/20 rounded-full" style={{ left: "75%" }} />
        </div>

        <div 
          className="absolute z-30 w-[25%] transition-all duration-500 ease-in-out flex items-center justify-center"
          style={{ right: isSearchOpen ? "0%" : "25%" }}
        >
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center justify-center p-3 rounded-full hover:bg-white/20 transition"
          >
            <SearchIcon fontSize="medium" />
          </button>
        </div>

        <Link 
          href="/" 
          className={`flex items-center justify-center p-3 rounded-full hover:bg-white/20 transition duration-500 ${
            isSearchOpen ? "opacity-0 scale-50 pointer-events-none" : "opacity-100"
          }`}
        >
          <HomeIcon fontSize="medium" />
        </Link>

        <div className="p-3 invisible">
          <SearchIcon fontSize="medium" />
        </div>

        <Link 
          href="/" 
          className={`flex items-center justify-center p-3 rounded-full hover:bg-white/20 transition duration-500 ${
            isSearchOpen ? "opacity-0 scale-50 pointer-events-none" : "opacity-100"
          }`}
        >
          <PersonIcon fontSize="medium" />
        </Link>

        <div className="h-full flex items-center justify-center">
          <button
            onClick={() => {
              if (isSearchOpen) setIsSearchOpen(false);
            }}
            className="w-full h-full flex items-center justify-center p-3 rounded-full hover:bg-white/20 transition z-40"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span
                className={`absolute h-0.5 w-5 bg-white rounded transition-all duration-300 ease-in-out
                  ${isSearchOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"}
                `}
              />
              <span
                className={`absolute h-0.5 w-5 bg-white rounded transition-all duration-300 ease-in-out
                  ${isSearchOpen ? "opacity-0" : "opacity-100"}
                `}
              />
              <span
                className={`absolute h-0.5 w-5 bg-white rounded transition-all duration-300 ease-in-out
                  ${isSearchOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"}
                `}
              />
            </div>
          </button>
        </div>

        <div 
          className={`absolute transition-all duration-500 ease-in-out flex items-center ${
            isSearchOpen
              ? "opacity-100 translate-x-0 w-[70%] sm:w-[60%] md:w-[50%]"
              : "opacity-0 translate-x-10 pointer-events-none"
          }`}
          style={{ right: "25%", height: "100%" }}
        >
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus={isSearchOpen}
            placeholder="جستجو فیلم یا سریال..."
            className="
              w-full bg-transparent outline-none text-white placeholder:text-white/60
              px-2 sm:px-3 md:px-4
              text-sm sm:text-base md:text-lg
              leading-tight
              min-w-0
            "
          />
        </div>
      </div>
    </div>
  );
}



// w-[85%] → موبایل کوچک
// sm:w-[85%] → موبایل بزرگ
// md:w-[75%] → تبلت
// lg:w-[65%] → لپتاپ
// xl:w-[50%] → دسکتاپ و تلویزیون
// max-w-5xl → جلوگیری از کشیدگی بد