"use client";

import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, Twitter, Send } from "lucide-react";
import { MagneticButton } from "./magnetic-button";
import { cn } from "@/lib/utils";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-sm uppercase tracking-wider text-primary mb-4">What's Next?</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Let's Build Something
            <span className="relative ml-3">
              <span className="text-primary">Amazing</span>
              <span className="absolute -inset-2 bg-primary/20 blur-2xl rounded-full -z-10" />
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open.
            Whether you have a question, want to collaborate, or just want to say hi,
            I'll try my best to get back to you!
          </p>

          <MagneticButton href="mailto:hello@example.com" className="mb-16">
            <Send className="w-4 h-4" />
            Say Hello
          </MagneticButton>

          <div className="flex items-center justify-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={cn(
                  "p-4 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm",
                  "text-muted-foreground hover:text-primary hover:border-primary/50",
                  "hover:shadow-[0_0_30px_rgba(100,180,255,0.2)]",
                  "transition-all duration-300",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
