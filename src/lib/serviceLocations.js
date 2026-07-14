import { pageConfig as aiPoweredConfig } from "@/app/ai-powered-solutions-services/config";
import { pageConfig as appStoreConfig } from "@/app/app-store-optimization/config";
import { pageConfig as contentMarketingConfig } from "@/app/content-marketing-strategy/config";
import { pageConfig as digitalStrategyConfig } from "@/app/digital-strategy/config";
import { pageConfig as influencerConfig } from "@/app/influencer-marketing/config";
import { pageConfig as seoConfig } from "@/app/search-engine-optimization-services/config";
import { pageConfig as socialMediaConfig } from "@/app/social-media-marketing-strategy/config";
import { pageConfig as websiteDesignConfig } from "@/app/website-design-development-services/config";
import { getCities } from "@/lib/strapiPage";

const SITE_URL = "https://www.webmaffia.com";

/**
 * Base service routes that get location variants: /{slug}-{citySlug}
 * e.g. digital-strategy-in-andheri
 */
export const SERVICE_LOCATION_PAGES = [
  {
    slug: "digital-strategy",
    headingTitle: "Digital Strategy",
    config: digitalStrategyConfig,
    metadata: {
      title: "Digital Marketing Services and Solutions in Mumbai | Webmaffia",
      description:
        "Webmaffia helps brands build a compelling digital strategy across the digital sphere. We provide custom branding services based on the client's needs.",
    },
  },
  {
    slug: "website-design-development-services",
    headingTitle: "Design and development",
    config: websiteDesignConfig,
    metadata: {
      title: "Award-winning Website Design and Development Services Agency",
      description:
        "Webmaffia offers award-winning website design and development services. We create innovative digital experiences tailored to elevate brands and captivate audiences.",
    },
  },
  {
    slug: "search-engine-optimization-services",
    headingTitle: "SEO",
    config: seoConfig,
    metadata: {
      title: "Website Search Engine Optimization (SEO) Services Agency",
      description:
        "Webmaffia offers comprehensive SEO services including keyword research, on-page optimization, technical SEO, and content optimization to boost your search rankings.",
    },
  },
  {
    slug: "social-media-marketing-strategy",
    headingTitle: "Social media",
    config: socialMediaConfig,
    metadata: {
      title: "Social Media Marketing Strategy Services Agency | Webmaffia",
      description:
        "Webmaffia offers social media marketing strategy services including targeting, execution, optimization, and measurement to drive ROI-driven campaigns.",
    },
  },
  {
    slug: "content-marketing-strategy",
    headingTitle: "Content Marketing",
    config: contentMarketingConfig,
    metadata: {
      title: "Digital Content Marketing Services Agency in Mumbai | Webmaffia",
      description:
        "Webmaffia offers content marketing services including video editing, film production, global content hub, and campaign planning.",
    },
  },
  {
    slug: "app-store-optimization",
    headingTitle: "App Store Optimization",
    config: appStoreConfig,
    metadata: {
      title: "Mobile App Store Optimization (ASO) Services Agency in Mumbai",
      description:
        "Webmaffia offers app store optimization services including market analysis, keyword preparation, implementation, and monthly ASO retainers.",
    },
  },
  {
    slug: "ai-powered-solutions-services",
    headingTitle: "AI-Powered Solutions",
    config: aiPoweredConfig,
    metadata: {
      title:
        "AI-Powered Solutions | AI Consulting, Chatbots, Automation & Development Agency",
      description:
        "Webmaffia delivers AI-powered solutions including consulting, chatbots, generative AI, automation, AI agents, and AI-enhanced web and app development.",
    },
  },
  {
    slug: "influencer-marketing",
    headingTitle: "Influencer Marketing",
    config: influencerConfig,
    metadata: {
      title: "Influencer Marketing Services Agency | Webmaffia",
      description:
        "Webmaffia connects brands with talent—from micro-influencers to A-list celebrities—with fast, strategic influencer marketing campaigns.",
    },
  },
];

const SERVICES_BY_SLUG = Object.fromEntries(
  SERVICE_LOCATION_PAGES.map((service) => [service.slug, service])
);

export function formatCityDisplayName(name) {
  return String(name)
    .trim()
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

export function buildServiceLocationPath(serviceSlug, citySlug) {
  return `${serviceSlug}-${citySlug}`;
}

export function resolveServiceLocation(slug, cities) {
  if (!slug || !Array.isArray(cities) || cities.length === 0) return null;

  const services = [...SERVICE_LOCATION_PAGES].sort(
    (a, b) => b.slug.length - a.slug.length
  );

  for (const service of services) {
    for (const city of cities) {
      const path = buildServiceLocationPath(service.slug, city.citySlug);
      if (path === slug) {
        return { service, city };
      }
    }
  }

  return null;
}

export function withCityInHeading(config, headingTitle, cityName) {
  const cityLabel = formatCityDisplayName(cityName);

  return {
    ...config,
    hero: {
      ...config.hero,
      title: `${headingTitle} in ${cityLabel}`,
    },
  };
}

export async function getServiceLocationMatch(slug) {
  const cities = await getCities();
  return resolveServiceLocation(slug, cities);
}

export async function getAllServiceLocationPaths() {
  const cities = await getCities();
  const paths = [];

  for (const service of SERVICE_LOCATION_PAGES) {
    for (const city of cities) {
      paths.push({
        serviceLocation: buildServiceLocationPath(service.slug, city.citySlug),
        serviceSlug: service.slug,
        citySlug: city.citySlug,
        cityName: city.name,
      });
    }
  }

  return paths;
}

export function buildServiceLocationMetadata(service, city, path) {
  const cityLabel = formatCityDisplayName(city.name);
  const baseTitle = service.metadata?.title ?? `${service.headingTitle} | Webmaffia`;
  const title = baseTitle.includes(cityLabel)
    ? baseTitle
    : `${service.headingTitle} in ${cityLabel} | Webmaffia`;

  const baseDescription = service.metadata?.description ?? "";
  const description = baseDescription
    ? `${baseDescription} Serving ${cityLabel}.`
    : `${service.headingTitle} services in ${cityLabel}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${path}`,
    },
  };
}

export function getServiceBySlug(slug) {
  return SERVICES_BY_SLUG[slug] ?? null;
}

export { SITE_URL };
