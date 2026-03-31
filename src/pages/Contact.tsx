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

        {/* Contact Form */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-2xl">
            <h2 className="section-heading text-center">Send Us a Message</h2>
            <p className="text-center text-sm font-sans text-muted-foreground mb-8">We typically respond within 1 business hour during office hours.</p>

            {submitted ? (
              <div className="text-center py-12 bg-card rounded-2xl border border-border">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"><Check className="w-8 h-8 text-primary" /></div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="font-body text-muted-foreground">We'll get back to you within 1 business hour.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-1.5">Full Name *</label>
                    <input type="text" required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-1.5">Email *</label>
                    <input type="email" required value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="john@email.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-1.5">Phone *</label>
                    <input type="tel" required value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-1.5">Preferred Location</label>
                    <select value={formData.location} onChange={e => setFormData(p => ({ ...p, location: e.target.value }))} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="">No preference</option>
                      <option value="cypress">Cypress</option>
                      <option value="katy">Katy</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-sans font-medium text-foreground mb-1.5">Message *</label>
                  <textarea rows={4} required value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="How can we help?" />
                </div>
                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            )}
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
