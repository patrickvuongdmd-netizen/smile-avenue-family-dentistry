import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { MapPin, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import TrustTicker from "@/components/TrustTicker";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";
import { DOCTOR_IMAGES, PAGE_VIDEOS } from "@/lib/images";
import LazyYouTube from "@/components/LazyYouTube";

const doctors = [
  { name: "Dr. Patrick Vuong", credentials: "DMD", title: "Founder", tagline: "Cutting-edge implant, sedation & digital dentistry with a values-first approach", locations: "Cypress & Katy", slug: "patrick-vuong-dmd", imgKey: "patrick-vuong" },
  { name: "Dr. Peter Kim", credentials: "DDS", title: "General Dentist", tagline: "15+ years of gentle, education-focused care — NYU trained", locations: "Cypress", slug: "peter-kim-dds", imgKey: "peter-kim" },
  { name: "Dr. Laith Yahya", credentials: "DDS", title: "General Dentist", tagline: "Precision, calm demeanor & passion for restorative care", locations: "Cypress", slug: "laith-yahya-dds", imgKey: "laith-yahya" },
  { name: "Dr. Sameer Bilal", credentials: "DDS", title: "General & Cosmetic Dentist", tagline: "Award-winning aesthetic dentistry & compassionate family care", locations: "Katy", slug: "sameer-bilal-dds", imgKey: "sameer-bilal" },
  { name: "Dr. Sarah Maredia", credentials: "DDS", title: "General Dentist", tagline: "Community-centered care with a heart for education & volunteerism", locations: "Cypress & Katy", slug: "sarah-maredia-dds", imgKey: "sarah-maredia" },
  { name: "Dr. Shayan Alkhiro", credentials: "DDS", title: "General Dentist", tagline: "Multilingual, judgment-free dentistry with a global perspective", locations: "Cypress", slug: "shayan-alkhiro-dds", imgKey: "shayan-alkhiro" },
];

const PHONE = "8326481756";
const PHONE_FMT = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const Doctors = () => {
  useDocTitle("Meet Our Doctors | Smile Avenue Family Dentistry");
  return (
  <>
    <SkipToContent />
    <Helmet>
      <title>Meet Our Dentists | Smile Avenue Dental</title>
      <meta name="description" content="Meet the experienced dentists at Smile Avenue Dental in Cypress and Katy, TX. Our team of skilled professionals is dedicated to your oral health." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/doctors/" />
        <meta property="og:title" content="Meet Our Dentists | Smile Avenue Dental" />
        <meta property="og:description" content="Meet the experienced dentists at Smile Avenue in Cypress and Katy, TX." />
        <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/doctors/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta property="og:image" content="https://www.smileavenuefamilydentistry.com/logo-full.webp" />
        <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <TrustTicker />

    <Navbar phone={PHONE} phoneFormatted={PHONE_FMT} bookingUrl={BOOKING} />
    <TrustStrip />

    <main id="main-content" className="pb-14 lg:pb-0 ">
      {/* HERO */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <nav className="mb-6 text-xs font-sans text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Our Doctors</span>
          </nav>
          <div className="text-center max-w-3xl mx-auto">
            <p className="kicker">OUR TEAM</p>
            <h1 className="section-heading text-4xl md:text-5xl">Meet Your Smile Avenue Dentists</h1>
            <p className="section-body">Our team of experienced dentists combines advanced training with genuine compassion to deliver the best care for your family.</p>
            <Link to="/our-team" className="btn-secondary mt-4">Meet the Full Team →</Link>
          </div>
        </div>
      </section>

      {/* DOCTOR GRID */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doc) => {
              const img = DOCTOR_IMAGES[doc.imgKey];
              return (
                <div key={doc.slug} className="bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    {img ? (
                      <img
                        src={img.url}
                        alt={img.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={400}
                        height={533}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl font-display font-bold text-primary/30">{doc.name.split(" ").slice(1, 2).join("")[0]}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-xl font-bold text-foreground">{doc.name}</h2>
                    <p className="text-sm font-sans text-primary font-medium">{doc.credentials} — {doc.title}</p>
                    <p className="text-sm font-body text-muted-foreground mt-2 mb-3">{doc.tagline}</p>
                    <div className="flex items-center gap-1.5 text-xs font-sans text-muted-foreground mb-4">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span>{doc.locations}</span>
                    </div>
                    <Link to={`/doctors/${doc.slug}`} className="inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-primary hover:underline">
                      Meet {doc.name.split(" ").slice(0, 2).join(" ")} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}

        {/* Video */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">WATCH & LEARN</p>
            <h2 className="section-heading">Meet Our Team in Action</h2>
            <div className="max-w-2xl mx-auto mt-8">
              <LazyYouTube videoId={PAGE_VIDEOS.doctors.youtubeId} title={PAGE_VIDEOS.doctors.title} />
            </div>
          </div>
        </section>

    </main>

    <Footer />
    <MobileStickyBar phone={PHONE} phoneFormatted={PHONE_FMT} bookingUrl={BOOKING} />
    <BackToTop />
  </>
);
};

export default Doctors;
