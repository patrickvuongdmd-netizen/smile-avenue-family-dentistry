import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const locations = [
  { name: "Cypress", address: "9212 Fry Rd #120, Cypress, TX 77433", phone: "(832) 648-1756", phonePlain: "8326481756", hours: "Mon–Fri 8:30am–5pm", email: "info@smileavenuecypress.com", mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.1743654401334!2d-95.7273261!3d29.916881999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d626dcbf8be7%3A0xc78b697f2e5a6c9c!2sSmile%20Avenue%20Family%20Dentistry%20-%20Cypress!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus" },
  { name: "Katy", address: "23541 Westheimer Pkwy Ste #170, Katy, TX 77494", phone: "(281) 800-5008", phonePlain: "2818005008", hours: "Mon–Fri 8:30am–5pm · Sat 8am–2pm", email: "info@smileavenuekaty.com", mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.5597906542334!2d-95.7754549!3d29.732508199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864121d672dd8005%3A0xc421718f6ea402f7!2sSmile%20Avenue%20Family%20Dentistry%20-%20Katy!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus" },
];

const Contact = () => {
  useDocTitle("Contact Us | Smile Avenue Family Dentistry");


  return (
    <>
      <Helmet>
        <title>Contact Us | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Contact Smile Avenue Family Dentistry in Cypress or Katy, TX. Call, visit, or fill out our contact form. We respond within 1 business hour." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/contact/" />
      </Helmet>
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />

      <main className="pb-14 lg:pb-0">
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <nav className="mb-6 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Contact</span>
            </nav>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="kicker">GET IN TOUCH</p>
              <h1 className="section-heading text-4xl md:text-5xl">Contact Us</h1>
              <p className="section-body">We'd love to hear from you. Reach out by phone, visit either office, or fill out the form below. We typically respond within 1 business hour.</p>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {locations.map((loc, i) => (
                <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden">
                  <iframe
                    src={loc.mapEmbed}
                    className="w-full aspect-video border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Google Map — ${loc.name} Office`}
                  />
                  <div className="p-6">
                    <h2 className="font-display text-xl font-bold text-foreground mb-4">Smile Avenue {loc.name}</h2>
                    <div className="space-y-3 text-sm font-sans text-muted-foreground">
                      <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" /><span>{loc.address}</span></div>
                      <div className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0 text-primary" /><a href={`tel:${loc.phonePlain}`} className="hover:text-primary transition-colors">{loc.phone}</a></div>
                      <div className="flex items-center gap-2"><Clock className="w-4 h-4 shrink-0 text-primary" /><span>{loc.hours}</span></div>
                      <div className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0 text-primary" /><a href={`mailto:${loc.email}`} className="hover:text-primary transition-colors">{loc.email}</a></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Book Online CTA */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="section-heading">Ready to Book?</h2>
            <p className="section-body">Schedule your appointment online in under 60 seconds — or call us directly.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Cypress Online</a>
              <a href="https://book.modento.io/c/8f2db4d7f5d14a26a0758de49dcf8cbc/smileavenue" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Katy Online</a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <a href="tel:8326481756" className="text-sm font-sans font-semibold text-primary hover:underline flex items-center gap-1.5"><Phone className="w-4 h-4" /> Cypress: (832) 648-1756</a>
              <a href="tel:2818005008" className="text-sm font-sans font-semibold text-primary hover:underline flex items-center gap-1.5"><Phone className="w-4 h-4" /> Katy: (281) 800-5008</a>
            </div>
          </div>
        </section>

        <section className="section-padding gradient-cta text-center">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">Need Immediate Help?</h2>
            <p className="font-body text-lg text-background/80 mb-8">Call us directly for same-day appointments and emergencies.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:8326481756" className="btn-cta-light">Cypress: (832) 648-1756</a>
              <a href="tel:2818005008" className="btn-cta-outline">Katy: (281) 800-5008</a>
            </div>
          </div>
        </section>
      </main>

      <MobileStickyBar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <Footer />
    </>
  );
};

export default Contact;
