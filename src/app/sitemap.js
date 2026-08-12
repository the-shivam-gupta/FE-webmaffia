import {
  getAllServiceEntries,
  getAllServiceLocationPaths,
} from "@/lib/serviceLocations";
import {
  getBlog,
  getCampaigns,
  getCaseStudies,
} from "@/lib/strapiPage";

const SITE_URL = "https://www.webmaffia.com";

/** Core pages that rarely change. */
const STATIC_PAGES = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.8, changeFrequency: "weekly" },
  { path: "/case-study", priority: 0.8, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.8, changeFrequency: "daily" },
  { path: "/career", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/awards", priority: 0.8, changeFrequency: "monthly" },
  { path: "/clients", priority: 0.8, changeFrequency: "monthly" },
];

function toUrl(path) {
  const normalized = path === "/" ? "" : path.replace(/\/$/, "");
  return `${SITE_URL}${normalized}`;
}

function entry(path, { priority = 0.64, changeFrequency = "weekly", lastModified } = {}) {
  return {
    url: toUrl(path),
    lastModified: lastModified ? new Date(lastModified) : new Date(),
    changeFrequency,
    priority,
  };
}

async function safeFetch(label, fn) {
  try {
    return await fn();
  } catch (error) {
    console.error(`[sitemap] Failed to load ${label}:`, error);
    return [];
  }
}

export default async function sitemap() {
  const [blogs, caseStudies, campaigns, services, locationPaths] = await Promise.all([
    safeFetch("blogs", getBlog),
    safeFetch("case studies", getCaseStudies),
    safeFetch("campaigns", getCampaigns),
    safeFetch("services", getAllServiceEntries),
    safeFetch("service locations", getAllServiceLocationPaths),
  ]);

  const servicePages = services.map((service) => `/services/${service.slug}`);

  const staticEntries = [
    ...STATIC_PAGES.map(({ path, priority, changeFrequency }) =>
      entry(path, { priority, changeFrequency })
    ),
    ...servicePages.map((path) =>
      entry(path, { priority: 0.8, changeFrequency: "monthly" })
    ),
    ...locationPaths.map(({ serviceLocation }) =>
      entry(`/services/${serviceLocation}`, {
        priority: 0.7,
        changeFrequency: "monthly",
      })
    ),
  ];

  const blogEntries = blogs
    .filter((post) => post?.slug)
    .map((post) =>
      entry(`/blog/${post.slug}`, {
        priority: 0.64,
        changeFrequency: "weekly",
        lastModified: post.updatedAt || post.publishedAt || post.createdAt,
      })
    );

  const caseStudySlugs = new Set();
  const caseStudyEntries = [];

  for (const study of caseStudies) {
    if (!study?.slug || study.thumbnail?.externalLink) continue;
    caseStudySlugs.add(study.slug);
    caseStudyEntries.push(
      entry(`/case-study/${study.slug}`, {
        priority: 0.64,
        changeFrequency: "monthly",
        lastModified: study.updatedAt || study.publishedAt || study.createdAt,
      })
    );
  }

  for (const campaign of campaigns) {
    if (!campaign?.slug || caseStudySlugs.has(campaign.slug)) continue;
    caseStudyEntries.push(
      entry(`/case-study/${campaign.slug}`, {
        priority: 0.64,
        changeFrequency: "monthly",
        lastModified:
          campaign.updatedAt || campaign.publishedAt || campaign.createdAt,
      })
    );
  }

  return [...staticEntries, ...blogEntries, ...caseStudyEntries];
}
