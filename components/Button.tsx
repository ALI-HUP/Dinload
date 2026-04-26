"use client";

import React from "react";

interface ButtonProps {
  variant: "white" | "blue" | "transparent";
  text?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export default function Button({ variant, text, onClick, icon, className = "" }: ButtonProps) {
  const baseStyles = "flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg whitespace-nowrap font-bold";
  
  const variants = {
    white: "bg-text-primary text-bg-dark hover:scale-105 rounded-full px-5 py-2.5 sm:px-7 sm:py-3 md:px-8 md:py-3.5 text-xs sm:text-sm md:text-base",
    blue: "bg-blue-bold text-text-primary hover:shadow-[0_0_20px_rgba(2,132,199,0.4)] rounded-2xl px-6 py-3",
    transparent: "bg-bg-light/40 backdrop-blur-xl border border-text-primary/10 text-text-primary rounded-full p-2.5 sm:p-3 md:p-3.5 hover:bg-bg-light active:scale-90",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {icon}
      {text && <span>{text}</span>}
    </button>
  );
}