import { Link } from "react-router-dom";
import { ShieldCheck, CreditCard, Heart } from "lucide-react";

const PaymentOptions = () => (
  <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
    <div className="card-soft text-center">
      <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-4">
        <ShieldCheck className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-display text-base font-bold text-foreground mb-2">Insurance Accepted</h3>
      <p className="text-sm font-body text-muted-foreground leading-relaxed mb-3">
        We accept most PPO dental plans and verify your benefits before your visit — no surprises.
      </p>
      <Link to="/insurance" className="text-xs font-sans font-semibold text-primary hover:underline">
        View Accepted Plans →
      </Link>
    </div>
    <div className="card-soft text-center">
      <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-4">
        <CreditCard className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-display text-base font-bold text-foreground mb-2">HSA / FSA Welcome</h3>
      <p className="text-sm font-body text-muted-foreground leading-relaxed mb-3">
        Use your pre-tax health savings or flexible spending accounts for any dental treatment.
      </p>
    </div>
    <div className="card-soft text-center">
      <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-4">
        <Heart className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-display text-base font-bold text-foreground mb-2">0% Financing</h3>
      <p className="text-sm font-body text-muted-foreground leading-relaxed mb-3">
        CareCredit & Sunbit — apply in minutes, get approved instantly, and pay monthly with zero interest.
      </p>
      <Link to="/membership-plan" className="text-xs font-sans font-semibold text-primary hover:underline">
        No Insurance? See Membership Plan →
      </Link>
    </div>
  </div>
);

export default PaymentOptions;
