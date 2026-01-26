"use client";

import React from "react"

import { cn } from "@/lib/utils";

interface GlowingTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
}

export function GlowingText({ children, className, as: Component = "span" }: GlowingTextProps) {
  return (
    <Component
      className={cn(
        "relative inline-block",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute inset-0 blur-2xl opacity-50 bg-primary"
        style={{
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
        aria-hidden="true"
      />
    </Component>
  );
}
