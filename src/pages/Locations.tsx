import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { MapPin, Phone, Clock, Check, Star, ChevronRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import TrustTicker from "@/components/TrustTicker";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import SkipToContent from "@/components/SkipToContent";
import HeroPhotoCarousel from "@/components/HeroPhotoCarousel";
import { CYPRESS_HERO_PHOTOS, KATY_HERO_PHOTOS } from "@/lib/images";
import { useEffect, useState } from "react";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const KATY_PHONE = "2818005008";
const KATY_PHONE_FORMATTED = "(281) 800-5008";
const KATY_BOOKING = "https://book.modento.io/c/7e879f019b1846dda0dde08e10b56c25/SmileAvenueKaty";

const amenities = [
  "Netflix in Every Room",
  "Warm Blankets & Pillows",
  "Noise-Canceling Headphones",
  "Same-Day Emergency Visits",
  "In-House Dental Lab",
  "Bilingual Team (EN/ES)",
  "Most PPO Insurance Accepted",
  "0% Financing Available",
];

type HourSpec = { days: string; time: string; dayNumbers: number[] };

const locations = [
  {
    name: "Cypress",
    tagline: "Fry Road · Near HEB",
    address: "9212 Fry Rd #120",
    city: "Cypress, TX 77433",
    phone: CYPRESS_PHONE,
    phoneFormatted: CYPRESS_PHONE_FORMATTED,
    hours: [
      { days: "Mon–Fri", time: "8:30 AM – 5:00 PM", dayNumbers: [1, 2, 3, 4, 5] },
    ] as HourSpec[],
    openHour: 8.5,
    closeHour: 17,
    openDays: [1, 2, 3, 4, 5],
    bookingUrl: CYPRESS_BOOKING,
    pageUrl: "/cypress-tx/",
    communities: ["Bridgeland", "Towne Lake", "Fairfield", "Cy-Fair"],
    rating: "4.9",
    reviewCount: "3,000+",
    photos: CYPRESS_HERO_PHOTOS,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.1743654401334!2d-95.7273261!3d29.916881999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d626dcbf8be7%3A0xc78b697f2e5a6c9c!2sSmile%20Avenue%20Family%20Dentistry%20-%20Cypress!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus",
    directionsUrl: "https://maps.app.goo.gl/DgZBrfjyNed7qKxs8",
    directions: "From US-290, exit Fry Road and head south — we're about 1 mile down, directly across from HEB.",
  },
  {
    name: "Katy",
    tagline: "Westheimer Parkway · Near LaCenterra",
    address: "23541 Westheimer Pkwy Ste #170",
    city: "Katy, TX 77494",
    phone: KATY_PHONE,
    phoneFormatted: KATY_PHONE_FORMATTED,
    hours: [
      { days: "Mon–Fri", time: "8:30 AM – 5:00 PM", dayNumbers: [1, 2, 3, 4, 5] },
      { days: "Saturday", time: "8:00 AM – 2:00 PM", dayNumbers: [6] },
    ] as HourSpec[],
    openHour: 8.5,
    closeHour: 17,
    openDays: [1, 2, 3, 4, 5, 6],
    satOpenHour: 8,
    satCloseHour: 14,
    bookingUrl: KATY_BOOKING,
    pageUrl: "/katy-tx/",
    communities: ["Cinco Ranch", "Cross Creek Ranch", "Firethorne", "Fulshear"],
    rating: "4.9",
    reviewCount: "2,000+",
    photos: KATY_HERO_PHOTOS,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.5597906542334!2d-95.7754549!3d29.732508199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864121d672dd8005%3A0xc421718f6ea402f7!2sSmile%20Avenue%20Family%20Dentistry%20-%20Katy!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus",
    directionsUrl: "https://www.google.com/maps/place/Smile+Avenue+Family+Dentistry+-+Katy/@29.732508,-95.775455,17z",
    directions: "From I-10, exit Grand Parkway (99) south, then take Westheimer Parkway west — 2 minutes ahead on the right.",
  },
];

function getOpenStatus(loc: typeof locations[0]): { isOpen: boolean; label: string } {
  const now = new Date();
  // Convert to CST
  const cst = new Date(now.toLocaleString("en-US", { timeZone: "America/Chicago" }));
  const day = cst.getDay();
  const hour = cst.getHours() + cst.getMinutes() / 60;

  if (day === 6 && loc.satOpenHour !== undefined) {
    const open = hour >= loc.satOpenHour && hour < loc.satCloseHour!;
    return { isOpen: open, label: open ? "Open Now" : "Closed" };
  }
  if (loc.openDays.includes(day)) {
    const open = hour >= loc.openHour && hour < loc.closeHour;
    return { isOpen: open, label: open ? "Open Now" : "Closed" };
  }
  return { isOpen: false, label: "Closed" };
}

const LocationCard = ({ loc, active, onSelect }: { loc: typeof locations[0]; active: boolean; onSelect: () => void }) => {
  const status = getOpenStatus(loc);

  return (
    <article
      onClick={onSelect}
      className={`bg-card rounded-2xl border-2 overflow-hidden shadow-sm cursor-pointer transition-all duration-300 ${
        active ? "border-primary shadow-lg" : "border-border hover:border-primary/30"
      }`}
    >
      {/* Photo Carousel */}
      <div className="p-3 pb-0">
        <HeroPhotoCarousel photos={loc.photos} />
      </div>

      <div className="p-5 md:p-6">
        {/* Status + Rating row */}
        <div className="flex items-center justify-between mb-3">
          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-sans font-semibold ${
            status.isOpen
              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
              : "bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400"
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${status.isOpen ? "bg-emerald-500" : "bg-red-500"}`} />
            {status.label}
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm font-sans font-bold text-foreground">{loc.rating}</span>
            <span className="text-xs font-sans text-muted-foreground">({loc.reviewCount})</span>
          </div>
        </div>

        {/* Name + tagline */}
        <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-0.5">
          {loc.name}
        </h2>
        <p className="text-xs font-sans text-muted-foreground mb-4">{loc.tagline}</p>

        {/* Info */}
        <div className="space-y-2.5 mb-5">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span className="text-sm font-sans text-foreground">{loc.address}, {loc.city}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <a href={`tel:${loc.phone}`} className="text-sm font-sans font-medium text-foreground hover:text-primary transition-colors">
              {loc.phoneFormatted}
            </a>
          </div>
          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div className="text-sm font-sans text-foreground">
              {loc.hours.map((h) => (
                <span key={h.days} className="block">
                  <span className="font-medium">{h.days}</span> {h.time}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Communities */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {loc.communities.map((c) => (
            <span key={c} className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/5 text-[11px] font-sans font-medium text-primary border border-primary/10">
              {c}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-2.5">
          <a
            href={loc.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta text-center text-sm"
          >
            Book at {loc.name}
          </a>
          <div className="flex gap-2.5">
            <Link to={loc.pageUrl} className="btn-secondary text-center text-xs flex-1 flex items-center justify-center gap-1">
              Explore Office <ChevronRight className="w-3 h-3" />
            </Link>
            <a
              href={loc.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center text-xs flex-1 flex items-center justify-center gap-1"
            >
              Directions <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

const Locations = () => {
  useDocTitle("Dental Office Locations in Cypress & Katy, TX | Smile Avenue");
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>Dental Office Locations in Cypress & Katy, TX | Smile Avenue</title>
        <meta
          name="description"
          content="Two convenient Smile Avenue Family Dentistry locations in Cypress (Fry Rd) and Katy (Westheimer Pkwy), TX. 4.9★ rated. Same-day appointments, in-house lab, most insurance accepted. Book today."
        />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/convenient-locations/" />
        <meta property="og:title" content="Dental Office Locations in Cypress & Katy, TX | Smile Avenue" />
        <meta property="og:description" content="Two convenient Houston-area dental offices — Cypress on Fry Rd and Katy on Westheimer Pkwy. 4.9★ rated, same-day appointments, in-house lab." />
        <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/convenient-locations/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta property="og:image" content="https://www.smileavenuefamilydentistry.com/logo-full.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Smile Avenue Family Dentistry",
            url: "https://www.smileavenuefamilydentistry.com/",
            logo: "https://www.smileavenuefamilydentistry.com/logo-full.webp",
            location: [
              {
                "@type": "Dentist",
                name: "Smile Avenue Family Dentistry - Cypress",
                telephone: "(832) 648-1756",
                url: "https://www.smileavenuefamilydentistry.com/cypress-tx/",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "9212 Fry Rd #120",
                  addressLocality: "Cypress",
                  addressRegion: "TX",
                  postalCode: "77433",
                  addressCountry: "US",
                },
                geo: { "@type": "GeoCoordinates", latitude: "29.9691", longitude: "-95.6972" },
                aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "3000", bestRating: "5" },
                openingHoursSpecification: [
                  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "17:00" },
                ],
              },
              {
                "@type": "Dentist",
                name: "Smile Avenue Family Dentistry - Katy",
                telephone: "(281) 800-5008",
                url: "https://www.smileavenuefamilydentistry.com/katy-tx/",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "23541 Westheimer Pkwy Ste #170",
                  addressLocality: "Katy",
                  addressRegion: "TX",
                  postalCode: "77494",
                  addressCountry: "US",
                },
                geo: { "@type": "GeoCoordinates", latitude: "29.7357", longitude: "-95.7575" },
                aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2000", bestRating: "5" },
                openingHoursSpecification: [
                  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "17:00" },
                  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "14:00" },
                ],
              },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.smileavenuefamilydentistry.com/" },
              { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.smileavenuefamilydentistry.com/convenient-locations/" },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Dental Office Locations | Smile Avenue Family Dentistry",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".kicker", ".section-body"] },
            url: "https://www.smileavenuefamilydentistry.com/convenient-locations/",
          })}
        </script>
      </Helmet>
      <TrustTicker />
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0">
        {/* HERO */}
        <section className="pt-8 pb-4 md:pt-12 md:pb-6 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="mb-6 text-xs font-sans text-muted-foreground" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">Locations</span>
            </nav>
            <div className="text-center max-w-3xl mx-auto">
              <p className="kicker">TWO HOUSTON-AREA OFFICES</p>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-3">
                Find Your Smile Avenue
              </h1>
              <p className="section-body">
                Choose your nearest office. Both locations offer the same hospitality-driven experience, in-house dental lab, and 4.9-star care.
              </p>
            </div>
          </div>
        </section>

        {/* LOCATION FINDER — Tend-inspired layout */}
        <section className="section-padding section-alt">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-8 items-start">
              {/* Left: Location Cards */}
              <div className="space-y-6 order-2 lg:order-1">
                {locations.map((loc, idx) => (
                  <LocationCard
                    key={loc.name}
                    loc={loc}
                    active={activeIdx === idx}
                    onSelect={() => setActiveIdx(idx)}
                  />
                ))}
              </div>

              {/* Right: Sticky Map */}
              <div className="order-1 lg:order-2 lg:sticky lg:top-28">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border bg-card">
                  <iframe
                    src={locations[activeIdx].mapEmbed}
                    className="w-full aspect-[4/3] lg:aspect-[3/4] border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Google Map — Smile Avenue ${locations[activeIdx].name}`}
                  />
                  <div className="p-4 border-t border-border">
                    <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                      {locations[activeIdx].directions}
                    </p>
                    <a
                      href={locations[activeIdx].directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-sans text-primary font-semibold hover:underline mt-2 inline-flex items-center gap-1"
                    >
                      Open in Google Maps <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AMENITIES */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
            <p className="kicker">WHAT TO EXPECT</p>
            <h2 className="section-heading">The Same 5-Star Experience at Both Offices</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto">
              {amenities.map((item) => (
                <div key={item} className="flex items-center gap-2 text-left">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-sans text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Book Your Visit?
            </h2>
            <p className="text-primary-foreground/80 font-sans max-w-xl mx-auto mb-8">
              New patients welcome at both locations. Online booking takes 60 seconds — we'll confirm within 1 hour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CYPRESS_BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-background text-foreground font-sans font-semibold text-sm hover:bg-background/90 transition-colors shadow-md"
              >
                Book at Cypress
              </a>
              <a
                href={KATY_BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-background text-foreground font-sans font-semibold text-sm hover:bg-background/90 transition-colors shadow-md"
              >
                Book at Katy
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
    </>
  );
};

export default Locations;
