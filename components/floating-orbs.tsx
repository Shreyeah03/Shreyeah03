"use client";

import { useEffect, useState } from "react";

interface Orb {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  color: string;
}

export function FloatingOrbs() {
  const [orbs, setOrbs] = useState<Orb[]>([]);

  useEffect(() => {
    const colors = [
      "rgba(100, 180, 255, 0.15)",
      "rgba(150, 100, 255, 0.12)",
      "rgba(100, 255, 200, 0.1)",
      "rgba(255, 150, 200, 0.08)",
    ];

    const newOrbs: Orb[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: Math.random() * 300 + 200,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 30,
      delay: Math.random() * -20,
      color: colors[i % colors.length],
    }));

    setOrbs(newOrbs);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            backgroundColor: orb.color,
            animation: `float-${orb.id % 3} ${orb.duration}s ease-in-out infinite`,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, -80px) scale(1.1); }
          50% { transform: translate(-30px, -120px) scale(0.9); }
          75% { transform: translate(80px, -40px) scale(1.05); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-60px, 60px) scale(1.15); }
          66% { transform: translate(40px, -50px) scale(0.95); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(70px, 70px) scale(1.1); }
        }
      `}</style>
    </div>
  );
}
