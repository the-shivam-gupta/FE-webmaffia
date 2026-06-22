const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;
const FALLBACK_IMAGE = "/assets/images/blogs/blog_list_1.webp";

const MONTHS = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

function getStrapiApiBaseUrl() {
    const raw = process.env.STRAPI_API_URL?.trim();
    if (!raw) return "";

    try {
        const url = new URL(raw);
        return url.origin;
    } catch {
        return raw.replace(/\/admin(?:\/.*)?$/i, "").replace(/\/$/, "");
    }
}

function getStrapiPublicBaseUrl() {
    const publicUrl =
        process.env.NEXT_PUBLIC_STRAPI_URL?.trim() ||
        process.env.STRAPI_PUBLIC_URL?.trim() ||
        getStrapiApiBaseUrl();

    return publicUrl.replace(/\/$/, "");
}

function normalizeStrapiAssetUrl(url) {
    if (!url) return "";

    const publicBase = getStrapiPublicBaseUrl();
    const localAssetPattern = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?/i;

    if (localAssetPattern.test(url) && publicBase) {
        try {
            const parsed = new URL(url);
            return `${publicBase}${parsed.pathname}${parsed.search}`;
        } catch {
            return url;
        }
    }

    if (url.startsWith("http")) return url;

    if (publicBase) {
        return `${publicBase}${url.startsWith("/") ? url : `/${url}`}`;
    }

    return url;
}

export function rewriteStrapiHtmlUrls(html) {
    if (!html) return html;

    const publicBase = getStrapiPublicBaseUrl();
    if (!publicBase) return html;

    return html.replace(
        /https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?(\/[^"'\s>]*)/gi,
        `${publicBase}$1`
    );
}

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
        description: rewriteStrapiHtmlUrls(post.description),
        image: post.image
            ? {
                ...post.image,
                url: normalizeStrapiAssetUrl(post.image.url),
            }
            : post.image,
    };
}

async function fetchBlogsRaw() {
    const strapiBaseUrl = getStrapiApiBaseUrl();
    if (!strapiBaseUrl) {
        throw new Error("STRAPI_API_URL is not configured");
    }

    const response = await fetch(`${strapiBaseUrl}/api/blogs?populate=*`, {
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

export function getStrapiAssetUrl(asset) {
    if (!asset?.url) return "";

    return normalizeStrapiAssetUrl(asset.url) || "";
}

export function getStrapiImageUrl(image) {
    if (!image) return FALLBACK_IMAGE;

    const url = image.url;
    if (!url) return FALLBACK_IMAGE;

    return normalizeStrapiAssetUrl(url) || FALLBACK_IMAGE;
}

const CASE_STUDY_POPULATE = [
    "populate[banner][populate]=*",
    "populate[contentBlock][populate][image][populate]=*",
    "populate[showcase][populate]=*",
    "populate[testimonial][populate]=*",
    "populate[thumbnail][populate]=*",
    "populate[sections][on][case-study.seo][populate][graphs][populate]=*",
    "populate[sections][on][case-study.creatives][populate][reels][populate]=*",
    "populate[sections][on][case-study.creatives][populate][posts][populate][media][populate]=*",
    "populate[sections][on][case-study.creatives][populate][button]=*",
].join("&");

async function fetchCaseStudiesRaw() {
    const strapiBaseUrl = getStrapiApiBaseUrl();
    if (!strapiBaseUrl) {
        throw new Error("STRAPI_API_URL is not configured");
    }

    const response = await fetch(
        `${strapiBaseUrl}/api/case-studies?${CASE_STUDY_POPULATE}`,
        {
            headers: {
                Authorization: `Bearer ${STRAPI_TOKEN}`,
                "Content-Type": "application/json",
            },
            next: { revalidate: 60 },
        }
    );

    if (!response.ok) {
        const errorBody = await response.text().catch(() => "");
        throw new Error(
            `Failed to fetch case studies (${response.status})${errorBody ? `: ${errorBody.slice(0, 200)}` : ""}`
        );
    }

    const data = await response.json();
    return data.data;
}

export async function getCaseStudies() {
    return fetchCaseStudiesRaw();
}

export async function getCaseStudyBySlug(slug) {
    const caseStudies = await getCaseStudies();
    return (
        caseStudies.find(
            (entry) => entry.slug === slug || entry.documentId === slug
        ) ?? null
    );
}

function mapTestimonial(entry) {
    const name = entry.name?.trim() ?? "";
    const icon = entry.icon;

    return {
        id: entry.documentId ?? String(entry.id),
        quote: entry.description?.trim() ?? "",
        author: name,
        role: entry.designation?.trim() ?? "",
        speaker: name.split(/\s+/)[0]?.toUpperCase() ?? "",
        logo: icon?.url
            ? {
                src: getStrapiImageUrl(icon),
                w: icon.width || 114,
                h: icon.height || 114,
            }
            : null,
    };
}

async function fetchTestimonialsRaw() {
    const strapiBaseUrl = getStrapiApiBaseUrl();
    if (!strapiBaseUrl) {
        throw new Error("STRAPI_API_URL is not configured");
    }

    const response = await fetch(
        `${strapiBaseUrl}/api/testimonials?populate=*&sort=createdAt:asc`,
        {
            headers: {
                Authorization: `Bearer ${STRAPI_TOKEN}`,
                "Content-Type": "application/json",
            },
            next: { revalidate: 60 },
        }
    );

    if (!response.ok) {
        const errorBody = await response.text().catch(() => "");
        throw new Error(
            `Failed to fetch testimonials (${response.status})${errorBody ? `: ${errorBody.slice(0, 200)}` : ""}`
        );
    }

    const data = await response.json();
    return data.data;
}

export async function getTestimonials() {
    try {
        const entries = await fetchTestimonialsRaw();
        return entries.map(mapTestimonial).filter((entry) => entry.quote);
    } catch (error) {
        console.error("Failed to fetch testimonials:", error);
        return [];
    }
}

async function fetchCampaignsRaw() {
    const strapiBaseUrl = getStrapiApiBaseUrl();
    if (!strapiBaseUrl) {
        throw new Error("STRAPI_API_URL is not configured");
    }

    const response = await fetch(`${strapiBaseUrl}/api/campaigns?populate[poster][populate]=*&populate[video][populate]=*&populate[recognition][populate]=*`, {
        headers: {
            Authorization: `Bearer ${STRAPI_TOKEN}`,
            "Content-Type": "application/json",
        },
        next: { revalidate: 60 },
    });

    if (!response.ok) {
        const errorBody = await response.text().catch(() => "");
        throw new Error(
            `Failed to fetch campaigns (${response.status})${errorBody ? `: ${errorBody.slice(0, 200)}` : ""}`
        );
    }

    const data = await response.json();
    return data.data;
}

export async function getCampaigns() {
    return fetchCampaignsRaw();
}

export async function getCampaignBySlug(slug) {
    const campaigns = await getCampaigns();
    return (
        campaigns.find(
            (entry) => entry.slug === slug || entry.documentId === slug
        ) ?? null
    );
}
