import { useEffect, useState } from "react";
import heartCard from "@/assets/heart-card.png";
import { Button } from "@/components/ui/button";

interface Props {
  onContinue: () => void;
}

const PageTheMessage = ({ onContinue }: Props) => {
  const [showCard, setShowCard] = useState(false);
  const [cardOpened, setCardOpened] = useState(false);
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowCard(true), 300),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleCardClick = () => {
    if (!cardOpened) {
      setCardOpened(true);
      setTimeout(() => setShowLine1(true), 500);
      setTimeout(() => setShowLine2(true), 2000);
      setTimeout(() => setShowDisclaimer(true), 3500);
      setTimeout(() => setShowButton(true), 4500);
    }
  };

  return (
    <div className="min-h-screen bg-peach-lavender flex items-center justify-center p-4 animate-page-enter relative overflow-hidden">
      <div className="text-center max-w-lg mx-auto">
        {/* Heart card - clickable to open */}
        {showCard && (
          <div 
            className={`mb-8 cursor-pointer transition-transform duration-500 ${cardOpened ? "scale-110" : "animate-zoom-heart hover:scale-105"}`}
            onClick={handleCardClick}
          >
            <img
              src={heartCard}
              alt="Heart shaped card"
              className="w-56 h-56 mx-auto object-contain drop-shadow-lg pulse-gentle rounded-3xl"
            />
            {!cardOpened && (
              <p className="mt-4 font-body text-sm text-muted-foreground animate-pulse">
                tap the heart to open 💗
              </p>
            )}
          </div>
        )}

        {/* Message text - reveals after card opens */}
        <div className="space-y-5 min-h-[200px]">
          {showLine1 && (
            <p className="font-display text-2xl md:text-3xl text-foreground animate-text-reveal">
              "You matter more than you think."
            </p>
          )}
          
          {showLine2 && (
            <p className="font-display text-2xl md:text-3xl text-primary animate-text-reveal">
              "And I'm really glad you opened this."
            </p>
          )}

          {showDisclaimer && (
            <p className="font-body text-sm text-muted-foreground animate-text-reveal pt-4">
              (Even if I threatened you first.)
            </p>
          )}
        </div>

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
