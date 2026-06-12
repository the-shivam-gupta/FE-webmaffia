import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";
import BlogListItem from "@/components/BlogListItem";
import { formatBlogDate, getBlog, getStrapiImageUrl } from "@/lib/strapiPage";

const bannerData = {
  imagePosition: "right",
  priority: true,
  subheading: {
    enabled: true,
    text: "OUR BLOGS",
  },
  title: {
    line1: "Creating a",
    line2: "platform for your",
    line3: "purpose",
  },
  description:
    "Transforming visions into captivating digital landscapes,\nwe crafts tailored solutions that elevate brands and engage\naudiences. With a focus on innovation and precision, we\nbring your online presence to life, delivering seamless user\nexperiences that resonate and inspire.",
  images: {
    banner: {
      url: "/assets/images/blogs/blog-banner.svg",
      alt: "",
      width: 788,
      height: 693,
    },
  },
};

export default async function BlogPage() {
  const blogs = await getBlog();

  const featuredBlog = blogs[0];
  const featuredHref = featuredBlog ? `/blog/${featuredBlog.slug}` : "/blog";
  const otherBlogs = blogs.slice(1);

  return (
    <main className="wrapper">
      <div className="blog_listing">
        <Banner data={bannerData} />

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
