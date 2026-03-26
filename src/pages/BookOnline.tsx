import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, CalendarCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";
const KATY_BOOKING = "https://book.modento.io/c/8f2db4d7f5d14a26a0758de49dcf8cbc/smileavenue";

const BookOnline = () => {
  return (
    <>
      <Helmet>
        <title>Book Online | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Book your dental appointment online at Smile Avenue. Choose your preferred location — Cypress or Katy, TX — and schedule in minutes." />
        <link rel="canonical" href="https://smileavenuedentistry.com/book-online/" />
      </Helmet>
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />

      <main className="pb-14 lg:pb-0">
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <nav className="mb-6 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Book Online</span>
            </nav>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="kicker">SCHEDULE YOUR VISIT</p>
              <h1 className="section-heading text-4xl md:text-5xl">Book Your Appointment Online</h1>
              <p className="section-body">Select your preferred location below to schedule your visit. Booking takes just a few minutes — and our team will confirm your appointment right away.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { name: "Cypress", address: "9212 Fry Rd #120, Cypress, TX 77433", phone: "(832) 648-1756", phonePlain: "8326481756", hours: "Mon–Fri 8am–5pm", booking: CYPRESS_BOOKING },
                { name: "Katy", address: "23541 Westheimer Pkwy Ste #170, Katy, TX 77494", phone: "(281) 800-5008", phonePlain: "2818005008", hours: "Mon–Fri 8am–5pm", booking: KATY_BOOKING },
              ].map((loc, i) => (
                <div key={i} className="bg-card rounded-2xl border border-border p-8 text-center shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                    <CalendarCheck className="w-8 h-8" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">Smile Avenue {loc.name}</h2>
                  <div className="space-y-2 text-sm font-sans text-muted-foreground mb-6">
                    <div className="flex items-center justify-center gap-2"><MapPin className="w-4 h-4 text-primary" />{loc.address}</div>
                    <div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary" />{loc.phone}</div>
                    <div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary" />{loc.hours}</div>
                  </div>
                  <a href={loc.booking} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book at {loc.name}</a>
                  <a href={`tel:${loc.phonePlain}`} className="btn-secondary w-full text-center mt-3">Call to Book</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding section-alt text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="section-heading">Prefer to Book by Phone?</h2>
            <p className="section-body">Our friendly team is happy to help you schedule over the phone.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:8326481756" className="btn-primary flex items-center gap-2"><Phone className="w-4 h-4" /> Cypress: (832) 648-1756</a>
              <a href="tel:2818005008" className="btn-secondary flex items-center gap-2"><Phone className="w-4 h-4" /> Katy: (281) 800-5008</a>
            </div>
          </div>
        </section>
      </main>

      <MobileStickyBar phone={CYPRESS_PHONE} bookingUrl={CYPRESS_BOOKING} />
      <Footer />
    </>
  );
};

export default BookOnline;
