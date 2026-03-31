import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Clock, User, ChevronRight, CalendarDays } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import { getPostBySlug, getRelatedPosts, type BlogPost } from "@/lib/blog-data";
import { DOCTOR_IMAGES } from "@/lib/images";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

/** Simple markdown-ish renderer: handles ## headings, **bold**, [links](/url), |tables|, and - lists */
const renderContent = (content: string) => {
  const lines = content.trim().split("\n");
  const elements: JSX.Element[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Table detection
    if (line.trim().startsWith("|") && i + 1 < lines.length && lines[i + 1]?.trim().startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }
      const headerCells = tableLines[0].split("|").filter(c => c.trim());
      const bodyLines = tableLines.slice(2); // skip separator
      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-6">
          <table className="w-full text-sm font-sans border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-muted">
                {headerCells.map((c, ci) => <th key={ci} className="px-4 py-3 text-left font-semibold text-foreground">{c.trim()}</th>)}
              </tr>
            </thead>
            <tbody>
              {bodyLines.map((row, ri) => {
                const cells = row.split("|").filter(c => c.trim());
                return (
                  <tr key={ri} className="border-t border-border">
                    {cells.map((c, ci) => <td key={ci} className="px-4 py-3 text-muted-foreground">{c.trim()}</td>)}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Headings
    if (line.startsWith("## ")) {
      const id = line.replace("## ", "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");
      elements.push(<h2 key={i} id={id} className="font-display text-2xl font-bold text-foreground mt-10 mb-4">{line.replace("## ", "")}</h2>);
      i++; continue;
    }
    if (line.startsWith("### ")) {
      elements.push(<h3 key={i} className="font-display text-xl font-semibold text-foreground mt-8 mb-3">{line.replace("### ", "")}</h3>);
      i++; continue;
    }

    // List items
    if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
      const listItems: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))) {
        listItems.push(lines[i].trim().replace(/^[-*] /, ""));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc pl-6 space-y-2 my-4 text-muted-foreground font-body">
          {listItems.map((item, li) => <li key={li}>{renderInline(item)}</li>)}
        </ul>
      );
      continue;
    }

    // Numbered list
    if (/^\d+\.\s/.test(line.trim())) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal pl-6 space-y-2 my-4 text-muted-foreground font-body">
          {listItems.map((item, li) => <li key={li}>{renderInline(item)}</li>)}
        </ol>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") { i++; continue; }

    // Paragraph
    elements.push(<p key={i} className="text-muted-foreground font-body leading-relaxed mb-4">{renderInline(line)}</p>);
    i++;
  }

  return elements;
};

