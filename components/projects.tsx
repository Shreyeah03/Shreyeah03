"use client";

import { useEffect, useRef, useState } from "react";
import { Github, Folder } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Education Advisor",
    description:
      "An intelligent platform that helps students navigate their educational journey with personalized recommendations, course planning, and career guidance.",
    tech: ["Django", "Python", "PostgreSQL", "React"],
    github: "https://github.com/Shreyeah03/Education-Advisor.git",
    featured: true,
  },
  {
    title: "Real Time Chat Application",
    description:
      "A feature-rich messaging platform with real-time communication, typing indicators, read receipts, and group chat functionality powered by WebSockets.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/Shreyeah03/my-chat-app.git",
    featured: true,
  },
  {
    title: "College ERP System",
    description:
      "A comprehensive enterprise resource planning system for college management with student enrollment, course registration, grade tracking, and administrative dashboards.",
    tech: ["Django", "Python", "PostgreSQL", "React"],
    github: "https://github.com/Shreyeah03/College_ERP_System.git",
    featured: true,
  },
];

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: (typeof projects)[0];
  index: number;
  isVisible: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  if (project.featured) {
    return (
      <div
        className={cn(
          "group relative rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm",
          "p-8 transition-all duration-500",
          "hover:border-primary/50 hover:shadow-[0_0_40px_rgba(100,180,255,0.15)]",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: `${index * 100}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={cn(
            "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            "bg-gradient-to-br from-primary/5 via-transparent to-primary/5"
          )}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <Folder className="w-10 h-10 text-primary" />
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-mono text-primary/80 bg-primary/10 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "absolute -inset-px rounded-2xl transition-opacity duration-300 pointer-events-none",
            isHovered ? "opacity-100" : "opacity-0"
          )}
          style={{
            background:
              "linear-gradient(to bottom right, rgba(100,180,255,0.1), transparent, rgba(100,180,255,0.1))",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group relative rounded-xl border border-border/30 bg-card/20 backdrop-blur-sm",
        "p-6 transition-all duration-500",
        "hover:border-primary/30 hover:bg-card/40",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <Folder className="w-6 h-6 text-primary/60" />
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="View on GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        )}
      </div>

      <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="text-xs font-mono text-muted-foreground">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
