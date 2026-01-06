import { useState, useEffect } from "react";
import shyCharacter from "@/assets/shy-character.png";
import { Button } from "@/components/ui/button";

interface Props {
  onContinue: () => void;
}

const doodles = [
  { emoji: "⭐", position: { left: "8%", top: "25%" } },
  { emoji: "🌸", position: { left: "85%", top: "30%" } },
  { emoji: "💗", position: { left: "12%", top: "70%" } },
];

const PageWhyThisGift = ({ onContinue }: Props) => {
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showDoodles, setShowDoodles] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowLine1(true), 500),
      setTimeout(() => setShowLine2(true), 1800),
      setTimeout(() => setShowDoodles(true), 1200),
      setTimeout(() => setShowButton(true), 3000),
    ];
    
    return () => timers.forEach(clearTimeout);
  }, []);

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
        <div className="space-y-5 min-h-[160px]">
          {showLine1 && (
            <p className="font-display text-3xl md:text-4xl text-foreground animate-text-reveal">
              "I'm not good with words."
            </p>
          )}
          
          {showLine2 && (
            <p className="font-display text-2xl md:text-3xl text-primary animate-text-reveal">
              "So I made this instead."
            </p>
          )}
        </div>

        {/* Floating doodles */}
        {showDoodles && (
          <>
            {doodles.map((doodle, i) => (
              <span
                key={i}
                className="absolute text-3xl animate-pop-in"
                style={{
                  ...doodle.position,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                {doodle.emoji}
              </span>
            ))}
          </>
        )}

        {/* Continue button */}
        {showButton && (
          <div className="mt-8 animate-pop-in">
            <Button
              variant="yes"
              size="lg"
              onClick={onContinue}
            >
              Continue 💗
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageWhyThisGift;
