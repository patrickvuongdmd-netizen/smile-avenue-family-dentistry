import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LazyYouTube from "@/components/LazyYouTube";
import { cn } from "@/lib/utils";

interface VideoCarouselProps {
  videos: { youtubeId: string; title: string }[];
}

const ThumbImg = ({ youtubeId, title }: { youtubeId: string; title: string }) => {
  const [src, setSrc] = useState(`https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`);
  const handleError = useCallback(() => {
    if (src.includes("mqdefault")) {
      setSrc(`https://img.youtube.com/vi/${youtubeId}/default.jpg`);
    }
  }, [src, youtubeId]);
  return (
    <img
      src={src}
      alt={title}
      className="w-full aspect-video object-cover"
      loading="lazy"
      width={320}
      height={180}
      onError={handleError}
    />
  );
};

const VideoCarousel = ({ videos }: VideoCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (videos.length === 0) return null;
  if (videos.length === 1) {
    return (
      <div className="max-w-2xl mx-auto">
        <LazyYouTube videoId={videos[0].youtubeId} title={videos[0].title} />
      </div>
    );
  }

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Active video */}
      <div className="max-w-2xl mx-auto mb-6">
        <LazyYouTube
          key={videos[activeIndex].youtubeId}
          videoId={videos[activeIndex].youtubeId}
          title={videos[activeIndex].title}
        />
      </div>

      {/* Thumbnail strip with nav */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => goTo(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          className="shrink-0 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous video"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-3 overflow-hidden">
          {videos.map((video, i) => (
            <button
              key={video.youtubeId}
              onClick={() => goTo(i)}
              className={cn(
                "relative shrink-0 w-36 sm:w-44 rounded-lg overflow-hidden border-2 transition-all cursor-pointer group",
                i === activeIndex
                  ? "border-primary shadow-md"
                  : "border-transparent opacity-60 hover:opacity-100"
              )}
              aria-label={`Play: ${video.title}`}
              aria-current={i === activeIndex ? "true" : undefined}
            >
              <ThumbImg youtubeId={video.youtubeId} title={video.title} />
              <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors" />
              {i === activeIndex && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => goTo(Math.min(videos.length - 1, activeIndex + 1))}
          disabled={activeIndex === videos.length - 1}
          className="shrink-0 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next video"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Video title */}
      <p className="text-center text-sm font-sans font-medium text-muted-foreground mt-3">
        {videos[activeIndex].title}
      </p>
    </div>
  );
};

export default VideoCarousel;
