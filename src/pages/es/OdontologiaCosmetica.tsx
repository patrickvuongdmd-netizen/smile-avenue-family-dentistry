import { Sparkles, Shield, Eye, Palette, Star, FlaskConical, Heart } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Odontología Cosmética",
  serviceSlug: "odontologia-cosmetica",
  videoId: "JLVp9i_Vru4",
  canonicalPath: "/es/odontologia-cosmetica",
  lang: "es",
  hreflangAlternates: [
    { lang: "en", href: "https://www.smileavenuefamilydentistry.com/services/cosmetic-dentistry/" },
    { lang: "es", href: "https://www.smileavenuefamilydentistry.com/es/odontologia-cosmetica/" },
  ],
  metaTitle: "Odontología Cosmética en Cypress y Katy, TX | Carillas, Blanqueamiento | Smile Avenue",
  metaDescription: "Odontología cosmética en Cypress y Katy, TX — carillas, blanqueamiento, bonding y transformaciones de sonrisa. Laboratorio propio. 4.9★. Llame hoy.",
  heroKicker: "TRANSFORMACIONES DE SONRISA",
  heroHeading: "Odontología Cosmética en Cypress y Katy, TX",
  heroBody: "Su sonrisa es su primera impresión. La odontología cosmética en Smile Avenue le ayuda a sentirse seguro con carillas de aspecto natural, blanqueamiento, bonding y transformaciones completas de sonrisa.",
  heroCta1: "Agendar Consulta Cosmética",
  heroCta2: "Llamar (832) 648-1756",
  heroImage: "Cosmetic Dentistry",
  heroValueProps: [
    "Atención cosmética compasiva y sin juicios",
    "Laboratorio Dental Smile propio para carillas y coronas",
    "Opciones de pago flexibles y financiamiento al 0%",
    "Ayuda para navegar su cobertura de seguro",
    "Vistas previas digitales de su sonrisa antes del tratamiento",
  ],
  introKicker: "TRANSFORME SU SONRISA",
  introHeading: "Opciones de Odontología Cosmética",
  introParas: [
    "Ya sea que quiera reparar una sola astilla o transformar completamente su sonrisa, nuestros servicios cosméticos incluyen carillas de porcelana, blanqueamiento dental, bonding dental, alineadores transparentes Invisalign y transformaciones completas de sonrisa. Cada tratamiento está diseñado para resultados de aspecto natural.",
    "Nuestro Laboratorio Dental Smile propio nos da control total sobre la artesanía de sus carillas, coronas y restauraciones — asegurando coincidencia precisa de color y ajuste perfecto. Familias de toda el área de Houston confían en Smile Avenue para consultas cosméticas sin juicios y resultados impresionantes.",
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Calificación" },
    { icon: <FlaskConical className="w-5 h-5" />, label: "Laboratorio Dental Propio" },
    { icon: <Sparkles className="w-5 h-5" />, label: "Expertos en Transformación de Sonrisa" },
  ],
  subServicesKicker: "¿POR QUÉ ELEGIRNOS?",
  subServicesHeading: "¿Por Qué los Pacientes Nos Eligen?",
  subServicesBody: "Arte y tecnología se unen para resultados que se ven y sienten naturales.",
  subServices: [
    { title: "Precisión de Laboratorio Propio", description: "Nuestro laboratorio fabrica carillas y restauraciones internamente para coincidencia precisa de color, ajuste perfecto y tiempos más rápidos.", icon: <FlaskConical className="w-5 h-5" /> },
    { title: "Diseño Digital de Sonrisa", description: "Vea su nueva sonrisa antes de comenzar el tratamiento con imágenes digitales y vistas previas virtuales.", icon: <Eye className="w-5 h-5" /> },
    { title: "Opciones Completas", description: "Desde blanqueamiento hasta carillas y transformaciones completas — ofrecemos cada tratamiento cosmético bajo un mismo techo.", icon: <Palette className="w-5 h-5" /> },
    { title: "Consultas Sin Juicios", description: "Escuchamos sus metas sin juicios y creamos un plan que se ajusta a su visión y presupuesto.", icon: <Heart className="w-5 h-5" /> },
  ],
  processKicker: "SU VIAJE DE SONRISA",
  processHeading: "Qué Esperar",
  processBody: "Un proceso personalizado desde la visión inicial hasta resultados impresionantes.",
  processSteps: [
    { number: "01", title: "Evaluación de Sonrisa", description: "Evaluamos sus dientes, discutimos sus metas y exploramos qué tratamientos cosméticos lograrán su sonrisa ideal.", icon: <Eye className="w-5 h-5" /> },
    { number: "02", title: "Diseño Digital", description: "Usando imágenes digitales, le mostramos una vista previa de su nueva sonrisa para que vea los resultados antes de comenzar.", icon: <Palette className="w-5 h-5" /> },
    { number: "03", title: "Plan de Tratamiento", description: "Su plan personalizado se desarrolla con tiempos claros, costos y resultados esperados.", icon: <Shield className="w-5 h-5" /> },
    { number: "04", title: "Transformación de Sonrisa", description: "Sus tratamientos cosméticos se realizan con precisión y arte para resultados naturales y hermosos.", icon: <Sparkles className="w-5 h-5" /> },
  ],
  faqHeading: "Preguntas Sobre Odontología Cosmética",
  faqs: [
    { question: "¿Cuánto cuestan las carillas?", answer: "Las carillas de porcelana generalmente cuestan entre $1,200-$2,500 por diente. Ofrecemos financiamiento con CareCredit y consultas gratuitas para discutir sus opciones y presupuesto." },
    { question: "¿Cuánto tiempo toma una transformación de sonrisa?", answer: "La mayoría de las transformaciones se completan en 2-6 semanas dependiendo de los tratamientos involucrados. Algunos procedimientos como el blanqueamiento pueden hacerse en una sola visita." },
    { question: "¿El seguro cubre odontología cosmética?", answer: "Algunos procedimientos funcionalmente necesarios (coronas, bonding para dientes rotos) pueden estar cubiertos. Tratamientos puramente cosméticos generalmente no están cubiertos, pero el financiamiento está disponible." },
    { question: "¿Los resultados se verán naturales?", answer: "Sí — nuestro laboratorio dental propio asegura coincidencia precisa de color y translucidez natural. Diseñamos cada restauración para complementar sus rasgos faciales." },
    { question: "¿Cuánto duran los tratamientos cosméticos?", answer: "Las carillas de porcelana duran 15-20 años. El blanqueamiento profesional dura 6 meses a 2 años con mantenimiento. El bonding dura 5-10 años." },
    { question: "¿Ofrecen vistas previas digitales de la sonrisa?", answer: "Sí. Usamos tecnología de diseño digital de sonrisa para mostrarle cómo se verá su nueva sonrisa antes de comenzar cualquier tratamiento. Es una excelente manera de visualizar los resultados." },
  ],
  reviewsKicker: "RESEÑAS DE PACIENTES",
  reviewsHeading: "Lo Que Dicen Nuestros Pacientes",
  testimonials: [
    { quote: "Mi transformación de sonrisa en Smile Avenue superó todas mis expectativas. Las carillas se ven completamente naturales y no puedo dejar de sonreír.", name: "Priya S.", source: "Reseña de Google", location: "Cross Creek Ranch, Katy" },
    { quote: "Estuve acomplejada por mis dientes por años. Después del blanqueamiento y bonding, finalmente me siento segura.", name: "Marcus T.", source: "Reseña de Google", location: "Firethorne, Katy" },
    { quote: "La vista previa digital de mi nueva sonrisa me convenció. ¡Poder ver los resultados antes de comprometerme hizo todo el proceso sin estrés!", name: "Lauren H.", source: "Reseña de Google", location: "Cinco Ranch, Katy" },
  ],
  ctaHeading: "¿Lista para la Sonrisa de Sus Sueños?",
  ctaBody: "Agende su consulta cosmética gratuita y descubra lo que es posible para su sonrisa.",
};

const OdontologiaCosmetica = () => <ServicePageTemplate data={data} />;
export default OdontologiaCosmetica;
