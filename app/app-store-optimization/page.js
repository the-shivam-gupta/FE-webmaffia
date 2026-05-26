import ServiceDetailPage from "../components/ServiceDetailPage";

const pageConfig = {
  hero: {
    subtitle: "OUR SERVICES",
    title: (
      <>
        App Store <br />
        Optimization
      </>
    ),
    description: (
      <>
        Want to Dominate App Stores? Our app store optimization <br />
        services will ensure that among hundreds of apps your users <br />
        are able to find your app in your targeted App Store. Want to <br />
        improve your play store rankings? Partner With us.
      </>
    ),
    image: "/assets/images/app-store-optimization.svg",
  },
  sections: [
    {
      dataSection: "design_features",
      features: [
        {
          number: "01 /",
          title: "Market and competitor analysis",
          description:
            "Thorough analysis of the ecosystem to understand strengths and weaknesses.",
        },
        {
          number: "02 /",
          title: "Preparation",
          description: "Compilation of keywords and A/B testing parameters.",
        },
        {
          number: "04 /",
          title: "Implementation and ongoing maintenance",
          description:
            "Impeccable tracking of your rankings and appropriate steps according to contemporary situation.",
        },
        {
          number: "03 /",
          title: "Monthly ASO retainer",
          description:
            "Your listing rankings in the App Store keep on fluctuating and they need to be monitored and updated frequently to maintain your rankings. We offer a monthly ASO retainer package to maintain your visibility.",
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

export default function AppStoreOptimizationPage() {
  return <ServiceDetailPage config={pageConfig} />;
}
