import { MapPin, Phone, Clock, Star } from "lucide-react";

interface LocationCardProps {
  name: string;
  address: string;
  phone: string;
  phoneRaw: string;
  hours: string;
  satHours?: string;
  image: string;
  bookingUrl: string;
  googleRating?: string;
  reviewCount?: string;
}

function getOpenStatus(satHours?: string): { isOpen: boolean; label: string } {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 6=Sat
  const hour = now.getHours();
  const min = now.getMinutes();
  const time = hour * 60 + min;

  if (day === 0) return { isOpen: false, label: "Closed" };
  if (day === 6) {
    if (satHours) {
      // Sat 8am-2pm
      return time >= 480 && time < 840
        ? { isOpen: true, label: "Open Now" }
        : { isOpen: false, label: "Closed" };
    }
    return { isOpen: false, label: "Closed" };
  }
  // Mon-Fri 8:30am-5pm
  return time >= 510 && time < 1020
    ? { isOpen: true, label: "Open Now" }
    : { isOpen: false, label: "Closed" };
}

const LocationCard = ({ name, address, phone, phoneRaw, hours, satHours, image, bookingUrl, googleRating = "4.9", reviewCount = "5,000+" }: LocationCardProps) => {
  const status = getOpenStatus(satHours);

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img src={image} alt={`${name} office`} className="w-full h-full object-cover" loading="lazy" width={600} height={400} />
        <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-bold ${status.isOpen ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
          <span className={`w-2 h-2 rounded-full ${status.isOpen ? "bg-white animate-pulse" : "bg-white/60"}`} />
          {status.label}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-xl font-bold text-foreground">{name}</h3>
          <div className="flex items-center gap-1 text-sm font-sans">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="font-semibold text-foreground">{googleRating}</span>
            <span className="text-muted-foreground text-xs">({reviewCount})</span>
          </div>
        </div>
        <div className="space-y-2.5 text-sm font-sans text-muted-foreground mb-6">
          <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />{address}</div>
          <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${phoneRaw}`} className="hover:text-primary">{phone}</a></div>
          <div className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" /><span>{hours}{satHours ? ` · ${satHours}` : ""}</span></div>
        </div>
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-cta w-full text-center block">
          Book Now
        </a>
      </div>
    </div>
  );
};

export default LocationCard;
