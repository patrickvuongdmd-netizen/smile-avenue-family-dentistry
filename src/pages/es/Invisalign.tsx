import { Shield, Star, Users, Eye, Printer, SmilePlus, ScanLine } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Invisalign",
  serviceSlug: "invisalign",
  videoId: "qMXDWzTh3Cs",
  canonicalPath: "/es/invisalign",
  lang: "es",
  hreflangAlternates: [
    { lang: "en", href: "https://www.smileavenuefamilydentistry.com/services/invisalign/" },
    { lang: "es", href: "https://www.smileavenuefamilydentistry.com/es/invisalign/" },
  ],
  metaTitle: "Invisalign en Cypress y Katy, TX | Alineadores Transparentes | Smile Avenue",
  metaDescription: "Invisalign en Cypress y Katy, TX — alineadores transparentes para adultos y adolescentes. Consulta gratuita, escaneo digital. 4.9★. Llame al (832) 648-1756.",
  heroKicker: "ALINEADORES TRANSPARENTES",
  heroHeading: "Invisalign en Cypress y Katy, TX",
  heroBody: "Dientes torcidos o espaciados no requieren brackets metálicos. Invisalign en Smile Avenue ofrece alineamiento dental prácticamente invisible sin interrumpir su vida diaria.",
  heroCta1: "Consulta Gratuita",
  heroCta2: "Llamar (832) 648-1756",
  heroImage: "Invisalign",
  heroValueProps: [
    "Consulta gratuita y vista previa 3D de su sonrisa",
    "Fabricación de alineadores en nuestro laboratorio",
    "Proveedores experimentados de Invisalign",
    "Aceptamos la mayoría de seguros PPO",
    "Financiamiento al 0% disponible",
  ],
  introKicker: "TERAPIA CON ALINEADORES TRANSPARENTES",
  introHeading: "¿Cómo Funciona Invisalign?",
  introParas: [
    "Invisalign utiliza alineadores de plástico transparente personalizados para mover gradualmente los dientes a sus posiciones ideales. Cada juego se usa por 1-2 semanas, 20-22 horas al día. Invisalign trata apiñamiento, espacios, sobremordida, submordida y mordida cruzada — todo mientras es removible para comer y cepillarse.",
    "También fabricamos alineadores personalizados en nuestro laboratorio con impresión 3D a precios competitivos. Ya sea que elija Invisalign o nuestra opción interna, familias de toda el área de Houston confían en Smile Avenue para sonrisas hermosas y alineadas.",
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Calificación" },
    { icon: <Shield className="w-5 h-5" />, label: "Fabricación en Laboratorio Propio" },
    { icon: <Users className="w-5 h-5" />, label: "Proveedores Experimentados" },
  ],
  subServicesKicker: "¿POR QUÉ SMILE AVENUE?",
  subServicesHeading: "¿Por Qué Elegirnos para Invisalign?",
  subServicesBody: "Fabricación interna de alineadores, escaneo digital y proveedores experimentados.",
  subServices: [
    { title: "Fabricación Interna", description: "Fabricamos alineadores personalizados con impresión 3D en nuestro laboratorio — reduciendo costos y tiempos de entrega.", icon: <Printer className="w-5 h-5" /> },
    { title: "Escaneo Digital Medit", description: "Sin moldes incómodos. Nuestros escáneres digitales Medit crean modelos 3D precisos de sus dientes.", icon: <Eye className="w-5 h-5" /> },
    { title: "Proveedores Experimentados", description: "Nuestros doctores tienen amplia experiencia con Invisalign y terapia de alineadores para adolescentes y adultos.", icon: <Users className="w-5 h-5" /> },
    { title: "Removibles e Invisibles", description: "Coma lo que quiera, cepíllese normalmente y sonría con confianza — nadie sabrá que está alineando sus dientes.", icon: <SmilePlus className="w-5 h-5" /> },
  ],
  processKicker: "SU VIAJE CON INVISALIGN",
  processHeading: "Qué Esperar",
  processBody: "Un camino claro hacia una sonrisa más recta.",
  processSteps: [
    { number: "01", title: "Consulta y Escaneo Digital", description: "Evaluamos su sonrisa, tomamos escaneos digitales y le mostramos una vista previa virtual de sus resultados proyectados.", icon: <ScanLine className="w-5 h-5" /> },
    { number: "02", title: "Fabricación de Alineadores", description: "Sus alineadores son fabricados a medida — ya sea a través de Invisalign o en nuestro laboratorio con tecnología de impresión 3D.", icon: <Printer className="w-5 h-5" /> },
    { number: "03", title: "Use Sus Alineadores", description: "Use los alineadores 20-22 horas al día, cambiando al siguiente juego cada 1-2 semanas mientras sus dientes se mueven gradualmente.", icon: <SmilePlus className="w-5 h-5" /> },
    { number: "04", title: "Finalización y Retenedor", description: "Una vez completado el tratamiento, retenedores personalizados mantienen su hermosa nueva sonrisa a largo plazo.", icon: <Star className="w-5 h-5" /> },
  ],
  faqHeading: "Preguntas Sobre Invisalign",
  faqs: [
    { question: "¿Cuánto cuesta Invisalign?", answer: "Invisalign generalmente cuesta entre $3,500-$6,500 dependiendo de la complejidad. Muchos planes PPO cubren $1,000-$2,000 para tratamiento ortodóntico. También ofrecemos financiamiento al 0% con CareCredit." },
    { question: "¿Cuánto tiempo dura el tratamiento?", answer: "La mayoría de los casos en adultos se completan en 12-18 meses. Casos leves pueden terminar en tan solo 6 meses. Le damos un tiempo estimado claro en su consulta." },
    { question: "¿Duele Invisalign?", answer: "Puede sentir una presión leve por 1-2 días al cambiar a un nuevo juego de alineadores — esto significa que están funcionando. Es significativamente más cómodo que los brackets tradicionales." },
    { question: "¿Puedo comer normalmente?", answer: "¡Sí! Simplemente retire sus alineadores antes de comer o beber cualquier cosa que no sea agua. No hay restricciones alimentarias como con los brackets." },
    { question: "¿Invisalign es tan efectivo como los brackets?", answer: "Para la gran mayoría de los casos, sí. Invisalign trata efectivamente apiñamiento, espacios, sobremordida, submordida y mordida cruzada." },
    { question: "¿Mi adolescente puede usar Invisalign?", answer: "¡Sí! Invisalign Teen está diseñado específicamente para adolescentes con características como indicadores de cumplimiento. Es popular para jóvenes en deportes o banda." },
  ],
  reviewsKicker: "RESEÑAS DE PACIENTES",
  reviewsHeading: "Lo Que Dicen Nuestros Pacientes",
  testimonials: [
    { quote: "Siempre quise dientes rectos pero no quería brackets de metal como adulta. ¡Invisalign en Smile Avenue fue la solución perfecta!", name: "Jessica F.", source: "Reseña de Google", location: "Fairfield, Cypress" },
    { quote: "El tratamiento de Invisalign de mi hija fue muy suave. Le encantó que podía quitárselos para comer y deportes.", name: "Catherine P.", source: "Reseña de Google", location: "Towne Lake, Cypress" },
    { quote: "10 meses de Invisalign y mis dientes están perfectamente rectos. ¡La mejor decisión que he tomado!", name: "Daniel G.", source: "Reseña de Google", location: "Bridgeland, Cypress" },
  ],
  ctaHeading: "Comience Su Viaje con Invisalign Hoy",
  ctaBody: "Agende una consulta gratuita de Invisalign y vea cómo los alineadores transparentes pueden transformar su sonrisa.",
};

const InvisalignEs = () => <ServicePageTemplate data={data} />;
export default InvisalignEs;
