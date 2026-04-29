"use client";

import { cloneElement, useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Link from "next/link";
import Button from "@/components/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonIcon from '@mui/icons-material/Person';
import Footer from "@/components/Footer";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import Navbar from "@/components/Navbar";
import SiteMap from "@/components/SiteMap";


export default function ProfilePage() {
  const [daysLeft] = useState(18);
  const [showPassword, setShowPassword] = useState(false);
  const totalDays = 30;
  const percentage = (daysLeft / totalDays) * 100;
  const circumference = 2 * Math.PI * 65;

  return (
    <main className="min-h-screen flex flex-col items-center">
      <Navbar variant="logout" />

      <section className="w-full max-w-7xl px-4 md:px-8 lg:px-12 py-16 flex flex-col gap-8">
        
        <div className="w-full bg-bg-light backdrop-blur-2xl border border-blue-bold rounded-4xl p-8 md:p-12">
          <h2 className="text-2xl font-black mb-10 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-bold rounded-full" />
            اطلاعات کاربری
          </h2>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex flex-col items-center gap-4 self-center lg:self-start">
              <div className="relative group">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-blue-bold/10 border-2 border-blue-bold/50 flex items-center justify-center overflow-hidden">
                  <AccountCircleIcon sx={{ fontSize: 100 }} className="text-blue-bold" />
                </div>
                <Button 
                  variant="blue" 
                  icon={<EditIcon sx={{ fontSize: 20 }} />} 
                  className="absolute -bottom-3 -right-3 p-3! rounded-2xl! shadow-xl scale-90 md:scale-100" 
                  onClick={() => console.log("Edit Image")}
                />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest">تغییر تصویر پروفایل</p>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="space-y-2 flex flex-col">
                <label className="text-xs font-bold mr-2">نام کاربری</label>
                <div className="relative">
                  <PersonIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-text-primary" />
                  <input type="text" defaultValue="username" className="w-full bg-text-primary/5 border border-text-primary/10 rounded-2xl py-4 pr-5 pl-12 font-bold focus:border-blue-bold outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2 flex flex-col">
                <label className="text-xs font-bold mr-2">شماره موبایل</label>
                <div className="relative">
                  <PhoneIphoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-text-primary" />
                  <input 
                    type="text" 
                    defaultValue="09123456789" 
                    className="w-full bg-text-primary/5 border border-text-primary/10 rounded-2xl py-4 pr-5 pl-12 font-bold tracking-widest focus:border-blue-bold outline-none transition-all" 
                  />
                </div>
              </div>

              <div className="space-y-2 flex flex-col">
                <label className="text-xs font-bold mr-2">رمز عبور جدید</label>
                <div className="relative">
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-primary hover:text-blue-bold transition-colors z-10"
                  >
                    {showPassword ? <VisibilityOffIcon sx={{ fontSize: 20 }} /> : <VisibilityIcon sx={{ fontSize: 20 }} />}
                  </button>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    className="w-full bg-text-primary/5 border border-text-primary/10 rounded-2xl py-4 pr-5 pl-12 font-bold focus:border-blue-bold outline-none transition-all" 
                  />
                </div>
              </div>

              <div className="space-y-2 flex flex-col">
                <label className="text-xs font-bold mr-2">تکرار رمز عبور</label>
                <div className="relative">
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-primary hover:text-blue-bold transition-colors z-10"
                  >
                    {showPassword ? <VisibilityOffIcon sx={{ fontSize: 20 }} /> : <VisibilityIcon sx={{ fontSize: 20 }} />}
                  </button>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    className="w-full bg-text-primary/5 border border-text-primary/10 rounded-2xl py-4 pr-5 pl-12 font-bold focus:border-blue-bold outline-none transition-all" 
                  />
                </div>
              </div>

              <div className="text-xs text-text-secondary">
                در صورت علاقه به تغییر رمز عبور، هر دو فیلد را پر کنید. در غیر این صورت، این فیلدها را خالی بگذارید.
              </div>
              
              <div className="md:col-span-2 flex justify-center lg:justify-start pt-2">
                <Button 
                  variant="blue" 
                  text="ذخیره تغییرات" 
                  className="w-full md:w-fit px-12 py-4 text-base! font-black"
                  onClick={() => console.log("Save Changes")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-bg-light backdrop-blur-2xl border border-blue-bold rounded-4xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10">
          
          <div className="relative flex items-center justify-center w-36 h-36 md:w-40 md:h-40">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="50%" cy="50%" r="65" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-text-primary/5" />
              <circle cx="50%" cy="50%" r="65" stroke="currentColor" strokeWidth="12" fill="transparent" 
                strokeDasharray={circumference} 
                strokeDashoffset={circumference - (percentage / 100) * circumference} 
                strokeLinecap="round" className="text-blue-bold transition-all duration-1000" />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-black leading-none">{daysLeft}</span>
              <span className="text-xs font-bold mt-1">روز مانده</span>
            </div>
          </div>

          <div className="flex-1 space-y-2 text-center lg:text-right">
              <h3 className="text-2xl md:text-3xl font-black text-blue-bold tracking-tighter uppercase leading-tight">اشتراک یک ماهه</h3>
              <p className="text-sm font-bold">پایان اعتبار: ۲۲ اردیبهشت ۱۴۰۵</p>
          </div>

          <Button 
            variant="white" 
            text="تمدید اشتراک" 
            icon={<AccountBalanceWalletIcon className="text-lg! md:text-xl!" />} 
            className="w-full lg:w-auto px-10 py-5"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {[
            { id: 1, fa: "ذخیره شده‌ها", en: "Bookmarks", icon: <VisibilityIcon />, link: "/profile/bookmarks", color: "from-blue-500/20" },
            { id: 2, fa: "کامنت‌های من", en: "My Comments", icon: <EditIcon />, link: "/profile/comments", color: "from-purple-500/20" },
            { id: 3, fa: "تیکت‌های من", en: "Support Tickets", icon: <ConfirmationNumberIcon />, link: "/profile/tickets", color: "from-emerald-500/20" },
          ].map((item, index) => (
            <Link 
              key={item.id} 
              href={item.link}
              className={`
                relative overflow-hidden group flex flex-col items-center justify-center 
                py-4 md:py-8 min-h-30 md:min-h-45
                rounded-3xl md:rounded-[2.5rem] bg-bg-light backdrop-blur-2xl transition-all duration-300 
                border-2 border-blue-bold hover:scale-[1.05] active:scale-95
                ${index === 2 ? "col-span-2 md:col-span-1" : "col-span-1"}
              `}
            >
              <div className={`absolute inset-0 bg-linear-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 p-2 md:p-4 rounded-xl md:rounded-2xl bg-blue-bold/10 text-blue-bold group-hover:bg-blue-bold group-hover:text-text-primary transition-all duration-300 shadow-lg">
                {cloneElement(item.icon as React.ReactElement<any>, { 
                  sx: { fontSize: { xs: 22, md: 32 } } 
                })}
              </div>

              <div className="relative z-10 flex flex-col items-center gap-1">
                <span className="text-base md:text-xl font-black text-text-primary">
                  {item.fa}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 group-hover:text-blue-bold transition-all">
                  {item.en}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteMap />
      <Footer />
    </main>
  );
}