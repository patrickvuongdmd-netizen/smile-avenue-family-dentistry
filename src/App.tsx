import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";

// Only the homepage is eagerly loaded; everything else is lazy
import Index from "./pages/Index.tsx";

const CypressTx = lazy(() => import("./pages/CypressTx.tsx"));
const KatyTx = lazy(() => import("./pages/KatyTx.tsx"));
const EmergencyDentistCypress = lazy(() => import("./pages/EmergencyDentistCypress.tsx"));
const DentalImplantsCypress = lazy(() => import("./pages/cypress/DentalImplants.tsx"));
const CosmeticDentistryCypress = lazy(() => import("./pages/cypress/CosmeticDentistry.tsx"));
const TeethWhiteningCypress = lazy(() => import("./pages/cypress/TeethWhitening.tsx"));
const DentalCrownsCypress = lazy(() => import("./pages/cypress/DentalCrowns.tsx"));
const AllOnXCypress = lazy(() => import("./pages/cypress/AllOnX.tsx"));
const InvisalignCypress = lazy(() => import("./pages/cypress/Invisalign.tsx"));
const RootCanalCypress = lazy(() => import("./pages/cypress/RootCanal.tsx"));
const DentalCleaningCypress = lazy(() => import("./pages/cypress/DentalCleaning.tsx"));
const PediatricDentistryCypress = lazy(() => import("./pages/cypress/PediatricDentistry.tsx"));
const DenturesCypress = lazy(() => import("./pages/cypress/Dentures.tsx"));
const VeneersCypress = lazy(() => import("./pages/cypress/Veneers.tsx"));
const DentalBridgesCypress = lazy(() => import("./pages/cypress/DentalBridges.tsx"));
const ToothExtractionCypress = lazy(() => import("./pages/cypress/ToothExtraction.tsx"));
const OralSurgeryCypress = lazy(() => import("./pages/cypress/OralSurgery.tsx"));
const SedationDentistryCypress = lazy(() => import("./pages/cypress/SedationDentistry.tsx"));
const PreventiveDentistryCypress = lazy(() => import("./pages/cypress/PreventiveDentistry.tsx"));
const FamilyDentalCareCypress = lazy(() => import("./pages/cypress/FamilyDentalCare.tsx"));
const BridgelandDentist = lazy(() => import("./pages/cypress/BridgelandDentist.tsx"));
const TowneLakeDentist = lazy(() => import("./pages/cypress/TowneLakeDentist.tsx"));
const FairfieldDentist = lazy(() => import("./pages/cypress/FairfieldDentist.tsx"));
const CyFairDentist = lazy(() => import("./pages/cypress/CyFairDentist.tsx"));
const JerseyVillageDentist = lazy(() => import("./pages/cypress/JerseyVillageDentist.tsx"));
const EmergencyDentistKaty = lazy(() => import("./pages/katy/EmergencyDentist.tsx"));
const DentalImplantsKaty = lazy(() => import("./pages/katy/DentalImplants.tsx"));
const CosmeticDentistryKaty = lazy(() => import("./pages/katy/CosmeticDentistry.tsx"));
const TeethWhiteningKaty = lazy(() => import("./pages/katy/TeethWhitening.tsx"));
const DentalCrownsKaty = lazy(() => import("./pages/katy/DentalCrowns.tsx"));
const AllOnXKaty = lazy(() => import("./pages/katy/AllOnX.tsx"));
const InvisalignKaty = lazy(() => import("./pages/katy/Invisalign.tsx"));
const RootCanalKaty = lazy(() => import("./pages/katy/RootCanal.tsx"));
const DentalCleaningKaty = lazy(() => import("./pages/katy/DentalCleaning.tsx"));
const PediatricDentistryKaty = lazy(() => import("./pages/katy/PediatricDentistry.tsx"));
const DenturesKaty = lazy(() => import("./pages/katy/Dentures.tsx"));
const VeneersKaty = lazy(() => import("./pages/katy/Veneers.tsx"));
const DentalBridgesKaty = lazy(() => import("./pages/katy/DentalBridges.tsx"));
const ToothExtractionKaty = lazy(() => import("./pages/katy/ToothExtraction.tsx"));
const OralSurgeryKaty = lazy(() => import("./pages/katy/OralSurgery.tsx"));
const SedationDentistryKaty = lazy(() => import("./pages/katy/SedationDentistry.tsx"));
const PreventiveDentistryKaty = lazy(() => import("./pages/katy/PreventiveDentistry.tsx"));
const FamilyDentalCareKaty = lazy(() => import("./pages/katy/FamilyDentalCare.tsx"));
const CincoRanchDentist = lazy(() => import("./pages/katy/CincoRanchDentist.tsx"));
const FirethorneDentist = lazy(() => import("./pages/katy/FirethorneDentist.tsx"));
const CrossCreekRanchDentist = lazy(() => import("./pages/katy/CrossCreekRanchDentist.tsx"));
const WestheimerParkwayDentist = lazy(() => import("./pages/katy/WestheimerParkwayDentist.tsx"));
const FulshearDentist = lazy(() => import("./pages/katy/FulshearDentist.tsx"));
const Locations = lazy(() => import("./pages/Locations.tsx"));
const NewPatientHub = lazy(() => import("./pages/NewPatientHub.tsx"));
const Doctors = lazy(() => import("./pages/Doctors.tsx"));
const DrPatrickVuong = lazy(() => import("./pages/doctors/PatrickVuong.tsx"));
const DrPeterKim = lazy(() => import("./pages/doctors/PeterKim.tsx"));
const DrLaithYahya = lazy(() => import("./pages/doctors/LaithYahya.tsx"));
const DrSameerBilal = lazy(() => import("./pages/doctors/SameerBilal.tsx"));
const DrSarahMaredia = lazy(() => import("./pages/doctors/SarahMaredia.tsx"));
const DrShayanAlkhiro = lazy(() => import("./pages/doctors/ShayanAlkhiro.tsx"));
const OurTeam = lazy(() => import("./pages/OurTeam.tsx"));
const FreeConsultation = lazy(() => import("./pages/FreeConsultation.tsx"));
const Specials = lazy(() => import("./pages/Specials.tsx"));
const MembershipPlan = lazy(() => import("./pages/MembershipPlan.tsx"));
const Insurance = lazy(() => import("./pages/Insurance.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const BookOnline = lazy(() => import("./pages/BookOnline.tsx"));
const PatientTestimonials = lazy(() => import("./pages/PatientTestimonials.tsx"));

const DentalLab = lazy(() => import("./pages/DentalLab.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const SitemapPage = lazy(() => import("./pages/Sitemap.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Services = lazy(() => import("./pages/Services.tsx"));
const Faq = lazy(() => import("./pages/Faq.tsx"));
const Espanol = lazy(() => import("./pages/Espanol.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

// Brand-Global Service Pages
const BrandEmergencyDentist = lazy(() => import("./pages/services/EmergencyDentist.tsx"));
const BrandDentalImplants = lazy(() => import("./pages/services/DentalImplants.tsx"));
const BrandCosmeticDentistry = lazy(() => import("./pages/services/CosmeticDentistry.tsx"));
const BrandTeethWhitening = lazy(() => import("./pages/services/TeethWhitening.tsx"));
const BrandDentalCrowns = lazy(() => import("./pages/services/DentalCrowns.tsx"));
const BrandAllOnX = lazy(() => import("./pages/services/AllOnX.tsx"));
const BrandInvisalign = lazy(() => import("./pages/services/Invisalign.tsx"));
const BrandRootCanal = lazy(() => import("./pages/services/RootCanal.tsx"));
const BrandDentalCleaning = lazy(() => import("./pages/services/DentalCleaning.tsx"));
const BrandPediatricDentistry = lazy(() => import("./pages/services/PediatricDentistry.tsx"));
const BrandDentures = lazy(() => import("./pages/services/Dentures.tsx"));
const BrandVeneers = lazy(() => import("./pages/services/Veneers.tsx"));
const BrandDentalBridges = lazy(() => import("./pages/services/DentalBridges.tsx"));
const BrandToothExtraction = lazy(() => import("./pages/services/ToothExtraction.tsx"));
const BrandOralSurgery = lazy(() => import("./pages/services/OralSurgery.tsx"));
const BrandSedationDentistry = lazy(() => import("./pages/services/SedationDentistry.tsx"));
const BrandPreventiveDentistry = lazy(() => import("./pages/services/PreventiveDentistry.tsx"));
const BrandFamilyDentalCare = lazy(() => import("./pages/services/FamilyDentalCare.tsx"));

// Comparison Pages
const ImplantsVsDentures = lazy(() => import("./pages/services/ImplantsVsDentures.tsx"));
const InvisalignVsBraces = lazy(() => import("./pages/services/InvisalignVsBraces.tsx"));
const VeneersVsCrowns = lazy(() => import("./pages/services/VeneersVsCrowns.tsx"));
const CrownsVsBridges = lazy(() => import("./pages/services/CrownsVsBridges.tsx"));
const ImplantsVsBridges = lazy(() => import("./pages/services/ImplantsVsBridges.tsx"));
const WhiteningVsVeneers = lazy(() => import("./pages/services/WhiteningVsVeneers.tsx"));

// Category Landing Pages
const CategoryPreventive = lazy(() => import("./pages/services/Preventive.tsx"));
const CategoryCosmetic = lazy(() => import("./pages/services/Cosmetic.tsx"));
const CategoryRestorative = lazy(() => import("./pages/services/Restorative.tsx"));
const CategorySurgical = lazy(() => import("./pages/services/Surgical.tsx"));

// Google Ads Landing Pages
const CypressNewPatientLP = lazy(() => import("./pages/cypress/lp/NewPatient.tsx"));
const CypressEmergencyLP = lazy(() => import("./pages/cypress/lp/EmergencyDentist.tsx"));
const CypressInvisalignLP = lazy(() => import("./pages/cypress/lp/Invisalign.tsx"));
const CypressDentalImplantsLP = lazy(() => import("./pages/cypress/lp/DentalImplants.tsx"));
const KatyNewPatientLP = lazy(() => import("./pages/katy/lp/NewPatient.tsx"));
const KatyEmergencyLP = lazy(() => import("./pages/katy/lp/EmergencyDentist.tsx"));
const KatyInvisalignLP = lazy(() => import("./pages/katy/lp/Invisalign.tsx"));
const KatyDentalImplantsLP = lazy(() => import("./pages/katy/lp/DentalImplants.tsx"));

const queryClient = new QueryClient();

// Minimal loading shell that matches site chrome to prevent layout shift
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cypress-tx" element={<CypressTx />} />
              <Route path="/cypress-tx/emergency-dentist" element={<EmergencyDentistCypress />} />
              <Route path="/cypress-tx/dental-implants" element={<DentalImplantsCypress />} />
              <Route path="/cypress-tx/cosmetic-dentistry" element={<CosmeticDentistryCypress />} />
              <Route path="/cypress-tx/teeth-whitening" element={<TeethWhiteningCypress />} />
              <Route path="/cypress-tx/dental-crowns" element={<DentalCrownsCypress />} />
              <Route path="/cypress-tx/all-on-x-implants" element={<AllOnXCypress />} />
              <Route path="/cypress-tx/invisalign" element={<InvisalignCypress />} />
              <Route path="/cypress-tx/root-canal" element={<RootCanalCypress />} />
              <Route path="/cypress-tx/dental-cleaning" element={<DentalCleaningCypress />} />
              <Route path="/cypress-tx/pediatric-dentistry" element={<PediatricDentistryCypress />} />
              <Route path="/cypress-tx/dentures" element={<DenturesCypress />} />
              <Route path="/cypress-tx/veneers" element={<VeneersCypress />} />
              <Route path="/cypress-tx/dental-bridges" element={<DentalBridgesCypress />} />
              <Route path="/cypress-tx/tooth-extraction" element={<ToothExtractionCypress />} />
              <Route path="/cypress-tx/oral-surgery" element={<OralSurgeryCypress />} />
              <Route path="/cypress-tx/sedation-dentistry" element={<SedationDentistryCypress />} />
              <Route path="/cypress-tx/preventive-dentistry" element={<PreventiveDentistryCypress />} />
              <Route path="/cypress-tx/family-dental-care" element={<FamilyDentalCareCypress />} />
              <Route path="/cypress-tx/bridgeland-dentist" element={<BridgelandDentist />} />
              <Route path="/cypress-tx/towne-lake-dentist" element={<TowneLakeDentist />} />
              <Route path="/cypress-tx/fairfield-dentist" element={<FairfieldDentist />} />
              <Route path="/cypress-tx/cyfair-dentist" element={<CyFairDentist />} />
              <Route path="/cypress-tx/jersey-village-dentist" element={<JerseyVillageDentist />} />
              <Route path="/katy-tx" element={<KatyTx />} />
              <Route path="/katy-tx/emergency-dentist" element={<EmergencyDentistKaty />} />
              <Route path="/katy-tx/dental-implants" element={<DentalImplantsKaty />} />
              <Route path="/katy-tx/cosmetic-dentistry" element={<CosmeticDentistryKaty />} />
              <Route path="/katy-tx/teeth-whitening" element={<TeethWhiteningKaty />} />
              <Route path="/katy-tx/dental-crowns" element={<DentalCrownsKaty />} />
              <Route path="/katy-tx/all-on-x-implants" element={<AllOnXKaty />} />
              <Route path="/katy-tx/invisalign" element={<InvisalignKaty />} />
              <Route path="/katy-tx/root-canal" element={<RootCanalKaty />} />
              <Route path="/katy-tx/dental-cleaning" element={<DentalCleaningKaty />} />
              <Route path="/katy-tx/pediatric-dentistry" element={<PediatricDentistryKaty />} />
              <Route path="/katy-tx/dentures" element={<DenturesKaty />} />
              <Route path="/katy-tx/veneers" element={<VeneersKaty />} />
              <Route path="/katy-tx/dental-bridges" element={<DentalBridgesKaty />} />
              <Route path="/katy-tx/tooth-extraction" element={<ToothExtractionKaty />} />
              <Route path="/katy-tx/oral-surgery" element={<OralSurgeryKaty />} />
              <Route path="/katy-tx/sedation-dentistry" element={<SedationDentistryKaty />} />
              <Route path="/katy-tx/preventive-dentistry" element={<PreventiveDentistryKaty />} />
              <Route path="/katy-tx/family-dental-care" element={<FamilyDentalCareKaty />} />
              <Route path="/katy-tx/cinco-ranch-dentist" element={<CincoRanchDentist />} />
              <Route path="/katy-tx/firethorne-dentist" element={<FirethorneDentist />} />
              <Route path="/katy-tx/cross-creek-ranch-dentist" element={<CrossCreekRanchDentist />} />
              <Route path="/katy-tx/westheimer-parkway-dentist" element={<WestheimerParkwayDentist />} />
              <Route path="/katy-tx/fulshear-dentist" element={<FulshearDentist />} />
              <Route path="/convenient-locations" element={<Locations />} />
              <Route path="/locations" element={<Navigate to="/convenient-locations" replace />} />
              <Route path="/patients/new-patient-hub" element={<NewPatientHub />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/doctors/patrick-vuong-dmd" element={<DrPatrickVuong />} />
              <Route path="/doctors/peter-kim-dds" element={<DrPeterKim />} />
              <Route path="/doctors/laith-yahya-dds" element={<DrLaithYahya />} />
              <Route path="/doctors/sameer-bilal-dds" element={<DrSameerBilal />} />
              <Route path="/doctors/sarah-maredia-dds" element={<DrSarahMaredia />} />
              <Route path="/doctors/shayan-alkhiro-dds" element={<DrShayanAlkhiro />} />
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/free-consultation" element={<FreeConsultation />} />
              <Route path="/specials" element={<Specials />} />
              <Route path="/membership-plan" element={<MembershipPlan />} />
              <Route path="/insurance" element={<Insurance />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book-online" element={<BookOnline />} />
              <Route path="/patient-testimonials" element={<PatientTestimonials />} />
              
              <Route path="/dental-lab" element={<DentalLab />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/emergency-dentist" element={<BrandEmergencyDentist />} />
              <Route path="/services/dental-implants" element={<BrandDentalImplants />} />
              <Route path="/services/cosmetic-dentistry" element={<BrandCosmeticDentistry />} />
              <Route path="/services/teeth-whitening" element={<BrandTeethWhitening />} />
              <Route path="/services/dental-crowns" element={<BrandDentalCrowns />} />
              <Route path="/services/all-on-x-implants" element={<BrandAllOnX />} />
              <Route path="/services/invisalign" element={<BrandInvisalign />} />
              <Route path="/services/root-canal" element={<BrandRootCanal />} />
              <Route path="/services/dental-cleaning" element={<BrandDentalCleaning />} />
              <Route path="/services/pediatric-dentistry" element={<BrandPediatricDentistry />} />
              <Route path="/services/dentures" element={<BrandDentures />} />
              <Route path="/services/veneers" element={<BrandVeneers />} />
              <Route path="/services/dental-bridges" element={<BrandDentalBridges />} />
              <Route path="/services/tooth-extraction" element={<BrandToothExtraction />} />
              <Route path="/services/oral-surgery" element={<BrandOralSurgery />} />
              <Route path="/services/sedation-dentistry" element={<BrandSedationDentistry />} />
              <Route path="/services/preventive-dentistry" element={<BrandPreventiveDentistry />} />
              <Route path="/services/family-dental-care" element={<BrandFamilyDentalCare />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/es" element={<Espanol />} />
              {/* Google Ads Landing Pages */}
              <Route path="/cypress-tx/lp/new-patient" element={<CypressNewPatientLP />} />
              <Route path="/cypress-tx/lp/emergency-dentist" element={<CypressEmergencyLP />} />
              <Route path="/cypress-tx/lp/invisalign" element={<CypressInvisalignLP />} />
              <Route path="/cypress-tx/lp/dental-implants" element={<CypressDentalImplantsLP />} />
              <Route path="/katy-tx/lp/new-patient" element={<KatyNewPatientLP />} />
              <Route path="/katy-tx/lp/emergency-dentist" element={<KatyEmergencyLP />} />
              <Route path="/katy-tx/lp/invisalign" element={<KatyInvisalignLP />} />
              <Route path="/katy-tx/lp/dental-implants" element={<KatyDentalImplantsLP />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;