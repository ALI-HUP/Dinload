"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo/dinisir-head.jpg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface NavbarProps {
  variant: "profile" | "logout" | "return";
  userName?: string;
}

export default function Navbar({ variant, userName = "علی شیخ بهایی" }: NavbarProps) {
  
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
            <p className="text-[10px] sm:text-xs md:text-base font-black whitespace-nowrap mb-0.5">خروج از حساب</p>
            <LogoutIcon sx={{ fontSize: { xs: 18, md: 24 } }} />
          </button>
        );

      case "return":
        return (
          <Link href="/" className="flex items-center gap-2 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full bg-text-primary/10 border border-text-primary/30 text-text-primary transition-all active:scale-95">
            <p className="text-[10px] sm:text-xs md:text-base font-black whitespace-nowrap mb-0.5">بازگشت</p>
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

      <div className="flex items-center">
        {renderLeftSection()}
      </div>
    </nav>
  );
}