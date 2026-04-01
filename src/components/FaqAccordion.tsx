import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  variant?: "light" | "dark";
}

const FaqAccordion = ({ items, variant = "light" }: FaqAccordionProps) => {
  const isDark = variant === "dark";
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`} className={isDark ? "border-white/20" : "border-border"}>
          <AccordionTrigger className={`text-left font-display text-base font-semibold py-5 ${isDark ? "text-white hover:text-white/80" : "text-foreground hover:text-primary"}`}>
            {item.question}
          </AccordionTrigger>
          <AccordionContent className={`text-sm font-body leading-relaxed pb-5 ${isDark ? "text-white/70" : "text-muted-foreground"}`}>
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
