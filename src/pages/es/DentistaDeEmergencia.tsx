import { AlertCircle, Clock, Phone, Shield, Star, Zap, Heart } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Dentista de Emergencia",
  serviceSlug: "dentista-de-emergencia",
  videoId: "HB_uTHUfm-o",
  canonicalPath: "/es/dentista-de-emergencia",
  lang: "es",
  hreflangAlternates: [
    { lang: "en", href: "https://www.smileavenuefamilydentistry.com/services/emergency-dentist/" },
    { lang: "es", href: "https://www.smileavenuefamilydentistry.com/es/dentista-de-emergencia/" },
  ],
  metaTitle: "Dentista de Emergencia en Cypress y Katy, TX | Citas el Mismo Día | Smile Avenue",
  metaDescription: "Emergencia dental en Cypress y Katy, TX — citas el mismo día, alivio del dolor, dientes rotos y más. Abiertos sábados. Llame ahora al (832) 648-1756.",
  heroKicker: "EMERGENCIA DENTAL — CITAS EL MISMO DÍA",
  heroHeading: "Dentista de Emergencia en Cypress y Katy, TX",
  heroBody: "El dolor dental no espera — y nosotros tampoco. En Smile Avenue, ofrecemos citas de emergencia el mismo día para aliviar su dolor rápidamente y proteger su salud oral.",
  heroCta1: "Llamar Ahora",
  heroCta2: "Llamar (832) 648-1756",
  heroImage: "Emergency Dentist",
  heroValueProps: [
    "Citas de emergencia el mismo día",
    "Alivio inmediato del dolor",
    "Abiertos los sábados (Katy)",
    "Opciones de sedación disponibles",
    "Aceptamos la mayoría de seguros PPO",
  ],
  introKicker: "ATENCIÓN DENTAL DE EMERGENCIA",
  introHeading: "¿Qué Constituye una Emergencia Dental?",
  introParas: [
    "Las emergencias dentales incluyen dolor de muelas severo, dientes rotos o agrietados, dientes sueltos, abscesos, hinchazón facial, sangrado que no para, y dientes que se han caído. Cualquiera de estas situaciones requiere atención inmediata.",
    "En Smile Avenue, entendemos la urgencia de su situación. Nuestro equipo está preparado para atenderlo el mismo día que llame, aliviar su dolor, y crear un plan de tratamiento para restaurar su sonrisa.",
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Calificación" },
    { icon: <Clock className="w-5 h-5" />, label: "Citas el Mismo Día" },
    { icon: <Shield className="w-5 h-5" />, label: "Abiertos Sábados" },
  ],
  subServicesKicker: "TRATAMIENTOS DE EMERGENCIA",
  subServicesHeading: "Servicios de Emergencia Disponibles",
  subServicesBody: "Tratamiento rápido y compasivo cuando más lo necesita.",
  subServices: [
    { title: "Dolor de Muelas Severo", description: "Diagnóstico y alivio inmediato del dolor con radiografías digitales y opciones de tratamiento el mismo día.", icon: <AlertCircle className="w-5 h-5" /> },
    { title: "Dientes Rotos o Agrietados", description: "Restauración con coronas, carillas o bonding para proteger y reparar dientes dañados rápidamente.", icon: <Shield className="w-5 h-5" /> },
    { title: "Infecciones y Abscesos", description: "Tratamiento de infecciones con antibióticos y drenaje. Endodoncia de emergencia cuando sea necesario.", icon: <Heart className="w-5 h-5" /> },
    { title: "Diente Caído", description: "Reimplantación de emergencia o reemplazo con implante. El tiempo es crítico — llame inmediatamente.", icon: <Zap className="w-5 h-5" /> },
  ],
  processKicker: "QUÉ HACER EN UNA EMERGENCIA",
  processHeading: "Pasos a Seguir",
  processBody: "Actúe rápido y llámenos — estamos aquí para ayudarle.",
  processSteps: [
    { number: "01", title: "Llame Inmediatamente", description: "Llame al (832) 648-1756 y describa su situación. Le daremos instrucciones inmediatas y una cita el mismo día.", icon: <Phone className="w-5 h-5" /> },
    { number: "02", title: "Primeros Auxilios", description: "Siga nuestras instrucciones por teléfono para manejar el dolor y proteger el área afectada hasta su cita.", icon: <Shield className="w-5 h-5" /> },
    { number: "03", title: "Evaluación y Diagnóstico", description: "Radiografías digitales y examen completo para determinar la causa exacta y el mejor tratamiento.", icon: <Zap className="w-5 h-5" /> },
    { number: "04", title: "Tratamiento Inmediato", description: "Alivio del dolor y tratamiento restaurativo para proteger su salud oral y su sonrisa.", icon: <Heart className="w-5 h-5" /> },
  ],
  faqHeading: "Preguntas Sobre Emergencias Dentales",
  faqs: [
    { question: "¿Cuánto cuesta una visita de emergencia dental?", answer: "El examen de emergencia generalmente cuesta entre $100-$200. El costo total depende del tratamiento necesario. Aceptamos la mayoría de seguros PPO y ofrecemos financiamiento con CareCredit." },
    { question: "¿Pueden atenderme hoy?", answer: "Sí. Reservamos espacios cada día para emergencias dentales. Llame al (832) 648-1756 y haremos todo lo posible por atenderlo el mismo día." },
    { question: "¿Qué hago si se me cae un diente?", answer: "Recoja el diente por la corona (no la raíz), enjuáguelo suavemente con leche o agua, e intente recolocarlo en el espacio. Si no puede, guárdelo en leche y venga de inmediato. El tiempo es crítico — cada minuto cuenta." },
    { question: "¿Ofrecen sedación para emergencias?", answer: "Sí, ofrecemos óxido nitroso y sedación oral para ayudarle a sentirse cómodo durante procedimientos de emergencia." },
    { question: "¿Qué debo hacer con un dolor de muelas severo?", answer: "Tome ibuprofeno para reducir la inflamación, aplique una compresa fría en la mejilla, y llámenos inmediatamente. No espere — las infecciones dentales pueden empeorar rápidamente." },
    { question: "¿Atienden niños en emergencias?", answer: "Sí, atendemos emergencias dentales para toda la familia, incluyendo niños. Nuestro equipo es gentil y compasivo con los pacientes más jóvenes." },
  ],
  reviewsKicker: "RESEÑAS DE PACIENTES",
  reviewsHeading: "Lo Que Dicen Nuestros Pacientes",
  testimonials: [
    { quote: "Me rompí un diente un sábado y Smile Avenue me atendió el mismo día. El dolor desapareció inmediatamente. ¡Increíble equipo!", name: "Carlos R.", source: "Reseña de Google", location: "Cypress, TX" },
    { quote: "Tenía un dolor de muelas terrible y me dieron cita el mismo día. El tratamiento fue rápido y sin dolor. Muy agradecida.", name: "María G.", source: "Reseña de Google", location: "Katy, TX" },
    { quote: "Mi hijo se cayó y se rompió un diente. El equipo fue tan amable y profesional. Lo atendieron de inmediato.", name: "Ana P.", source: "Reseña de Google", location: "Cinco Ranch, Katy" },
  ],
  ctaHeading: "¿Emergencia Dental? Llame Ahora",
  ctaBody: "No espere — llámenos al (832) 648-1756 para una cita de emergencia el mismo día.",
};

const DentistaDeEmergencia = () => <ServicePageTemplate data={data} />;
export default DentistaDeEmergencia;
