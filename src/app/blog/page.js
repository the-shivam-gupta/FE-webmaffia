import Image from "next/image";
import Link from "next/link";
import BlogListItem from "@/components/BlogListItem";
import { formatBlogDate, getBlog, getStrapiImageUrl } from "@/lib/strapiPage";

export default async function BlogPage() {
  const blogs = await getBlog();

  const featuredBlog = blogs[0];
  const featuredHref = featuredBlog ? `/blog/${featuredBlog.slug}` : "/blog";
  const otherBlogs = blogs.slice(1);

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
          {featuredBlog ? (
          <div className="main_blog">
            <Link href={featuredHref}>
              <div className="main_blog_image">
                <Image
                  src={getStrapiImageUrl(featuredBlog.image)}
                  alt={featuredBlog.image?.alternativeText || featuredBlog.heading || "Featured blog post"}
                  fill
                  sizes="(max-width: 900px) 100vw, 89.6rem"
                  className="main_blog_img"
                  priority
                />
              </div>
            </Link>
            <Link href={featuredHref}>
              <h2 className="h5">{featuredBlog.heading}</h2>
              <p>{featuredBlog.excerpt}</p>
              <div className="blogs_date">
              <span>{formatBlogDate(featuredBlog.date)}</span>
                  <span>{featuredBlog.readTime}</span>
              </div>
              <span className="link blog_link">READ MORE</span>
            </Link>
          </div>
          ) : null}

          <div className="other_blogs">
            {otherBlogs.map((blog) => (
              <BlogListItem 
              key={blog.id} 
              post={blog}
               />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
