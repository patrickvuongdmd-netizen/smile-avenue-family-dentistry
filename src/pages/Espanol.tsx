import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Star, Phone, MapPin, Clock, SmilePlus, Sparkles, AlertCircle, Zap, Shield, Baby } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import TrustStrip from "@/components/TrustStrip";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";
import { OFFICE_IMAGES, PAGE_VIDEOS } from "@/lib/images";
import LazyYouTube from "@/components/LazyYouTube";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const KATY_PHONE = "2818005008";
const KATY_PHONE_FORMATTED = "(281) 800-5008";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";
const KATY_BOOKING = "https://book.modento.io/c/8f2db4d7f5d14a26a0758de49dcf8cbc/smileavenue";

const services = [
  { title: "Implantes Dentales", href: "/cypress-tx/dental-implants", icon: <SmilePlus className="w-6 h-6" /> },
  { title: "Odontología Cosmética", href: "/cypress-tx/cosmetic-dentistry", icon: <Sparkles className="w-6 h-6" /> },
  { title: "Dentista de Emergencia", href: "/cypress-tx/emergency-dentist", icon: <AlertCircle className="w-6 h-6" /> },
  { title: "Invisalign®", href: "/cypress-tx/invisalign", icon: <Zap className="w-6 h-6" /> },
  { title: "Blanqueamiento Dental", href: "/cypress-tx/teeth-whitening", icon: <Sparkles className="w-6 h-6" /> },
  { title: "Coronas Dentales", href: "/cypress-tx/dental-crowns", icon: <Shield className="w-6 h-6" /> },
  { title: "Odontología Pediátrica", href: "/cypress-tx/pediatric-dentistry", icon: <Baby className="w-6 h-6" /> },
  { title: "Dentaduras", href: "/cypress-tx/dentures", icon: <SmilePlus className="w-6 h-6" /> },
];

const faqs = [
  { question: "¿Aceptan seguro dental?", answer: "Sí, aceptamos la mayoría de los planes PPO incluyendo Aetna, Blue Cross Blue Shield, Cigna, Delta Dental, MetLife y más. También ofrecemos financiamiento a través de CareCredit y Sunbit, además de un plan de membresía para pacientes sin seguro." },
  { question: "¿Qué necesito como paciente nuevo?", answer: "Traiga su identificación con foto, tarjeta de seguro dental (si tiene), y una lista de medicamentos actuales. Puede completar los formularios en línea antes de su visita para ahorrar tiempo." },
  { question: "¿Ofrecen citas de emergencia?", answer: "Sí, ofrecemos citas de emergencia el mismo día. Llámenos al (832) 648-1756 para Cypress o (281) 800-5008 para Katy y lo atenderemos lo antes posible." },
  { question: "¿Cuánto tiempo dura el tratamiento de Invisalign?", answer: "El tratamiento de Invisalign generalmente dura entre 6 y 18 meses, dependiendo de la complejidad de su caso. Ofrecemos una consulta gratuita para evaluar su sonrisa y darle un plan personalizado." },
  { question: "¿Ofrecen sedación dental?", answer: "Sí, ofrecemos varias opciones de sedación para pacientes nerviosos, incluyendo sedación con óxido nitroso y sedación oral. Nuestro equipo se asegurará de que esté cómodo durante todo su tratamiento." },
];

