import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, SITE_URL } from "@/lib/schema";
import { getAuthors } from "@/lib/strapiPage";

export const metadata = {
    title: "Authors | Webmaffia",
    description:
        "Meet the Webmaffia experts behind our articles on digital marketing, SEO, web development, AI, and brand strategy.",
    alternates: {
        canonical: `${SITE_URL}/author`,
    },
    robots: {
        index: false,
        follow: false,
    },
};

const BREADCRUMB_SCHEMA = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Authors", path: "/author" },
]);

function getInitials(name) {
    return String(name ?? "")
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0].toUpperCase())
        .join("");
}

export default async function AuthorsPage() {
    const authors = await getAuthors();

    return (
        <main className="wrapper">
            <JsonLd data={BREADCRUMB_SCHEMA} />
            <div className="author_page">
                <section className="author_list_hero">
                    <span className="author_label">OUR AUTHORS</span>
                    <h1>Meet the minds behind our blogs</h1>
                </section>

                <section className="author_grid">
                    {authors.map((author) => {
                        const count = author.blogs.length;
                        const avatarUrl = author.profileImage?.url;

                        return (
                            <Link
                                key={author.id}
                                href={`/author/${author.slug}`}
                                className="author_card"
                            >
                                <div className="author_avatar">
                                    {avatarUrl ? (
                                        <Image
                                            src={avatarUrl}
                                            alt={author.profileImage?.alternativeText || author.name}
                                            fill
                                            sizes="(max-width: 900px) 40vw, 20rem"
                                            className="author_avatar_img"
                                        />
                                    ) : (
                                        <span aria-hidden="true">{getInitials(author.name)}</span>
                                    )}
                                </div>
                                <div className="author_card_info">
                                    <div className="h5">{author.name}</div>
                                    {author.designation ? (
                                        <div className="author_designation">{author.designation}</div>
                                    ) : null}
                                    <span className="link blog_link">
                                        {count} {count === 1 ? "ARTICLE" : "ARTICLES"}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </section>
            </div>
        </main>
    );
}
