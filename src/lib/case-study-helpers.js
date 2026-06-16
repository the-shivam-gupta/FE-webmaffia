import { getStrapiAssetUrl, getStrapiImageUrl } from "@/lib/strapiPage";

export function splitBannerTitle(heading) {
  const text = String(heading ?? "").trim();
  if (!text) return { line1: "" };

  const lines = text.split("\n").map((line) => line.trim()).filter(Boolean);
  if (lines.length > 1) {
    return {
      line1: lines[0],
      line2: lines.slice(1).join(" "),
    };
  }

  return { line1: text };
}

export function normalizeOverlayColor(color) {
  const value = String(color ?? "").trim();
  if (!value) return "";

  if (/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(value)) {
    return value;
  }

  if (/^([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(value)) {
    return `${value}`;
  }

  return "";
}

export function buildCaseStudyBannerData(banner) {
  if (!banner) return null;

  const desktopImage = banner.desktopImage;
  const mobileImage = banner.mobileImage;

  return {
    imagePosition: banner.imagePosition || "background",
    overlay: Boolean(banner.overlay),
    overlayColor: normalizeOverlayColor(banner.overlayColor),
    priority: true,
    unoptimized: true,
    subheading: banner.tagLine
      ? { enabled: true, text: banner.tagLine }
      : undefined,
    title: splitBannerTitle(banner.heading),
    subtitle: banner.subHeading
      ? { enabled: true, text: banner.subHeading }
      : undefined,
    description: banner.description?.trim() ?? "",
    images: {
      banner: desktopImage
        ? {
            url: getStrapiImageUrl(desktopImage),
            alt: desktopImage.alternativeText || "",
            width: desktopImage.width ?? 1920,
            height: desktopImage.height ?? 981,
          }
        : undefined,
      bannerMobile: mobileImage
        ? {
            url: getStrapiImageUrl(mobileImage),
            alt: mobileImage.alternativeText || "",
          }
        : undefined,
    },
  };
}

export function extractTrailingOutro(content) {
  const outroMatch = content.match(/\n\s*\n(?!\s*-)([\s\S]+)$/);

  if (!outroMatch) {
    return { content, outro: "" };
  }

  return {
    content: content.slice(0, outroMatch.index).trim(),
    outro: outroMatch[1].trim(),
  };
}

export function parseSimpleBulletItems(description) {
  if (!description) return { intro: "", items: [], outro: "" };

  const { content, outro } = extractTrailingOutro(description.trim());
  const parts = content.split(/(?:^|\n)\s*-\s+/);

  if (parts.length <= 1) {
    return { intro: content, items: [], outro };
  }

  return {
    intro: parts[0].trim(),
    items: parts.slice(1).map((item) => item.trim()).filter(Boolean),
    outro,
  };
}

export function parseTitledBulletItems(description) {
  if (!description) return { items: [], outro: "" };

  const { content, outro } = extractTrailingOutro(description.trim());
  const items = content
    .split(/(?:^|\n)-\s+/)
    .slice(1)
    .map((block) => {
      const lines = block.trim().split("\n");
      const title = lines[0]?.trim() ?? "";
      const body = lines.slice(1).join(" ").trim();
      return { title, body };
    })
    .filter((item) => item.title || item.body);

  return { items, outro };
}

export function isSolutionBlock(block, index) {
  return index > 0 || /solution|result|strategy/i.test(block.heading ?? "");
}

export function mapStrapiMediaAsset(asset, fallbackAlt = "") {
  if (!asset?.url) return null;

  const mime = asset.mime ?? "";
  const ext = asset.ext ?? "";

  return {
    src: getStrapiImageUrl(asset),
    alt: asset.alternativeText || fallbackAlt,
    width: asset.width,
    height: asset.height,
    unoptimized: mime === "image/svg+xml" || ext === ".svg",
  };
}

export function mapCaseStudySections(sections = []) {
  return sections.map((section) => {
    if (section.__component === "case-study.seo") {
      return {
        type: "seo",
        heading: section.heading,
        subHeading: section.subHeading,
        description: section.description,
        chartSlides: (section.graphs ?? []).map((graph) =>
          getStrapiImageUrl(graph)
        ),
      };
    }

    if (section.__component === "case-study.creatives") {
      const instagramUrl = section.button?.href ?? "";

      return {
        type: "creatives",
        heading: section.heading,
        instagramUrl,
        instagramLinkText: section.button?.title ?? "Check the On Instagram",
        posts: (section.posts ?? [])
          .map((post, index) =>
            mapStrapiMediaAsset(
              post.media ?? post.image ?? (post.url ? post : null),
              `Creative post ${index + 1}`
            )
          )
          .filter(Boolean),
        reels: (section.reels ?? [])
          .map((reel, index) => {
            const poster = mapStrapiMediaAsset(
              reel.poster ?? reel.thumbnail ?? reel.image,
              `Creative reel ${index + 1}`
            );
            const videoUrl = getStrapiAssetUrl(reel.video ?? reel.media);

            if (!poster && !videoUrl) return null;

            return {
              src: poster?.src ?? "",
              alt: reel.title || poster?.alt || `Creative reel ${index + 1}`,
              video: videoUrl || undefined,
            };
          })
          .filter(Boolean),
      };
    }

    return null;
  }).filter(Boolean);
}

export function normalizeCaseStudy(caseStudy) {
  return {
    slug: caseStudy.slug,
    pageName: caseStudy.pageName,
    banner: buildCaseStudyBannerData(caseStudy.banner),
    contentBlocks: (caseStudy.contentBlock ?? []).map((block) => ({
      tagLine: block.tagLine,
      heading: block.heading,
      subHeading: block.subHeading,
      description: block.description,
      image: mapStrapiMediaAsset(block.image ?? block.sideImage ?? block.media),
    })),
    showcase: caseStudy.showcase
      ? {
          desktopImage: mapStrapiMediaAsset(caseStudy.showcase.desktopImage),
          mobileImage: mapStrapiMediaAsset(caseStudy.showcase.mobileImage),
          button: caseStudy.showcase.button,
        }
      : null,
    testimonial: caseStudy.testimonial
      ? {
          description: caseStudy.testimonial.description?.trim(),
          name: caseStudy.testimonial.name,
          designation: caseStudy.testimonial.designation,
          icon: mapStrapiMediaAsset(
            caseStudy.testimonial.icon,
            caseStudy.testimonial.name
          ),
        }
      : null,
    sections: mapCaseStudySections(caseStudy.sections),
  };
}
