import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";
import { DOCTOR_IMAGES } from "@/lib/images";

const doctors = [
  { name: "Dr. Patrick Vuong", credentials: "DMD", title: "Founder", tagline: "Comprehensive, patient-centered implant and digital dentistry", locations: "Cypress & Katy", slug: "patrick-vuong-dmd", imgKey: "patrick-vuong" },
  { name: "Dr. Peter Kim", credentials: "DDS", title: "General Dentist", tagline: "Known for gentle approach and patient comfort", locations: "Cypress", slug: "peter-kim-dds", imgKey: "peter-kim" },
  { name: "Dr. Laith Yahya", credentials: "DDS", title: "General Dentist", tagline: "Integrity, precision & passion for restorative care", locations: "Cypress & Katy", slug: "laith-yahya-dds", imgKey: "laith-yahya" },
  { name: "Dr. Weiyen Chang", credentials: "DDS", title: "General Dentist", tagline: "Technology-driven dentistry", locations: "Katy", slug: "weiyen-chang-dds", imgKey: "weiyen-chang" },
  { name: "Dr. Christian Lopez", credentials: "DDS", title: "General Dentist", tagline: "Dedicated to compassionate, high-quality care", locations: "Katy", slug: "christian-lopez-dds", imgKey: "christian-lopez" },
  { name: "Dr. Tamaara Willis", credentials: "DDS, MS", title: "Specialist", tagline: "Advanced specialty training with MS credential", locations: "Both Locations", slug: "tamaara-willis-dds-ms", imgKey: "tamaara-willis" },
];

const PHONE = "8326481756";
const PHONE_FMT = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const Doctors = () => (
  <>
    <SkipToContent />
    <Helmet>
      <title>Meet Our Dentists | Smile Avenue Dental</title>
      <meta name="description" content="Meet the experienced dentists at Smile Avenue Dental in Cypress and Katy, TX. Our team of skilled professionals is dedicated to your oral health." />
      <link rel="canonical" href="https://smileavenuedentistry.com/doctors/" />
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_FMT} bookingUrl={BOOKING} />
    <TrustStrip />

    <main id="main-content" className="pb-14 lg:pb-0 animate-in fade-in duration-500">
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
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={400}
                      height={533}
                    />
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
      <section className="gradient-cta py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Meet Your New Dentist?</h2>
          <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Book an appointment and experience the Smile Avenue difference.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Appointment</a>
            <a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_FMT}</a>
          </div>
        </div>
      </section>
    </main>

    <Footer />
    <MobileStickyBar phone={PHONE} phoneFormatted={PHONE_FMT} bookingUrl={BOOKING} />
    <BackToTop />
  </>
);

export default Doctors;
