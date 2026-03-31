import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Star, Shield, Users, Stethoscope, Sparkles, Heart, Baby, Smile } from "lucide-react";
import { useState } from "react";
import useDocTitle from "@/hooks/use-doc-title";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import TrustStrip from "@/components/TrustStrip";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";
import DoctorCard from "@/components/DoctorCard";
import BookingLocationModal from "@/components/BookingLocationModal";
import { DOCTOR_IMAGES, OFFICE_IMAGES } from "@/lib/images";

interface WhyChooseItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface Testimonial {
  quote: string;
  name: string;
  source: string;
}

interface Doctor {
  name: string;
  credentials: string;
  bio: string;
  href: string;
  imgKey?: string;
}

interface FeaturedService {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export interface NeighborhoodPageData {
  location: "cypress" | "katy";
  neighborhoodName: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  heroBody: string;
  heroImage?: string;
  whyChooseHeading: string;
  whyChooseItems: WhyChooseItem[];
  directionsHeading: string;
  directionsBody: string[];
  crossStreets: string;
  driveTime: string;
  faqs: FaqItem[];
  testimonials: Testimonial[];
  doctors: Doctor[];
  featuredServices: FeaturedService[];
  contentParagraphs: string[];
}

const LOCATIONS = {
  cypress: {
    phone: "8326481756",
    phoneFormatted: "(832) 648-1756",
    booking: "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress",
    address: "9212 Fry Rd #120, Cypress, TX 77433",
    name: "Cypress",
    path: "/cypress-tx",
    geo: { lat: "29.9691", lng: "-95.6972" },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.0!2d-95.6972!3d29.9691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU4JzA4LjgiTiA5NcKwNDEnNTAuMCJX!5e0!3m2!1sen!2sus!4v1",
  },
  katy: {
    phone: "2818005008",
    phoneFormatted: "(281) 800-5008",
    booking: "https://book.modento.io/c/8f2db4d7f5d14a26a0758de49dcf8cbc/smileavenue",
    address: "23541 Westheimer Pkwy Ste #170, Katy, TX 77494",
    name: "Katy",
    path: "/katy-tx",
    geo: { lat: "29.7357", lng: "-95.7575" },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.0!2d-95.7575!3d29.7357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ0JzA4LjUiTiA5NcKwNDUnMjcuMCJX!5e0!3m2!1sen!2sus!4v1",
  },
};

const insuranceLogos = [
  "Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental",
  "MetLife", "United Healthcare", "Guardian", "Humana",
];

const NeighborhoodPageTemplate = ({ data }: { data: NeighborhoodPageData }) => {
  const loc = LOCATIONS[data.location];
  const canonicalUrl = `https://www.smileavenuefamilydentistry.com${loc.path}/${data.slug}/`;
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  useDocTitle(data.metaTitle);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Smile Avenue Family Dentistry",
    description: data.metaDescription,
    url: canonicalUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.address.split(",")[0],
      addressLocality: loc.name,
      addressRegion: "TX",
      postalCode: loc.address.match(/\d{5}/)?.[0],
      addressCountry: "US",
    },
    telephone: loc.phoneFormatted,
    geo: { "@type": "GeoCoordinates", latitude: loc.geo.lat, longitude: loc.geo.lng },
    areaServed: [
      { "@type": "City", name: `${loc.name}, TX` },
      { "@type": "Place", name: data.neighborhoodName },
    ],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map(f => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.smileavenuefamilydentistry.com/" },
      { "@type": "ListItem", position: 2, name: `${loc.name}, TX`, item: `https://www.smileavenuefamilydentistry.com${loc.path}/` },
      { "@type": "ListItem", position: 3, name: `${data.neighborhoodName} Dentist`, item: canonicalUrl },
    ],
  };

  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta property="og:image" content="https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/Smile-Avenue-Family-Dentistry.jpg.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.metaTitle} />
        <meta name="twitter:description" content={data.metaDescription} />
      </Helmet>
      <Navbar phone={loc.phone} phoneFormatted={loc.phoneFormatted} bookingUrl={loc.booking} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0 animate-in fade-in duration-500">
        {/* HERO */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <nav aria-label="Breadcrumb" className="mb-6 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <Link to={loc.path} className="hover:text-primary transition-colors">{loc.name}, TX</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">{data.neighborhoodName} Dentist</span>
            </nav>
            <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
              <div>
                <p className="kicker">DENTIST NEAR {data.neighborhoodName.toUpperCase()}</p>
                <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">{data.heroHeading}</h1>
                <p className="text-lg font-display font-semibold text-foreground mb-2">{data.heroSubheading}</p>
                <p className="section-body">{data.heroBody}</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <button onClick={() => setBookingModalOpen(true)} className="btn-primary">Book Your Visit</button>
                  <a href={`tel:${loc.phone}`} className="btn-secondary">Call {loc.phoneFormatted}</a>
                </div>
                <p className="text-xs font-sans text-muted-foreground mb-2">
                  ✓ Booking takes 60 seconds · ✓ We confirm within 1 hour · ✓ Same-day appointments available
                </p>
                <div className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{loc.address}</span>
                </div>
              </div>
              <div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">
                <img
                  src={data.heroImage || (data.location === "cypress" ? OFFICE_IMAGES.cypressHero : OFFICE_IMAGES.katyHero)}
                  alt={`Smile Avenue Family Dentistry ${loc.name} office near ${data.neighborhoodName}`}
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                  width={640}
                  height={480}
                />
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BADGES */}
        <section className="py-8 bg-card border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Star className="w-6 h-6 text-primary" />
                <span className="text-sm font-sans font-semibold text-foreground">5,000+ Five-Star Reviews</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                <span className="text-sm font-sans font-semibold text-foreground">Same-Day Appointments</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-sm font-sans font-semibold text-foreground">Insurance Accepted</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                <span className="text-sm font-sans font-semibold text-foreground">Family-Friendly Care</span>
              </div>
            </div>
          </div>
        </section>

        {/* NEIGHBORHOOD CONTENT */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <p className="kicker">YOUR LOCAL DENTIST</p>
              <h2 className="section-heading">Trusted Dental Care Near {data.neighborhoodName}</h2>
              <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
                {data.contentParagraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">WHY {data.neighborhoodName.toUpperCase()} FAMILIES CHOOSE US</p>
            <h2 className="section-heading">{data.whyChooseHeading}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-left max-w-5xl mx-auto">
              {data.whyChooseItems.map((item) => (
                <div key={item.title} className="bg-card rounded-xl p-6 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{item.icon}</div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">SERVICES NEAR {data.neighborhoodName.toUpperCase()}</p>
            <h2 className="section-heading">Comprehensive Dental Services</h2>
            <p className="section-body max-w-2xl mx-auto">From routine cleanings to advanced restorative care, we offer a full range of dental services just minutes from {data.neighborhoodName}.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
              {data.featuredServices.map((svc) => (
                <Link
                  key={svc.title}
                  to={svc.href}
                  className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {svc.icon}
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">{svc.title}</h3>
                  <span className="text-xs font-sans font-medium text-primary group-hover:gap-2 transition-all">Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* DOCTORS */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">MEET YOUR DENTISTS</p>
            <h2 className="section-heading">Our {loc.name} Dental Team</h2>
            <p className="section-body max-w-2xl mx-auto">Our experienced team of dentists is ready to welcome you and your family.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-4xl mx-auto">
              {data.doctors.map((doc) => (
                <DoctorCard key={doc.name} {...doc} />
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">PATIENT REVIEWS</p>
            <h2 className="section-heading">What {data.neighborhoodName} Patients Say</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
              {data.testimonials.map((t) => <TestimonialCard key={t.name} {...t} />)}
            </div>
          </div>
        </section>

        {/* GETTING HERE / DIRECTIONS */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <p className="kicker">DIRECTIONS</p>
                <h2 className="section-heading">{data.directionsHeading}</h2>
                <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
                  {data.directionsBody.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 text-sm font-sans">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">Address:</span>
                      <span className="text-muted-foreground ml-1">{loc.address}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm font-sans">
                    <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">Drive Time:</span>
                      <span className="text-muted-foreground ml-1">{data.driveTime}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm font-sans">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">Cross Streets:</span>
                      <span className="text-muted-foreground ml-1">{data.crossStreets}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border shadow-md aspect-[4/3] bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
                  <p className="text-sm font-sans font-semibold text-foreground mb-1">Google Maps</p>
                  <a
                    href={`https://www.google.com/maps/dir/${encodeURIComponent(data.neighborhoodName + ", TX")}/${encodeURIComponent(loc.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-sans text-primary hover:underline"
                  >
                    Get Directions from {data.neighborhoodName} →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INSURANCE */}
        <section className="py-12 section-alt">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="kicker">INSURANCE WE ACCEPT</p>
            <h2 className="section-heading">Most Major Plans Accepted</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
              {insuranceLogos.map((name) => (
                <div key={name} className="bg-card rounded-xl border border-border py-5 px-4 flex items-center justify-center">
                  <span className="text-sm font-sans font-medium text-muted-foreground">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start">
              <div>
                <p className="kicker">FREQUENTLY ASKED QUESTIONS</p>
                <h2 className="section-heading">{data.neighborhoodName} Dental FAQ</h2>
                <p className="section-body">
                  Have more questions? Call us at{" "}
                  <a href={`tel:${loc.phone}`} className="text-primary hover:underline">{loc.phoneFormatted}</a>.
                </p>
              </div>
              <FaqAccordion items={data.faqs} />
            </div>
          </div>
        </section>

        {/* LOCATION INFO */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">{loc.name} Office</h3>
              <div className="space-y-3 text-sm font-sans text-muted-foreground mb-6">
                <div className="flex items-start justify-center gap-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <a href={`tel:${loc.phone}`} className="hover:text-primary transition-colors">{loc.phoneFormatted}</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>Mon–Fri 8am–5pm | Sat by Appointment</span>
                </div>
              </div>
              <button onClick={() => setBookingModalOpen(true)} className="btn-primary w-full text-center">
                Book Appointment
              </button>
              <p className="text-xs font-sans text-muted-foreground mt-2">Takes less than 60 seconds · No obligation</p>
            </div>
          </div>
        </section>

        {/* CTA BAR */}
        <section className="gradient-cta py-16 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Smile? Book Your {data.neighborhoodName} Dental Visit
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Conveniently located just minutes from {data.neighborhoodName}. New patients welcome — call or book online today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => setBookingModalOpen(true)} className="btn-cta-light">Book Online — Takes 60 Seconds</button>
              <a href={`tel:${loc.phone}`} className="btn-cta-outline">Call {loc.phoneFormatted}</a>
            </div>
            <p className="text-xs font-sans text-primary-foreground/60 mt-4">Most insurance accepted · 0% financing · Same-day appointments available</p>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar phone={loc.phone} phoneFormatted={loc.phoneFormatted} bookingUrl={loc.booking} />
      <BackToTop />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
};

export default NeighborhoodPageTemplate;
