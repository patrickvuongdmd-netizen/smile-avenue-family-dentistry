import { useRef, useState, useEffect, lazy, Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const BlogCardCarousel = lazy(() => import("@/components/BlogCardCarousel"));
const BlogDesktopGrid = lazy(() => import("@/components/BlogDesktopGrid"));

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author?: string;
  readTime: string;
}

interface LazyBlogSectionProps {
  /** Filter posts by category (optional). Falls back to first 3 posts. */
  category?: string;
  /** Alternative: provide a category lookup + fallback logic via serviceSlug */
  serviceSlug?: string;
  /** Map of serviceSlug → blog category */
  slugCategoryMap?: Record<string, string>;
  /** Desktop variant */
  variant?: "compact" | "image";
  /** Show mobile carousel (default true) */
  showMobile?: boolean;
  /** Show desktop grid (default true) */
  showDesktop?: boolean;
  /** Root margin for IntersectionObserver */
  rootMargin?: string;
}

const BlogSkeleton = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3].map((i) => (
      <div key={i} className="rounded-2xl overflow-hidden">
        <Skeleton className="aspect-[16/10] w-full" />
        <div className="p-6 space-y-3">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    ))}
  </div>
);

const LazyBlogSection = ({
  category,
  serviceSlug,
  slugCategoryMap,
  variant = "compact",
  showMobile = true,
  showDesktop = true,
  rootMargin = "300px",
}: LazyBlogSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<BlogPost[] | null>(null);
  const [styles, setStyles] = useState<{
    colors: Record<string, { bg: string; badge: string; text?: string }>;
    images: Record<string, string>;
    fallback: string;
  } | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          // Dynamic imports — blog-data.ts only loads now
          Promise.all([
            import("@/lib/blog-data"),
            import("@/lib/blog-styles"),
          ]).then(([blogDataMod, blogStylesMod]) => {
            const allPosts = blogDataMod.BLOG_POSTS;
            const cat = category || (serviceSlug && slugCategoryMap ? slugCategoryMap[serviceSlug] : undefined);
            const categoryPosts = cat
              ? allPosts.filter((p: BlogPost) => p.category === cat).slice(0, 3)
              : [];
            const resolved = categoryPosts.length >= 2 ? categoryPosts : allPosts.slice(0, 3);
            setPosts(resolved);
            setStyles({
              colors: blogStylesMod.BLOG_CATEGORY_COLORS,
              images: blogStylesMod.BLOG_CATEGORY_IMAGES,
              fallback: blogStylesMod.BLOG_FALLBACK_IMAGE,
            });
          });
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [category, serviceSlug, slugCategoryMap, rootMargin]);

  return (
    <div ref={ref}>
      {posts && styles ? (
        <Suspense fallback={<BlogSkeleton />}>
          {showMobile && (
            <div className="md:hidden">
              <BlogCardCarousel
                posts={posts}
                categoryColors={styles.colors}
                categoryImages={styles.images}
                fallbackImage={styles.fallback}
              />
            </div>
          )}
          {showDesktop && (
            <div className={showMobile ? "hidden md:block" : ""}>
              <BlogDesktopGrid
                posts={posts}
                variant={variant}
                categoryColors={styles.colors}
                categoryImages={styles.images}
                fallbackImage={styles.fallback}
              />
            </div>
          )}
        </Suspense>
      ) : (
        <BlogSkeleton />
      )}
    </div>
  );
};

export default LazyBlogSection;
