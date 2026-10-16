import { notFound, permanentRedirect } from "next/navigation";
import BlogDetailPage from "@/components/BlogDetailPage";
import BlogStrapiArticle from "@/components/BlogStrapiArticle";
import JsonLd from "@/components/JsonLd";
import { buildFaqPageSchema, prepareStrapiArticleHtml } from "@/lib/blog-helpers";
import { buildBreadcrumbSchema, SITE_URL } from "@/lib/schema";
import {
    formatBlogDate,
    getBlog,
    getBlogBySlug,
    getPostAuthor,
    getRelatedStrapiPosts,
    getSeoFields,
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
    const seo = getSeoFields(post.seo);

    return {
        title: seo.title ?? `${title} | Webmaffia`,
        description: seo.description ?? post.excerpt,
        ...(seo.keywords ? { keywords: seo.keywords } : {}),
        alternates: {
            canonical: seo.canonical ?? `https://www.webmaffia.com/blog/${canonicalSlug}`,
        },
    };
}

function toAbsoluteUrl(url) {
    if (!url) return url;
    return url.startsWith("http") ? url : `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
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

    const author = getPostAuthor(post);
    const headline = post.heading?.replace(/\n/g, " ") ?? "";
    const publishedAt = post.publishedAt || post.createdAt || null;
    const modifiedAt = post.updatedAt || publishedAt;

    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_URL}/blog/${post.slug}`,
        },
        headline,
        description: post.excerpt ?? "",
        image: toAbsoluteUrl(getStrapiImageUrl(post.image)),
        author: author
            ? {
                "@type": "Person",
                name: author.name,
                url: `${SITE_URL}/author/${author.slug}`,
            }
            : {
                "@type": "Organization",
                name: "WebMaffia",
                url: `${SITE_URL}/`,
            },
        publisher: {
            "@type": "Organization",
            name: "WebMaffia",
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/assets/images/icons/webmaffia.webp`,
            },
        },
        ...(publishedAt ? { datePublished: publishedAt } : {}),
        ...(modifiedAt ? { dateModified: modifiedAt } : {}),
    };

    const breadcrumbSchema = buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: headline || post.slug, path: `/blog/${post.slug}` },
    ]);

    const faqPageSchema = buildFaqPageSchema(post.description);

    return (
        <>
            <JsonLd data={blogPostingSchema} />
            <JsonLd data={breadcrumbSchema} />
            {faqPageSchema && <JsonLd data={faqPageSchema} />}
            <BlogDetailPage
                slug={post.slug}
                title={<BlogTitle heading={post.heading} />}
                date={formatBlogDate(post.date)}
                readTime={post.readTime}
                author={author}
                image={getStrapiImageUrl(post.image)}
                imageAlt={post.image?.alternativeText || post.heading || ""}
                stickyLinks={preparedArticle.stickyLinks}
                relatedPosts={relatedPosts}
            >
                <BlogStrapiArticle html={preparedArticle.html} />
            </BlogDetailPage>
        </>
    );
}
