const STRAPI_URL = process.env.STRAPI_API_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;
const FALLBACK_IMAGE = "/assets/images/blogs/blog_list_1.webp";

const MONTHS = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

function slugify(text) {
    return String(text)
        .toLowerCase()
        .replace(/['']/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

function resolveSlug(post) {
    const slug = post.slug?.trim();
    if (slug) return slug;
    return slugify(post.heading ?? "");
}

export function parseBlogDate(dateStr) {
    if (!dateStr) return 0;

    const match = String(dateStr).trim().match(/^(\d{1,2})\s+([A-Za-z]+)['']?(\d{2})$/);
    if (!match) {
        const parsed = Date.parse(dateStr);
        return Number.isNaN(parsed) ? 0 : parsed;
    }

    const [, day, monthStr, yearShort] = match;
    const month = MONTHS[monthStr.slice(0, 3).toLowerCase()];
    if (month === undefined) return 0;

    return new Date(2000 + Number(yearShort), month, Number(day)).getTime();
}

export function formatBlogDate(dateStr) {
    if (!dateStr) return "";
    return String(dateStr).trim();
}

export function getFirstParagraph(description) {
    if (!description) return "";

    const match = description.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
    const raw = match ? match[1] : description;

    return raw
        .replace(/<[^>]+>/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function normalizeBlogPost(post) {
    return {
        ...post,
        slug: resolveSlug(post),
        excerpt: post.excerpt ?? getFirstParagraph(post.description),
        readTime: post.readTime ?? post.timeToRead,
    };
}

async function fetchBlogsRaw() {
    const response = await fetch(`${STRAPI_URL}/api/blogs?populate=*`, {
        headers: {
            Authorization: `Bearer ${STRAPI_TOKEN}`,
            "Content-Type": "application/json",
        },
        next: { revalidate: 60 },
    });
    if (!response.ok) {
        throw new Error("Failed to fetch blogs");
    }
    const data = await response.json();
    return data.data;
}

export async function getBlog() {
    const posts = await fetchBlogsRaw();
    return posts
        .map(normalizeBlogPost)
        .sort((a, b) => parseBlogDate(b.date) - parseBlogDate(a.date));
}

export async function getBlogBySlug(slug) {
    const posts = await getBlog();
    return (
        posts.find(
            (post) =>
                post.slug === slug ||
                post.documentId === slug
        ) ?? null
    );
}

export function getRelatedStrapiPosts(slug, count = 2) {
    return getBlog().then((posts) =>
        posts
            .filter((post) => post.slug !== slug)
            .slice(0, count)
            .map((post) => ({
                href: `/blog/${post.slug}`,
                title: post.heading?.replace(/\n/g, " ") ?? "",
                excerpt: post.excerpt,
                date: formatBlogDate(post.date),
                readTime: post.readTime,
                image: getStrapiImageUrl(post.image),
                imageAlt: post.image?.alternativeText || "",
            }))
    );
}

export function getStrapiImageUrl(image) {
    if (!image) return FALLBACK_IMAGE;

    const url = image.url;
    if (!url) return FALLBACK_IMAGE;

    if (url.startsWith("http")) return url;

    const base = process.env.NEXT_PUBLIC_STRAPI_URL;
    return `${base}${url}`;
}
