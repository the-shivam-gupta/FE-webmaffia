import ServiceDetailPage from "../components/ServiceDetailPage";

const pageConfig = {
  hero: {
    subtitle: "OUR SERVICES",
    title: "Digital Strategy",
    description: (
      <>
        We understand that a digital marketing strategy <br />
        goes beyond the traditional approach towards strategizing <br />
        a campaign. This is why we draw our talent from agencies <br />
        specializing in digital strategy and consulting firms.
      </>
    ),
    image: "/assets/images/digital-strategy.svg",
  },
  sections: [
    {
      dataSection: "design_features",
      features: [
        {
          number: "01 /",
          title: "Business Understanding",
          description:
            "The first thing we do is understand your business thoroughly, the opportunities, and the challenges you face in a competitive marketplace. This is then followed by an analysis of the category as well as the culture that drives the category",
        },
        {
          number: "02 /",
          title: "Audience Analysis",
          description:
            "Next, our team does an in-depth analysis of the ever-changing behavioral patterns of our target audience, to arrive at what is it that they are looking for.",
        },
        {
          number: "03 /",
          title: "Competition Scan",
          description:
            "The final step towards arriving at that unique proposition or positioning is a detailed study of what our competitors have been doing. Understanding what has worked for them, and more importantly, the opportunities they have missed, that we can capitalize on.",
        },
        {
          number: "04 /",
          title: "Brand Ethos",
          description:
            "Each brand has a unique personality, and incorporating it into the overall marketing strategy is crucial. We use a mix of audience perception and the brand team's understanding to truly arrive at a positioning that works best for both stakeholders.",
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

export default function DigitalStrategyPage() {
  return <ServiceDetailPage config={pageConfig} />;
}
