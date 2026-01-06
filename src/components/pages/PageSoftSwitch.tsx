import { useState, useEffect } from "react";
import softCharacter from "@/assets/soft-character.png";

interface Props {
  onContinue: () => void;
}

const PageSoftSwitch = ({ onContinue }: Props) => {
  const [showGood, setShowGood] = useState(false);
  const [showNervous, setShowNervous] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowGood(true), 400),
      setTimeout(() => setShowNervous(true), 1500),
      setTimeout(() => setShowHearts(true), 800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div 
      className="min-h-screen bg-blush-gradient flex items-center justify-center p-4 relative overflow-hidden cursor-pointer animate-hard-cut"
      onClick={onContinue}
    >
      <div className="text-center max-w-md mx-auto relative z-10">
        {/* Soft character - instant transform */}
        <div className="mb-8 floating">
          <img
            src={softCharacter}
            alt="Soft blushing character"
            className="w-48 h-48 mx-auto object-contain drop-shadow-lg rounded-3xl"
          />
        </div>

        {/* Speech bubbles */}
        <div className="space-y-4 min-h-[120px]">
          {showGood && (
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border-2 border-primary/20 animate-pop-in inline-block">
              <p className="font-display text-3xl md:text-4xl text-foreground">
                "Good."
              </p>
            </div>
          )}
          
          {showNervous && (
            <p className="font-body text-lg text-muted-foreground animate-text-reveal">
              "...I was getting nervous."
            </p>
          )}
        </div>

        {/* Floating hearts */}
        {showHearts && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <span
                key={i}
                className="absolute text-2xl animate-float-up"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  bottom: "20%",
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                {["💗", "💕", "🩷", "💞"][i % 4]}
              </span>
            ))}
          </div>
        )}

        {/* Click prompt */}
        <p className="mt-12 font-body text-sm text-muted-foreground/70 animate-pulse">
          tap anywhere to continue
        </p>
      </div>
    </div>
  );
};

export default PageSoftSwitch;
