import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { MapPin, Phone, Clock, Star, Shield, Calendar, Users, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const KATY_PHONE = "2818005008";
const KATY_PHONE_FORMATTED = "(281) 800-5008";
const KATY_BOOKING = "https://book.modento.io/c/8f2db4d7f5d14a26a0758de49dcf8cbc/smileavenue";

const locations = [
  {
    name: "Cypress Office",
    address: "9212 Fry Rd #120",
    city: "Cypress, TX 77433",
    phone: CYPRESS_PHONE,
    phoneFormatted: CYPRESS_PHONE_FORMATTED,
    hours: "Mon–Fri 8:30am–5pm",
    bookingUrl: CYPRESS_BOOKING,
    pageUrl: "/cypress-tx/",
    communities: "Cypress, Bridgeland, Fairfield, Towne Lake",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.1743654401334!2d-95.7273261!3d29.916881999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d626dcbf8be7%3A0xc78b697f2e5a6c9c!2sSmile%20Avenue%20Family%20Dentistry%20-%20Cypress!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus",
  },
  {
    name: "Katy Office",
    address: "23541 Westheimer Pkwy Ste #170",
    city: "Katy, TX 77494",
    phone: KATY_PHONE,
    phoneFormatted: KATY_PHONE_FORMATTED,
    hours: "Mon–Fri 8:30am–5pm · Sat 8am–2pm",
    bookingUrl: KATY_BOOKING,
    pageUrl: "/katy-tx/",
    communities: "Katy, Cinco Ranch, Seven Meadows, Firethorne",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.5597906542334!2d-95.7754549!3d29.732508199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864121d672dd8005%3A0xc421718f6ea402f7!2sSmile%20Avenue%20Family%20Dentistry%20-%20Katy!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus",
  },
];

const trustItems = [
  { icon: <Star className="w-5 h-5" />, label: "5,000+ Five-Star Reviews" },
  { icon: <Shield className="w-5 h-5" />, label: "Most Insurance Accepted" },
  { icon: <Calendar className="w-5 h-5" />, label: "Same-Day Appointments" },
  { icon: <Users className="w-5 h-5" />, label: "All Ages Welcome" },
];

const insuranceLogos = [
  "Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental",
  "MetLife", "United Healthcare", "Guardian", "Humana",
];

const Locations = () => {
  useDocTitle("Locations | Smile Avenue Family Dentistry");

  return (
    <>
      <Helmet>
        <title>Locations | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Two convenient Houston-area locations in Cypress and Katy, TX. Serving Bridgeland, Cinco Ranch, Fairfield & surrounding communities. Book your visit today." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/convenient-locations/" />
      </Helmet>
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />

      <main className="pb-14 lg:pb-0">
        {/* HERO */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <nav className="mb-6 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Locations</span>
            </nav>

            <div className="text-center max-w-3xl mx-auto">
              <p className="kicker">SMILE AVENUE FAMILY DENTISTRY</p>
              <h1 className="section-heading text-4xl md:text-5xl leading-tight">
                Two Convenient Houston Locations
              </h1>
              <p className="section-body">
                Serving Cypress, Katy, Cinco Ranch, Bridgeland & surrounding communities with hospitality-driven dental care your whole family will love.
              </p>
            </div>
          </div>
        </section>

        {/* LOCATION CARDS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {locations.map((loc) => (
                <div key={loc.name} className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
                  {/* Map placeholder */}
                  <iframe
                    src={loc.mapEmbed}
                    className="w-full aspect-video border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Google Map — ${loc.name}`}
                  />

                  <div className="p-6 md:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">{loc.name}</h2>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-sans text-foreground">{loc.address}<br />{loc.city}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary shrink-0" />
                        <a href={`tel:${loc.phone}`} className="text-sm font-sans font-medium text-foreground hover:text-primary transition-colors">
                          {loc.phoneFormatted}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm font-sans text-foreground">{loc.hours}</span>
                      </div>
                    </div>

                    <p className="text-xs font-sans text-muted-foreground mb-6">
                      Serving {loc.communities}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a href={loc.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-center flex-1">
                        Book at {loc.name.replace(" Office", "")}
                      </a>
                      <Link to={loc.pageUrl} className="btn-secondary text-center flex-1">
                        View {loc.name.replace(" Office", "")} Page
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="py-10 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustItems.map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <span className="text-sm font-sans font-semibold text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSURANCE LOGOS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">INSURANCE WE ACCEPT</p>
            <h2 className="section-heading">Most Major Plans Accepted</h2>
            <p className="section-body max-w-2xl mx-auto">
              We work with most major PPO insurance carriers. Our team will verify your benefits before your first visit so there are no surprises.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto">
              {insuranceLogos.map((name) => (
                <div key={name} className="bg-card rounded-xl border border-border py-6 px-4 flex items-center justify-center">
                  <span className="text-sm font-sans font-medium text-muted-foreground">{name}</span>
                </div>
              ))}
            </div>
            <p className="text-xs font-sans text-muted-foreground mt-6">
              Don't see your plan? <Link to="/insurance" className="text-primary hover:underline">Contact us to verify your coverage.</Link>
            </p>
          </div>
        </section>

        {/* CTA BAR */}
        <section className="gradient-cta py-16 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Experience the Smile Avenue Difference?
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Choose your nearest location and book a visit. New patients are always welcome at both offices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">
                Book at Cypress
              </a>
              <a href={KATY_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">
                Book at Katy
              </a>
              <a href={`tel:${CYPRESS_PHONE}`} className="btn-cta-outline">
                Call Us
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
