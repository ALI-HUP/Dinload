"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo/dinisir-head.jpg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface NavbarProps {
  variant: "profile" | "logout" | "return";
  userName?: string;
  notificationCount?: number;
}

export default function Navbar({ 
  variant, 
  userName = "علی شیخ بهایی",
  notificationCount = 2
}: NavbarProps) {
  const [showNotifs, setShowNotifs] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowNotifs(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderLeftSection = () => {
    switch (variant) {
      case "profile":
        return (
          <Link href="/profile" className="flex items-center gap-2 p-1 pr-2 md:pr-3 md:pl-1 rounded-full bg-bg-dark/20 backdrop-blur-md border border-text-primary/30 hover:bg-text-primary/10 transition-all active:scale-95">
            <p className="text-sm lg:text-base font-bold whitespace-nowrap mb-0.5">{userName}</p>
            <AccountCircleIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'white' }} />
          </Link>
        );
      
      case "logout":
        return (
          <button onClick={() => console.log("Logout Logic")} className="flex items-center gap-2 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full bg-red-500/10 backdrop-blur-md border border-red-500/30 hover:bg-red-500/20 text-red-500 transition-all active:scale-95 group">
            <p className="text-sm lg:text-base font-bold whitespace-nowrap mb-0.5">خروج از حساب</p>
            <LogoutIcon sx={{ fontSize: { xs: 18, md: 24 } }} />
          </button>
        );

      case "return":
        return (
          <Link href="/" className="flex items-center gap-2 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full bg-text-primary/10 border border-text-primary/30 text-text-primary transition-all active:scale-95">
            <p className="text-sm lg:text-base font-bold whitespace-nowrap mb-0.5">بازگشت</p>
            <ArrowBackIcon sx={{ fontSize: { xs: 18, md: 24 } }} />
          </Link>
        );
    }
  };

  return (
    <nav className="w-full flex justify-between items-center p-5 md:px-12 lg:px-20 z-50">
      <Link href="/" className="flex items-center gap-2 group"
        onClick={(e) => {
          if (window.location.pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      >
        <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform group-hover:scale-105">
          <Image src={Logo} alt="logo" className="w-9 h-9 md:w-12 md:h-12 object-cover" />
        </div>
        <p className="text-lg md:text-xl font-black text-blue-bold tracking-tighter">
          DINLOAD
        </p>
      </Link>

      <div className="flex items-center gap-3 md:gap-5 relative">
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setShowNotifs(!showNotifs)}
            className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-text-primary/10 border border-text-primary/20 text-text-primary hover:bg-text-primary/20 transition-all active:scale-90"
          >
            <NotificationsIcon sx={{ fontSize: { xs: 22, md: 26 } }} />
            
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-black rounded-full flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </button>

          {showNotifs && (
            <div className="absolute -left-30 mt-4 w-72 md:w-80 bg-bg-light/80 backdrop-blur-2xl border border-text-secondary rounded-4xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in duration-200 origin-top-left">
              <div className="p-5 border-b border-text-secondary flex justify-between items-center">
                <span className="font-black text-sm uppercase italic text-text-primary">اعلان‌ها</span>
                <NotificationsIcon className="text-text-primary" sx={{ fontSize: 20 }} />
              </div>
              
              <div className="max-h-80 overflow-y-auto">
                <div className="p-4 flex justify-between border-b border-text-secondary/50 hover:bg-text-secondary/10 transition-colors">
                  <p className="text-xs font-bold text-text-primary">اشتراک شما با موفقیت فعال شد.</p>
                  <p className="text-[10px] opacity-40 mt-1">۲ ساعت پیش</p>
                </div>
                <div className="p-4 flex justify-between border-b border-text-secondary/50 hover:bg-text-secondary/10 transition-colors">
                  <p className="text-xs font-bold text-text-primary">فیلم جدید "Arcane" اضافه شد!</p>
                  <p className="text-[10px] opacity-40 mt-1">دیروز</p>
                </div>
              </div>
            </div>
          )}
        </div>
        {renderLeftSection()}
      </div>
    </nav>
  );
}