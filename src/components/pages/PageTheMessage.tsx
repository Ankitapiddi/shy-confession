import { useEffect, useState } from "react";
import heartCard from "@/assets/heart-card.png";
import twoCharacters from "@/assets/two-characters.png";

interface Props {
  onContinue: () => void;
}

const PageTheMessage = ({ onContinue }: Props) => {
  const [showCard, setShowCard] = useState(false);
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showLine3, setShowLine3] = useState(false);
  const [showLine4, setShowLine4] = useState(false);
  const [showCharacters, setShowCharacters] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowCard(true), 300),
      setTimeout(() => setShowLine1(true), 1000),
      setTimeout(() => setShowLine2(true), 2200),
      setTimeout(() => setShowLine3(true), 3800),
      setTimeout(() => setShowLine4(true), 5200),
      setTimeout(() => setShowCharacters(true), 4500),
      setTimeout(() => setShowFinal(true), 7000),
      setTimeout(() => onContinue(), 9500),
    ];
    
    return () => timers.forEach(clearTimeout);
  }, [onContinue]);

  return (
    <div className="min-h-screen bg-peach-lavender flex items-center justify-center p-4 animate-page-enter relative overflow-hidden">
      <div className="text-center max-w-lg mx-auto">
        {/* Heart card */}
        {showCard && (
          <div className="mb-8 animate-zoom-heart">
            <img
              src={heartCard}
              alt="Heart shaped card"
              className="w-48 h-48 mx-auto object-contain drop-shadow-lg pulse-gentle rounded-3xl"
            />
          </div>
        )}

        {/* Message text - reveals line by line */}
        <div className="space-y-5 min-h-[280px]">
          {showLine1 && (
            <p className="font-display text-2xl md:text-3xl text-foreground animate-text-reveal">
              This is not a big gift.
            </p>
          )}
          
          {showLine2 && (
            <p className="font-display text-2xl md:text-3xl text-foreground animate-text-reveal">
              But it's real.
            </p>
          )}

          {showLine3 && (
            <p className="font-display text-xl md:text-2xl text-primary animate-text-reveal pt-4">
              I just wanted you to know—
            </p>
          )}
          
          {showLine4 && (
            <p className="font-display text-2xl md:text-3xl text-primary animate-text-reveal font-semibold">
              you matter to me. 💗
            </p>
          )}
        </div>

        {/* Two characters illustration */}
        {showCharacters && (
          <div className="mt-8 animate-pop-in">
            <img
              src={twoCharacters}
              alt="Two characters sitting together"
              className="w-36 h-36 mx-auto object-contain drop-shadow-md rounded-3xl"
            />
          </div>
        )}

        {/* Final text */}
        {showFinal && (
          <p className="mt-8 font-body text-muted-foreground text-lg animate-text-reveal">
            That's all... I just wanted you to have this 💗
          </p>
        )}

        {/* Floating decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="absolute text-lg opacity-30 animate-sparkle"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              {["💗", "✨", "🌸", "💕", "⭐", "💞"][i]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageTheMessage;
