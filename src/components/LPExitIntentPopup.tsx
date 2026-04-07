import { useState, useEffect, useCallback } from "react";
import { X, Phone } from "lucide-react";

const SESSION_KEY = "sa-lp-exit-shown";

interface LPExitIntentPopupProps {
  bookingUrl: string;
  phone: string;
  phoneFormatted: string;
  locationName: string;
  onBook?: () => void;
  onCall?: () => void;
}

const LPExitIntentPopup = ({ bookingUrl, phone, phoneFormatted, locationName, onBook, onCall }: LPExitIntentPopupProps) => {
  const [visible, setVisible] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY > 10) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(true);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 8000);

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

        <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-5">
          <span className="text-2xl">⏰</span>
        </div>

        <h2 className="font-display text-2xl font-bold text-foreground mb-2">
          Wait — Same-Day Slots<br />Are Filling Up
        </h2>
        <p className="font-body text-sm text-muted-foreground mb-6 max-w-xs mx-auto">
          Our {locationName} office has limited openings today. Book now to lock in your preferred time — confirmed in under 1 hour.
        </p>

        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => { onBook?.(); setVisible(false); }}
          className="inline-flex items-center justify-center w-full px-8 py-3.5 rounded-lg bg-[hsl(var(--gold))] text-white font-sans font-bold text-sm hover:brightness-110 transition-all shadow-md"
        >
          Book My Appointment Now
        </a>

        <a
          href={`tel:${phone}`}
          onClick={() => { onCall?.(); setVisible(false); }}
          className="flex items-center justify-center gap-2 w-full mt-3 px-8 py-3 rounded-lg border border-border text-sm font-sans font-semibold text-foreground hover:bg-muted/50 transition-colors"
        >
          <Phone className="w-4 h-4 text-primary" />
          Call {phoneFormatted}
        </a>

        <button
          onClick={() => setVisible(false)}
          className="block mx-auto mt-4 text-xs font-sans text-muted-foreground hover:text-foreground transition-colors"
        >
          No thanks, I'll come back later
        </button>
      </div>
    </div>
  );
};

export default LPExitIntentPopup;
