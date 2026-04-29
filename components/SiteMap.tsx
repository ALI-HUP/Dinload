"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo/dinisir-head.jpg";
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';


export default function SiteMap() {
  return (
    <section className="w-full bg-bg-light/50 py-10 pb-24">
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-4">
        <div className="flex items-center justify-center md:justify-start gap-4">
          <div className="relative overflow-hidden rounded-lg shadow-md shrink-0">
            <Image src={Logo} alt="logo" className="w-10 h-10 object-cover" />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-black text-blue-bold leading-tight">DINLOAD</p>
            <p className="text-xs font-bold text-text-secondary leading-tight">
              مرجع دانلود بروزترین فیلم‌ها و سریال‌ها
            </p>
            <p className="text-xs font-bold text-text-secondary leading-tight">
              تمامی حقوق این سایت متعلق به دینلود می‌باشد.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a href="#" className="p-2.5 rounded-xl bg-text-primary/5 text-text-primary/30 hover:text-blue-bold hover:bg-blue-bold/10 transition-all active:scale-90">
            <TelegramIcon sx={{ fontSize: 20 }} />
          </a>
          <a href="#" className="p-2.5 rounded-xl bg-text-primary/5 text-text-primary/30 hover:text-blue-bold hover:bg-blue-bold/10 transition-all active:scale-90">
            <InstagramIcon sx={{ fontSize: 20 }} />
          </a>
          <a href="#" className="p-2.5 rounded-xl bg-text-primary/5 text-text-primary/30 hover:text-blue-bold hover:bg-blue-bold/10 transition-all active:scale-90">
            <EmailIcon sx={{ fontSize: 20 }} />
          </a>
        </div>

        <div className="flex items-center justify-center md:justify-end gap-6">
          <Link href="/faq" className="text-xs hover:underline font-bold text-text-primary/40 hover:text-blue-bold transition-colors whitespace-nowrap">
            سوالات متداول
          </Link>
          <Link href="/rules" className="text-xs hover:underline font-bold text-text-primary/40 hover:text-blue-bold transition-colors whitespace-nowrap">
            قوانین
          </Link>
          <Link href="/report" className="text-xs hover:underline font-bold text-text-primary/40 hover:text-blue-bold transition-colors whitespace-nowrap">
            گزارش خرابی لینک
          </Link>
        </div>
      </div>
    </section>
  );
}
