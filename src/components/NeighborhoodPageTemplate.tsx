import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Star, Shield, Users, Stethoscope, Sparkles, Heart, Baby, Smile, ArrowRight } from "lucide-react";
import { useState } from "react";
import useDocTitle from "@/hooks/use-doc-title";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import TrustStrip from "@/components/TrustStrip";
import TrustTicker from "@/components/TrustTicker";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";
import DoctorCard from "@/components/DoctorCard";
import BookingLocationModal from "@/components/BookingLocationModal";
import { DOCTOR_IMAGES, OFFICE_IMAGES } from "@/lib/images";
import BlogCardCarousel from "@/components/BlogCardCarousel";
import { BLOG_POSTS } from "@/lib/blog-data";
import categoryImplants from "@/assets/blog/category-implants.jpg";
import categoryCosmetic from "@/assets/blog/category-cosmetic.jpg";
import categoryEmergency from "@/assets/blog/category-emergency.jpg";
import categoryInvisalign from "@/assets/blog/category-invisalign.jpg";
import categoryPediatric from "@/assets/blog/category-pediatric.jpg";
import categorySedation from "@/assets/blog/category-sedation.jpg";
import categoryPreventive from "@/assets/blog/category-preventive.jpg";

const BLOG_CATEGORY_IMAGES: Record<string, string> = {
  Implants: categoryImplants, Cosmetic: categoryCosmetic, Emergency: categoryEmergency,
  Invisalign: categoryInvisalign, Pediatric: categoryPediatric, Sedation: categorySedation, Preventive: categoryPreventive,
};

const BLOG_CATEGORY_COLORS: Record<string, { bg: string; badge: string; text: string }> = {
  Implants: { bg: "bg-[hsl(192,40%,92%)]", badge: "bg-[hsl(192,72%,55%)]/15 text-[hsl(192,78%,33%)]", text: "text-[hsl(192,78%,33%)]" },
  Cosmetic: { bg: "bg-[hsl(340,30%,93%)]", badge: "bg-[hsl(340,60%,60%)]/15 text-[hsl(340,60%,40%)]", text: "text-[hsl(340,60%,40%)]" },
  Emergency: { bg: "bg-[hsl(15,40%,93%)]", badge: "bg-[hsl(15,70%,55%)]/15 text-[hsl(15,70%,35%)]", text: "text-[hsl(15,70%,35%)]" },
  Invisalign: { bg: "bg-[hsl(160,30%,92%)]", badge: "bg-[hsl(160,50%,45%)]/15 text-[hsl(160,55%,30%)]", text: "text-[hsl(160,55%,30%)]" },
  Pediatric: { bg: "bg-[hsl(270,30%,93%)]", badge: "bg-[hsl(270,50%,60%)]/15 text-[hsl(270,50%,40%)]", text: "text-[hsl(270,50%,40%)]" },
  Sedation: { bg: "bg-[hsl(220,30%,93%)]", badge: "bg-[hsl(220,55%,55%)]/15 text-[hsl(220,55%,35%)]", text: "text-[hsl(220,55%,35%)]" },
  Preventive: { bg: "bg-[hsl(80,30%,92%)]", badge: "bg-[hsl(80,50%,40%)]/15 text-[hsl(80,50%,28%)]", text: "text-[hsl(80,50%,28%)]" },
};

interface WhyChooseItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  source: string;
  location?: string;
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
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.1743654401334!2d-95.7273261!3d29.916881999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d626dcbf8be7%3A0xc78b697f2e5a6c9c!2sSmile%20Avenue%20Family%20Dentistry%20-%20Cypress!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus",
  },
  katy: {
    phone: "2818005008",
    phoneFormatted: "(281) 800-5008",
    booking: "https://book.modento.io/c/7e879f019b1846dda0dde08e10b56c25/SmileAvenueKaty",
    address: "23541 Westheimer Pkwy Ste #170, Katy, TX 77494",
    name: "Katy",
    path: "/katy-tx",
    geo: { lat: "29.7357", lng: "-95.7575" },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.5597906542334!2d-95.7754549!3d29.732508199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864121d672dd8005%3A0xc421718f6ea402f7!2sSmile%20Avenue%20Family%20Dentistry%20-%20Katy!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus",
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
    "@type": ["Dentist", "LocalBusiness"],
    name: `Smile Avenue Family Dentistry - ${loc.name}`,
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: data.location === "cypress" ? "3000" : "2000",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      { "@type": "City", name: `${loc.name}, TX` },
      { "@type": "Place", name: data.neighborhoodName },
    ],
    openingHoursSpecification: data.location === "cypress"
      ? [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "17:00" }]
      : [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "17:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "14:00" },
        ],
    priceRange: "$$",
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
        <meta property="og:image" content="https://www.smileavenuefamilydentistry.com/og-image.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.metaTitle} />
        <meta name="twitter:description" content={data.metaDescription} />
        <link rel="alternate" hrefLang="en" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>
      <TrustTicker />
      <Navbar phone={loc.phone} phoneFormatted={loc.phoneFormatted} bookingUrl={loc.booking} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0 ">
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
                  <button onClick={() => setBookingModalOpen(true)} className="btn-cta">Book Your Visit</button>
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

        {/* FAQ */}
        <section className="section-padding gradient-cta">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start">
              <div>
                <p className="kicker text-white/70">FREQUENTLY ASKED QUESTIONS</p>
                <h2 className="section-heading text-white">{data.neighborhoodName} Dental FAQ</h2>
                <p className="section-body text-white/70">
                  Have more questions? Call us at{" "}
                  <a href={`tel:${loc.phone}`} className="text-white underline hover:no-underline">{loc.phoneFormatted}</a>.
                </p>
              </div>
              <FaqAccordion items={data.faqs} variant="dark" />
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

        {/* FROM THE BLOG */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="kicker">FROM THE BLOG</p>
                <h2 className="section-heading">Dental Tips & Insights</h2>
              </div>
              <Link to="/blog" className="hidden sm:inline-flex items-center gap-2 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
                View All Posts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <BlogCardCarousel
                posts={BLOG_POSTS.slice(0, 3)}
                categoryColors={BLOG_CATEGORY_COLORS}
                categoryImages={BLOG_CATEGORY_IMAGES}
                fallbackImage={categoryImplants}
              />
              <div className="hidden md:grid md:grid-cols-3 gap-6">
                {BLOG_POSTS.slice(0, 3).map((post) => (
                  <Link key={post.slug} to={`/blog/${post.slug}`} className="group card-soft !p-0 overflow-hidden">
                    <div className="p-7">
                      <span className="text-xs font-sans font-medium text-primary uppercase tracking-wider">{post.category}</span>
                      <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-sm font-body text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-5">
                        <span className="text-xs font-sans text-muted-foreground">{post.readTime}</span>
                        <span className="text-sm font-sans font-medium text-primary group-hover:gap-2 transition-all inline-flex items-center gap-1">
                          Read <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
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
                  <span>Mon–Fri 8:30am–5pm</span>
                </div>
              </div>
              <button onClick={() => setBookingModalOpen(true)} className="btn-cta w-full text-center">
                Book Appointment
              </button>
              <p className="text-xs font-sans text-muted-foreground mt-2">Takes less than 60 seconds · No obligation</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <MobileStickyBar phone={loc.phone} phoneFormatted={loc.phoneFormatted} bookingUrl={loc.booking} />
      <BackToTop />
      <BookingLocationModal open={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />

    </>
  );
};

export default NeighborhoodPageTemplate;
