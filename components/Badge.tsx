"use client";

import React from "react";

interface BadgeProps {
  variant: "blue" | "yellow" | "white";
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ variant, children, className = "" }: BadgeProps) {
  const styles = {
    blue: "bg-blue-bold/25 text-blue-bold border-blue-bold",
    yellow: "bg-yellow-400/25 text-yellow-400 border-yellow-400",
    white: "bg-text-primary/25 text-text-primary border-text-primary",
  };

  return (
    <span
      className={`
        px-2 py-1 rounded-md border 
        text-[10px] md:text-xs font-bold uppercase tracking-tight
        flex items-center gap-1
        ${styles[variant]}
        ${className}
      `}
    >
      {children}
      {variant === "yellow" && (
        <span className="text-[8px] md:text-[10px] -mb-0.5">★</span>
      )}
    </span>
  );
}