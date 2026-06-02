import ServiceDetailPage from "@/components/ServiceDetailPage";

const pageConfig = {
  hero: {
    subtitle: "OUR SERVICES",
    title: (
      <>
        Influencer <br />
        Marketing
      </>
    ),
    description: (
      <>
        Bridging the gap between brands and <br />
        Talent for over 15 years. Fast, real-time feedback <br />
        and responses from our experienced and well-connected team <br />
        of talent brokers. Access to every level of talent from micro <br />
        influencers to A-List celebrities. Access to the most recognized <br />
        celebrities and influencers from around the world.
      </>
    ),
    image: "/assets/images/contact-hero.webp",
  },
  sections: [
    {
      dataSection: "design_features",
      features: [
        {
          number: "01 /",
          title: "Getting started with Talent Resources",
          description: "",
          influencerTitle: true,
        },
        {
          number: "02 /",
          title: "Learn your brands DNA in an introductory meeting",
          description: "",
          influencerTitle: true,
        },
        {
          number: "03 /",
          title: "Implement and execute selected campaign elements",
          description: "",
          influencerTitle: true,
        },
        {
          number: "04 /",
          title: "Determine overall goals and deliverables for a campaign",
          description: "",
          influencerTitle: true,
        },
        {
          number: "05 /",
          title:
            "Present key opportunities, findings, and strategic campaign initiatives",
          description: "",
          influencerTitle: true,
        },
      ],
    },
  ],
  latestWork: [
    {
      name: "Afcons",
      type: "Website Design - Development - SEO",
      url: "https://www.afcons.com/en",
      image: "/assets/images/service/afcons.webp",
    },
    {
      name: "L'exotique",
      type: "Website Design - Development",
      url: "https://lexotique.in/",
      image: "/assets/images/service/lexotique.webp",
    },
  ],
};

export default function InfluencerMarketingPage() {
  return <ServiceDetailPage config={pageConfig} />;
}
