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
import Locations from "./pages/Locations.tsx";
import NewPatientHub from "./pages/NewPatientHub.tsx";
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
            <Route path="/katy-tx" element={<KatyTx />} />
            <Route path="/convenient-locations" element={<Locations />} />
            <Route path="/patients/new-patient-hub" element={<NewPatientHub />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
