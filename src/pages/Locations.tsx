import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { MapPin, Phone, Clock, Star, ChevronRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import TrustTicker from "@/components/TrustTicker";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import SkipToContent from "@/components/SkipToContent";
import { useState } from "react";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const KATY_PHONE = "2818005008";
const KATY_PHONE_FORMATTED = "(281) 800-5008";
const KATY_BOOKING = "https://book.modento.io/c/7e879f019b1846dda0dde08e10b56c25/SmileAvenueKaty";

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
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.1743654401334!2d-95.7273261!3d29.916881999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d626dcbf8be7%3A0xc78b697f2e5a6c9c!2sSmile%20Avenue%20Family%20Dentistry%20-%20Cypress!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus",
    directionsUrl: "https://maps.app.goo.gl/DgZBrfjyNed7qKxs8",
    directions:
      "From US-290, exit Fry Road and head south — we're about 1 mile down, directly across from HEB.",
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
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.5597906542334!2d-95.7754549!3d29.732508199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864121d672dd8005%3A0xc421718f6ea402f7!2sSmile%20Avenue%20Family%20Dentistry%20-%20Katy!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus",
    directionsUrl:
      "https://www.google.com/maps/place/Smile+Avenue+Family+Dentistry+-+Katy/@29.732508,-95.775455,17z",
    directions:
      "From I-10, exit Grand Parkway (99) south, then take Westheimer Parkway west — 2 minutes ahead on the right.",
  },
];

function getOpenStatus(loc: (typeof locations)[0]): {
  isOpen: boolean;
  label: string;
  hoursToday: string;
} {
  const now = new Date();
  const cst = new Date(
    now.toLocaleString("en-US", { timeZone: "America/Chicago" })
  );
  const day = cst.getDay();
  const hour = cst.getHours() + cst.getMinutes() / 60;

  if (day === 6 && loc.satOpenHour !== undefined) {
    const open = hour >= loc.satOpenHour && hour < loc.satCloseHour!;
    return {
      isOpen: open,
      label: open ? "Open" : "Closed",
      hoursToday: "8:00 AM – 2:00 PM",
    };
  }
  if (loc.openDays.includes(day)) {
    const open = hour >= loc.openHour && hour < loc.closeHour;
    return {
      isOpen: open,
      label: open ? "Open" : "Closed",
      hoursToday: "8:30 AM – 5:00 PM",
    };
  }
  return { isOpen: false, label: "Closed", hoursToday: "Opens Mon 8:30 AM" };
}

/* ─── Location Card ─── */
const LocationCard = ({
  loc,
  active,
  onSelect,
}: {
  loc: (typeof locations)[0];
  active: boolean;
  onSelect: () => void;
}) => {
  const status = getOpenStatus(loc);

  return (
    <article
      onClick={onSelect}
      className={`group relative rounded-2xl border bg-card px-5 py-5 md:px-6 md:py-6 cursor-pointer transition-all duration-200 ${
        active
          ? "border-primary/40 shadow-md ring-1 ring-primary/20"
          : "border-border hover:border-primary/20 hover:shadow-sm"
      }`}
    >
      {/* Row 1: Status · Hours · Rating */}
      <div className="flex items-center gap-3 mb-3 text-xs font-sans">
        <span
          className={`inline-flex items-center gap-1.5 font-semibold ${
            status.isOpen ? "text-emerald-600" : "text-red-500"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              status.isOpen ? "bg-emerald-500 animate-pulse" : "bg-red-400"
            }`}
          />
          {status.label} | {status.hoursToday}
        </span>
        <span className="ml-auto flex items-center gap-1 text-muted-foreground">
          <Star className="w-3.5 h-3.5 fill-primary text-primary" />
          <span className="font-semibold text-foreground">{loc.rating}</span>
          <span>({loc.reviewCount})</span>
        </span>
      </div>

      {/* Row 2: Name */}
      <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
        {loc.name}
      </h2>

      {/* Row 3: Address + Phone */}
      <div className="space-y-1 mb-4">
        <p className="text-sm font-sans text-muted-foreground flex items-start gap-2">
          <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary/60" />
          {loc.address}, {loc.city}
        </p>
        <p className="text-sm font-sans text-muted-foreground flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 shrink-0 text-primary/60" />
          <a
            href={`tel:${loc.phone}`}
            className="hover:text-primary transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {loc.phoneFormatted}
          </a>
        </p>
      </div>

      {/* Row 4: Saturday hours if applicable */}
      {loc.hours.length > 1 && (
        <p className="text-xs font-sans text-muted-foreground mb-4 flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 shrink-0 text-primary/60" />
          Also open <span className="font-medium text-foreground">Saturday 8:00 AM – 2:00 PM</span>
        </p>
      )}

      {/* Row 5: CTAs */}
      <div className="flex items-center gap-3">
        <a
          href={loc.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta text-center text-sm px-6"
          onClick={(e) => e.stopPropagation()}
        >
          Book Now
        </a>
        <Link
          to={loc.pageUrl}
          className="text-sm font-sans font-semibold text-primary hover:underline inline-flex items-center gap-1"
          onClick={(e) => e.stopPropagation()}
        >
          Explore Office <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Community tags — subtle */}
      <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border/60">
        {loc.communities.map((c) => (
          <span
            key={c}
            className="text-[11px] font-sans text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full"
          >
            {c}
          </span>
        ))}
      </div>
    </article>
  );
};

