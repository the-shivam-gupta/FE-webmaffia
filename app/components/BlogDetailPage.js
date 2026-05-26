import Image from "next/image";
import Link from "next/link";
import { getBlogStickyLinks, getRelatedBlogPosts } from "@/lib/blog-helpers";
import BlogStickyNav from "./BlogStickyNav";

const BLOG_SERVICES = [
  { href: "/digital-strategy", num: "01", label: "Digital Strategy" },
  {
    href: "/website-design-development-services",
    num: "02",
    label: "Design & development",
  },
  { href: "/search-engine-optimization-services", num: "03", label: "SEO" },
  { href: "/social-media-marketing-strategy", num: "04", label: "Social media" },
  { href: "/content-marketing-strategy", num: "05", label: "Content marketing" },
  { href: "/influencer-marketing", num: "06", label: "Influencer marketing" },
];

export default function BlogDetailPage({
  slug,
  title,
  date,
  readTime,
  image,
  imageAlt = "",
  stickyLinks: stickyLinksProp,
  relatedPosts: relatedPostsProp,
  children,
}) {
  const stickyLinks =
    stickyLinksProp ?? (slug ? getBlogStickyLinks(slug) : []);
  const relatedPosts =
    relatedPostsProp ?? (slug ? getRelatedBlogPosts(slug, 2) : []);

  return (
    <main className="wrapper">
      <div className="ml-setter blog_detail">
        <section className="blog_main" data-section="blog_main">
          <h1>{title}</h1>
          <div className="blog_date">
            <span>{date}</span>
            <span>|</span>
            <span>{readTime}</span>
          </div>
          <div className="blog_section">
            <div className="" id="mob_sticky_article" />
            <div className="blog_set">
              <div className="blog_page">
                {image ? (
                  <Image
                    src={image}
                    alt={imageAlt}
                    width={1030}
                    height={709}
                    className="blog_detail_img"
                    priority
                  />
                ) : null}
                <div className="blog_title" />
                <div className="blog_content">{children}</div>
                <div className="blog_info" />
              </div>
              <aside>
                <div className="blog_services">
                  <div className="aside_title">
                    Services that <br />
                    we cater
                  </div>
                  <div className="service_types">
                    {BLOG_SERVICES.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        data-service={service.num}
                        className="service_text"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <BlogStickyNav links={stickyLinks} />
              </aside>
            </div>
          </div>
        </section>
      </div>

      {relatedPosts.length > 0 && (
        <section
          className="other_detail_blogs"
          data-section="other_detail_blogs"
        >
          <div className="detail_title">
            You might also like the <br />
            following blog articles.
          </div>
          <div className="other_blogs">
            {relatedPosts.map((post) => (
              <div className="blog_item" key={post.href}>
                <Link href={post.href}>
                  <div>
                    <Image
                      src={post.image}
                      alt={post.imageAlt || ""}
                      width={1030}
                      height={709}
                    />
                  </div>
                </Link>
                <div>
                  <Link href={post.href}>
                    <div className="h5 blog_item_title">{post.title}</div>
                    <div className="blog_para">
                      <p>{post.excerpt}</p>
                      <div className="blogs_date">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <span className="link blog_link">READ MORE</span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
