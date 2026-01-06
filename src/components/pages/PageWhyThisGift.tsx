import { useEffect, useState } from "react";
import shyCharacter from "@/assets/shy-character.png";

interface Props {
  onContinue: () => void;
}

const doodles = [
  { emoji: "☕", delay: 1.5 },
  { emoji: "🌙", delay: 2.0 },
  { emoji: "⭐", delay: 2.5 },
  { emoji: "💗", delay: 3.0 },
];

const PageWhyThisGift = ({ onContinue }: Props) => {
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showLine3, setShowLine3] = useState(false);
  const [showLine4, setShowLine4] = useState(false);
  const [showDoodles, setShowDoodles] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowLine1(true), 500),
      setTimeout(() => setShowLine2(true), 1500),
      setTimeout(() => setShowLine3(true), 3000),
      setTimeout(() => setShowLine4(true), 4500),
      setTimeout(() => setShowDoodles(true), 2000),
      setTimeout(() => onContinue(), 7000),
    ];
    
    return () => timers.forEach(clearTimeout);
  }, [onContinue]);

  return (
    <div className="min-h-screen bg-paper-texture flex items-center justify-center p-4 animate-page-enter relative overflow-hidden">
      <div className="text-center max-w-lg mx-auto relative z-10">
        {/* Character */}
        <div className="mb-8 floating">
          <img
            src={shyCharacter}
            alt="Shy character holding a heart"
            className="w-40 h-40 mx-auto object-contain drop-shadow-md rounded-3xl"
          />
        </div>

        {/* Text reveals - line by line */}
        <div className="space-y-6 min-h-[200px]">
          {showLine1 && (
            <p className="font-display text-3xl md:text-4xl text-foreground animate-text-reveal">
              I didn't know how to say this...
            </p>
          )}
          
          {showLine2 && (
            <p className="font-display text-2xl md:text-3xl text-primary animate-text-reveal">
              ...so I made something instead.
            </p>
          )}

          <div className="pt-4 space-y-3">
            {showLine3 && (
              <p className="font-body text-lg text-muted-foreground animate-text-reveal">
                Because some feelings feel safer...
              </p>
            )}
            
            {showLine4 && (
              <p className="font-body text-lg text-muted-foreground animate-text-reveal">
                when they're wrapped in tiny things.
              </p>
            )}
          </div>
        </div>

        {/* Floating doodles */}
        {showDoodles && (
          <>
            {doodles.map((doodle, i) => (
              <span
                key={i}
                className="absolute text-3xl animate-pop-in"
                style={{
                  left: `${10 + i * 25}%`,
                  top: `${20 + (i % 2) * 60}%`,
                  animationDelay: `${doodle.delay - 2}s`,
                }}
              >
                {doodle.emoji}
              </span>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default PageWhyThisGift;
