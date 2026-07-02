import Banner from "@/components/Banner";
import WorkListSection from "@/components/WorkListSection";
import { getCaseStudies, getStrapiImageUrl } from "@/lib/strapiPage";

export const metadata = {
  title: "Project Portfolio and Successfull Campaigns by Webmaffia",
  description:
    "Discover Webmaffia's diverse project portfolio showcasing innovative, successful campaigns across industries. See how we drive results for our clients.",
};

const bannerData = {
  imagePosition: "right",
  subheading: {
    enabled: true,
    text: "STORIES WE TELL",
  },
  title: {
    line1: "Explore our",
    line2: "latest work",
  },
  description:
    "Here are some of the client collaborations we're\nmost proud of. Leveraging cutting-edge\ntechnologies, we drive innovation in our projects,\ndelivering solutions that exceed expectations.\nGet inspired.",
  images: {
    banner: {
      url: "/assets/images/case-study.svg",
      alt: "",
      width: 672,
      height: 566,
    },
  },
};

const FALLBACK_WORK_IMAGE = "/assets/images/work/listing/afcon_work.webp";

function toApiItem(entry) {
  const thumb = entry.thumbnail;
  const workTitle = thumb?.workTitle?.map(t => t.title).join(" - ") ?? "";
  const imageUrl = thumb?.image ? getStrapiImageUrl(thumb.image) : "";
  const url = thumb?.externalLink ? (thumb.link || "#") : `/case-study/${entry.slug}`;
  return {
    name: thumb?.heading ?? entry.pageName,
    title: workTitle,
    url,
    image: imageUrl || FALLBACK_WORK_IMAGE,
  };
}

export default async function CaseStudyPage() {
  let items = [];
  try {
    const caseStudies = await getCaseStudies();
    items = caseStudies
      .map((entry) => ({
        item: toApiItem(entry),
        external: !!entry.thumbnail?.externalLink,
        name: (entry.thumbnail?.heading ?? entry.pageName).toLowerCase(),
      }))
      .sort((a, b) => {
        if (a.name === "lupin") return -1;
        if (b.name === "lupin") return 1;
        return Number(a.external) - Number(b.external);
      })
      .map(({ item }) => item);
  } catch (e) {
    console.error("Failed to fetch case studies:", e);
  }

  return (
    <main className="wrapper">
      <div className="ml-setter work_list">
        <Banner data={bannerData} />
        <WorkListSection items={items} />
      </div>
    </main>
  );
}
