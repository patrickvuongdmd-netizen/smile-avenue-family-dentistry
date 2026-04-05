import { Shield, Zap, Users, Star, FlaskConical, ScanLine, Heart, Building2 } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Implantes Dentales",
  serviceSlug: "implantes-dentales",
  videoId: "UAwWDYzJdvw",
  canonicalPath: "/es/implantes-dentales",
  lang: "es",
  hreflangAlternates: [
    { lang: "en", href: "https://www.smileavenuefamilydentistry.com/services/dental-implants/" },
    { lang: "es", href: "https://www.smileavenuefamilydentistry.com/es/implantes-dentales/" },
  ],
  metaTitle: "Implantes Dentales en Cypress y Katy, TX | Smile Avenue Family Dentistry",
  metaDescription: "Implantes dentales en Cypress y Katy, TX — reemplazo permanente de dientes, laboratorio dental propio, sedación disponible. 4.9★ con más de 5,000 reseñas. Llame hoy.",
  heroKicker: "REEMPLAZO PERMANENTE DE DIENTES",
  heroHeading: "Implantes Dentales en Cypress y Katy, TX",
  heroBody: "Los dientes perdidos afectan su sonrisa, su confianza y su salud oral. En Smile Avenue, el Dr. Patrick Vuong ofrece implantes dentales permanentes con tecnología digital avanzada y nuestro laboratorio dental propio para restauraciones precisas y personalizadas.",
  heroCta1: "Agendar Consulta",
  heroCta2: "Llamar (832) 648-1756",
  heroImage: "Dental Implants",
  heroValueProps: [
    "Laboratorio Dental Smile propio",
    "Colocación guiada por 3D",
    "Opciones de sedación disponibles",
    "Aceptamos la mayoría de seguros PPO",
    "Financiamiento al 0% con CareCredit",
  ],
  introKicker: "ENTENDIENDO LOS IMPLANTES DENTALES",
  introHeading: "¿Qué Son los Implantes Dentales?",
  introParas: [
    "Un implante dental es un pequeño poste de titanio que se coloca quirúrgicamente en el hueso de la mandíbula, donde se fusiona naturalmente con el hueso a través de la osteointegración. Una vez cicatrizado, sirve como base permanente para una corona, puente o arco completo de dientes personalizados.",
    "A diferencia de las dentaduras o puentes, los implantes replican las raíces naturales de los dientes, previenen la pérdida ósea, preservan la estructura facial y le permiten comer, hablar y sonreír con total confianza.",
    "Para familias en Bridgeland, Towne Lake, Cinco Ranch y todo el área de Houston, Smile Avenue es la opción de confianza para implantes dentales. También ofrecemos soluciones de arco completo como All-on-4 y All-on-6 con opciones de sedación para su comodidad total.",
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Calificación" },
    { icon: <Shield className="w-5 h-5" />, label: "Cirugía Guiada 3D" },
    { icon: <Users className="w-5 h-5" />, label: "1,000+ Implantes Colocados" },
  ],
  subServicesKicker: "¿POR QUÉ SMILE AVENUE?",
  subServicesHeading: "¿Por Qué Elegirnos para Implantes Dentales?",
  subServicesBody: "Tecnología avanzada y precisión interna para resultados predecibles y duraderos.",
  subServices: [
    { title: "Laboratorio Dental Propio", description: "Ajuste preciso y tiempo de entrega más rápido en restauraciones de implantes personalizadas — sin demoras de terceros.", icon: <Building2 className="w-5 h-5" /> },
    { title: "Escáneres 3D CBCT y Digitales", description: "Escáneres digitales Medit e imágenes 3D CBCT para precisión quirúrgica — sin moldes incómodos.", icon: <ScanLine className="w-5 h-5" /> },
    { title: "Opciones de Sedación", description: "Comodidad total durante su procedimiento con múltiples opciones de sedación disponibles.", icon: <Heart className="w-5 h-5" /> },
    { title: "Todo Bajo Un Mismo Techo", description: "Sin referidos a especialistas externos — colocación y restauración de implantes aquí mismo.", icon: <FlaskConical className="w-5 h-5" /> },
  ],
  processKicker: "EL PROCESO DE IMPLANTES",
  processHeading: "Qué Esperar",
  processBody: "Un proceso sencillo desde la consulta hasta su nuevo diente permanente.",
  processSteps: [
    { number: "01", title: "Consulta Integral", description: "Escaneo 3D CBCT e impresiones digitales para evaluar la densidad ósea y planificar la colocación precisa del implante.", icon: <ScanLine className="w-5 h-5" /> },
    { number: "02", title: "Cirugía de Colocación", description: "Colocación de implante guiada digitalmente bajo anestesia local o sedación para máxima comodidad.", icon: <Zap className="w-5 h-5" /> },
    { number: "03", title: "Período de Cicatrización", description: "3-6 meses de osteointegración mientras usa una restauración temporal para que nunca esté sin dientes.", icon: <Shield className="w-5 h-5" /> },
    { number: "04", title: "Entrega de Corona Final", description: "Su corona permanente es diseñada y fabricada en nuestro laboratorio dental propio para un ajuste perfecto.", icon: <FlaskConical className="w-5 h-5" /> },
  ],
  faqHeading: "Preguntas Sobre Implantes Dentales",
  faqs: [
    { question: "¿Cuánto cuestan los implantes dentales?", answer: "Un implante individual con corona generalmente cuesta entre $3,000-$5,000. Las restauraciones de arco completo All-on-4 comienzan alrededor de $20,000 por arco. Ofrecemos financiamiento al 0% con CareCredit y aceptamos la mayoría de planes PPO." },
    { question: "¿Soy candidato para implantes dentales?", answer: "La mayoría de los adultos con uno o más dientes perdidos son candidatos. Necesita densidad ósea adecuada y encías saludables. Si ha ocurrido pérdida ósea, el injerto óseo puede reconstruir la base." },
    { question: "¿Cuánto duran los implantes dentales?", answer: "El poste de titanio está diseñado para durar más de 20 años y a menudo toda la vida con buena higiene oral. La corona generalmente dura 10-15 años antes de necesitar reemplazo." },
    { question: "¿Es doloroso el procedimiento?", answer: "No. La anestesia local adormece el área completamente, y ofrecemos óxido nitroso, sedación oral y sedación IV para pacientes nerviosos. La mayoría reporta que la molestia postoperatoria es más leve de lo esperado." },
    { question: "¿Cuánto tiempo toma todo el proceso?", answer: "El tiempo total es típicamente de 3-6 meses. La colocación del implante toma aproximadamente una hora por implante. La mayor parte del tiempo es de cicatrización." },
    { question: "¿Los implantes se ven naturales?", answer: "Sí. Nuestro laboratorio dental propio fabrica cada corona personalizada para coincidir con el color, forma y translucidez de sus dientes naturales. La mayoría de las personas no pueden notar la diferencia." },
  ],
  reviewsKicker: "RESEÑAS DE PACIENTES",
  reviewsHeading: "Lo Que Dicen Nuestros Pacientes",
  testimonials: [
    { quote: "El Dr. Vuong me colocó dos implantes y los resultados son increíbles. Se ven completamente naturales y puedo comer cualquier cosa de nuevo.", name: "Ricardo M.", source: "Reseña de Google", location: "Fairfield, Cypress" },
    { quote: "Me faltaba un diente frontal por años. El implante que me dieron en Smile Avenue cambió mi vida. ¡Ahora sonrío todo el tiempo!", name: "Sandra L.", source: "Reseña de Google", location: "Towne Lake, Cypress" },
    { quote: "Me hicieron implantes All-on-4 en Smile Avenue y no podría estar más contento. El equipo fue muy solidario durante todo el proceso.", name: "Tomás B.", source: "Reseña de Google", location: "Bridgeland, Cypress" },
  ],
  ctaHeading: "Comience Su Viaje de Implantes Hoy",
  ctaBody: "Agende una consulta y descubra cómo los implantes dentales pueden restaurar su sonrisa permanentemente.",
};

const ImplantesDentales = () => <ServicePageTemplate data={data} />;
export default ImplantesDentales;
