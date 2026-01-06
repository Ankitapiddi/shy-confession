import { useEffect, useState } from "react";
import giftBoxImage from "@/assets/gift-box.png";

interface Props {
  onContinue: () => void;
}

const PageGiftOpens = ({ onContinue }: Props) => {
  const [boxOpened, setBoxOpened] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowText(true), 500);
    const timer2 = setTimeout(() => setShowSecondText(true), 2000);
    const timer3 = setTimeout(() => setBoxOpened(true), 3500);
    const timer4 = setTimeout(() => onContinue(), 5500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onContinue]);

  return (
    <div className="min-h-screen bg-blush-gradient flex items-center justify-center p-4 animate-page-enter">
      <div className="text-center max-w-md mx-auto">
        {/* Floating sparkles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="absolute text-xl animate-sparkle"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              ✨
            </span>
          ))}
        </div>

        {/* Gift box */}
        <div className={`mb-8 transition-all duration-1000 ${boxOpened ? "scale-110" : "animate-wiggle-shy"}`}>
          <img
            src={giftBoxImage}
            alt="A cute gift box"
            className="w-52 h-52 mx-auto object-contain drop-shadow-lg rounded-3xl"
          />
        </div>

        {/* Text reveals */}
        <div className="space-y-4">
          {showText && (
            <h2 className="font-display text-4xl md:text-5xl text-foreground animate-text-reveal">
              You said YES...
            </h2>
          )}
          
          {showSecondText && (
            <p className="font-display text-2xl md:text-3xl text-primary animate-text-reveal" style={{ animationDelay: "0.2s" }}>
              ...so I can finally show you this 🥺
            </p>
          )}
        </div>

        {/* Floating hearts when box opens */}
        {boxOpened && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <span
                key={i}
                className="absolute text-2xl animate-float-up"
                style={{
                  left: `${30 + Math.random() * 40}%`,
                  top: `${50 + Math.random() * 20}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {["💗", "✨", "🌸", "💕", "⭐"][i % 5]}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageGiftOpens;
