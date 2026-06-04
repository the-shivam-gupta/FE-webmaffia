import { notFound, permanentRedirect } from "next/navigation";
import BlogDetailPage from "@/components/BlogDetailPage";
import BlogStrapiArticle from "@/components/BlogStrapiArticle";
import { prepareStrapiArticleHtml } from "@/lib/blog-helpers";
import {
    formatBlogDate,
    getBlog,
    getBlogBySlug,
    getRelatedStrapiPosts,
    getStrapiImageUrl,
} from "@/lib/strapiPage";

function BlogTitle({ heading }) {
    const lines = String(heading ?? "").split("\n").filter(Boolean);
    if (lines.length <= 1) return heading;

    return lines.map((line, index) => (
        <span key={index}>
            {index > 0 ? <br /> : null}
            {line}
        </span>
    ));
}

export async function generateStaticParams() {
    const blogs = await getBlog();
    return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getBlogBySlug(slug);

    if (!post) {
        return { title: "Blog | Webmaffia" };
    }

    const title = post.heading?.replace(/\n/g, " ") ?? "Blog";
    const canonicalSlug = post.slug;

    return {
        title: `${title} | Webmaffia`,
        description: post.excerpt,
        alternates: {
            canonical: `https://www.webmaffia.com/blog/${canonicalSlug}`,
        },
    };
}

export default async function StrapiBlogPage({ params }) {
    const { slug } = await params;
    const post = await getBlogBySlug(slug);

    if (!post) {
        notFound();
    }

    if (post.slug !== slug) {
        permanentRedirect(`/blog/${post.slug}`);
    }

    const preparedArticle = prepareStrapiArticleHtml(post.description);
    const relatedPosts = await getRelatedStrapiPosts(post.slug, 2);

    return (
        <BlogDetailPage
            slug={post.slug}
            title={<BlogTitle heading={post.heading} />}
            date={formatBlogDate(post.date)}
            readTime={post.readTime}
            image={getStrapiImageUrl(post.image)}
            imageAlt={post.image?.alternativeText || post.heading || ""}
            stickyLinks={preparedArticle.stickyLinks}
            relatedPosts={relatedPosts}
        >
            <BlogStrapiArticle html={preparedArticle.html} />
        </BlogDetailPage>
    );
}
