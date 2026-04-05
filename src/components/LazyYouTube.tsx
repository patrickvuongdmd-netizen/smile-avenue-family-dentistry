import { useState } from "react";
import { Play } from "lucide-react";

interface LazyYouTubeProps {
  videoId: string;
  title: string;
}

const LazyYouTube = ({ videoId, title }: LazyYouTubeProps) => {
  const [playing, setPlaying] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  );

  const handleThumbLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    // YouTube returns a 120x90 grey placeholder when maxresdefault doesn't exist
    if (img.naturalWidth <= 120 && thumbSrc.includes("maxresdefault")) {
      setThumbSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
    }
  };

  const handleThumbError = () => {
    if (thumbSrc.includes("maxresdefault")) {
      setThumbSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
    } else if (thumbSrc.includes("hqdefault")) {
      setThumbSrc(`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`);
    }
  };

  return (
    <div className="aspect-video rounded-2xl overflow-hidden relative shadow-md bg-muted">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className="w-full h-full relative group cursor-pointer"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={thumbSrc}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            width={1280}
            height={720}
            onError={handleThumbError}
            onLoad={handleThumbLoad}
          />
          <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
              <Play className="w-7 h-7 text-primary-foreground ml-1" aria-hidden="true" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent">
            <p className="text-sm font-sans font-semibold text-background text-left">{title}</p>
          </div>
        </button>
      )}
    </div>
  );
};

export default LazyYouTube;
