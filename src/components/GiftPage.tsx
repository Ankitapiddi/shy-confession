import { useState, useCallback } from "react";
import PageAngryWarning from "@/components/pages/PageAngryWarning";
import PageSoftSwitch from "@/components/pages/PageSoftSwitch";
import PageWhyThisGift from "@/components/pages/PageWhyThisGift";
import PageTheMessage from "@/components/pages/PageTheMessage";
import PageThankYou from "@/components/pages/PageThankYou";

type PageState = "angry-warning" | "soft-switch" | "why-this-gift" | "the-message" | "thank-you";

const GiftPage = () => {
  const [currentPage, setCurrentPage] = useState<PageState>("angry-warning");

  const goToSoftSwitch = useCallback(() => {
    setCurrentPage("soft-switch");
  }, []);

  const goToWhyThisGift = useCallback(() => {
    setCurrentPage("why-this-gift");
  }, []);

  const goToTheMessage = useCallback(() => {
    setCurrentPage("the-message");
  }, []);

  const goToThankYou = useCallback(() => {
    setCurrentPage("thank-you");
  }, []);

  // Render pages based on state
  if (currentPage === "angry-warning") {
    return <PageAngryWarning onContinue={goToSoftSwitch} />;
  }

  if (currentPage === "soft-switch") {
    return <PageSoftSwitch onContinue={goToWhyThisGift} />;
  }

  if (currentPage === "why-this-gift") {
    return <PageWhyThisGift onContinue={goToTheMessage} />;
  }

  if (currentPage === "the-message") {
    return <PageTheMessage onContinue={goToThankYou} />;
  }

  return <PageThankYou />;
};

export default GiftPage;
