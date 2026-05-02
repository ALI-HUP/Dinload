"use client";

import { useState, cloneElement } from "react";
import { useParams } from "next/navigation";
import { moviesData } from "@/data/movies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SiteMap from "@/components/SiteMap";
import StarIcon from '@mui/icons-material/Star';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LanguageIcon from '@mui/icons-material/Language';
import DownloadIcon from '@mui/icons-material/Download';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from "@/components/Button";

export default function MovieDetails() {
  const params = useParams();
  const movie = moviesData.find((m) => m.id === params.id);

  const [openSeason, setOpenSeason] = useState<string | null>("1");
  const [openQuality, setOpenQuality] = useState<string | null>(null);

  if (!movie) {
    return (
      <main className="min-h-screen bg-bg-primary flex items-center justify-center">
        <h1 className="text-text-primary font-black italic">فیلم مورد نظر یافت نشد.</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary" dir="rtl">
      <Navbar variant="return" />

      <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={movie.backdrop} alt="backdrop" className="w-full h-full object-cover opacity-30 blur-sm" />
          <div className="absolute inset-0 bg-linear-to-t from-bg-primary via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 h-full flex flex-col justify-end pb-10">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
            <div className="w-48 md:w-64 aspect-2/3 rounded-4xl overflow-hidden shadow-2xl border-2 border-white/10 shrink-0">
              <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex flex-col items-center md:items-start gap-4 mb-4">
               <div className="flex items-center gap-3">
                  <div className="h-8 w-1.5 md:h-12 md:w-2 bg-blue-bold rounded-full shadow-[0_0_15px_rgba(2,132,199,0.5)]" />
                  <h1 className="text-3xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">{movie.enTitle}</h1>
               </div>
               
               <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <div className="flex items-center gap-1 bg-yellow-500/10 text-yellow-500 px-3 py-1.5 rounded-xl border border-yellow-500/20 font-black text-sm">
                    <StarIcon sx={{ fontSize: 18 }} /> {movie.score}
                  </div>
                  <div className="flex items-center gap-1 bg-white/5 text-text-primary/60 px-3 py-1.5 rounded-xl border border-white/10 font-bold text-sm">
                    <ScheduleIcon sx={{ fontSize: 18 }} /> {movie.duration}
                  </div>
                  <div className="flex items-center gap-1 bg-white/5 text-text-primary/60 px-3 py-1.5 rounded-xl border border-white/10 font-bold text-sm">
                    <LanguageIcon sx={{ fontSize: 18 }} /> {movie.subtitle}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-12 py-12 flex flex-col gap-12 mb-20">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-6 w-1 bg-blue-bold rounded-full" />
            <h2 className="text-xl font-black italic">خلاصه داستان</h2>
          </div>
          <p className="text-lg font-bold text-text-primary/60 leading-8 text-justify max-w-4xl italic">
            {movie.description}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="h-6 w-1 bg-blue-bold rounded-full" />
            <h2 className="text-xl font-black italic">باکس دانلود {movie.isSeries ? 'سریال' : 'فیلم'}</h2>
          </div>

          {movie.isSeries && movie.seasons?.map((season) => (
            <div key={season.seasonNumber} className="flex flex-col gap-4">
              <button 
                onClick={() => setOpenSeason(openSeason === season.seasonNumber ? null : season.seasonNumber)}
                className="w-full flex items-center justify-between p-6 bg-blue-bold/10 border-2 border-blue-bold/20 rounded-3xl md:rounded-4xl hover:border-blue-bold transition-all group"
              >
                <span className="text-xl md:text-2xl font-black text-text-primary">فصل {season.seasonNumber}</span>
                <KeyboardArrowDownIcon className={`transition-transform duration-300 ${openSeason === season.seasonNumber ? "rotate-180 text-blue-bold" : "opacity-40"}`} />
              </button>

              {openSeason === season.seasonNumber && (
                <div className="flex flex-col gap-3 pr-4 md:pr-10">
                  {season.qualities.map((q) => (
                    <div key={q.quality} className="flex flex-col gap-2">
                      <button 
                        onClick={() => setOpenQuality(openQuality === q.quality ? null : q.quality)}
                        className="w-full flex items-center justify-between p-4 bg-bg-light/50 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl hover:border-blue-bold/40 transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-black text-blue-bold text-lg">{q.quality}</span>
                          <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">{q.type}</span>
                        </div>
                        <KeyboardArrowDownIcon fontSize="small" className={`transition-transform ${openQuality === q.quality ? "rotate-180 text-blue-bold" : "opacity-40"}`} />
                      </button>

                      {openQuality === q.quality && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-2">
                          {q.episodes.map((ep) => (
                            <a 
                              key={ep.number} href={ep.url}
                              className="flex flex-col items-center justify-center p-4 bg-bg-light border-2 border-white/5 rounded-2xl hover:border-blue-bold hover:scale-[1.03] transition-all group active:scale-95"
                            >
                              <span className="font-black text-sm text-text-primary group-hover:text-blue-bold">قسمت {ep.number}</span>
                              <span className="text-[10px] font-bold opacity-30 group-hover:opacity-100">{ep.size}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {!movie.isSeries && movie.links?.map((link, i) => (
            <div key={i} className="flex items-center justify-between p-4 md:p-6 bg-bg-light/50 backdrop-blur-xl border-2 border-blue-bold/20 rounded-3xl md:rounded-4xl hover:border-blue-bold transition-all group">
              <div className="flex items-center gap-4 md:gap-8">
                 <span className="text-xl md:text-2xl font-black text-blue-bold">{link.quality}</span>
                 <div className="flex flex-col">
                    <span className="text-[10px] font-bold opacity-40 uppercase">Size</span>
                    <span className="text-sm md:text-base font-black">{link.size}</span>
                 </div>
              </div>
              <a href={link.url} target="_blank">
                <Button variant="blue" text="دانلود" icon={<DownloadIcon />} className="px-8 md:px-12 py-3 md:py-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <SiteMap />
      <Footer />
    </main>
  );
}