import Banner from "@/components/Banner";
import WorkListSection from "@/components/WorkListSection";

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
      url: "/assets/images/number/2.webp",
      alt: "",
      width: 672,
      height: 566,
    },
  },
};

const WORK_ITEMS = [
  {
    name: "HoABL",
    title: "Website Design - Development",
    url: "/case-study/hoabl",
    image: "/assets/images/work/listing/hoabl.webp",
  },
  {
    name: "Lupin",
    title: "Website Design - Development - SEO",
    url: "/case-study/lupin",
    image: "/assets/images/work/listing/lupin-v3.png",
  },
  {
    name: "Lupin US",
    title: "Website Design - Development - SEO",
    url: "https://www.lupin.com/US",
    image: "/assets/images/work/listing/lupin.webp",
  },
  {
    name: "Welspun Flooring",
    title: "Website Design - Development - SEO",
    url: "/case-study/welspun-flooring",
    image: "/assets/images/work/listing/welspun.webp",
  },
  {
    name: "Afcons",
    title: "Website Design - Development - SEO",
    url: "/case-study/afcons-infrastructure",
    image: "/assets/images/work/listing/afcon_work.webp",
  },
  {
    name: "L'exotique",
    title: "Social Media",
    url: "/case-study/lexotique",
    image: "/assets/images/work/listing/L'exotique_social_media.webp",
  },
  {
    name: "Ecovero",
    title: "Social Media",
    url: "/case-study/ecovero",
    image: "/assets/images/work/listing/ecovero.webp",
  },
  {
    name: "AMNS",
    title: "Website Design - Development - SEO",
    url: "/case-study/amns-india",
    image: "/assets/images/work/listing/AMNS.webp",
  },
  {
    name: "Saffola Fit Foodie",
    title: "Social Media",
    url: "/case-study/saffola-fit-foodie",
    image: "/assets/images/work/listing/saffola-v2.png",
  },
  {
    name: "Birla Sun Life",
    title: "Social Media",
    url: "/case-study/birla-sun-life",
    image: "/assets/images/work/listing/birla-v2.png",
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
  {
    name: "L'exotique",
    title: "Website Design - Development",
    url: "#",
    image: "/assets/images/work/listing/L'exotique.webp",
  },
];

export default function CaseStudyPage() {
  return (
    <main className="wrapper">
      <div className="ml-setter work_list">
        <Banner data={bannerData} />

        <WorkListSection items={WORK_ITEMS} />
      </div>
    </main>
  );
}
