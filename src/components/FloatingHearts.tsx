import { useState, useEffect } from "react";

const FloatingHearts = () => {
  const hearts = Array.from({ length: 12 }, (_, i) => i);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((i) => (
        <div
          key={i}
          className="absolute text-primary/20 animate-sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            fontSize: `${Math.random() * 20 + 10}px`,
          }}
        >
          💗
        </div>
      ))}
    </div>
  );
};

const Sparkles = ({ show }: { show: boolean }) => {
  if (!show) return null;
  
  const sparkles = Array.from({ length: 20 }, (_, i) => i);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {sparkles.map((i) => (
        <div
          key={i}
          className="absolute animate-sparkle"
          style={{
            left: `${30 + Math.random() * 40}%`,
            top: `${30 + Math.random() * 40}%`,
            animationDelay: `${Math.random() * 0.5}s`,
            fontSize: `${Math.random() * 24 + 16}px`,
          }}
        >
          {["✨", "💖", "💕", "💗", "🥺", "💞"][Math.floor(Math.random() * 6)]}
        </div>
      ))}
    </div>
  );
};

export { FloatingHearts, Sparkles };
