import { useState } from "react";
import { Check, ShieldCheck } from "lucide-react";

const CARRIERS = [
  "Aetna",
  "Blue Cross Blue Shield",
  "Cigna",
  "Delta Dental",
  "MetLife",
  "United Healthcare",
  "Guardian",
  "Humana",
  "Other",
];

const InsuranceChecker = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", carrier: "", memberId: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.carrier || !form.phone.trim()) return;
    setSubmitted(true);
  };

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-display text-xl font-bold text-foreground mb-2">
          We're On It!
        </h3>
        <p className="font-body text-muted-foreground max-w-sm mx-auto">
          We'll verify your benefits and call you within 1 hour!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ins-name" className="block text-xs font-sans font-semibold text-foreground mb-1.5">
            Patient Name <span className="text-destructive">*</span>
          </label>
          <input
            id="ins-name"
            type="text"
            required
            maxLength={100}
            placeholder="Jane Smith"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
          />
        </div>
        <div>
          <label htmlFor="ins-carrier" className="block text-xs font-sans font-semibold text-foreground mb-1.5">
            Insurance Carrier <span className="text-destructive">*</span>
          </label>
          <select
            id="ins-carrier"
            required
            value={form.carrier}
            onChange={(e) => update("carrier", e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow appearance-none"
          >
            <option value="" disabled>Select your carrier</option>
            {CARRIERS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ins-member" className="block text-xs font-sans font-semibold text-foreground mb-1.5">
            Member ID
          </label>
          <input
            id="ins-member"
            type="text"
            maxLength={50}
            placeholder="ABC123456789"
            value={form.memberId}
            onChange={(e) => update("memberId", e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
          />
        </div>
        <div>
          <label htmlFor="ins-phone" className="block text-xs font-sans font-semibold text-foreground mb-1.5">
            Phone Number <span className="text-destructive">*</span>
          </label>
          <input
            id="ins-phone"
            type="tel"
            required
            maxLength={20}
            placeholder="(555) 123-4567"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[hsl(var(--gold))] text-white font-sans font-bold text-sm hover:brightness-110 transition-all shadow-md"
      >
        Check My Benefits
      </button>
      <p className="text-[11px] font-sans text-muted-foreground">
        <ShieldCheck className="w-3.5 h-3.5 inline mr-1 text-primary" />
        Your information is secure and never shared with third parties.
      </p>
    </form>
  );
};

export default InsuranceChecker;
