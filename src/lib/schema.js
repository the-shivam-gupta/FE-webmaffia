const SITE_URL = "https://www.webmaffia.com";

/**
 * Builds a BreadcrumbList JSON-LD schema object.
 *
 * @param {Array<{ name: string, path: string }>} items - Breadcrumb trail in order,
 *   starting with Home. `path` is site-relative (e.g. "/", "/blog") and is resolved
 *   to an absolute URL against SITE_URL.
 */
function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "/" : item.path.replace(/\/$/, "")}`,
    })),
  };
}

export { SITE_URL, buildBreadcrumbSchema };
