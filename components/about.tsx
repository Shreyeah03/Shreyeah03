"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Next.js", level: 92 },
  { name: "PostgreSQL", level: 80 },
  { name: "Tailwind CSS", level: 95 },
];

const techStack = [
  "JavaScript", "Python", "Go", "GraphQL", "Docker", "AWS", "Vercel", "Prisma", "Redis", "MongoDB"
];

export function About() {
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
    <section id="about" ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience building
              scalable web applications. I love turning complex problems into simple,
              beautiful, and intuitive solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source projects, or sharing knowledge with
              the developer community.
            </p>

            <div className="pt-6">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Technologies I work with
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={tech}
                    className={cn(
                      "px-3 py-1.5 text-sm rounded-full border border-border/50",
                      "bg-card/30 backdrop-blur-sm text-muted-foreground",
                      "hover:border-primary/50 hover:text-primary transition-all duration-300",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
              Core Skills
            </h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-1000 ease-out",
                      "bg-gradient-to-r from-primary/80 to-primary"
                    )}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 100}ms`,
                      boxShadow: isVisible ? "0 0 20px rgba(100, 180, 255, 0.5)" : "none",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
