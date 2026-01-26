"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["about", "projects", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300"
        >
          <span className="text-primary">{"<"}</span>
          YourName
          <span className="text-primary">{" />"}</span>
        </Link>

        <ul className="flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                  "hover:text-primary",
                  activeSection === link.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <span className="absolute inset-0 bg-primary/10 rounded-full -z-10" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
