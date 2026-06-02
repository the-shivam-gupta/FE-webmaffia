import { readFileSync } from "fs";
import path from "path";
import { FEATURED_BLOG, OTHER_BLOGS } from "./blogs";

/** Plain-text fallbacks when listing data uses JSX title/excerpt */
const PLAIN_TITLE_BY_SLUG = {
  "geo-vs-seo-vs-aeo-what-brands-need-in-2026":
    "GEO, SEO, AEO - Your Business Needs All Three",
  "what-is-ppc-simple-guide-to-pay-per-click-advertising":
    "What is PPC Advertising? Everything You Need to Know to Get Started",
  "what-is-digital-marketing-everything-about-types-and-process":
    "What is Digital Marketing? Everything About Types and Process",
  "digital-marketing-trends-to-look-out-for":
    "Digital Marketing Trends to Look Out for in 2025",
};

const PLAIN_EXCERPT_BY_SLUG = {
  "geo-vs-seo-vs-aeo-what-brands-need-in-2026":
    "The way people search has changed. Learn the key differences between GEO, SEO, and AEO— and what brands must prioritise in 2026 to stay found.",
};

function stripHtml(text) {
  return text
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function getBlogStickyLinks(slug) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "assets",
    "blog-content",
    `${slug}.html`
  );

  try {
    const html = readFileSync(filePath, "utf8");
    const links = [];
    const blockRegex =
      /<div class="blog_detail_wrapper" id="([^"]+)">([\s\S]*?)(?=<div class="blog_detail_wrapper"|$)/g;
    let match = blockRegex.exec(html);

    while (match) {
      const id = match[1];
      const block = match[2];
      const headingMatch = block.match(/<h[234][^>]*>([\s\S]*?)<\/h[234]>/);
      const label = headingMatch ? stripHtml(headingMatch[1]) : id;

      if (label) {
        links.push({ href: `#${id}`, label });
      }
      match = blockRegex.exec(html);
    }

    return links;
  } catch {
    return [];
  }
}

function toRelatedPost(entry) {
  const title =
    typeof entry.title === "string"
      ? entry.title
      : PLAIN_TITLE_BY_SLUG[entry.slug] ?? entry.slug.replace(/-/g, " ");

  const excerpt =
    typeof entry.excerpt === "string"
      ? entry.excerpt
      : PLAIN_EXCERPT_BY_SLUG[entry.slug] ?? "";

  return {
    href: `/blog/${entry.slug}`,
    title,
    excerpt,
    date: entry.date,
    readTime: entry.readTime,
    image: entry.image,
    imageAlt: entry.imageAlt || "",
  };
}

export function getRelatedBlogPosts(slug, count = 2) {
  const all = [
    toRelatedPost({ ...FEATURED_BLOG }),
    ...OTHER_BLOGS.map((post) => toRelatedPost({ ...post })),
  ];

  const others = all.filter((post) => post.href !== `/blog/${slug}`);
  return others.slice(0, count);
}
