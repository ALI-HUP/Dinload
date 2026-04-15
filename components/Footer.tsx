"use client";

import { useState } from "react";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu"; 
import CloseIcon from "@mui/icons-material/Close";

export default function Footer() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div
      className="
        fixed bottom-5
        m-auto left-0 right-0
        w-[85%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[50%]
        max-w-5xl shadow-2xl
        z-50
      "
    >
      <div className="backdrop-blur-xl bg-black/70 text-white rounded-full flex items-center border border-white/35 relative overflow-hidden">
        
        <div 
          className="absolute z-30 transition-all duration-500 ease-in-out flex items-center justify-center"
          style={{ 
            right: isSearchOpen ? "0%" : "25%", 
            width: "25%",
            height: "100%"
          }}
        >
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-full h-full flex items-center justify-center p-3 rounded-full hover:bg-white/20 transition"
          >
            <SearchIcon fontSize="medium" />
          </button>
        </div>

        <Link 
          href="/" 
          className={`flex-1 flex items-center justify-center p-3 rounded-full hover:bg-white/20 transition duration-500 ${
            isSearchOpen ? "opacity-0 scale-50 pointer-events-none" : "opacity-100"
          }`}
        >
          <HomeIcon fontSize="medium" />
        </Link>

        <div className="flex-1 p-3 invisible">
          <SearchIcon fontSize="medium" />
        </div>

        <Link 
          href="/" 
          className={`flex-1 flex items-center justify-center p-3 rounded-full hover:bg-white/20 transition duration-500 ${
            isSearchOpen ? "opacity-0 scale-50 pointer-events-none" : "opacity-100"
          }`}
        >
          <PersonIcon fontSize="medium" />
        </Link>

        <div className="flex-1 h-full flex items-center justify-center">
          {isSearchOpen ? (
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="w-full h-full flex items-center justify-center p-3 rounded-full hover:bg-white/20 transition z-40"
            >
              <CloseIcon fontSize="medium" />
            </button>
          ) : (
            <button 
              className="w-full h-full flex items-center justify-center p-3 rounded-full hover:bg-white/20 transition z-40"
            >
              <MenuIcon fontSize="medium" />
            </button>
          )}
        </div>

        <div 
          className={`absolute transition-all duration-500 ease-in-out flex items-center ${
            isSearchOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"
          }`}
          style={{ right: "25%", width: "50%", height: "100%" }}
        >
          <input
            autoFocus={isSearchOpen}
            placeholder="جستجو..."
            className="w-full bg-transparent outline-none text-white placeholder:text-white/60 px-4 text-lg"
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