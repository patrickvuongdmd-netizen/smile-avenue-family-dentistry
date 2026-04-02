import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { MapPin, Phone, Check, Star, ArrowRight } from "lucide-react";
import { ReactNode, useState } from "react";
import Navbar from "@/components/Navbar";
import TrustTicker from "@/components/TrustTicker";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import DoctorCard from "@/components/DoctorCard";
import FaqAccordion from "@/components/FaqAccordion";
import TrustStrip from "@/components/TrustStrip";
import BackToTop from "@/components/BackToTop";
import BookingLocationModal from "@/components/BookingLocationModal";
import HeroPhotoCarousel from "@/components/HeroPhotoCarousel";
import VideoCarousel from "@/components/VideoCarousel";
import { BLOG_POSTS } from "@/lib/blog-data";

/* ── Data interface ── */

export interface LocationDoctor {
  name: string;
  credentials: string;
  bio: string;
  href: string;
  imgKey: string;
}

export interface LocationService {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}

export interface LocationTestimonial {
  quote: string;
  name: string;
  source: string;
  location: string;
}

export interface LocationFaq {
  question: string;
  answer: string;
}

export interface SocialPlatform {
  name: string;
  stat: string;
  icon: ReactNode;
}

export interface LocationHours {
  day: string;
  time: string;
  muted?: boolean; // for weekend/closed rows
}

export interface NeighborhoodLink {
  label: string;
  href: string;
}

export interface CrossLinkLocation {
  label: string;
  address: string;
  phone: string;
  phoneRaw: string;
  href: string;
}

export interface VideoItem {
  youtubeId: string;
  title: string;
}

export interface LocationHubData {
  // Core info
  phone: string;
  phoneFormatted: string;
  bookingUrl: string;
  mapsUrl: string;
  mapsEmbedUrl: string;

  // SEO
  docTitle: string;
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string; // e.g. "/cypress-tx/"
  ogImage: string;
  twitterDescription: string;

  // Schema
  schemaName: string; // "Smile Avenue Family Dentistry - Cypress"
  schemaAddress: { street: string; city: string; state: string; zip: string };
  schemaGeo: { lat: number; lng: number };
  schemaReviewCount: string;
  schemaOpeningHours: Array<{ days: string[]; opens: string; closes: string }>;
  schemaAreaServed: Array<{ type: string; name: string }>;

  // Hero
  breadcrumbLabel: string; // "Dentist in Cypress, TX"
  heroKicker: string;
  heroHeading: string;
  heroBody: ReactNode;
  heroPhotos: Array<{ src: string; alt: string }>;
  heroReviewStat: string; // "from 300+ verified Cypress reviews"

  // Social proof
  socialPlatforms: SocialPlatform[];
  testimonials: LocationTestimonial[];
  reviewsLinkLabel: string;

  // Services
  servicesKicker: string;
  servicesHeading: string;
  servicesBody: ReactNode;
  services: LocationService[];
  servicesLinkLabel: string;

  // Videos
  videosHeading: string;
  videos: VideoItem[];

  // Doctors
  doctorsKicker: string;
  doctorsHeading: string;
  doctorsBody: string;
  doctors: LocationDoctor[];
  doctorGridCols?: string; // tailwind grid class for desktop

  // Payments
  paymentsKicker: string;
  
  insuranceBrands: string[];

  // Find us
  findUsKicker: string;
  findUsHeading: string;
  findUsBody: string;
  address: { line1: string; line2: string };
  directions: ReactNode;
  landmark: ReactNode;
  hours: LocationHours[];
  amenities: string[];

  // Communities
  neighborhoods: NeighborhoodLink[];
  crossLink: CrossLinkLocation;

  // FAQ
  faqs: LocationFaq[];

  // Blog section — uses shared BLOG_POSTS, no data needed
}

const BASE_URL = "https://www.smileavenuefamilydentistry.com";

/* ── Template component ── */

