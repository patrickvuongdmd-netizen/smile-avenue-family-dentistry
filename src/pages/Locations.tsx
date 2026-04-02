import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { MapPin, Phone, Clock, Check, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import TrustTicker from "@/components/TrustTicker";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import SkipToContent from "@/components/SkipToContent";
import HeroPhotoCarousel from "@/components/HeroPhotoCarousel";
import { CYPRESS_HERO_PHOTOS, KATY_HERO_PHOTOS } from "@/lib/images";

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

const locations = [
  {
    name: "Cypress",
    tagline: "Fry Road · Near HEB",
    address: "9212 Fry Rd #120",
    city: "Cypress, TX 77433",
    phone: CYPRESS_PHONE,
    phoneFormatted: CYPRESS_PHONE_FORMATTED,
    hours: [
      { days: "Mon–Fri", time: "8:30am–5pm" },
    ],
    bookingUrl: CYPRESS_BOOKING,
    pageUrl: "/cypress-tx/",
    communities: ["Bridgeland", "Towne Lake", "Fairfield", "Cy-Fair"],
    rating: "4.9",
    reviewCount: "300+",
    photos: CYPRESS_HERO_PHOTOS,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.1743654401334!2d-95.7273261!3d29.916881999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d626dcbf8be7%3A0xc78b697f2e5a6c9c!2sSmile%20Avenue%20Family%20Dentistry%20-%20Cypress!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus",
    directionsUrl: "https://maps.app.goo.gl/DgZBrfjyNed7qKxs8",
    directions: "From US-290, exit Fry Road and head south — we're about 1 mile down, directly across from HEB. From Bridgeland or Towne Lake, take Fry Rd south past Bridgeland High School and the Berry Center. From Fairfield or Cy-Fair, head north on Fry Rd from Clay Road. Look for HEB — we're right across the street with free parking at our door.",
  },
  {
    name: "Katy",
    tagline: "Westheimer Parkway · Near LaCenterra",
    address: "23541 Westheimer Pkwy Ste #170",
    city: "Katy, TX 77494",
    phone: KATY_PHONE,
    phoneFormatted: KATY_PHONE_FORMATTED,
    hours: [
      { days: "Mon–Fri", time: "8:30am–5pm" },
      { days: "Saturday", time: "8am–2pm" },
    ],
    bookingUrl: KATY_BOOKING,
    pageUrl: "/katy-tx/",
    communities: ["Cinco Ranch", "Cross Creek Ranch", "Firethorne", "Fulshear"],
    rating: "4.9",
    reviewCount: "200+",
    photos: KATY_HERO_PHOTOS,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.5597906542334!2d-95.7754549!3d29.732508199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864121d672dd8005%3A0xc421718f6ea402f7!2sSmile%20Avenue%20Family%20Dentistry%20-%20Katy!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus",
    directionsUrl: "https://www.google.com/maps/place/Smile+Avenue+Family+Dentistry+-+Katy/@29.732508,-95.775455,17z",
    directions: "From I-10, exit the Grand Parkway (99) south, then take Westheimer Parkway west — we're 2 minutes ahead on the right. From Cinco Ranch or LaCenterra, head east on Cinco Ranch Blvd to Westheimer Pkwy and turn right. From Fulshear, take FM 1093 east to Westheimer Parkway. Look for the shopping center on the south side between Grand Parkway (99) and Cinco Ranch Blvd — Suite #170 with free parking at our door.",
  },
];

const LocationCard = ({ loc }: { loc: typeof locations[0] }) => (
  <article className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
    {/* Photo Carousel */}
    <div className="p-4 pb-0">
      <HeroPhotoCarousel photos={loc.photos} />
    </div>

    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-1">
        <h2 className="font-display text-2xl font-bold text-foreground">
          {loc.name} Office
        </h2>
        <div className="flex items-center gap-1.5 shrink-0">
          <Star className="w-4 h-4 fill-primary text-primary" />
          <span className="text-sm font-sans font-semibold text-foreground">{loc.rating}</span>
          <span className="text-xs font-sans text-muted-foreground">({loc.reviewCount})</span>
        </div>
      </div>
      <p className="text-xs font-sans text-muted-foreground mb-5">{loc.tagline}</p>

      {/* Info Grid */}
      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mb-6">
        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div className="text-sm font-sans">
            <span className="text-foreground">{loc.address}</span>
            <br />
            <span className="text-foreground">{loc.city}</span>
            <a
              href={loc.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary text-xs font-medium mt-0.5 hover:underline"
            >
              Get Directions →
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-primary shrink-0" />
          <a
            href={`tel:${loc.phone}`}
            className="text-sm font-sans font-medium text-foreground hover:text-primary transition-colors"
          >
            {loc.phoneFormatted}
          </a>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-3 sm:col-span-2">
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
      <div className="flex flex-wrap gap-2 mb-6">
        {loc.communities.map((c) => (
          <span
            key={c}
            className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/5 text-xs font-sans font-medium text-primary border border-primary/10"
          >
            {c}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={loc.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta text-center flex-1"
        >
          Book at {loc.name}
        </a>
        <Link to={loc.pageUrl} className="btn-secondary text-center flex-1">
          Explore {loc.name} Office
        </Link>
      </div>
    </div>
  </article>
);

const Locations = () => {
  useDocTitle("Dental Office Locations in Cypress & Katy, TX | Smile Avenue");

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
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <nav className="mb-6 text-xs font-sans text-muted-foreground" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">Locations</span>
            </nav>

            <div className="text-center max-w-3xl mx-auto">
              <p className="kicker">TWO HOUSTON-AREA OFFICES</p>
              <h1 className="section-heading text-4xl md:text-5xl leading-tight">
                Find a Smile Avenue Near You
              </h1>
              <p className="section-body">
                Choose your nearest office in Cypress or Katy. Both locations offer the same hospitality-driven experience, in-house dental lab, and 4.9-star care your family deserves.
              </p>
            </div>
          </div>
        </section>

        {/* LOCATION CARDS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {locations.map((loc) => (
                <LocationCard key={loc.name} loc={loc} />
              ))}
            </div>
          </div>
        </section>

        {/* AMENITIES — What to Expect at Either Office */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
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

        {/* SIDE-BY-SIDE MAPS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <p className="kicker text-center">HOW TO GET HERE</p>
            <h2 className="section-heading text-center">Find the Office Closest to You</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              {locations.map((loc) => (
                <div key={loc.name} className="space-y-4">
                  <div className="rounded-xl overflow-hidden shadow-md border border-border">
                    <iframe
                      src={loc.mapEmbed}
                      className="w-full aspect-video border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Google Map — Smile Avenue ${loc.name}`}
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">{loc.name}</h3>
                    <p className="text-sm font-sans text-muted-foreground mb-2">{loc.address}, {loc.city}</p>
                    <p className="text-sm font-sans text-muted-foreground leading-relaxed">{loc.directions}</p>
                    <a
                      href={loc.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-sans text-primary font-medium hover:underline mt-2 inline-block"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
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
