import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, GraduationCap, Stethoscope, Heart, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import BackToTop from "@/components/BackToTop";

export interface DoctorPageData {
  name: string;
  credentials: string;
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  locations: { name: string; address: string; phone: string; phoneFmt: string; booking: string }[];
  education: string[];
  specialties: string[];
  philosophy: string[];
  bio: string[];
}

const DoctorPageTemplate = ({ data }: { data: DoctorPageData }) => {
  const primary = data.locations[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: `${data.name}, ${data.credentials}`,
    description: data.metaDescription,
    url: `https://smileavenuedentistry.com/doctors/${data.slug}/`,
    jobTitle: data.title,
    worksFor: {
      "@type": "Dentist",
      name: "Smile Avenue Family Dentistry",
    },
    address: data.locations.map(loc => ({
      "@type": "PostalAddress",
      streetAddress: loc.address.split(",")[0],
      addressLocality: loc.name,
      addressRegion: "TX",
      addressCountry: "US",
    })),
    medicalSpecialty: data.specialties,
  };

  return (
    <>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={`https://smileavenuedentistry.com/doctors/${data.slug}/`} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={`https://smileavenuedentistry.com/doctors/${data.slug}/`} />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar phone={primary.phone} phoneFormatted={primary.phoneFmt} bookingUrl={primary.booking} />
      <TrustStrip />

      <main className="pb-14 lg:pb-0 animate-in fade-in duration-500">
        {/* HERO */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <nav className="mb-6 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <Link to="/doctors" className="hover:text-primary transition-colors">Our Doctors</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">{data.name}</span>
            </nav>
            <div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start">
              <div className="bg-muted rounded-2xl aspect-[3/4] flex items-center justify-center shadow-md">
                <span className="text-sm font-sans text-muted-foreground">Doctor Headshot</span>
              </div>
              <div>
                <p className="kicker">MEET YOUR DENTIST</p>
                <h1 className="section-heading text-3xl md:text-4xl lg:text-5xl">{data.name}, {data.credentials}</h1>
                <p className="text-lg font-sans text-primary font-medium mb-4">{data.title}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {data.locations.map((loc) => (
                    <span key={loc.name} className="inline-flex items-center gap-1.5 text-sm font-sans bg-primary/10 text-primary px-3 py-1 rounded-full">
                      <MapPin className="w-3.5 h-3.5" /> {loc.name}
                    </span>
                  ))}
                </div>
                <div className="space-y-3 font-body text-base text-muted-foreground leading-relaxed">
                  {data.bio.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  <a href={primary.booking} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Book with {data.name.split(" ").slice(0, 2).join(" ")}
                  </a>
                  <a href={`tel:${primary.phone}`} className="btn-secondary">Call {primary.phoneFmt}</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h2 className="font-display text-xl font-bold text-foreground">Education & Training</h2>
                </div>
                <ul className="space-y-2">
                  {data.education.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                      <Award className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Stethoscope className="w-5 h-5 text-primary" />
                  <h2 className="font-display text-xl font-bold text-foreground">Specialties & Expertise</h2>
                </div>
                <ul className="space-y-2">
                  {data.specialties.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                      <Award className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-primary" />
                <h2 className="font-display text-xl font-bold text-foreground">Philosophy of Care</h2>
              </div>
              <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
                {data.philosophy.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </section>

        {/* LOCATIONS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">Practice Locations</h2>
            <div className={`grid ${data.locations.length > 1 ? "md:grid-cols-2" : "max-w-md mx-auto"} gap-6`}>
              {data.locations.map((loc) => (
                <div key={loc.name} className="bg-card rounded-xl p-6 border border-border text-center">
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">{loc.name} Office</h3>
                  <div className="space-y-2 text-sm font-sans text-muted-foreground mb-5">
                    <div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{loc.address}</span></div>
                    <div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${loc.phone}`} className="hover:text-primary">{loc.phoneFmt}</a></div>
                  </div>
                  <a href={loc.booking} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book at {loc.name}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="gradient-cta py-16 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Book with {data.name.split(" ").slice(0, 2).join(" ")}</h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Experience expert, compassionate dental care. Schedule your appointment today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={primary.booking} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Now</a>
              <a href={`tel:${primary.phone}`} className="btn-cta-outline">Call {primary.phoneFmt}</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar phone={primary.phone} phoneFormatted={primary.phoneFmt} bookingUrl={primary.booking} />
    </>
  );
};

export default DoctorPageTemplate;
