"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Logo from "@/public/logo/dinisir-head.jpg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MovieIcon from '@mui/icons-material/Movie';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GavelIcon from '@mui/icons-material/Gavel';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import StarIcon from '@mui/icons-material/Star';
import AnimationIcon from '@mui/icons-material/Animation'; 


const categories = [
  { id: "action", fa: "اکشن", en: "Action", icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />, color: "from-orange-500/20" },
  { id: "drama", fa: "درام", en: "Drama", icon: <TheaterComedyIcon sx={{ fontSize: 40 }} />, color: "from-blue-500/20" },
  { id: "comedy", fa: "کمدی", en: "Comedy", icon: <TheaterComedyIcon sx={{ fontSize: 40 }} />, color: "from-yellow-400/20" },
  { id: "horror", fa: "ترسناک", en: "Horror", icon: <GavelIcon sx={{ fontSize: 40 }} />, color: "from-red-600/20" },
  { id: "sci-fi", fa: "علمی تخیلی", en: "Sci-Fi", icon: <PsychologyIcon sx={{ fontSize: 40 }} />, color: "from-purple-500/20" },
  { id: "anime", fa: "انیمه", en: "Anime", icon: <AnimationIcon sx={{ fontSize: 40 }} />, color: "from-indigo-500/20" },
  { id: "animation", fa: "انیمیشن", en: "Animation", icon: <ChildCareIcon sx={{ fontSize: 40 }} />, color: "from-green-500/20" },
  { id: "sport", fa: "ورزشی", en: "Sport", icon: <SportsScoreIcon sx={{ fontSize: 40 }} />, color: "from-emerald-500/20" },
  { id: "biography", fa: "زندگینامه", en: "Biography", icon: <HistoryEduIcon sx={{ fontSize: 40 }} />, color: "from-stone-400/20" },
  { id: "documentary", fa: "مستند", en: "Documentary", icon: <MovieIcon sx={{ fontSize: 40 }} />, color: "from-cyan-500/20" },
];

export default function CategoriesPage() {
  const [activeTab, setActiveTab] = useState<"movies" | "series">("movies");

  return (
    <main className="min-h-screen flex flex-col items-center bg-bg-primary" dir="rtl">
      <nav className="w-full flex justify-between items-center p-5 md:px-12 lg:px-20 z-50">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform group-hover:scale-105">
            <Image src={Logo} alt="logo" className="w-9 h-9 md:w-12 md:h-12 object-cover" />
          </div>
          <p className="text-lg md:text-xl font-black text-blue-bold tracking-tighter">DINLOAD</p>
        </Link>

        <Link href="/" className="flex items-center gap-2 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full bg-text-primary/10 border border-text-primary/30 text-text-primary transition-all active:scale-95 group">
          <p className="text-[10px] sm:text-xs md:text-base font-black whitespace-nowrap">بازگشت</p>
          <ArrowBackIcon sx={{ fontSize: { xs: 18, md: 24 } }} />
        </Link>
      </nav>

      <section className="w-full max-w-7xl px-5 md:px-12 lg:px-20 py-10 flex flex-col gap-10 mb-20">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-5xl font-black text-text-primary tracking-tighter uppercase italic">
              دسته‌بندی‌ها
            </h1>
            <div className="w-20 h-1.5 bg-blue-bold rounded-full shadow-[0_0_15px_rgba(2,132,199,0.5)]" />
          </div>

          <div className="flex bg-bg-light p-1.5 rounded-3xl border border-blue-bold backdrop-blur-xl w-fit self-center md:self-auto">
            <button 
              onClick={() => setActiveTab("movies")}
              className={`
                w-28 md:w-32 py-3 rounded-2xl font-black transition-all 
                ${activeTab === "movies" 
                  ? "bg-blue-bold text-text-primary shadow-lg" 
                  : "text-text-primary/40 hover:text-text-primary/70"
                }
              `}
            >
              فیلم
            </button>
            <button 
              onClick={() => setActiveTab("series")}
              className={`
                w-28 md:w-32 py-3 rounded-2xl font-black transition-all 
                ${activeTab === "series" 
                  ? "bg-blue-bold text-text-primary shadow-lg" 
                  : "text-text-primary/40 hover:text-text-primary/70"
                }
              `}
            >
              سریال
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Link href={`/categories/imdb-top-250-${activeTab}`} className="relative h-32 md:h-40 overflow-hidden rounded-[2.5rem] bg-bg-light border-2 border-yellow-500/50 group hover:border-yellow-500 transition-all flex items-center justify-between px-8 md:px-12">
                <div className="absolute inset-0 bg-linear-to-r from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all" />
                <div className="relative z-10 flex flex-col">
                    <span className="text-xl md:text-2xl font-black text-text-primary">۲۵۰ {activeTab === "movies" ? "فیلم" : "سریال"} برتر IMDb</span>
                    <span className="text-xs font-bold opacity-40 group-hover:text-yellow-500 uppercase tracking-widest">IMDb Top 250 {activeTab}</span>
                </div>
                <StarIcon sx={{ fontSize: 60 }} className="text-yellow-500/20 group-hover:text-yellow-500 group-hover:scale-110 transition-all" />
            </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              href={`/categories/${activeTab}/${cat.id}`}
              className="relative overflow-hidden group flex flex-col items-center justify-center gap-3 aspect-square rounded-[2.5rem] bg-bg-light backdrop-blur-2xl border border-blue-bold/50 hover:border-blue-bold hover:scale-[1.03] transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${cat.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 p-5 rounded-3xl bg-blue-bold/10 text-blue-bold group-hover:bg-blue-bold group-hover:text-text-primary transition-all duration-300 shadow-xl">
                {cat.icon}
              </div>

              <div className="relative z-10 flex flex-col items-center gap-1">
                <span className="text-base md:text-lg font-black text-text-primary text-center px-2">
                  {cat.fa}
                </span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 group-hover:text-blue-bold transition-all">
                  {cat.en} {activeTab === "movies" ? "Movie" : "Series"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}