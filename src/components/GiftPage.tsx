import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FloatingHearts, Sparkles } from "@/components/FloatingHearts";
import doodleCharacter from "@/assets/doodle-character.png";

const GiftPage = () => {
  const [accepted, setAccepted] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleYes = () => {
    setShowSparkles(true);
    setTimeout(() => {
      setAccepted(true);
    }, 300);
  };

  const handleNoHover = () => {
    // Make the NO button run away playfully
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 100;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  return (
    <main className="min-h-screen romantic-gradient flex items-center justify-center p-4 overflow-hidden relative">
      <FloatingHearts />
      <Sparkles show={showSparkles} />
      
      <div className="text-center max-w-md mx-auto">
        {!accepted ? (
          <div className="animate-fade-up">
            {/* Character */}
            <div className="mb-8 floating">
              <img
                src={doodleCharacter}
                alt="Cute character holding a heart"
                className="w-48 h-48 mx-auto object-contain drop-shadow-lg"
              />
            </div>

            {/* Main Text */}
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-8 leading-tight">
              PLS ACCEPT THE GIFT
            </h1>

            {/* Subtitle */}
            <p className="text-muted-foreground text-lg mb-10 font-body">
              🥺💗
            </p>

            {/* Buttons */}
            <div className="flex gap-6 justify-center items-center">
              <Button
                variant="yes"
                size="xl"
                onClick={handleYes}
                className="min-w-[120px]"
              >
                YES
              </Button>
              
              <Button
                ref={noButtonRef}
                variant="no"
                size="xl"
                onMouseEnter={handleNoHover}
                style={{
                  transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                  transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                className="min-w-[120px]"
              >
                NO
              </Button>
            </div>
          </div>
        ) : (
          <div className="animate-fade-up">
            {/* Heart animation */}
            <div className="text-8xl mb-8 animate-heart-beat">
              💖
            </div>

            {/* Success message */}
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              thank you 🥺
            </h2>

            <p className="text-2xl md:text-3xl font-display text-primary mb-8">
              I made this for you 💞
            </p>

            <p className="text-muted-foreground text-lg font-body">
              you mean the world to me
            </p>

            {/* Decorative hearts */}
            <div className="mt-10 flex justify-center gap-4 text-3xl">
              <span className="animate-heart-beat" style={{ animationDelay: "0s" }}>💗</span>
              <span className="animate-heart-beat" style={{ animationDelay: "0.2s" }}>💕</span>
              <span className="animate-heart-beat" style={{ animationDelay: "0.4s" }}>💖</span>
              <span className="animate-heart-beat" style={{ animationDelay: "0.6s" }}>💞</span>
              <span className="animate-heart-beat" style={{ animationDelay: "0.8s" }}>🥺</span>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default GiftPage;
