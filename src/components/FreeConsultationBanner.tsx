import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FreeConsultationBanner = () => (
  <section className="py-10 bg-primary/5 border-y border-primary/10">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
        <div>
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
            Your Free Consultation Is Waiting
          </h3>
          <p className="text-sm font-body text-muted-foreground">
            No cost, no obligation, no insurance needed — get a personalized treatment plan in one visit.
          </p>
        </div>
        <Link
          to="/free-consultation"
          className="btn-primary shrink-0 flex items-center gap-2"
        >
          Claim Your Free Visit
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default FreeConsultationBanner;
