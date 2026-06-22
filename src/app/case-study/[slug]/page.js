import { notFound, redirect, permanentRedirect } from "next/navigation";
import CaseStudyDetailPage from "@/components/CaseStudyDetailPage";
import { normalizeCaseStudy } from "@/lib/case-study-helpers";
import { getCaseStudies, getCaseStudyBySlug } from "@/lib/strapiPage";

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  return caseStudies
    .filter((entry) => !entry.thumbnail?.externalLink)
    .map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const entry = await getCaseStudyBySlug(slug);

  if (!entry) {
    return { title: "Case Study | Webmaffia" };
  }

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

export default async function StrapiCaseStudyPage({ params }) {
  const { slug } = await params;
  const entry = await getCaseStudyBySlug(slug);

  if (!entry) {
    notFound();
  }

  if (entry.thumbnail?.externalLink) {
    redirect(entry.thumbnail.link || "/case-study");
  }

  if (entry.slug !== slug) {
    permanentRedirect(`/case-study/${entry.slug}`);
  }

  const caseStudy = normalizeCaseStudy(entry);

  return <CaseStudyDetailPage caseStudy={caseStudy} />;
}