const LocationHubTemplate = ({ data }: { data: LocationHubData }) => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  useDocTitle(data.docTitle);

  const fullUrl = `${BASE_URL}${data.canonicalPath}`;

  return (
    <>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={fullUrl} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta property="og:image" content={data.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.metaTitle} />
        <meta name="twitter:description" content={data.twitterDescription} />
        <meta name="twitter:image" content={data.ogImage} />
        <link rel="alternate" hrefLang="en" href={fullUrl} />
        <link rel="alternate" hrefLang="x-default" href={fullUrl} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: data.schemaName,
          url: fullUrl,
          telephone: data.phoneFormatted,
          address: { "@type": "PostalAddress", streetAddress: data.schemaAddress.street, addressLocality: data.schemaAddress.city, addressRegion: data.schemaAddress.state, postalCode: data.schemaAddress.zip, addressCountry: "US" },
          geo: { "@type": "GeoCoordinates", latitude: String(data.schemaGeo.lat), longitude: String(data.schemaGeo.lng) },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: data.schemaReviewCount, bestRating: "5", worstRating: "1" },
          openingHoursSpecification: data.schemaOpeningHours.map(h => ({ "@type": "OpeningHoursSpecification", dayOfWeek: h.days, opens: h.opens, closes: h.closes })),
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
            { "@type": "ListItem", position: 2, name: data.breadcrumbLabel, item: fullUrl },
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `${data.breadcrumbLabel} | Smile Avenue`,
          speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".kicker", ".section-body"] },
          url: fullUrl,
        })}</script>
      </Helmet>

      <TrustTicker />
      <Navbar phone={data.phone} phoneFormatted={data.phoneFormatted} bookingUrl={data.bookingUrl} />
      <TrustStrip />

      <main className="pb-14 lg:pb-0">
        {/* 1 — HERO */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <nav className="mb-6 text-xs font-sans text-muted-foreground" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">{data.breadcrumbLabel}</span>
            </nav>
            <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
              <div>
                <p className="kicker">{data.heroKicker}</p>
                <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">{data.heroHeading}</h1>
                <p className="section-body">{data.heroBody}</p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
                  <button onClick={() => setBookingModalOpen(true)} className="btn-cta w-full sm:w-auto text-center">Book Now</button>
                  <a href={`tel:${data.phone}`} className="btn-secondary w-full sm:w-auto text-center flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    {data.phoneFormatted}
                  </a>
                </div>
                <p className="text-xs font-sans text-muted-foreground mb-2">✓ We confirm within 1 hour · ✓ Same-day appointments · ✓ 0% financing available</p>
                <div className="flex items-center gap-3 text-sm font-sans text-muted-foreground">
                  <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}</div>
                  <span className="font-semibold text-foreground">4.9</span>
                  <span>{data.heroReviewStat}</span>
                </div>
              </div>
              <HeroPhotoCarousel photos={data.heroPhotos} />
            </div>
          </div>
        </section>

        {/* 2 — SOCIAL PROOF & REVIEWS */}
        <section className="section-padding bg-muted/50">
          <div className="container mx-auto text-center">
            <p className="kicker">WHERE HOUSTON TRUSTS US</p>
            <h2 className="section-heading">Real Reviews from {data.schemaAddress.city} Patients</h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
              {data.socialPlatforms.map((p) => (
                <div key={p.name} className="flex flex-col items-center gap-1.5 min-w-[100px]">
                  <div className="text-muted-foreground/50 grayscale">{p.icon}</div>
                  <span className="text-xs font-sans font-medium text-muted-foreground">{p.stat}</span>
                </div>
              ))}
            </div>
            <div className="w-16 h-px bg-border mx-auto mb-10" />
            <div className="hidden md:grid md:grid-cols-3 gap-6 text-left">
              {data.testimonials.map((t) => <TestimonialCard key={t.name} {...t} />)}
            </div>
            <div className="md:hidden relative">
              <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-1">
                {data.testimonials.map((t) => (
                  <div key={t.name} className="snap-center shrink-0 w-[85vw] max-w-[340px]">
                    <TestimonialCard {...t} />
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-3">
                {data.testimonials.map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-border" />)}
              </div>
            </div>
            <Link to="/patient-testimonials" className="inline-flex items-center gap-2 mt-10 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
              {data.reviewsLinkLabel} →
            </Link>
          </div>
        </section>

        {/* 3 — SERVICES */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">{data.servicesKicker}</p>
            <h2 className="section-heading">{data.servicesHeading}</h2>
            <p className="section-body max-w-2xl mx-auto">{data.servicesBody}</p>
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 text-left">
              {data.services.map((svc) => <ServiceCard key={svc.title} {...svc} />)}
            </div>
            <div className="sm:hidden flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-1 mt-10 text-left">
              {data.services.map((svc) => (
                <div key={svc.title} className="snap-center shrink-0 w-[80vw] max-w-[300px]">
                  <ServiceCard {...svc} />
                </div>
              ))}
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 mt-10 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
              {data.servicesLinkLabel} →
            </Link>
          </div>
        </section>

        {/* 4 — VIDEOS */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">WATCH & LEARN</p>
            <h2 className="section-heading">{data.videosHeading}</h2>
            <div className="max-w-3xl mx-auto mt-8">
              <VideoCarousel videos={data.videos} />
            </div>
          </div>
        </section>

        {/* 5 — DOCTORS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">{data.doctorsKicker}</p>
            <h2 className="section-heading">{data.doctorsHeading}</h2>
            <p className="section-body max-w-2xl mx-auto">{data.doctorsBody}</p>
            <div className={`hidden md:grid ${data.doctorGridCols || `md:grid-cols-${Math.min(data.doctors.length, 5)}`} gap-8 mt-12`}>
              {data.doctors.map((doc) => <DoctorCard key={doc.name} {...doc} />)}
            </div>
            <div className="md:hidden flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-1 mt-10">
              {data.doctors.map((doc) => (
                <div key={doc.name} className="snap-center shrink-0 w-[140px]">
                  <DoctorCard {...doc} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 — PAYMENTS */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">{data.paymentsKicker}</p>
            <h2 className="section-heading">Payment Made Easy</h2>
            <p className="section-body max-w-2xl mx-auto">Don't let cost keep you from the dentist. Between insurance, our membership plan, and 0% financing — we'll find a way to make it work.</p>
            <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">Insurance Accepted</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">We accept Aetna, BCBS, Cigna, Delta Dental, MetLife, United Healthcare, Guardian, Humana, and more. We verify your benefits before your visit — no surprise bills.</p>
                <Link to="/insurance" className="text-sm font-sans font-medium text-primary hover:text-primary-dark transition-colors">Verify Your Coverage →</Link>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">No Insurance? Join Our Membership</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">Our in-house membership plan covers cleanings, exams, X-rays, and gives you 20% off all treatment. No deductibles, no waiting periods.</p>
                <Link to="/membership-plan" className="text-sm font-sans font-medium text-primary hover:text-primary-dark transition-colors">Join the Membership →</Link>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">0% Dental Financing</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">Spread the cost with CareCredit or Sunbit — apply in minutes, get approved instantly, and pay monthly with 0% interest options.</p>
                <Link to="/insurance" className="text-sm font-sans font-medium text-primary hover:text-primary-dark transition-colors">Explore Financing →</Link>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-xs font-sans font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-6">WE ACCEPT THESE & MORE</p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-3xl mx-auto">
                {data.insuranceBrands.map((name) => (
                  <div key={name} className="bg-card rounded-lg border border-border py-3 px-3 flex items-center justify-center">
                    <span className="text-xs font-sans font-semibold text-muted-foreground tracking-wide">{name}</span>
                  </div>
                ))}
              </div>
              <Link to="/insurance" className="inline-block mt-4 text-sm font-sans font-medium text-primary hover:text-primary-dark transition-colors">View all accepted plans →</Link>
            </div>
          </div>
        </section>

        {/* 7 — FIND US */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <p className="kicker">{data.findUsKicker}</p>
            <h2 className="section-heading">{data.findUsHeading}</h2>
            <p className="section-body max-w-2xl mx-auto">{data.findUsBody}</p>
            <div className="grid md:grid-cols-[1fr_1fr_auto] gap-x-8 gap-y-6 mt-10 items-start">
              <div>
                <h3 className="font-display text-lg font-bold text-primary mb-3">Address</h3>
                <p className="text-sm font-sans text-foreground mb-1">{data.address.line1}</p>
                <p className="text-sm font-sans text-foreground mb-5">{data.address.line2}</p>
                <h3 className="font-display text-lg font-bold text-primary mb-3">How to Get Here</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{data.directions}</p>
                <p className="text-xs font-sans text-muted-foreground mt-3">{data.landmark}</p>
                <a href={data.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-sans text-primary font-medium hover:underline mt-3 inline-block">
                  Open in Google Maps →
                </a>
              </div>
              <div className="space-y-5">
                <div>
                  <h3 className="font-display text-lg font-bold text-primary mb-3">Hours</h3>
                  <div className="space-y-2.5 text-sm font-sans">
                    {data.hours.map((h) => (
                      <div key={h.day} className={`flex justify-between ${h.muted ? "text-muted-foreground" : "text-foreground"}`}>
                        <span className={h.muted ? "" : "font-medium"}>{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md border border-border">
                  <iframe
                    src={data.mapsEmbedUrl}
                    className="w-full h-[180px] border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${data.schemaName} office location on Google Maps`}
                  />
                </div>
              </div>
              <div className="bg-accent/30 border border-accent/50 rounded-xl p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-4">What to Expect</h3>
                <ul className="space-y-2.5">
                  {data.amenities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-sans text-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 8 — COMMUNITIES */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">COMMUNITIES WE SERVE</p>
            <h2 className="section-heading">{data.schemaAddress.city} Neighborhoods & Locations</h2>
            <p className="section-body max-w-2xl mx-auto">Smile Avenue proudly serves families across {data.schemaAddress.city} and beyond. Find dental care near your community.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
              {data.neighborhoods.map((n) => (
                <Link key={n.href} to={n.href} className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all text-sm font-sans font-semibold text-foreground hover:text-primary">
                  {n.label} →
                </Link>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-xs font-sans font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-4">ALSO SERVING {data.crossLink.label.toUpperCase()}</p>
              <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-card rounded-xl px-6 py-4 border border-border text-left">
                <div>
                  <div className="flex items-center gap-2 text-sm font-sans text-foreground mb-1">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    {data.crossLink.address}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <a href={`tel:${data.crossLink.phoneRaw}`} className="hover:text-primary transition-colors">{data.crossLink.phone}</a>
                  </div>
                </div>
                <Link to={data.crossLink.href} className="shrink-0 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors whitespace-nowrap">
                  Visit {data.crossLink.label} →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 9 — FAQ */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start">
              <div>
                <p className="kicker">FREQUENTLY ASKED QUESTIONS</p>
                <h2 className="section-heading">{data.schemaAddress.city} Dental FAQs</h2>
                <p className="section-body">Have more questions about our {data.schemaAddress.city} office? Call <a href={`tel:${data.phone}`} className="text-primary hover:underline">{data.phoneFormatted}</a>.</p>
              </div>
              <FaqAccordion items={data.faqs} />
            </div>
          </div>
        </section>

        {/* 10 — BLOG */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="kicker">FROM THE BLOG</p>
                <h2 className="section-heading">Dental Tips & Insights</h2>
              </div>
              <Link to="/blog" className="hidden sm:inline-flex items-center gap-2 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
                View All Posts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_POSTS.slice(0, 3).map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="group bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all overflow-hidden">
                  <div className="p-6">
                    <span className="text-xs font-sans font-medium text-primary uppercase tracking-wider">{post.category}</span>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs font-sans text-muted-foreground">{post.readTime}</span>
                      <span className="text-sm font-sans font-medium text-primary group-hover:gap-2 transition-all inline-flex items-center gap-1">
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Link to="/blog" className="sm:hidden inline-flex items-center gap-2 mt-8 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
              View All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar phone={data.phone} phoneFormatted={data.phoneFormatted} bookingUrl={data.bookingUrl} />
      <BackToTop />
      <BookingLocationModal open={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />

      {/* LocalBusiness + Dentist Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Dentist"],
        name: data.schemaName,
        image: data.ogImage,
        telephone: `+1-${data.phoneFormatted.replace(/[()\\s]/g, "").replace(/^(\d{3})(\d{3})(\d{4})$/, "$1-$2-$3")}`,
        address: { "@type": "PostalAddress", streetAddress: data.schemaAddress.street, addressLocality: data.schemaAddress.city, addressRegion: data.schemaAddress.state, postalCode: data.schemaAddress.zip, addressCountry: "US" },
        geo: { "@type": "GeoCoordinates", latitude: data.schemaGeo.lat, longitude: data.schemaGeo.lng },
        url: fullUrl,
        openingHoursSpecification: data.schemaOpeningHours.map(h => ({ "@type": "OpeningHoursSpecification", dayOfWeek: h.days, opens: h.opens, closes: h.closes })),
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: data.schemaReviewCount },
        areaServed: data.schemaAreaServed.map(a => ({ "@type": a.type, name: a.name })),
        priceRange: "$$",
        hasMap: data.mapsUrl,
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
      }) }} />
    </>
  );
};

export default LocationHubTemplate;
