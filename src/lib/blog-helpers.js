function stripHtml(text) {
  return text
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function slugifyHeading(text) {
  return stripHtml(text)
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function uniqueHeadingId(base, usedIds) {
  let id = base || "section";
  let suffix = 2;

  while (usedIds.has(id)) {
    id = `${base}-${suffix}`;
    suffix += 1;
  }

  usedIds.add(id);
  return id;
}

function parseStickyLinksFromHtml(html) {
  const links = [];
  const blockRegex =
    /<div class="blog_detail_wrapper" id="([^"]+)">([\s\S]*?)(?=<div class="blog_detail_wrapper"|$)/g;
  let match = blockRegex.exec(html);

  while (match) {
    const id = match[1];
    const block = match[2];
    const headingMatch = block.match(/<h[234][^>]*>([\s\S]*?)<\/h[234]>/);
    const label = headingMatch ? stripHtml(headingMatch[1]) : id;

    if (label) {
      links.push({ href: `#${id}`, label });
    }
    match = blockRegex.exec(html);
  }

  return links;
}

export function prepareStrapiArticleHtml(html) {
  if (!html) return { html: "", stickyLinks: [] };

  const wrapperLinks = parseStickyLinksFromHtml(html);
  if (wrapperLinks.length > 0) {
    return {
      html: html.trim(),
      stickyLinks: wrapperLinks,
    };
  }

  const usedIds = new Set();
  const stickyLinks = [];

  const processed = html.replace(
    /<h2\b([^>]*)>([\s\S]*?)<\/h2>/gi,
    (match, attrs, content) => {
      const label = stripHtml(content);
      if (!label) return match;

      const existingId = attrs.match(/\bid=["']([^"']+)["']/i)?.[1];
      const id = existingId || uniqueHeadingId(slugifyHeading(label), usedIds);

      stickyLinks.push({ href: `#${id}`, label });

      if (existingId) return match;

      const trimmedAttrs = attrs.trim();
      const attrPrefix = trimmedAttrs ? ` ${trimmedAttrs}` : "";
      return `<h2${attrPrefix} id="${id}">${content}</h2>`;
    }
  );

  return { html: processed.trim(), stickyLinks };
}

export function getBlogStickyLinksFromHtml(html) {
  if (!html) return [];
  try {
    return prepareStrapiArticleHtml(html).stickyLinks;
  } catch {
    return [];
  }
}
