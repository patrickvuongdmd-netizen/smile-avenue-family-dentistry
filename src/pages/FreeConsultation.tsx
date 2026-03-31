import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Phone, MapPin, Clock, Check, Sparkles, Shield, Heart, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const benefits = [
  { icon: <Shield className="w-6 h-6" />, title: "No Obligation", description: "Get expert advice with zero pressure. We'll explain your options and let you decide." },
  { icon: <Heart className="w-6 h-6" />, title: "Personalized Plan", description: "Receive a custom treatment plan tailored to your goals, timeline, and budget." },
  { icon: <Sparkles className="w-6 h-6" />, title: "See Your Options", description: "We'll walk you through before-and-after examples and digital previews of your new smile." },
  { icon: <Star className="w-6 h-6" />, title: "Financing Guidance", description: "Learn about insurance coverage, payment plans, and our membership program." },
];

const testimonials = [
  { quote: "I came in nervous about implants and left feeling completely informed and excited. No pressure at all — just honest answers.", name: "James R.", source: "Google Review" },
  { quote: "The consultation was so thorough. They showed me exactly what my smile could look like with veneers. I booked my treatment that same day!", name: "Michelle T.", source: "Google Review" },
  { quote: "Best dental consultation I've ever had. They took the time to explain every option and the costs upfront. Highly recommend Smile Avenue.", name: "David K.", source: "Google Review" },
];

const KATY_BOOKING = "https://book.modento.io/c/8f2db4d7f5d14a26a0758de49dcf8cbc/smileavenue";

const FreeConsultation = () => {

  useDocTitle("Free Dental Consultation | Smile Avenue Family Dentistry");


  return (
    <>
      <Helmet>
        <title>Free Dental Consultation | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Schedule your free dental consultation at Smile Avenue. Get expert advice on implants, cosmetic dentistry, Invisalign, and more — no obligation." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/free-consultation/" />
      </Helmet>
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />

      <main className="pb-14 lg:pb-0">
        {/* Hero + Form */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <nav className="mb-6 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Free Consultation</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="kicker">NO COST · NO OBLIGATION</p>
                <h1 className="section-heading text-4xl md:text-5xl leading-tight">Free Dental Consultation</h1>
                <p className="section-body">
                  Considering a smile transformation? Our free consultation gives you the expert guidance you need — with zero pressure. Whether you're exploring implants, veneers, Invisalign, or a full smile makeover, our doctors will evaluate your needs, answer every question, and create a personalized plan just for you.
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-sans font-medium text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary" /> Expert Evaluation</span>
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary" /> Custom Treatment Plan</span>
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary" /> Financing Options</span>
                </div>
              </div>

              {/* Form */}
              <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="font-body text-muted-foreground">We'll be in touch within 1 business hour to schedule your free consultation.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-xl font-bold text-foreground mb-1">Request Your Free Consultation</h2>
                    <p className="text-sm font-sans text-muted-foreground mb-6">Fill out the form and we'll reach out within 1 business hour.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-sans font-medium text-foreground mb-1.5">Full Name *</label>
                        <input type="text" required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="John Smith" />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-sans font-medium text-foreground mb-1.5">Phone *</label>
                          <input type="tel" required value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="(555) 123-4567" />
                        </div>
                        <div>
                          <label className="block text-sm font-sans font-medium text-foreground mb-1.5">Email *</label>
                          <input type="email" required value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="john@email.com" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-sans font-medium text-foreground mb-1.5">Service of Interest *</label>
                        <select required value={formData.service} onChange={e => setFormData(p => ({ ...p, service: e.target.value }))} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                          <option value="">Select a service…</option>
                          {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-sans font-medium text-foreground mb-1.5">Message (optional)</label>
                        <textarea rows={3} value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us about your goals…" />
                      </div>
                      <button type="submit" className="btn-primary w-full">Request Free Consultation</button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <p className="kicker text-center">WHY CHOOSE US</p>
            <h2 className="section-heading text-center">What You'll Get from Your Free Consultation</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {benefits.map((b, i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">{b.icon}</div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm font-body text-muted-foreground">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <p className="kicker text-center">PATIENT STORIES</p>
            <h2 className="section-heading text-center">What Patients Say About Their Consultations</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <h2 className="section-heading text-center">Visit Us at Either Location</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              {[
                { name: "Cypress", address: "9212 Fry Rd #120, Cypress, TX 77433", phone: "(832) 648-1756", phonePlain: "8326481756", hours: "Mon–Fri 8:30am–5pm" },
                { name: "Katy", address: "23541 Westheimer Pkwy Ste #170, Katy, TX 77494", phone: "(281) 800-5008", phonePlain: "2818005008", hours: "Mon–Fri 8:30am–5pm · Sat 8am–2pm" },
              ].map((loc, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">Smile Avenue {loc.name}</h3>
                  <div className="space-y-3 text-sm font-sans text-muted-foreground">
                    <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" /><span>{loc.address}</span></div>
                    <div className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0 text-primary" /><a href={`tel:${loc.phonePlain}`} className="hover:text-primary transition-colors">{loc.phone}</a></div>
                    <div className="flex items-center gap-2"><Clock className="w-4 h-4 shrink-0 text-primary" /><span>{loc.hours}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding gradient-cta text-center">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">Ready to See What's Possible?</h2>
            <p className="font-body text-lg text-background/80 mb-8 max-w-2xl mx-auto">Your free consultation is the first step toward the smile you deserve. No cost, no pressure — just expert guidance.</p>
            <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn-cta-light">Fill Out the Form Above</a>
          </div>
        </section>
      </main>

      <MobileStickyBar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <Footer />
    </>
  );
};

export default FreeConsultation;
