import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import Navbar from "@/components/Navbar";
import TrustTicker from "@/components/TrustTicker";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import BackToTop from "@/components/BackToTop";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const sections = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Book Online", href: "/book-online" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Cypress, TX", href: "/cypress-tx" },
      { label: "Katy, TX", href: "/katy-tx" },
      { label: "All Locations", href: "/convenient-locations" },
    ],
  },
  {
    title: "Neighborhoods — Cypress",
    links: [
      { label: "Bridgeland Dentist", href: "/cypress-tx/bridgeland-dentist" },
      { label: "Towne Lake Dentist", href: "/cypress-tx/towne-lake-dentist" },
      { label: "Fairfield Dentist", href: "/cypress-tx/fairfield-dentist" },
      { label: "Cy-Fair Dentist", href: "/cypress-tx/cyfair-dentist" },
      { label: "Jersey Village Dentist", href: "/cypress-tx/jersey-village-dentist" },
    ],
  },
  {
    title: "Neighborhoods — Katy",
    links: [
      { label: "Cinco Ranch Dentist", href: "/katy-tx/cinco-ranch-dentist" },
      { label: "Firethorne Dentist", href: "/katy-tx/firethorne-dentist" },
      { label: "Cross Creek Ranch Dentist", href: "/katy-tx/cross-creek-ranch-dentist" },
      { label: "Westheimer Parkway Dentist", href: "/katy-tx/westheimer-parkway-dentist" },
      { label: "Fulshear Dentist", href: "/katy-tx/fulshear-dentist" },
    ],
  },
  {
    title: "Services — Cypress",
    links: [
      { label: "Emergency Dentist", href: "/cypress-tx/emergency-dentist" },
      { label: "Dental Implants", href: "/cypress-tx/dental-implants" },
      { label: "Cosmetic Dentistry", href: "/cypress-tx/cosmetic-dentistry" },
      { label: "Teeth Whitening", href: "/cypress-tx/teeth-whitening" },
      { label: "Dental Crowns", href: "/cypress-tx/dental-crowns" },
      { label: "All-on-X Implants", href: "/cypress-tx/all-on-x-implants" },
      { label: "Invisalign", href: "/cypress-tx/invisalign" },
      { label: "Root Canal", href: "/cypress-tx/root-canal" },
      { label: "Dental Cleaning", href: "/cypress-tx/dental-cleaning" },
      { label: "Pediatric Dentistry", href: "/cypress-tx/pediatric-dentistry" },
      { label: "Dentures", href: "/cypress-tx/dentures" },
      { label: "Veneers", href: "/cypress-tx/veneers" },
      { label: "Dental Bridges", href: "/cypress-tx/dental-bridges" },
      { label: "Tooth Extraction", href: "/cypress-tx/tooth-extraction" },
      { label: "Oral Surgery", href: "/cypress-tx/oral-surgery" },
      { label: "Sedation Dentistry", href: "/cypress-tx/sedation-dentistry" },
      { label: "Preventive Dentistry", href: "/cypress-tx/preventive-dentistry" },
    ],
  },
  {
    title: "Services — Katy",
    links: [
      { label: "Emergency Dentist", href: "/katy-tx/emergency-dentist" },
      { label: "Dental Implants", href: "/katy-tx/dental-implants" },
      { label: "Cosmetic Dentistry", href: "/katy-tx/cosmetic-dentistry" },
      { label: "Teeth Whitening", href: "/katy-tx/teeth-whitening" },
      { label: "Dental Crowns", href: "/katy-tx/dental-crowns" },
      { label: "All-on-X Implants", href: "/katy-tx/all-on-x-implants" },
      { label: "Invisalign", href: "/katy-tx/invisalign" },
      { label: "Root Canal", href: "/katy-tx/root-canal" },
      { label: "Dental Cleaning", href: "/katy-tx/dental-cleaning" },
      { label: "Pediatric Dentistry", href: "/katy-tx/pediatric-dentistry" },
      { label: "Dentures", href: "/katy-tx/dentures" },
      { label: "Veneers", href: "/katy-tx/veneers" },
      { label: "Dental Bridges", href: "/katy-tx/dental-bridges" },
      { label: "Tooth Extraction", href: "/katy-tx/tooth-extraction" },
      { label: "Oral Surgery", href: "/katy-tx/oral-surgery" },
      { label: "Sedation Dentistry", href: "/katy-tx/sedation-dentistry" },
      { label: "Preventive Dentistry", href: "/katy-tx/preventive-dentistry" },
    ],
  },
  {
    title: "Team & Doctors",
    links: [
      { label: "Meet Our Team", href: "/our-team" },
      { label: "Meet Our Doctors", href: "/doctors" },
      { label: "Dr. Patrick Vuong, DMD", href: "/doctors/patrick-vuong-dmd" },
      { label: "Dr. Peter Kim, DDS", href: "/doctors/peter-kim-dds" },
      { label: "Dr. Laith Yahya, DDS", href: "/doctors/laith-yahya-dds" },
      { label: "Dr. Sameer Bilal, DDS", href: "/doctors/sameer-bilal-dds" },
      { label: "Dr. Sarah Maredia, DDS", href: "/doctors/sarah-maredia-dds" },
      { label: "Dr. Shayan Alkhiro, DDS", href: "/doctors/shayan-alkhiro-dds" },
    ],
  },
  {
    title: "Patient Resources",
    links: [
      { label: "New Patient Hub", href: "/patients/new-patient-hub" },
      { label: "Free Consultation", href: "/free-consultation" },
      { label: "Insurance & Financing", href: "/insurance" },
      { label: "Membership Plan", href: "/membership-plan" },
      { label: "Specials & Offers", href: "/specials" },
      { label: "Patient Testimonials", href: "/patient-testimonials" },
      { label: "Smile Gallery", href: "/smile-gallery" },
      { label: "Dental Lab", href: "/dental-lab" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Español", href: "/es" },
    ],
  },
];

const SitemapPage = () => {
  useDocTitle("Sitemap | Smile Avenue Family Dentistry");

  return (
    <>
      <Helmet>
        <title>Sitemap | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Complete sitemap for Smile Avenue Family Dentistry. Find all pages for our Cypress and Katy dental offices." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/sitemap/" />
        <meta property="og:title" content="Sitemap | Smile Avenue Family Dentistry" />
        <meta property="og:description" content="Complete sitemap for Smile Avenue Family Dentistry." />
        <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/sitemap/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
      </Helmet>
      <TrustTicker />

      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <TrustStrip />

      <main className="pb-14 lg:pb-0 ">
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <nav className="mb-6 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Sitemap</span>
            </nav>
            <h1 className="section-heading text-3xl md:text-4xl mb-12">Sitemap</h1>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {sections.map((section, i) => (
                <div key={i}>
                  <h2 className="font-display text-lg font-bold text-foreground mb-4">{section.title}</h2>
                  <ul className="space-y-2">
                    {section.links.map((link, j) => (
                      <li key={j}>
                        <Link to={link.href} className="text-sm font-sans text-muted-foreground hover:text-primary transition-colors">{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
};

export default SitemapPage;
