import Image from "next/image";
import WorkListSection from "@/components/WorkListSection";

export const metadata = {
  title: "Project Portfolio and Successfull Campaigns by Webmaffia",
  description:
    "Discover Webmaffia's diverse project portfolio showcasing innovative, successful campaigns across industries. See how we drive results for our clients.",
};

const WORK_ITEMS = [
  {
    name: "Lupin US",
    title: "Website Design - Development - SEO",
    url: "https://www.lupin.com/US",
    image: "/assets/images/work/listing/lupin.webp",
  },
  {
    name: "Welspun Flooring",
    title: "Website Design - Development - SEO",
    url: "https://welspunflooring.com/",
    image: "/assets/images/work/listing/welspun.webp",
  },
  {
    name: "Afcons",
    title: "Website Design - Development - SEO",
    url: "https://www.afcons.com/en",
    image: "/assets/images/work/listing/afcon_work.webp",
  },
  {
    name: "L'exotique",
    title: "Website Design - Development",
    url: "https://waycool.in/brands/lexotique",
    image: "/assets/images/work/listing/L'exotique.webp",
  },
  {
    name: "L'exotique",
    title: "Social Media",
    url: "https://www.instagram.com/lexotique.fruits/",
    image: "/assets/images/work/listing/L'exotique_social_media.webp",
  },
  {
    name: "Ecovero",
    title: "Social Media",
    url: "https://www.instagram.com/ecovero_india/?hl=en",
    image: "/assets/images/work/listing/ecovero.webp",
  },
  {
    name: "AMNS",
    title: "Website Design - Development - SEO",
    url: "https://www.amns.in/",
    image: "/assets/images/work/listing/AMNS.webp",
  },
  {
    name: "Catallyst",
    title: "Website Design - Development",
    url: "https://www.theceei.com/",
    image: "/assets/images/work/listing/Catallyst.webp",
  },
  {
    name: "Finmart",
    title: "Social Media",
    url: "https://www.instagram.com/finmartae/?hl=en",
    image: "/assets/images/work/listing/Finmart.webp",
  },
  {
    name: "DCC-Group",
    title: "Social Media",
    url: "https://www.instagram.com/dccgroupofficial/",
    image: "/assets/images/work/listing/DCC.webp",
  },
  {
    name: "Nayara-Energy",
    title: "Website Design - Development - SEO",
    url: "https://www.nayaraenergy.com/",
    image: "/assets/images/work/listing/Nayara.webp",
  },
  {
    name: "Airpay Money",
    title: "Website Design - Development - SEO",
    url: "https://airpay.money/",
    image: "/assets/images/work/listing/FinMapp-new.webp",
  },
  {
    name: "SS Automation",
    title: "Website Design - Development - SEO",
    url: "https://origin-www.ssautomation.in/",
    image: "/assets/images/work/listing/ss_automation.webp",
  },
  {
    name: "Tencel",
    title: "Social Media",
    url: "https://www.instagram.com/tencel_india/",
    image: "/assets/images/work/listing/tencel.webp",
  },
  {
    name: "Truthsome",
    title: "Social Media",
    url: "https://www.instagram.com/truthsomeofficial/",
    image: "/assets/images/work/listing/truthsome.webp",
  },
  {
    name: "Way Cool",
    title: "Website Design - Development",
    url: "https://waycool.in/",
    image: "/assets/images/work/listing/way_cool.webp",
  },
  {
    name: "Great Tower",
    title: "Website Design - Development",
    url: "https://www.great-towers.com/",
    image: "/assets/images/work/listing/World-Tower.webp",
  },
  {
    name: "Summit Digitel",
    title: "Website Design - Development - SEO",
    url: "https://www.summitdigitel.com/",
    image: "/assets/images/work/listing/Summit.webp",
  },
  {
    name: "FABgetaways",
    title: "Website Design - Development",
    url: "https://www.fabgetaways.com/in",
    image: "/assets/images/work/listing/Fab-Getaways.webp",
  },
  {
    name: "Orgfarm",
    title: "Social Media",
    url: "",
    image: "/assets/images/work/listing/orgfarm.webp",
  },
];

export default function CaseStudyPage() {
  return (
    <main className="wrapper">
      <div className="ml-setter work_list">
        <section data-section="hero_section" className="hero_section flex">
          <div>
            <div className="sub_title">STORIES WE TELL</div>
            <h1>
              Explore our <br />
              latest work
            </h1>
            <p>
              Here are some of the client collaborations we&apos;re <br />
              most proud of. Leveraging cutting-edge <br />
              technologies, we drive innovation in our projects, <br />
              delivering solutions that exceed expectations. <br />
              Get inspired.
            </p>
          </div>
          <picture>
            <Image
              src="/assets/images/number/2.webp"
              alt=""
              width={672}
              height={566}
              className="dark_img"
            />
          </picture>
        </section>

        <WorkListSection items={WORK_ITEMS} />
      </div>
    </main>
  );
}
