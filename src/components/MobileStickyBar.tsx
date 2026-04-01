import { Phone, Calendar, MapPin } from "lucide-react";
import { useState } from "react";
import BookingLocationModal from "@/components/BookingLocationModal";

interface MobileStickyBarProps {
  phone: string;
  phoneFormatted: string;
  bookingUrl: string;
  directionsUrl?: string;
}

const CYPRESS_DIRECTIONS = "https://maps.app.goo.gl/DgZBrfjyNed7qKxs8";
const KATY_DIRECTIONS = "https://www.google.com/maps/dir//Smile+Avenue+Family+Dentistry+-+Katy,+23541+Westheimer+Pkwy+Ste+170,+Katy,+TX+77494/@29.732508,-95.775455,17z";

const MobileStickyBar = ({ phone, phoneFormatted, bookingUrl, directionsUrl }: MobileStickyBarProps) => {
  const mapsLink = directionsUrl || (phone === "2818005008" ? KATY_DIRECTIONS : CYPRESS_DIRECTIONS);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="mx-3 mb-3 flex items-center gap-1 rounded-full bg-foreground/90 backdrop-blur-md px-1.5 py-1.5 shadow-lg">
          <a
            href={`tel:${phone}`}
            className="flex items-center justify-center w-10 h-10 rounded-full text-background/70 hover:text-background transition-colors"
            aria-label="Call now"
          >
            <Phone className="w-[18px] h-[18px]" />
          </a>
          <button
            onClick={() => setBookingModalOpen(true)}
            className="flex-1 flex items-center justify-center gap-1.5 h-10 rounded-full bg-primary text-primary-foreground text-sm font-sans font-semibold tracking-wide"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </button>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full text-background/70 hover:text-background transition-colors"
            aria-label="Get directions"
          >
            <MapPin className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>
      <BookingLocationModal open={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </>
  );
};

export default MobileStickyBar;
