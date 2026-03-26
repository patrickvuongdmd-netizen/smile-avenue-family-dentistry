import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index.tsx";
import CypressTx from "./pages/CypressTx.tsx";
import KatyTx from "./pages/KatyTx.tsx";
import EmergencyDentistCypress from "./pages/EmergencyDentistCypress.tsx";
import DentalImplantsCypress from "./pages/cypress/DentalImplants.tsx";
import CosmeticDentistryCypress from "./pages/cypress/CosmeticDentistry.tsx";
import TeethWhiteningCypress from "./pages/cypress/TeethWhitening.tsx";
import DentalCrownsCypress from "./pages/cypress/DentalCrowns.tsx";
import AllOnXCypress from "./pages/cypress/AllOnX.tsx";
import InvisalignCypress from "./pages/cypress/Invisalign.tsx";
import RootCanalCypress from "./pages/cypress/RootCanal.tsx";
import DentalCleaningCypress from "./pages/cypress/DentalCleaning.tsx";
import PediatricDentistryCypress from "./pages/cypress/PediatricDentistry.tsx";
import DenturesCypress from "./pages/cypress/Dentures.tsx";
import VeneersCypress from "./pages/cypress/Veneers.tsx";
import DentalBridgesCypress from "./pages/cypress/DentalBridges.tsx";
import ToothExtractionCypress from "./pages/cypress/ToothExtraction.tsx";
import OralSurgeryCypress from "./pages/cypress/OralSurgery.tsx";
import SedationDentistryCypress from "./pages/cypress/SedationDentistry.tsx";
import PreventiveDentistryCypress from "./pages/cypress/PreventiveDentistry.tsx";
import BoneGraftingCypress from "./pages/cypress/BoneGrafting.tsx";
import GumDiseaseTreatmentCypress from "./pages/cypress/GumDiseaseTreatment.tsx";
import WisdomTeethCypress from "./pages/cypress/WisdomTeeth.tsx";
import DentalBondingCypress from "./pages/cypress/DentalBonding.tsx";
import SmileMakeoverCypress from "./pages/cypress/SmileMakeover.tsx";
import GumRecessionTreatmentCypress from "./pages/cypress/GumRecessionTreatment.tsx";
import FamilyDentistryCypress from "./pages/cypress/FamilyDentistry.tsx";
import GeneralDentistryCypress from "./pages/cypress/GeneralDentistry.tsx";
import EmergencyDentistKaty from "./pages/katy/EmergencyDentist.tsx";
import DentalImplantsKaty from "./pages/katy/DentalImplants.tsx";
import CosmeticDentistryKaty from "./pages/katy/CosmeticDentistry.tsx";
import TeethWhiteningKaty from "./pages/katy/TeethWhitening.tsx";
import DentalCrownsKaty from "./pages/katy/DentalCrowns.tsx";
import AllOnXKaty from "./pages/katy/AllOnX.tsx";
import InvisalignKaty from "./pages/katy/Invisalign.tsx";
import RootCanalKaty from "./pages/katy/RootCanal.tsx";
import DentalCleaningKaty from "./pages/katy/DentalCleaning.tsx";
import PediatricDentistryKaty from "./pages/katy/PediatricDentistry.tsx";
import DenturesKaty from "./pages/katy/Dentures.tsx";
import VeneersKaty from "./pages/katy/Veneers.tsx";
import DentalBridgesKaty from "./pages/katy/DentalBridges.tsx";
import ToothExtractionKaty from "./pages/katy/ToothExtraction.tsx";
import OralSurgeryKaty from "./pages/katy/OralSurgery.tsx";
import SedationDentistryKaty from "./pages/katy/SedationDentistry.tsx";
import PreventiveDentistryKaty from "./pages/katy/PreventiveDentistry.tsx";
import BoneGraftingKaty from "./pages/katy/BoneGrafting.tsx";
import GumDiseaseTreatmentKaty from "./pages/katy/GumDiseaseTreatment.tsx";
import WisdomTeethKaty from "./pages/katy/WisdomTeeth.tsx";
import DentalBondingKaty from "./pages/katy/DentalBonding.tsx";
import SmileMakeoverKaty from "./pages/katy/SmileMakeover.tsx";
import GumRecessionTreatmentKaty from "./pages/katy/GumRecessionTreatment.tsx";
import FamilyDentistryKaty from "./pages/katy/FamilyDentistry.tsx";
import GeneralDentistryKaty from "./pages/katy/GeneralDentistry.tsx";
import Locations from "./pages/Locations.tsx";
import NewPatientHub from "./pages/NewPatientHub.tsx";
import Doctors from "./pages/Doctors.tsx";
import DrPatrickVuong from "./pages/doctors/PatrickVuong.tsx";
import DrPeterKim from "./pages/doctors/PeterKim.tsx";
import DrLaithYahya from "./pages/doctors/LaithYahya.tsx";
import DrWeiyenChang from "./pages/doctors/WeiyenChang.tsx";
import DrChristianLopez from "./pages/doctors/ChristianLopez.tsx";
import DrTamaaraWillis from "./pages/doctors/TamaaraWillis.tsx";
import FreeConsultation from "./pages/FreeConsultation.tsx";
import Specials from "./pages/Specials.tsx";
import MembershipPlan from "./pages/MembershipPlan.tsx";
import Insurance from "./pages/Insurance.tsx";
import Contact from "./pages/Contact.tsx";
import BookOnline from "./pages/BookOnline.tsx";
import PatientTestimonials from "./pages/PatientTestimonials.tsx";
import SmileGallery from "./pages/SmileGallery.tsx";
import DentalLab from "./pages/DentalLab.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import SitemapPage from "./pages/Sitemap.tsx";
import Blog from "./pages/Blog.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Faq from "./pages/Faq.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
            <Route path="/convenient-locations" element={<Locations />} />
            <Route path="/patients/new-patient-hub" element={<NewPatientHub />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/patrick-vuong-dmd" element={<DrPatrickVuong />} />
            <Route path="/doctors/peter-kim-dds" element={<DrPeterKim />} />
            <Route path="/doctors/laith-yahya-dds" element={<DrLaithYahya />} />
            <Route path="/doctors/weiyen-chang-dds" element={<DrWeiyenChang />} />
            <Route path="/doctors/christian-lopez-dds" element={<DrChristianLopez />} />
            <Route path="/doctors/tamaara-willis-dds-ms" element={<DrTamaaraWillis />} />
            <Route path="/free-consultation" element={<FreeConsultation />} />
            <Route path="/specials" element={<Specials />} />
            <Route path="/membership-plan" element={<MembershipPlan />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-online" element={<BookOnline />} />
            <Route path="/patient-testimonials" element={<PatientTestimonials />} />
            <Route path="/smile-gallery" element={<SmileGallery />} />
            <Route path="/dental-lab" element={<DentalLab />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