/** Render inline markdown: **bold**, [links](/url) */
const renderInline = (text: string): (string | JSX.Element)[] => {
  const parts: (string | JSX.Element)[] = [];
  const regex = /(\*\*(.+?)\*\*)|(\[(.+?)\]\((.+?)\))/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    if (match[1]) {
      parts.push(<strong key={match.index} className="font-semibold text-foreground">{match[2]}</strong>);
    } else if (match[3]) {
      const href = match[5];
      if (href.startsWith("/")) {
        parts.push(<Link key={match.index} to={href} className="text-primary hover:underline font-medium">{match[4]}</Link>);
      } else {
        parts.push(<a key={match.index} href={href} className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer">{match[4]}</a>);
      }
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useDocTitle(post ? `${post.title} | Smile Avenue Blog` : "Blog | Smile Avenue");

  if (!post) {
    return (
      <>
        <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
        <main className="section-padding text-center">
          <h1 className="section-heading">Post Not Found</h1>
          <Link to="/blog" className="btn-primary mt-4 inline-block">Back to Blog</Link>
        </main>
        <Footer />
      </>
    );
  }

  const relatedPosts = getRelatedPosts(post.relatedPostSlugs);
  const authorImgKey = post.authorSlug.replace(/-d[dm][sd]$/, "").replace(/-/g, "-");
  const authorImg = DOCTOR_IMAGES[authorImgKey];
  const canonicalUrl = `https://www.smileavenuefamilydentistry.com/blog/${post.slug}/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    author: { "@type": "Person", name: post.author, jobTitle: "Dentist", url: `https://www.smileavenuefamilydentistry.com/doctors/${post.authorSlug}/` },
    publisher: { "@type": "Organization", name: "Smile Avenue Family Dentistry", url: "https://www.smileavenuefamilydentistry.com", logo: { "@type": "ImageObject", url: "https://www.smileavenuefamilydentistry.com/logo-full.webp" } },
    datePublished: post.publishDate,
    dateModified: post.updatedDate || post.publishDate,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    url: canonicalUrl,
  };

  const faqJsonLd = post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map(f => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  } : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.smileavenuefamilydentistry.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.smileavenuefamilydentistry.com/blog/" },
      { "@type": "ListItem", position: 3, name: post.title, item: canonicalUrl },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Smile Avenue Family Dentistry</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:modified_time" content={post.updatedDate || post.publishDate} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        {faqJsonLd && <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>}
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />

      <main className="pb-14 lg:pb-0">
        <article className="section-padding bg-background">
          <div className="container mx-auto max-w-3xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">{post.title}</span>
            </nav>

            {/* Header */}
            <header className="mb-8">
              <span className="text-[10px] font-sans font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary">{post.category}</span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">{post.title}</h1>

              {/* Author + Meta */}
              <div className="flex items-center gap-4 mb-6">
                {authorImg && (
                  <img src={authorImg.url} alt={post.author} className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" width={48} height={48} />
                )}
                <div>
                  <Link to={`/doctors/${post.authorSlug}/`} className="text-sm font-sans font-semibold text-foreground hover:text-primary transition-colors">
                    {post.author}, {post.authorCredentials}
                  </Link>
                  <div className="flex items-center gap-3 text-xs font-sans text-muted-foreground mt-0.5">
                    <span className="flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5" />{new Date(post.publishDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                  </div>
                </div>
              </div>
            </header>

            {/* TL;DR */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-10">
              <p className="text-xs font-sans font-bold tracking-wider uppercase text-primary mb-2">TL;DR — Quick Summary</p>
              <p className="text-sm font-body text-foreground leading-relaxed">{post.tldr}</p>
            </div>

            {/* Article Body */}
            <div className="prose-custom">
              {renderContent(post.content)}
            </div>

            {/* Related Services */}
            {post.relatedServices.length > 0 && (
              <div className="mt-12 p-6 bg-card rounded-xl border border-border">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">Related Services at Smile Avenue</h3>
                <div className="flex flex-wrap gap-2">
                  {post.relatedServices.map((svc) => (
                    <Link key={svc.href} to={svc.href} className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-sans font-medium hover:bg-primary/20 transition-colors">
                      {svc.label} <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            {post.faqs.length > 0 && (
              <div className="mt-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
                <FaqAccordion items={post.faqs} />
              </div>
            )}

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-card rounded-xl border border-border flex gap-4 items-start">
              {authorImg && (
                <img src={authorImg.url} alt={post.author} className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 shrink-0" width={64} height={64} />
              )}
              <div>
                <p className="text-xs font-sans font-bold tracking-wider uppercase text-primary mb-1">About the Author</p>
                <Link to={`/doctors/${post.authorSlug}/`} className="font-display text-lg font-bold text-foreground hover:text-primary transition-colors">
                  {post.author}, {post.authorCredentials}
                </Link>
                <p className="text-sm font-body text-muted-foreground mt-1">
                  {post.author} is a dentist at Smile Avenue Family Dentistry, providing expert dental care to families in Cypress and Katy, TX.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="section-padding section-alt">
            <div className="container mx-auto max-w-3xl">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {relatedPosts.map((rp) => (
                  <Link key={rp.slug} to={`/blog/${rp.slug}`} className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-colors group">
                    <span className="text-[10px] font-sans font-bold tracking-wider uppercase text-primary">{rp.category}</span>
                    <h3 className="font-display text-base font-bold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">{rp.title}</h3>
                    <p className="text-xs font-body text-muted-foreground line-clamp-2">{rp.excerpt}</p>
                    <span className="text-xs font-sans font-semibold text-primary mt-3 inline-block">Read More →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="section-padding gradient-cta text-center">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Have a Dental Question?</h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Our team is always happy to help. Book a consultation or give us a call.</p>
            <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book a Consultation</a>
          </div>
        </section>
      </main>

      <MobileStickyBar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <Footer />
    </>
  );
};

export default BlogPostPage;
