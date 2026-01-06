import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { FloatingHearts, Sparkles } from "@/components/FloatingHearts";
import doodleCharacter from "@/assets/doodle-character.png";
import PageGiftOpens from "@/components/pages/PageGiftOpens";
import PageWhyThisGift from "@/components/pages/PageWhyThisGift";
import PageTheMessage from "@/components/pages/PageTheMessage";
import PageThankYou from "@/components/pages/PageThankYou";

type PageState = "initial" | "gift-opens" | "why-this-gift" | "the-message" | "thank-you";

const GiftPage = () => {
  const [currentPage, setCurrentPage] = useState<PageState>("initial");
  const [showSparkles, setShowSparkles] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleYes = () => {
    setShowSparkles(true);
    setTimeout(() => {
      setCurrentPage("gift-opens");
    }, 500);
  };

  const handleNoHover = () => {
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 100;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const goToWhyThisGift = useCallback(() => {
    setCurrentPage("why-this-gift");
  }, []);

  const goToTheMessage = useCallback(() => {
    setCurrentPage("the-message");
  }, []);

  const goToThankYou = useCallback(() => {
    setCurrentPage("thank-you");
  }, []);

  // Render different pages based on state
  if (currentPage === "gift-opens") {
    return <PageGiftOpens onContinue={goToWhyThisGift} />;
  }

  if (currentPage === "why-this-gift") {
    return <PageWhyThisGift onContinue={goToTheMessage} />;
  }

  if (currentPage === "the-message") {
    return <PageTheMessage onContinue={goToThankYou} />;
  }

  if (currentPage === "thank-you") {
    return <PageThankYou />;
  }

  // Initial page with YES/NO buttons
  return (
    <main className="min-h-screen romantic-gradient flex items-center justify-center p-4 overflow-hidden relative">
      <FloatingHearts />
      <Sparkles show={showSparkles} />
      
      <div className="text-center max-w-md mx-auto">
        <div className="animate-fade-up">
          {/* Character */}
          <div className="mb-8 floating">
            <img
              src={doodleCharacter}
              alt="Cute character holding a heart"
              className="w-48 h-48 mx-auto object-contain drop-shadow-lg rounded-3xl"
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
      </div>
    </main>
  );
};

export default GiftPage;
