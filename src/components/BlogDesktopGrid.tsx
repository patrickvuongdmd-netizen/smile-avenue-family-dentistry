import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author?: string;
  readTime: string;
}

interface Props {
  posts: BlogPost[];
  variant?: "compact" | "image";
  categoryColors?: Record<string, { bg: string; badge: string; text?: string }>;
  categoryImages?: Record<string, string>;
  fallbackImage?: string;
}

const CompactCard = ({ post }: { post: BlogPost }) => (
  <Link key={post.slug} to={`/blog/${post.slug}`} className="group card-soft !p-0 overflow-hidden">
    <div className="p-7">
      <span className="text-xs font-sans font-medium text-primary uppercase tracking-wider">{post.category}</span>
      <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
      <p className="text-sm font-body text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
      <div className="flex items-center justify-between mt-5">
        <span className="text-xs font-sans text-muted-foreground">{post.readTime}</span>
        <span className="text-sm font-sans font-medium text-primary group-hover:gap-2 transition-all inline-flex items-center gap-1">
          Read <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  </Link>
);

const ImageCard = ({
  post,
  colors,
  imageSrc,
}: {
  post: BlogPost;
  colors: { bg: string; badge: string };
  imageSrc: string;
}) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group flex flex-col rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
  >
    <div className={`aspect-[16/10] relative overflow-hidden ${colors.bg}`}>
      <img
        src={imageSrc}
        alt={post.title}
        loading="lazy"
        width={800}
        height={512}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
      />
      <div className="absolute top-4 left-4">
        <span className={`text-[11px] font-sans font-bold uppercase tracking-widest backdrop-blur-sm px-3 py-1 rounded-full ${colors.badge}`}>
          {post.category}
        </span>
      </div>
    </div>
    <div className="flex-1 bg-card border border-t-0 border-border/50 rounded-b-2xl p-6 flex flex-col">
      <h3 className="font-display text-lg md:text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors mb-3 line-clamp-2">
        {post.title}
      </h3>
      <p className="text-sm font-body text-muted-foreground line-clamp-2 mb-5 flex-1">{post.excerpt}</p>
      <div className="flex items-center justify-between text-xs font-sans text-muted-foreground pt-4 border-t border-border/50">
        <span className="font-semibold text-foreground">{post.author}</span>
        <span>{post.readTime}</span>
      </div>
    </div>
  </Link>
);

const DEFAULT_COLORS = { bg: "bg-muted", badge: "bg-primary/15 text-primary" };

const BlogDesktopGrid = ({ posts, variant = "compact", categoryColors, categoryImages, fallbackImage }: Props) => (
  <div className="hidden md:grid md:grid-cols-3 gap-6">
    {posts.map((post) =>
      variant === "image" ? (
        <ImageCard
          key={post.slug}
          post={post}
          colors={categoryColors?.[post.category] || DEFAULT_COLORS}
          imageSrc={categoryImages?.[post.category] || fallbackImage || ""}
        />
      ) : (
        <CompactCard key={post.slug} post={post} />
      )
    )}
  </div>
);

export default BlogDesktopGrid;
