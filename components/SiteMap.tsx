"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo/dinisir-head.jpg";
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';


export default function SiteMap() {
  return (
    <section className="w-full bg-bg-light/50 py-10">
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <Image src={Logo} alt="logo" className="w-10 h-10 object-cover" />
            </div>
            <p className="text-xl font-black text-blue-bold tracking-tighter uppercase italic">DINLOAD</p>
          </div>
          <p className="text-sm font-bold text-text-primary/50 leading-6 text-justify">
            دینلود مرجع دانلود بروزترین فیلم‌ها و سریال‌های جهان. ما تلاش می‌کنیم بهترین کیفیت را در کمترین زمان ممکن برای شما فراهم کنیم.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-xl bg-text-primary/5 text-text-primary/40 hover:text-blue-bold hover:bg-blue-bold/10 transition-all"><TelegramIcon /></a>
            <a href="#" className="p-2 rounded-xl bg-text-primary/5 text-text-primary/40 hover:text-blue-bold hover:bg-blue-bold/10 transition-all"><InstagramIcon /></a>
            <a href="#" className="p-2 rounded-xl bg-text-primary/5 text-text-primary/40 hover:text-blue-bold hover:bg-blue-bold/10 transition-all"><EmailIcon /></a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-black text-text-primary border-r-4 border-blue-bold pr-3">دسترسی سریع</h3>
          <ul className="flex flex-col gap-3">
            <li><Link href="/" className="text-sm font-bold text-text-primary/40 hover:text-blue-bold hover:underline transition-colors">صفحه اصلی</Link></li>
            <li><Link href="/categories" className="text-sm font-bold text-text-primary/40 hover:text-blue-bold hover:underline transition-colors">دسته‌بندی‌ها</Link></li>
            <li><Link href="/subscription" className="text-sm font-bold text-text-primary/40 hover:text-blue-bold hover:underline transition-colors">خرید اشتراک</Link></li>
            <li><Link href="/contact" className="text-sm font-bold text-text-primary/40 hover:text-blue-bold hover:underline transition-colors">راه ارتباطی</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-black text-text-primary border-r-4 border-blue-bold pr-3">راهنما و قوانین</h3>
          <ul className="flex flex-col gap-3">
            <li><Link href="#" className="text-sm font-bold text-text-primary/40 hover:text-blue-bold hover:underline transition-colors">سوالات متداول</Link></li>
            <li><Link href="#" className="text-sm font-bold text-text-primary/40 hover:text-blue-bold hover:underline transition-colors">قوانین و مقررات</Link></li>
            <li><Link href="#" className="text-sm font-bold text-text-primary/40 hover:text-blue-bold hover:underline transition-colors">گزارش خرابی لینک</Link></li>
            <li><Link href="#" className="text-sm font-bold text-text-primary/40 hover:text-blue-bold hover:underline transition-colors">درخواست فیلم و سریال</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-black text-text-primary border-r-4 border-blue-bold pr-3">اعتبار ما</h3>
          <div className="flex flex-wrap gap-4">
            <div className="w-20 h-20 bg-text-primary/5 rounded-2xl border border-white/5 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
               <span className="text-xs font-black opacity-50">ENAMAD</span>
            </div>
            <div className="w-20 h-20 bg-text-primary/5 rounded-2xl border border-white/5 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
               <span className="text-xs font-black opacity-50">SAMANDEHI</span>
            </div>
          </div>
          <p className="text-xs font-bold text-text-primary/50">
            تمامی حقوق مادی و معنوی این وب‌سایت متعلق به تیم دینلود می‌باشد.
          </p>
        </div>

      </div>
    </section>
  );
}
