import { Phone, Calendar, MapPin } from "lucide-react";

interface MobileStickyBarProps {
  phone: string;
  phoneFormatted: string;
  bookingUrl: string;
}

const MobileStickyBar = ({ phone, phoneFormatted, bookingUrl }: MobileStickyBarProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background border-t border-border shadow-[0_-2px_10px_hsl(var(--foreground)/0.08)]">
      <div className="grid grid-cols-3 h-14">
        <a
          href={`tel:${phone}`}
          className="flex flex-col items-center justify-center gap-0.5 text-xs font-sans font-medium text-foreground"
        >
          <Phone className="w-4 h-4 text-primary" />
          Call
        </a>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 text-xs font-sans font-semibold bg-primary text-primary-foreground"
        >
          <Calendar className="w-4 h-4" />
          Book
        </a>
        <a
          href="/locations"
          className="flex flex-col items-center justify-center gap-0.5 text-xs font-sans font-medium text-foreground"
        >
          <MapPin className="w-4 h-4 text-primary" />
          Locations
        </a>
      </div>
    </div>
  );
};

export default MobileStickyBar;
