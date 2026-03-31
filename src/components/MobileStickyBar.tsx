import { Phone, Calendar, Navigation } from "lucide-react";

interface MobileStickyBarProps {
  phone: string;
  phoneFormatted: string;
  bookingUrl: string;
  directionsUrl?: string;
}

const CYPRESS_DIRECTIONS = "https://maps.app.goo.gl/DgZBrfjyNed7qKxs8";
const KATY_DIRECTIONS = "https://maps.app.goo.gl/katy-smile-avenue";

const MobileStickyBar = ({ phone, phoneFormatted, bookingUrl, directionsUrl }: MobileStickyBarProps) => {
  const mapsLink = directionsUrl || (phone === "2818005008" ? KATY_DIRECTIONS : CYPRESS_DIRECTIONS);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background border-t border-border shadow-[0_-2px_10px_hsl(var(--foreground)/0.08)]">
      <div className="grid grid-cols-3 h-14">
        <a
          href={`tel:${phone}`}
          className="flex flex-col items-center justify-center gap-0.5 text-xs font-sans font-bold text-foreground min-h-[48px]"
        >
          <Phone className="w-5 h-5 text-primary" />
          Call Now
        </a>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 text-xs font-sans font-bold min-h-[48px] bg-primary text-primary-foreground"
        >
          <Calendar className="w-5 h-5" />
          Book Now
        </a>
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 text-xs font-sans font-bold text-foreground min-h-[48px]"
        >
          <Navigation className="w-5 h-5 text-primary" />
          Directions
        </a>
      </div>
    </div>
  );
};

export default MobileStickyBar;
