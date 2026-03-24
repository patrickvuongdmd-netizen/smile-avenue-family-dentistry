interface BeforeAfterCardProps {
  label: string;
}

const BeforeAfterCard = ({ label }: BeforeAfterCardProps) => {
  return (
    <div className="rounded-xl overflow-hidden border border-border shadow-sm">
      <div className="grid grid-cols-2">
        <div className="bg-muted aspect-[4/3] flex items-center justify-center">
          <span className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-wider">Before</span>
        </div>
        <div className="bg-muted/60 aspect-[4/3] flex items-center justify-center">
          <span className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-wider">After</span>
        </div>
      </div>
      <div className="px-4 py-3 bg-card text-center">
        <span className="text-sm font-sans font-medium text-foreground">{label}</span>
      </div>
    </div>
  );
};

export default BeforeAfterCard;
