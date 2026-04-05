import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const SESSION_KEY = "sa-exit-intent-shown";

const ExitIntentPopup = () => {
  const [visible, setVisible] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY > 10) return; // only trigger when mouse exits top of viewport
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(true);
  }, []);

  useEffect(() => {
    // Desktop only — skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    // Delay adding listener so it doesn't fire immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={() => setVisible(false)}
    >
      <div
        className="relative bg-card rounded-2xl shadow-2xl max-w-md w-[90vw] p-8 md:p-10 text-center animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close popup"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
          <span className="text-2xl">😊</span>
        </div>

        <h2 className="font-display text-2xl font-bold text-foreground mb-3">
          Wait — don't leave<br />without booking!
        </h2>
        <p className="font-body text-sm text-muted-foreground mb-6 max-w-xs mx-auto">
          Schedule a free consultation today and take the first step toward the smile you deserve.
        </p>

        <Link
          to="/free-consultation"
          onClick={() => setVisible(false)}
          className="inline-block w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[hsl(var(--gold))] text-white font-sans font-bold text-sm hover:brightness-110 transition-all shadow-md"
        >
          Book Your Free Consultation
        </Link>

        <button
          onClick={() => setVisible(false)}
          className="block mx-auto mt-4 text-xs font-sans text-muted-foreground hover:text-foreground transition-colors"
        >
          No thanks, I'm just browsing
        </button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
