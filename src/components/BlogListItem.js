import Image from "next/image";
import Link from "next/link";
import { blogHref } from "@/lib/blogs";

const CARD_IMAGE = { width: 698, height: 479 };

export default function BlogListItem({ post }) {
  const href = blogHref(post.slug);

  return (
    <div className="blog_item">
      <Link href={href}>
        <div>
          <Image
            src={post.image}
            alt={post.imageAlt || ""}
            width={CARD_IMAGE.width}
            height={CARD_IMAGE.height}
          />
        </div>
      </Link>
      <div>
        <Link href={href}>
          <h2 className="h5">{post.title}</h2>
          <div>
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
  );
}
