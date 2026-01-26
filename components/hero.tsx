"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { MagneticButton } from "./magnetic-button";
import { cn } from "@/lib/utils";

const roles = ["Full Stack Developer", "UI/UX Enthusiast", "Open Source Contributor"];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-sm text-muted-foreground">Available for opportunities</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-foreground">Hi, I'm </span>
          <span className="relative">
            <span className="text-primary">Shreya Khacharia</span>
            <span className="absolute -inset-2 bg-primary/20 blur-2xl rounded-full -z-10" />
          </span>
        </h1>

        <div className="h-12 mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground">
            {displayText}
            <span className="animate-pulse text-primary">|</span>
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          I craft beautiful, performant digital experiences. Passionate about
          building products that make a difference and pushing the boundaries of
          what's possible on the web.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <MagneticButton href="#projects">
            View My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </MagneticButton>

          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: "https://github.com/shreyakhacharia", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/shreyakhacharia", label: "LinkedIn" },
              { icon: Mail, href: "mailto:shreya@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={cn(
                  "p-3 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm",
                  "text-muted-foreground hover:text-primary hover:border-primary/50",
                  "hover:shadow-[0_0_20px_rgba(100,180,255,0.2)]",
                  "transition-all duration-300"
                )}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
