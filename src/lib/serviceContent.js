import { Fragment } from "react";
import { getServiceTechBySlug, getStrapiImageUrl } from "@/lib/strapiPage";

/**
 * Builds the render-ready `{ hero, sections }` shape ServiceDetailPage
 * expects, entirely from Strapi's `services-teches` collection (banner +
 * `services-tech.features` / `services-tech.technology` components). There
 * is no static fallback content — a service without a CMS entry yet simply
 * renders an empty hero/sections until it's added in Strapi.
 */

function splitParagraphs(text) {
  if (!text) return [];
  return text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
}

function formatFeatureNumber(index) {
  return `${String(index + 1).padStart(2, "0")} /`;
}

function toParagraphNode(paragraph, key) {
  const lines = paragraph.split("\n").map((line) => line.trim()).filter(Boolean);

  return (
    <Fragment key={key}>
      {lines.map((line, index) => (
        <Fragment key={index}>
          {index > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </Fragment>
  );
}

/**
 * Maps a CMS `services-tech.technology` block (heading + Items[].icon[].icon)
 * onto the `{ title, groups: [{ label, icons: [{ src, title }] }] }` shape
 * ServiceDetailPage's TechnologyBlock expects.
 */
function buildTechnologyGroups(technologyBlock) {
  if (!technologyBlock) return undefined;

  const groups = (technologyBlock.Items ?? [])
    .map((item) => ({
      label: item.title?.trim() || undefined,
      icons: (item.icon ?? [])
        .map((wrapper) => wrapper.icon)
        .filter(Boolean)
        .map((media) => ({
          src: getStrapiImageUrl(media),
          title: media.alternativeText || media.name?.replace(/\.[^.]+$/, "") || "",
        })),
    }))
    .filter((group) => group.icons.length);

  if (!groups.length) return undefined;

  return {
    title: technologyBlock.heading?.trim(),
    groups,
  };
}

/**
 * Builds the hero shape from the CMS `banner` component. `heroClassName` is
 * derived automatically (not hand-configured): a banner whose description
 * has multiple blank-line-separated paragraphs gets the "banner_para"
 * layout variant, matching the one service (content-marketing-strategy)
 * that previously hardcoded it for that reason.
 */
export function buildServiceHero(banner) {
  if (!banner) return {};

  const paragraphs = splitParagraphs(banner.description);
  const description = paragraphs.length
    ? paragraphs.map((paragraph, index) => toParagraphNode(paragraph, index))
    : undefined;

  return {
    subtitle: banner.heading?.trim(),
    title: banner.subHeading?.trim(),
    description,
    heroClassName: paragraphs.length > 1 ? "banner_para" : undefined,
    image: getStrapiImageUrl(banner.desktopImage),
    imageWidth: banner.desktopImage?.width,
    imageHeight: banner.desktopImage?.height,
  };
}

/**
 * Builds the `sections` array from the CMS `sections` dynamic zone, which
 * interleaves `services-tech.features` and `services-tech.technology`
 * components. A technology block is attached as the `technologies` field of
 * whichever features section precedes it.
 *
 * `influencerTitle` (the title-only, no-description feature styling used on
 * the influencer-marketing page) is derived automatically from whether the
 * card has a description, rather than hardcoded per service.
 */
export function buildServiceSections(cmsSections) {
  if (!cmsSections?.length) return [];

  const merged = [];

  cmsSections.forEach((section) => {
    if (section.__component === "services-tech.technology") {
      const technologies = buildTechnologyGroups(section);
      if (technologies && merged.length) {
        merged[merged.length - 1].technologies = technologies;
      }
      return;
    }

    const designFeature = section.designFeature;
    if (!designFeature) return;

    const cards = designFeature.card ?? [];

    merged.push({
      dataSection: `service_features_${merged.length}`,
      heading: designFeature.heading?.trim(),
      intro: designFeature.subheading?.trim(),
      features: cards.map((card, cardIndex) => ({
        number: formatFeatureNumber(cardIndex),
        title: card.heading?.trim(),
        description: card.description?.trim(),
        influencerTitle: !card.description?.trim(),
      })),
    });
  });

  return merged;
}

/**
 * Fetches and transforms the `services-teches` entry for `slug` into the
 * `{ hero, sections }` shape ServiceDetailPage expects. Returns empty
 * hero/sections (not null) when the CMS has no entry yet for this slug, so
 * callers can render without special-casing a missing service.
 */
export async function getServiceRenderConfig(slug) {
  const serviceTech = await getServiceTechBySlug(slug);

  return {
    hero: buildServiceHero(serviceTech?.banner),
    sections: buildServiceSections(serviceTech?.sections),
  };
}
