import { notFound, redirect, permanentRedirect } from "next/navigation";
import CampaignDetail from "@/app/case-study/campaigns/CampaignDetail";
import CaseStudyDetailPage from "@/components/CaseStudyDetailPage";
import { normalizeCaseStudy } from "@/lib/case-study-helpers";
import {
  getCampaignBySlug,
  getCampaigns,
  getCaseStudies,
  getCaseStudyBySlug,
} from "@/lib/strapiPage";

export async function generateStaticParams() {
  const [caseStudies, campaigns] = await Promise.all([
    getCaseStudies(),
    getCampaigns(),
  ]);

  const caseStudySlugs = new Set(
    caseStudies
      .filter((entry) => !entry.thumbnail?.externalLink)
      .map((entry) => entry.slug)
  );

  const params = [...caseStudySlugs].map((slug) => ({ slug }));

  for (const campaign of campaigns) {
    if (!caseStudySlugs.has(campaign.slug)) {
      params.push({ slug: campaign.slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const entry = await getCaseStudyBySlug(slug);

  if (entry) {
    if (entry.thumbnail?.externalLink) {
      return { title: `${entry.pageName ?? "Case Study"} | Webmaffia` };
    }

    const title =
      entry.banner?.heading?.replace(/\n/g, " ") ??
      entry.pageName ??
      "Case Study";
    const description =
      entry.banner?.description?.replace(/\s+/g, " ").trim() ??
      "Explore Webmaffia case studies.";

    return {
      title: `${title} | Webmaffia`,
      description,
      alternates: {
        canonical: `https://www.webmaffia.com/case-study/${entry.slug}`,
      },
    };
  }

  const campaign = await getCampaignBySlug(slug);

  if (!campaign) {
    return { title: "Case Study | Webmaffia" };
  }

  return {
    title: `${campaign.pageName ?? campaign.heading} | Webmaffia`,
    description: campaign.tagLine,
    alternates: {
      canonical: `https://www.webmaffia.com/case-study/${campaign.slug}`,
    },
  };
}

export default async function CaseStudySlugPage({ params }) {
  const { slug } = await params;
  const entry = await getCaseStudyBySlug(slug);

  if (entry) {
    if (entry.thumbnail?.externalLink) {
      redirect(entry.thumbnail.link || "/case-study");
    }

    if (entry.slug !== slug) {
      permanentRedirect(`/case-study/${entry.slug}`);
    }

    const caseStudy = normalizeCaseStudy(entry);

    return <CaseStudyDetailPage caseStudy={caseStudy} />;
  }

  const campaign = await getCampaignBySlug(slug);

  if (!campaign) {
    notFound();
  }

  return <CampaignDetail campaign={campaign} />;
}