const Espanol = () => {
  useDocTitle("Dentista en Cypress y Katy, TX | Smile Avenue Family Dentistry");

  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>Dentista en Cypress y Katy, TX | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Smile Avenue Family Dentistry — su dentista familiar en Cypress y Katy, TX. Más de 5,000 reseñas de 5 estrellas. Hablamos Español. Reserve en línea hoy." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/es/" />
        <meta property="og:title" content="Dentista en Cypress y Katy, TX | Smile Avenue Family Dentistry" />
        <meta property="og:description" content="Su dentista familiar en Cypress y Katy, TX. Más de 5,000 reseñas de 5 estrellas. Hablamos Español." />
        <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/es/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta property="og:image" content={OFFICE_IMAGES.homepageHero} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="alternate" hrefLang="es" href="https://www.smileavenuefamilydentistry.com/es/" />
        <link rel="alternate" hrefLang="en" href="https://www.smileavenuefamilydentistry.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.smileavenuefamilydentistry.com/" />
        <html lang="es" />
      </Helmet>
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0 ">
        {/* HERO */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="kicker">CYPRESS Y KATY, TEXAS</p>
                <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.5rem] leading-tight">Su Dentista Familiar en Cypress y Katy, TX</h1>
                <p className="section-body">En Smile Avenue, combinamos tecnología moderna con atención hospitalaria para toda su familia. Dos ubicaciones convenientes en el área de Houston.</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Reserve en Línea</a>
                  <a href={`tel:${CYPRESS_PHONE}`} className="btn-secondary">Llame Ahora</a>
                </div>
                <div className="flex items-center gap-3 text-sm font-sans text-muted-foreground">
                  <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}</div>
                  <span>4.9 de más de 5,000 reseñas</span>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={OFFICE_IMAGES.homepageHero}
                  alt="Consultorio dental moderno de Smile Avenue Family Dentistry en Cypress y Katy, TX"
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="py-6 border-y border-border bg-card">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-sans font-medium text-muted-foreground text-center">
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-primary text-primary" />Más de 5,000 Reseñas de 5 Estrellas</span>
              <span className="hidden sm:inline text-border">|</span>
              <span>Citas el Mismo Día</span>
              <span className="hidden sm:inline text-border">|</span>
              <span className="font-bold text-primary">Hablamos Español</span>
              <span className="hidden sm:inline text-border">|</span>
              <span>2 Ubicaciones en Houston</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <p className="kicker text-center">NUESTROS SERVICIOS</p>
            <h2 className="section-heading text-center">Cuidado Dental Completo</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {services.map((s) => (
                <Link key={s.title} to={s.href} className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all group text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">{s.icon}</div>
                  <h3 className="font-display text-base font-bold text-foreground">{s.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATIONS */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <p className="kicker text-center">NUESTRAS UBICACIONES</p>
            <h2 className="section-heading text-center">Dos Oficinas Convenientes</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
              {/* Cypress */}
              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Oficina de Cypress</h3>
                <div className="space-y-3 text-sm font-sans text-muted-foreground mb-6">
                  <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />9212 Fry Rd #120, Cypress, TX 77433</div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${CYPRESS_PHONE}`} className="hover:text-primary text-lg font-bold text-foreground">{CYPRESS_PHONE_FORMATTED}</a></div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" />Lun–Vie 8:30am–5pm</div>
                </div>
                <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Reserve en Cypress</a>
              </div>
              {/* Katy */}
              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Oficina de Katy</h3>
                <div className="space-y-3 text-sm font-sans text-muted-foreground mb-6">
                  <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />23541 Westheimer Pkwy Ste #170, Katy, TX 77494</div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${KATY_PHONE}`} className="hover:text-primary text-lg font-bold text-foreground">{KATY_PHONE_FORMATTED}</a></div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" />Lun–Vie 8:30am–5pm · Sáb 8am–2pm</div>
                </div>
                <a href={KATY_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Reserve en Katy</a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding section-alt">
          <div className="container mx-auto max-w-3xl">
            <p className="kicker text-center">PREGUNTAS FRECUENTES</p>
            <h2 className="section-heading text-center">Preguntas Frecuentes</h2>
            <div className="mt-10"><FaqAccordion items={faqs} /></div>
          </div>
        </section>

        {/* CTA */}

        {/* Video */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">MIRE & APRENDA</p>
            <h2 className="section-heading">Conozca Nuestra Clínica</h2>
            <div className="max-w-2xl mx-auto mt-8">
              <LazyYouTube videoId={PAGE_VIDEOS.espanol.youtubeId} title={PAGE_VIDEOS.espanol.title} />
            </div>
          </div>
        </section>

      </main>

      <MobileStickyBar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Espanol;
