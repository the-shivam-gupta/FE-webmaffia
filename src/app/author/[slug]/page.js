import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogListItem from "@/components/BlogListItem";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, SITE_URL } from "@/lib/schema";
import { getAuthorBySlug, getAuthors } from "@/lib/strapiPage";

export const dynamicParams = true;

export async function generateStaticParams() {
    const authors = await getAuthors();
    return authors.map((author) => ({ slug: author.slug }));
}

function getInitials(name) {
    return String(name ?? "")
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0].toUpperCase())
        .join("");
}

function getAuthorDescription(author) {
    if (author.bio?.trim()) return author.bio.trim();

    const role = author.designation ? `${author.designation} at Webmaffia` : "Webmaffia";
    return `Read articles by ${author.name}, ${role}, on digital marketing, SEO, web development and brand strategy.`;
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const author = await getAuthorBySlug(slug);

    if (!author) {
        return { title: "Author | Webmaffia" };
    }

    return {
        title: `${author.name} - Author at Webmaffia`,
        description: getAuthorDescription(author),
        alternates: {
            canonical: `${SITE_URL}/author/${author.slug}`,
        },
    };
}

export default async function AuthorPage({ params }) {
    const { slug } = await params;
    const author = await getAuthorBySlug(slug);

    if (!author) {
        notFound();
    }

    const { blogs } = author;
    const avatarUrl = author.profileImage?.url;
    const postCount = blogs.length;

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${SITE_URL}/author/${author.slug}#person`,
        name: author.name,
        url: `${SITE_URL}/author/${author.slug}`,
        ...(author.designation ? { jobTitle: author.designation } : {}),
        ...(author.bio?.trim() ? { description: author.bio.trim() } : {}),
        ...(avatarUrl ? { image: avatarUrl } : {}),
        worksFor: { "@type": "Organization", name: "WebMaffia", url: `${SITE_URL}/` },
    };

    const breadcrumbSchema = buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: author.name, path: `/author/${author.slug}` },
    ]);

    return (
        <main className="wrapper">
            <JsonLd data={personSchema} />
            <JsonLd data={breadcrumbSchema} />
            <div className="author_page">
                <section className="author_hero">
                    <div className="author_avatar">
                        {avatarUrl ? (
                            <Image
                                src={avatarUrl}
                                alt={author.profileImage?.alternativeText || author.name}
                                fill
                                sizes="(max-width: 900px) 40vw, 20rem"
                                className="author_avatar_img"
                                priority
                            />
                        ) : (
                            <span aria-hidden="true">{getInitials(author.name)}</span>
                        )}
                    </div>
                    <div className="author_info">
                        <span className="author_label">AUTHOR</span>
                        <h1>{author.name}</h1>
                        {author.designation ? (
                            <div className="author_designation">{author.designation}</div>
                        ) : null}
                        {author.bio?.trim() ? <p className="author_bio">{author.bio.trim()}</p> : null}
                        <div className="author_count">
                            {postCount} {postCount === 1 ? "Article" : "Articles"}
                        </div>
                    </div>
                </section>

                <section className="our_blog author_posts">
                    <h2 className="h5 author_posts_title">Articles by {author.name}</h2>
                    {postCount > 0 ? (
                        <div className="other_blogs">
                            {blogs.map((blog) => (
                                <BlogListItem key={blog.id} post={blog} />
                            ))}
                        </div>
                    ) : (
                        <p className="author_empty">
                            No articles published yet. Browse all{" "}
                            <Link href="/blog" className="link">
                                our blogs
                            </Link>
                            .
                        </p>
                    )}
                </section>
            </div>
        </main>
    );
}
