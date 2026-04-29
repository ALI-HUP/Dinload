"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { cloneElement } from "react";

import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SiteMap from "@/components/SiteMap";

const contactMethods = [
  { 
    id: "instagram",
    fa: "اینستاگرام",
    en: "Instagram",
    value: "dinload.official",
    link: "https://instagram.com/...",
    icon: <InstagramIcon />,
    color: "from-pink-500/20"
  },
  { 
    id: "telegram",
    fa: "تلگرام",
    en: "Telegram",
    value: "@dinload_admin",
    link: "https://t.me/...",
    icon: <TelegramIcon />,
    color: "from-sky-500/20"
  },
  { 
    id: "email",
    fa: "ایمیل",
    en: "Email Address",
    value: "info@dinload.com",
    link: "mailto:info@dinload.com",
    icon: <EmailIcon />,
    color: "from-red-500/20"
  },
  { 
    id: "ticket",
    fa: "ثبت تیکت",
    en: "Support Ticket",
    value: "پاسخگویی سریع",
    link: "/profile/tickets",
    icon: <ConfirmationNumberIcon />,
    color: "from-emerald-500/20"
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-bg-primary" dir="rtl">
      <Navbar variant="return" />

      <section className="w-full max-w-7xl px-5 md:px-12 lg:px-20 py-10 flex flex-col gap-10 mb-20">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="h-8 w-1.5 md:h-12 md:w-2 bg-blue-bold rounded-full shadow-[0_0_15px_rgba(2,132,199,0.5)]" />
          <h1 className="text-3xl md:text-5xl font-black text-text-primary tracking-tighter uppercase italic leading-none">راه ارتباطی</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {contactMethods.map((method) => (
            <a 
              key={method.id} href={method.link} target="_blank" rel="noopener noreferrer"
              className="relative overflow-hidden group flex flex-col items-center justify-center gap-3 md:gap-6 aspect-square rounded-4xl md:rounded-[3rem] bg-bg-light backdrop-blur-2xl transition-all duration-300 border-2 border-blue-bold/20 hover:border-blue-bold hover:scale-[1.05] active:scale-95"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${method.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10 p-3 md:p-5 rounded-2xl md:rounded-3xl bg-blue-bold/10 text-blue-bold group-hover:bg-blue-bold group-hover:text-text-primary transition-all duration-300 shadow-xl">
                {cloneElement(method.icon as React.ReactElement, { sx: { fontSize: { xs: 28, md: 40 } } } as any)}
              </div>
              <div className="relative z-10 flex flex-col items-center gap-0.5">
                <span className="text-base md:text-xl font-black text-text-primary">{method.fa}</span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 group-hover:text-blue-bold transition-all">{method.en}</span>
              </div>
              <div className="relative z-10 mt-1 md:mt-2 px-3 py-1 rounded-full bg-bg-primary/50 border border-white/5 group-hover:border-blue-bold/30 transition-all">
                <span className="text-[9px] md:text-xs font-bold text-text-primary/60 group-hover:text-text-primary uppercase tracking-tighter">{method.value}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <SiteMap />
      <Footer />
    </main>
  );
}