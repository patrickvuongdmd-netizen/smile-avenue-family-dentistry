interface Props {
  src: string;
  alt: string;
  overlayText?: string;
  overlaySubtext?: string;
  height?: string;
}

const FullWidthPhotoBreak = ({
  src,
  alt,
  overlayText,
  overlaySubtext,
  height = "h-48 md:h-72",
}: Props) => (
  <section className={`relative w-full ${height} overflow-hidden`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      loading="lazy"
    />
    {(overlayText || overlaySubtext) && (
      <div className="absolute inset-0 bg-foreground/40 flex flex-col items-center justify-center text-center px-4">
        {overlayText && (
          <p className="font-display text-2xl md:text-4xl font-bold text-white mb-2">{overlayText}</p>
        )}
        {overlaySubtext && (
          <p className="font-body text-sm md:text-base text-white/80 max-w-lg">{overlaySubtext}</p>
        )}
      </div>
    )}
  </section>
);

export default FullWidthPhotoBreak;
