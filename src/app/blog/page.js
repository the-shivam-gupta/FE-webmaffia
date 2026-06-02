import Image from "next/image";
import Link from "next/link";
import BlogListItem from "@/components/BlogListItem";
import { FEATURED_BLOG, OTHER_BLOGS, blogHref } from "@/lib/blogs";

export default function BlogPage() {
  const featuredHref = blogHref(FEATURED_BLOG.slug);

  return (
    <main className="wrapper">
      <div className="blog_listing">
        <section data-section="hero_section" className="hero_section flex">
          <div>
            <div className="sub_title">OUR BLOGS</div>
            <h1>
              Creating a
              <br />
              platform for your <br />
              purpose
            </h1>
            <p>
              Transforming visions into captivating digital landscapes, <br />
              we crafts tailored solutions that elevate brands and engage <br />
              audiences. With a focus on innovation and precision, we <br />
              bring your online presence to life, delivering seamless user <br />
              experiences that resonate and inspire.
            </p>
          </div>
          <Image
            src="/assets/images/blogs/blog-banner.svg"
            alt=""
            width={788}
            height={693}
            className="dark_img"
            priority
          />
        </section>

        <section className="our_blog">
          <div className="main_blog">
            <Link href={featuredHref}>
              <div>
                <Image
                  src={FEATURED_BLOG.image}
                  alt={FEATURED_BLOG.imageAlt}
                  width={FEATURED_BLOG.imageWidth}
                  height={FEATURED_BLOG.imageHeight}
                />
              </div>
            </Link>
            <Link href={featuredHref}>
              <h2 className="h5">{FEATURED_BLOG.title}</h2>
              <p>{FEATURED_BLOG.excerpt}</p>
              <div className="blogs_date">
                <span>{FEATURED_BLOG.date}</span>
                <span>{FEATURED_BLOG.readTime}</span>
              </div>
              <span className="link blog_link">READ MORE</span>
            </Link>
          </div>

          <div className="other_blogs">
            {OTHER_BLOGS.map((post) => (
              <BlogListItem key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
