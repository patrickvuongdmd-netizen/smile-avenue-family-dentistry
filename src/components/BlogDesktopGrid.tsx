import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
}

interface Props {
  posts: BlogPost[];
}

const BlogDesktopGrid = ({ posts }: Props) => (
  <div className="hidden md:grid md:grid-cols-3 gap-6">
    {posts.map((post) => (
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
    ))}
  </div>
);

export default BlogDesktopGrid;
