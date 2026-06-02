import ServiceDetailPage from "@/components/ServiceDetailPage";

const pageConfig = {
  hero: {
    subtitle: "OUR SERVICES",
    heroClassName: "banner_para",
    title: (
      <>
        Content <br />
        Marketing
      </>
    ),
    description: [
      <>
        Original Content - Blog and Copywriting Our <br />
        wordsmiths create compelling ad copy, editorial pieces <br />
        and other original content that prioritizes impact, clarity <br />
        and empathy over mere loudness. We put customer intent <br />
        behind every word we craft to drive clicks and shares.
      </>,
      <>
        Graphic Design, Iconography and Illustrations Visual <br />
        content is now the most popular format for content <br />
        consumption. Our digital artists execute thumb-stopping <br />
        content that brings your brand&apos;s vision and personality to life.
      </>,
    ],
    image: "/assets/images/content-marketing.svg",
  },
  sections: [
    {
      dataSection: "development_features",
      features: [
        {
          number: "01 /",
          title: "Video Editing and Animation",
          description:
            "As the world is moving towards video content, we turn around high-quality 2D/3D animations and video edits that are optimized for social and digital sharing.",
        },
        {
          number: "02 /",
          title: "Film Production",
          description:
            "Schbang Motion Pictures is our in-house production hub that comprises scriptwriters, photographers, videographers, producers, directors, editors and animators who together create ad films, photo/video assets, and feature-length content.",
        },
        {
          number: "03 /",
          title: "Global Content Hub",
          description:
            "Our Global Content Hub team works on lean and rapid video and photography requirements. We produce content that can keep up with the pace of social platforms. This includes Instagram reels and YouTube shorts, behind-the-scenes films, instructional and educational videos, in-studio photoshoots and stop motion, podcasts, testimonial films, short-form media assets and e-commerce listing and imagery requirements. Our Schbang 808 arm specializes in branded audio, audio logos and music/sound production.",
        },
        {
          number: "04 /",
          title: "Campaign Planning",
          description:
            "Alongside daily content, we also work on creating memorable events that address client briefs, deliver beyond expectations and leave a lasting impression. Schbang offers a turnkey approach to events from the initial conceptualization, to final production and management.",
        },
      ],
    },
  ],
  latestWork: [
    {
      name: "DCC-Group",
      type: "Social Media",
      url: "https://groupdcc.com/",
      image: "/assets/images/service/dcc.webp",
    },
    {
      name: "Catallyst",
      type: "Social Media",
      url: "https://www.theceei.com/",
      image: "/assets/images/service/catallyst.webp",
    },
  ],
};

export default function ContentMarketingPage() {
  return <ServiceDetailPage config={pageConfig} />;
}
