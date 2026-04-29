"use client";

import { useState } from "react";
import Image from "next/image";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Link from "next/link";
import Button from "@/components/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonIcon from '@mui/icons-material/Person';
import Footer from "@/components/Footer";
import Logo from "@/public/logo/dinisir-head.jpg";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
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

      </section>

      <SiteMap />
      <Footer />
    </main>
  );
}