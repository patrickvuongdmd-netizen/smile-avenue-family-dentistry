import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { MapPin, Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";

import { DOCTOR_IMAGES, TEAM_MEMBERS, PAGE_VIDEOS } from "@/lib/images";
import { TEAM_IMAGES } from "@/lib/team-images";
import LazyYouTube from "@/components/LazyYouTube";

const PHONE = "8326481756";
const PHONE_FMT = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

type LocationFilter = "all" | "Cypress" | "Katy";

const doctors = [
  { name: "Dr. Patrick Vuong", credentials: "DMD", role: "Founder & Lead Dentist", locations: ["Cypress", "Katy"], slug: "patrick-vuong-dmd", imgKey: "patrick-vuong" },
  { name: "Dr. Peter Kim", credentials: "DDS", role: "General Dentist", locations: ["Cypress"], slug: "peter-kim-dds", imgKey: "peter-kim" },
  { name: "Dr. Laith Yahya", credentials: "DDS", role: "General Dentist", locations: ["Cypress"], slug: "laith-yahya-dds", imgKey: "laith-yahya" },
  { name: "Dr. Sameer Bilal", credentials: "DDS", role: "General Dentist", locations: ["Katy"], slug: "sameer-bilal-dds", imgKey: "sameer-bilal" },
  { name: "Dr. Sarah Maredia", credentials: "DDS", role: "General Dentist", locations: ["Cypress", "Katy"], slug: "sarah-maredia-dds", imgKey: "sarah-maredia" },
  { name: "Dr. Shayan Alkhiro", credentials: "DDS", role: "General Dentist", locations: ["Cypress"], slug: "shayan-alkhiro-dds", imgKey: "shayan-alkhiro" },
];

const filterByLocation = <T extends { locations: string[] }>(items: T[], filter: LocationFilter) =>
  filter === "all" ? items : items.filter(m => m.locations.includes(filter));

const LocationBadge = ({ locations }: { locations: string[] }) => (
  <div className="flex flex-wrap gap-1.5 mt-2">
    {locations.map(loc => (
      <span key={loc} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-sans font-medium bg-primary/10 text-primary">
        <MapPin className="w-2.5 h-2.5" />{loc}
      </span>
    ))}
  </div>
);

const TeamCard = ({ name, credentials, role, locations, imgKey }: { name: string; credentials?: string; role: string; locations: string[]; imgKey?: string }) => {
  const img = imgKey ? TEAM_IMAGES[imgKey] : null;
  return (
    <div className="bg-card rounded-xl border border-border p-5 text-center hover:shadow-md hover:border-primary/20 transition-all">
      <div className="w-20 h-20 rounded-full mx-auto mb-3 bg-muted flex items-center justify-center overflow-hidden">
        {img ? (
          <img src={img.url} alt={img.alt} className="w-full h-full object-cover" loading="lazy" width={80} height={80} />
        ) : (
          <span className="text-lg font-display font-bold text-primary">
            {name.split(" ").map(n => n[0]).join("").slice(0, 2)}
          </span>
        )}
      </div>
      <h3 className="font-display text-sm font-bold text-foreground">{name}</h3>
      <p className="text-xs font-sans text-primary font-medium">{credentials ? `${credentials} — ` : ""}{role}</p>
      <LocationBadge locations={locations} />
    </div>
  );
};

const OurTeam = () => {
  useDocTitle("Meet Our Team | Smile Avenue Family Dentistry");
  const [filter, setFilter] = useState<LocationFilter>("all");

  const filteredDoctors = filterByLocation(doctors, filter);
  const filteredHygienists = filterByLocation(TEAM_MEMBERS.hygienists, filter);
  const filteredAssistants = filterByLocation(TEAM_MEMBERS.assistants, filter);
  const filteredFrontOffice = filterByLocation(TEAM_MEMBERS.frontOffice, filter);

  const totalShowing = filteredDoctors.length + filteredHygienists.length + filteredAssistants.length + filteredFrontOffice.length;

  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>Meet Our Team | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Meet the 30 dedicated dental professionals at Smile Avenue Family Dentistry in Cypress and Katy, TX. Doctors, hygienists, assistants, and office staff committed to your comfort." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/our-team/" />
        <meta property="og:title" content="Meet Our Team | Smile Avenue Family Dentistry" />
        <meta property="og:description" content="Meet the 30 dedicated dental professionals at Smile Avenue Family Dentistry in Cypress and Katy, TX." />
        <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/our-team/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta property="og:image" content="https://www.smileavenuefamilydentistry.com/logo-full.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar phone={PHONE} phoneFormatted={PHONE_FMT} bookingUrl={BOOKING} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0">
        {/* HERO */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <nav className="mb-6 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Our Team</span>
            </nav>
            <div className="text-center max-w-3xl mx-auto">
              <p className="kicker">OUR TEAM</p>
              <h1 className="section-heading text-4xl md:text-5xl">Meet the Smile Avenue Team</h1>
              <p className="section-body">30 dedicated professionals across two locations, committed to your comfort and care.</p>

              {/* Location Filter */}
              <div className="flex justify-center gap-2 mt-6">
                {(["all", "Cypress", "Katy"] as LocationFilter[]).map(loc => (
                  <button
                    key={loc}
                    onClick={() => setFilter(loc)}
                    className={`px-5 py-2.5 rounded-full text-sm font-sans font-medium transition-colors ${filter === loc ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:border-primary/30"}`}
                  >
                    {loc === "all" ? `All (30)` : loc}
                  </button>
                ))}
              </div>
              {filter !== "all" && (
                <p className="text-xs font-sans text-muted-foreground mt-3">Showing {totalShowing} team members at {filter}</p>
              )}
            </div>
          </div>
        </section>

        {/* DOCTORS */}
        {filteredDoctors.length > 0 && (
          <section className="section-padding section-alt">
            <div className="container mx-auto">
              <div className="flex items-center gap-2 mb-8">
                <Users className="w-5 h-5 text-primary" />
                <h2 className="font-display text-2xl font-bold text-foreground">Doctors ({filteredDoctors.length})</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors.map(doc => {
                  const img = DOCTOR_IMAGES[doc.imgKey];
                  return (
                    <div key={doc.slug} className="bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-lg hover:border-primary/20 transition-all">
                      <div className="aspect-[3/4] overflow-hidden bg-muted">
                        {img ? (
                          <img src={img.url} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={400} height={533} />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-4xl font-display font-bold text-primary/30">{doc.name.split(" ").slice(1, 2).join("")[0]}</span>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="font-display text-xl font-bold text-foreground">{doc.name}</h3>
                        <p className="text-sm font-sans text-primary font-medium">{doc.credentials} — {doc.role}</p>
                        <LocationBadge locations={doc.locations} />
                        <Link to={`/doctors/${doc.slug}`} className="inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-primary hover:underline mt-4">
                          Meet {doc.name.split(" ").slice(0, 2).join(" ")} <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* HYGIENISTS */}
        {filteredHygienists.length > 0 && (
          <section className="section-padding bg-background">
            <div className="container mx-auto">
              <div className="flex items-center gap-2 mb-8">
                <Users className="w-5 h-5 text-primary" />
                <h2 className="font-display text-2xl font-bold text-foreground">Dental Hygienists ({filteredHygienists.length})</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {filteredHygienists.map(m => (
                  <TeamCard key={m.name} name={m.name} credentials={m.credentials} role={m.role} locations={m.locations} imgKey={m.imgKey} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ASSISTANTS */}
        {filteredAssistants.length > 0 && (
          <section className="section-padding section-alt">
            <div className="container mx-auto">
              <div className="flex items-center gap-2 mb-8">
                <Users className="w-5 h-5 text-primary" />
                <h2 className="font-display text-2xl font-bold text-foreground">Dental Assistants ({filteredAssistants.length})</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {filteredAssistants.map(m => (
                  <TeamCard key={m.name} name={m.name} credentials={m.credentials} role={m.role} locations={m.locations} imgKey={m.imgKey} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FRONT OFFICE */}
        {filteredFrontOffice.length > 0 && (
          <section className="section-padding bg-background">
            <div className="container mx-auto">
              <div className="flex items-center gap-2 mb-8">
                <Users className="w-5 h-5 text-primary" />
                <h2 className="font-display text-2xl font-bold text-foreground">Front Office & Administration ({filteredFrontOffice.length})</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {filteredFrontOffice.map(m => (
                  <TeamCard key={m.name} name={m.name} role={m.role} locations={m.locations} imgKey={m.imgKey} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CAREERS CTA */}

        {/* Video */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">WATCH & LEARN</p>
            <h2 className="section-heading">What Our Team Loves Most</h2>
            <div className="max-w-2xl mx-auto mt-8">
              <LazyYouTube videoId={PAGE_VIDEOS.ourTeam.youtubeId} title={PAGE_VIDEOS.ourTeam.title} />
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

export default OurTeam;
