"use client";

import React from "react"

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function MagneticButton({ children, className, href, onClick }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      ref={buttonRef as React.RefObject<HTMLButtonElement & HTMLAnchorElement>}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium",
        "rounded-full border border-primary/30 bg-primary/10 text-foreground",
        "backdrop-blur-sm transition-all duration-300 ease-out",
        "hover:border-primary/60 hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(100,180,255,0.3)]",
        "group overflow-hidden",
        className
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-shimmer" />
      </div>
    </Component>
  );
}