/* ─── Page ─── */
const Locations = () => {
  useDocTitle(
    "Dental Office Locations in Cypress & Katy, TX | Smile Avenue"
  );
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>
          Dental Office Locations in Cypress & Katy, TX | Smile Avenue
        </title>
        <meta
          name="description"
          content="Two convenient Smile Avenue Family Dentistry locations in Cypress (Fry Rd) and Katy (Westheimer Pkwy), TX. 4.9★ rated. Same-day appointments, in-house lab, most insurance accepted. Book today."
        />
        <link
          rel="canonical"
          href="https://www.smileavenuefamilydentistry.com/convenient-locations/"
        />
        <meta
          property="og:title"
          content="Dental Office Locations in Cypress & Katy, TX | Smile Avenue"
        />
        <meta
          property="og:description"
          content="Two convenient Houston-area dental offices — Cypress on Fry Rd and Katy on Westheimer Pkwy. 4.9★ rated, same-day appointments, in-house lab."
        />
        <meta
          property="og:url"
          content="https://www.smileavenuefamilydentistry.com/convenient-locations/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Smile Avenue Family Dentistry"
        />
        <meta
          property="og:image"
          content="https://www.smileavenuefamilydentistry.com/logo-full.webp"
        />
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
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "29.9691",
                  longitude: "-95.6972",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "3000",
                  bestRating: "5",
                },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    opens: "08:30",
                    closes: "17:00",
                  },
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
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "29.7357",
                  longitude: "-95.7575",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "2000",
                  bestRating: "5",
                },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    opens: "08:30",
                    closes: "17:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Saturday"],
                    opens: "08:00",
                    closes: "14:00",
                  },
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
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.smileavenuefamilydentistry.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Locations",
                item: "https://www.smileavenuefamilydentistry.com/convenient-locations/",
              },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Dental Office Locations | Smile Avenue Family Dentistry",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", ".kicker", ".section-body"],
            },
            url: "https://www.smileavenuefamilydentistry.com/convenient-locations/",
          })}
        </script>
      </Helmet>

      <TrustTicker />
      <Navbar
        phone={CYPRESS_PHONE}
        phoneFormatted={CYPRESS_PHONE_FORMATTED}
        bookingUrl={CYPRESS_BOOKING}
      />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0">
        {/* HERO — clean & minimal */}
        <section className="pt-10 pb-6 md:pt-16 md:pb-10 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav
              className="mb-8 text-xs font-sans text-muted-foreground"
              aria-label="Breadcrumb"
            >
              <Link
                to="/"
                className="hover:text-primary transition-colors"
              >
                Home
              </Link>
              <span className="mx-2" aria-hidden="true">
                ›
              </span>
              <span className="text-foreground">Locations</span>
            </nav>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-4">
              Find Your Smile Avenue
            </h1>
            <p className="section-body max-w-lg mx-auto">
              Two Houston-area studios. Same 4.9-star, hospitality-driven
              dental care.
            </p>
          </div>
        </section>

        {/* FINDER — Split pane */}
        <section className="pb-16 md:pb-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-6 lg:gap-8 items-start">
              {/* Left: Cards */}
              <div className="space-y-4 order-2 lg:order-1">
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
                    className="w-full aspect-square lg:aspect-[3/4] border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Google Map — Smile Avenue ${locations[activeIdx].name}`}
                  />
                  <div className="p-4 border-t border-border flex items-center justify-between gap-4">
                    <p className="text-sm font-sans text-muted-foreground leading-relaxed flex-1">
                      {locations[activeIdx].directions}
                    </p>
                    <a
                      href={locations[activeIdx].directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-primary hover:underline"
                    >
                      Directions
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Care at Smile Avenue isn't just gentle,{" "}
              <span className="italic">it's genuine.</span>
            </h2>
            <p className="text-primary-foreground/70 font-sans max-w-xl mx-auto mb-10 text-lg">
              New patients welcome. Online booking takes 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CYPRESS_BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-background text-foreground font-sans font-semibold text-sm hover:bg-background/90 transition-colors shadow-md"
              >
                Book at Cypress
              </a>
              <a
                href={KATY_BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-background text-foreground font-sans font-semibold text-sm hover:bg-background/90 transition-colors shadow-md"
              >
                Book at Katy
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar
        phone={CYPRESS_PHONE}
        phoneFormatted={CYPRESS_PHONE_FORMATTED}
        bookingUrl={CYPRESS_BOOKING}
      />
    </>
  );
};

export default Locations;
