import wavingCharacter from "@/assets/waving-character.png";

const PageThankYou = () => {
  return (
    <div className="min-h-screen romantic-gradient flex items-center justify-center p-4 animate-page-enter relative overflow-hidden">
      <div className="text-center max-w-md mx-auto">
        {/* Waving character */}
        <div className="mb-8 floating">
          <img
            src={wavingCharacter}
            alt="Cute character waving"
            className="w-44 h-44 mx-auto object-contain drop-shadow-lg rounded-3xl"
          />
        </div>

        {/* Thank you text */}
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4 animate-text-reveal">
          Thank you for opening it.
        </h2>

        <p className="font-display text-2xl text-primary animate-text-reveal" style={{ animationDelay: "0.3s" }}>
          💗
        </p>

        {/* Decorative hearts */}
        <div className="mt-12 flex justify-center gap-6 text-2xl">
          {["💗", "💕", "💖", "💞", "🥺"].map((emoji, i) => (
            <span
              key={i}
              className="animate-heart-beat"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>

        {/* Subtle message */}
        <p className="mt-10 font-body text-muted-foreground text-sm animate-text-reveal" style={{ animationDelay: "0.6s" }}>
          I made this for you 💞
        </p>

        {/* Background sparkles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <span
              key={i}
              className="absolute text-xl opacity-20 animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            >
              {["💗", "✨", "💕"][i % 3]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageThankYou;
