import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "sa_scroll_prompt_dismissed";

const ScrollBookingPrompt = ({ bookingUrl }: { bookingUrl: string }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const onScroll = () => {
      const scrollPct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPct >= 0.6) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => dismiss(), 5000);
    return () => clearTimeout(timer);
  }, [visible]);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-[72px] left-0 right-0 z-40 sm:hidden animate-slide-up px-3 pb-2">
      <div className="flex items-center justify-between gap-3 bg-card border border-border rounded-2xl shadow-lg px-4 py-3">
        <span className="text-sm font-sans font-semibold text-foreground">Ready to book your visit?</span>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 px-5 rounded-lg bg-primary text-primary-foreground text-sm font-sans font-bold shadow-sm"
          >
            Book Now
          </a>
          <button onClick={dismiss} className="p-1.5 rounded-full hover:bg-muted transition-colors" aria-label="Dismiss">
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollBookingPrompt;
