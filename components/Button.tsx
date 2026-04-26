"use client";

import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export default function Button({ variant, text, onClick, icon }: ButtonProps) {
  if (variant === "primary") {
    return (
      <button 
        onClick={onClick}
        className="
          flex items-center justify-center gap-2 
          px-5 py-2.5 sm:px-7 sm:py-3 md:px-8 md:py-3.5
          bg-text-primary text-bg-dark font-bold rounded-full 
          hover:scale-105 active:scale-95 transition-all shadow-lg 
          text-xs sm:text-sm md:text-base
          whitespace-nowrap
        "
      >
        {icon}
        <span>{text}</span>
      </button>
    );
  }

  return (
    <button 
      onClick={onClick}
      className="
        flex items-center justify-center
        p-2.5 sm:p-3 md:p-3.5
        bg-bg-light/40 backdrop-blur-xl border border-text-primary/10 
        rounded-full hover:bg-bg-light transition-all active:scale-90 
        text-text-primary shadow-lg
      "
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}