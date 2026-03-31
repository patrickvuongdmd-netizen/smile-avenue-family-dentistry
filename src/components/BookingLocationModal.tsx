import { MapPin, Clock, Phone, X, Star, Shield, CreditCard } from "lucide-react";
import { useEffect, useRef } from "react";

const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";
const KATY_BOOKING = "https://book.modento.io/c/8f2db4d7f5d14a26a0758de49dcf8cbc/smileavenue";

const locations = [
  {
    name: "Cypress",
    address: "9212 Fry Rd, Ste 120, Cypress, TX 77433",
    phone: "(832) 648-1756",
    phoneTel: "8326481756",
    hours: "Mon–Fri 9am–6pm · Sat 9am–3pm",
    booking: CYPRESS_BOOKING,
  },
  {
    name: "Katy",
    address: "23541 Westheimer Pkwy, Ste 170, Katy, TX 77494",
    phone: "(281) 800-5008",
    phoneTel: "2818005008",
    hours: "Mon–Fri 9am–6pm · Sat 9am–3pm",
    booking: KATY_BOOKING,
  },
];

interface BookingLocationModalProps {
  open: boolean;
  onClose: () => void;
}

const BookingLocationModal = ({ open, onClose }: BookingLocationModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/50 backdrop-blur-sm px-4"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className="bg-background rounded-2xl shadow-2xl w-full max-w-md animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-2">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Choose Your Location</h2>
            <p className="text-sm font-body text-muted-foreground mt-0.5">Select the office nearest you to book online.</p>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs font-sans text-muted-foreground">
              <span className="flex items-center gap-1"><Star className="w-3 h-3 fill-primary text-primary" />4.9★ from 5,000+ reviews</span>
              <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-primary" />Insurance accepted</span>
              <span className="flex items-center gap-1"><CreditCard className="w-3 h-3 text-primary" />0% financing</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Location cards */}
        <div className="px-6 pb-4 pt-3 space-y-3">
          {locations.map((loc) => (
            <a
              key={loc.name}
              href={loc.booking}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="block rounded-xl border border-border p-4 hover:border-primary/40 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Smile Avenue {loc.name}
                </h3>
                <span className="btn-primary !px-4 !py-2 text-xs shrink-0">
                  Book Now
                </span>
              </div>
              <div className="space-y-1.5 text-sm font-sans text-muted-foreground">
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  {loc.address}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                  {loc.hours}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                  {loc.phone}
                </p>
              </div>
            </a>
          ))}
        </div>
        {/* Reassurance footer */}
        <div className="px-6 pb-6 text-center">
          <p className="text-xs font-sans text-muted-foreground">
            ✓ Booking takes 60 seconds · ✓ We confirm within 1 hour · ✓ Same-day appointments available
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingLocationModal;
