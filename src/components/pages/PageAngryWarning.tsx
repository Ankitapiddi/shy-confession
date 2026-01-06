import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import angryCharacter from "@/assets/angry-character.png";

interface Props {
  onContinue: () => void;
}

const PageAngryWarning = ({ onContinue }: Props) => {
  const [showBubble1, setShowBubble1] = useState(false);
  const [showBubble2, setShowBubble2] = useState(false);
  const [showBubble3, setShowBubble3] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowBubble1(true), 300),
      setTimeout(() => setShowBubble2(true), 1100),
      setTimeout(() => setShowBubble3(true), 1900),
      setTimeout(() => setShowDisclaimer(true), 2500),
      setTimeout(() => setShowButton(true), 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen bg-angry-gradient flex items-center justify-center p-4 relative overflow-hidden animate-page-enter">
      {/* Subtle screen shake effect */}
      <div className="absolute inset-0 animate-screen-shake pointer-events-none" />
      
      <div className="text-center max-w-md mx-auto relative z-10">
        {/* Angry character with bounce animation */}
        <div className="mb-6 animate-angry-bounce relative">
          <img
            src={angryCharacter}
            alt="Angry cartoon character"
            className="w-52 h-52 mx-auto object-contain drop-shadow-lg rounded-3xl"
          />
          {/* Stress lines */}
          <div className="absolute top-2 left-1/4 text-2xl animate-twitch">💢</div>
          <div className="absolute top-4 right-1/4 text-xl animate-twitch" style={{ animationDelay: "0.3s" }}>💢</div>
        </div>

        {/* Speech bubbles */}
        <div className="space-y-3 min-h-[180px]">
          {showBubble1 && (
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border-2 border-primary/30 animate-pop-in inline-block">
              <p className="font-display text-3xl md:text-4xl text-foreground font-bold">
                "OPEN IT."
              </p>
            </div>
          )}
          
          {showBubble2 && (
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl px-5 py-2 shadow-lg border-2 border-primary/30 animate-pop-in inline-block">
              <p className="font-display text-xl md:text-2xl text-foreground">
                "If you don't..."
              </p>
            </div>
          )}
          
          {showBubble3 && (
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl px-5 py-2 shadow-lg border-2 border-primary/30 animate-pop-in inline-block">
              <p className="font-display text-xl md:text-2xl text-foreground">
                "...I'll shoot you."
              </p>
            </div>
          )}

          {showDisclaimer && (
            <p className="font-body text-sm text-muted-foreground animate-fade-up mt-2">
              (emotionally) <span className="text-primary">with love.</span>
            </p>
          )}
        </div>

        {/* Button */}
        {showButton && (
          <div className="mt-8 animate-pop-in">
            <Button
              variant="yes"
              size="xl"
              onClick={onContinue}
              className="text-lg"
            >
              Okay okay 😭 I'll open it
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageAngryWarning;
