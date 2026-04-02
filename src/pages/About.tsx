import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import Navbar from "@/components/Navbar";
import TrustTicker from "@/components/TrustTicker";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import SkipToContent from "@/components/SkipToContent";
import CredibilityBar from "@/components/CredibilityBar";
import DoctorCard from "@/components/DoctorCard";
import { OFFICE_IMAGES, DOCTOR_IMAGES, PAGE_VIDEOS } from "@/lib/images";
import LazyYouTube from "@/components/LazyYouTube";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import LazySection from "@/components/LazySection";

const PHONE = "8326481756";
const PHONE_FORMATTED = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const doctors = [
  { name: "Dr. Patrick Vuong", credentials: "DMD", bio: "Lead dentist with a focus on comprehensive family and implant dentistry.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
  { name: "Dr. Peter Kim", credentials: "DDS", bio: "Trusted for his gentle approach and commitment to patient comfort.", href: "/doctors/peter-kim-dds", imgKey: "peter-kim" },
  { name: "Dr. Laith Yahya", credentials: "DDS", bio: "Known for his integrity, precision, and passion for restorative care.", href: "/doctors/laith-yahya-dds", imgKey: "laith-yahya" },
];

const values = [
  {
    title: "Hospitality-Driven Care",
    description: "We treat every patient like family — with warmth, empathy, and genuine attention to your comfort. From cozy blankets to Netflix in every chair, your experience matters as much as your treatment.",
  },
  {
    title: "Clinical Excellence",
    description: "Our doctors pursue continuing education and use the latest techniques and technology to deliver outstanding, lasting results you can trust.",
  },
  {
    title: "Community First",
    description: "We're proud to serve the families of Cypress, Katy, and surrounding communities with integrity, transparency, and a commitment to accessible care.",
  },
  {
    title: "A Five-Star Experience",
    description: "From digital impressions to same-day emergencies, we've reimagined what a dental visit can be — and 5,000+ five-star reviews prove it.",
  },
];

const heroPhotos = [
  { src: DOCTOR_IMAGES["patrick-vuong"].url, alt: DOCTOR_IMAGES["patrick-vuong"].alt },
  { src: OFFICE_IMAGES.teamPhoto, alt: "Smile Avenue Family Dentistry full team photo" },
  { src: OFFICE_IMAGES.waitingRoom, alt: "Smile Avenue modern waiting room" },
];

const About = () => {
  useDocTitle("About Us | Smile Avenue Family Dentistry");

  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>About Us | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Learn about Smile Avenue Family Dentistry — our story, our values, and the team of dedicated professionals behind your smile in Cypress and Katy, TX." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/about/" />
        <meta property="og:title" content="About Us | Smile Avenue Family Dentistry" />
        <meta property="og:description" content="Learn about Smile Avenue Family Dentistry — our story, our values, and the team behind your smile in Cypress and Katy, TX." />
        <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/about/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta property="og:image" content={OFFICE_IMAGES.aboutHero} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <TrustTicker />
      <Navbar phone={PHONE} phoneFormatted={PHONE_FORMATTED} bookingUrl={BOOKING} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0">
        {/* HERO — Tend-style: big text left, rounded photo collage right */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="max-w-xl">
                <p className="kicker">ABOUT US</p>
                <h1 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1] tracking-tight">
                  Dentistry built on<br />hospitality.
                </h1>
                <p className="font-body text-lg text-muted-foreground leading-relaxed mt-6">
                  Smile Avenue was founded on a simple idea: dental care should feel less like a clinical appointment and more like visiting family.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                  With two locations in Cypress and Katy, TX, we've grown into a trusted practice serving thousands of families across greater Houston — and we're just getting started.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <Link to="/book-online" className="btn-cta">Book a Visit</Link>
                  <Link to="/our-team" className="inline-flex items-center justify-center h-11 px-8 rounded-md text-sm font-sans font-semibold border border-border text-foreground hover:bg-accent transition-colors">
                    Meet the Team
                  </Link>
                </div>
              </div>

              {/* Rounded photo collage — 3 images */}
              <div className="grid grid-cols-2 gap-3">
                <div className="row-span-2 rounded-[2rem] overflow-hidden aspect-[3/4]">
                  <img src={heroPhotos[0].src} alt={heroPhotos[0].alt} className="w-full h-full object-cover" fetchPriority="high" width={500} height={667} />
                </div>
                <div className="rounded-[2rem] overflow-hidden aspect-square">
                  <img src={heroPhotos[1].src} alt={heroPhotos[1].alt} className="w-full h-full object-cover" loading="lazy" width={400} height={400} />
                </div>
                <div className="rounded-[2rem] overflow-hidden aspect-square">
                  <img src={heroPhotos[2].src} alt={heroPhotos[2].alt} className="w-full h-full object-cover" loading="lazy" width={400} height={400} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <CredibilityBar />

        {/* STORY — narrative split-pane */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="rounded-[2rem] overflow-hidden aspect-[4/3] shadow-md">
                <img
                  src={OFFICE_IMAGES.aboutHero}
                  alt="Smile Avenue team in action — caring for patients"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="max-w-lg">
                <p className="kicker">OUR STORY</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
                  From one chair to<br />two thriving practices.
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed mt-6">
                  What started as a single operatory in Cypress has grown into a multi-doctor, multi-location practice — all because we never stopped putting patients first.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                  Every detail — from the in-house dental lab that delivers restorations in days, to the Netflix in every chair — was designed around a single question: <em className="text-foreground font-medium">how can we make this better for you?</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES — clean card grid, no icons (Tend-style) */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="kicker">WHAT DRIVES US</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
                Our values
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {values.map((v) => (
                <div key={v.title} className="p-6 md:p-8 rounded-2xl border border-border bg-card">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{v.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOCTORS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">MEET THE DOCTORS</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Your smile is in good hands.
            </h2>
            <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto mt-4">
              Our team of skilled, compassionate dentists brings years of experience and a genuine love for what they do.
            </p>
            <div className="grid md:grid-cols-3 gap-10 mt-12">
              {doctors.map((doc) => (
                <DoctorCard key={doc.name} {...doc} />
              ))}
            </div>
            <Link to="/our-team" className="inline-block mt-8 text-sm font-sans font-semibold text-primary hover:underline">
              Meet Our Full Team →
            </Link>
          </div>
        </section>

        {/* OFFICE GALLERY — inline minimal grid */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <p className="kicker">INSIDE OUR OFFICES</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
                Where comfort meets modern dentistry.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { src: OFFICE_IMAGES.waitingRoom, alt: "Smile Avenue modern waiting room" },
                { src: OFFICE_IMAGES.treatmentRoom, alt: "State-of-the-art treatment room" },
                { src: OFFICE_IMAGES.hallway, alt: "Bright hallway at Smile Avenue" },
                { src: OFFICE_IMAGES.coffeeStation, alt: "Complimentary coffee station" },
              ].map((photo, i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden group">
                  <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={400} height={400} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <LazySection>
          <TestimonialCarousel />
        </LazySection>

        {/* Video */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">WATCH & LEARN</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Get to know Smile Avenue
            </h2>
            <div className="max-w-2xl mx-auto mt-8">
              <LazyYouTube videoId={PAGE_VIDEOS.about.youtubeId} title={PAGE_VIDEOS.about.title} />
            </div>
          </div>
        </section>
      </main>

      <MobileStickyBar phone={PHONE} phoneFormatted={PHONE_FORMATTED} bookingUrl={BOOKING} />
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Smile Avenue Family Dentistry",
        url: "https://www.smileavenuefamilydentistry.com",
        logo: "https://www.smileavenuefamilydentistry.com/logo-full.png",
        description: "Hospitality-driven dental care for families in Cypress and Katy, TX. 5,000+ five-star reviews.",
        telephone: ["+18326481756", "+12818005008"],
        address: [
          { "@type": "PostalAddress", streetAddress: "9212 Fry Rd #120", addressLocality: "Cypress", addressRegion: "TX", postalCode: "77433", addressCountry: "US" },
          { "@type": "PostalAddress", streetAddress: "23541 Westheimer Pkwy Ste #170", addressLocality: "Katy", addressRegion: "TX", postalCode: "77494", addressCountry: "US" },
        ],
        sameAs: [
          "https://www.facebook.com/SmileAvenueFamilyDentistry/",
          "https://www.instagram.com/smileavenuefamilydentistry/",
          "https://www.tiktok.com/@smileavenuetx",
          "https://www.youtube.com/@SmileAvenueTX",
        ],
      }) }} />
    </>
  );
};

export default About;
