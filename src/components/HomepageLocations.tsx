import { MapPin, Phone, Clock, Star } from "lucide-react";
import { OFFICE_IMAGES } from "@/lib/images";
import { Link } from "react-router-dom";
import { trackPhoneClick } from "@/lib/track-phone";

const locations = [
  {
    name: "Smile Avenue Cypress",
    address: "9212 Fry Rd #120, Cypress, TX 77433",
    phone: "(832) 648-1756",
    phoneRaw: "8326481756",
    hours: "Mon–Fri 8:30am–5pm",
    satHours: "Sat 8am–2pm",
    image: OFFICE_IMAGES.cypressHero,
    bookingUrl: "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress",
    hubUrl: "/cypress-tx",
    googleRating: "4.9",
    reviewCount: "3,500+",
  },
  {
    name: "Smile Avenue Katy",
    address: "23541 Westheimer Pkwy #170, Katy, TX 77494",
    phone: "(281) 800-5008",
    phoneRaw: "2818005008",
    hours: "Mon–Fri 8:30am–5pm",
    satHours: "Sat 8am–2pm",
    image: OFFICE_IMAGES.katyHero,
    bookingUrl: "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueKaty",
    hubUrl: "/katy-tx",
    googleRating: "4.9",
    reviewCount: "1,500+",
  },
];

function getOpenStatus(satHours?: string): { isOpen: boolean; label: string } {
  const now = new Date();
  const day = now.getDay();
  const time = now.getHours() * 60 + now.getMinutes();
  if (day === 0) return { isOpen: false, label: "Closed" };
  if (day === 6) {
    return satHours && time >= 480 && time < 840
      ? { isOpen: true, label: "Open Now" }
      : { isOpen: false, label: "Closed" };
  }
  return time >= 510 && time < 1020
    ? { isOpen: true, label: "Open Now" }
    : { isOpen: false, label: "Closed" };
}

const HomepageLocations = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto lg:max-w-5xl">
      <p className="kicker text-center">OUR STUDIOS</p>
      <h2 className="section-heading text-center">Two Locations, One Standard of Care</h2>
      <p className="section-body text-center max-w-xl mx-auto">
        Both offices feature the same modern amenities, experienced team, and hospitality-first approach.
      </p>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-10">
        {locations.map((loc) => {
          const status = getOpenStatus(loc.satHours);
          return (
            <div key={loc.name} className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img src={loc.image} alt={`${loc.name} office`} className="w-full h-full object-cover" loading="lazy" decoding="async" width={600} height={400} />
                <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-bold ${status.isOpen ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                  <span className={`w-2 h-2 rounded-full ${status.isOpen ? "bg-white animate-pulse" : "bg-white/60"}`} />
                  {status.label}
                </div>
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-lg font-bold text-foreground">{loc.name}</h3>
                  <div className="flex items-center gap-1 text-sm font-sans">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="font-semibold text-foreground">{loc.googleRating}</span>
                    <span className="text-muted-foreground text-xs">({loc.reviewCount})</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm font-sans text-muted-foreground mb-5">
                  <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />{loc.address}</div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${loc.phoneRaw}`} onClick={() => trackPhoneClick(loc.phoneRaw)} className="hover:text-primary">{loc.phone}</a></div>
                  <div className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" /><span>{loc.hours} · {loc.satHours}</span></div>
                </div>
                <div className="flex gap-3">
                  <a href={loc.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-cta flex-1 text-center text-sm">Book Now</a>
                  <Link to={loc.hubUrl} className="btn-secondary flex-1 text-center text-sm">Explore Office</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default HomepageLocations;
