import ServiceDetailPage from "@/components/ServiceDetailPage";

const pageConfig = {
  hero: {
    subtitle: "OUR SERVICES",
    title: "SEO",
    description: (
      <>
        In a world where Search is the point of discovery <br />
        for almost all consumers, a solid SEO strategy is crucial <br />
        for any brand to taste digital success. Brand awareness, <br />
        increasing website traffic, generating leads, and converting them, <br />
        no matter what your objective, SEO has a crucial part to play
      </>
    ),
    image: "/assets/images/social-media.svg",
  },
  sections: [
    {
      dataSection: "design_features",
      features: [
        {
          number: "01 /",
          title: "Competitor and Market Research",
          description:
            "This is the very first step towards a robust SEO strategy. We do thorough research to understand which competitor websites are ranking high on the SERP for a particular service or product. This helps us in identifying best practices, and forms the foundation on which we build a customized SEO approach for your brand.",
        },
        {
          number: "02 /",
          title: "Keyword Research and Analysis",
          description:
            "Next, we analyse the most relevant and high-value keywords that your potential customers are using to discover your product / service online. Our team also comes up with recommendations on the kind of content to create to ensure that your website ranks right among the top in search results.",
        },
        {
          number: "03 /",
          title: "On-Page Optimization",
          description:
            "This process helps us achieve a dual purpose of optimizing your content the best way possible for both search engines, as well as users. We achieve this by optimizing your website's structure, meta tags, URLs, UI/UX, and more.",
        },
        {
          number: "04 /",
          title: "Off-Page Optimization",
          description:
            "Our goal here is to add the all-important layer of trust and authenticity to your website. We do this by adding high-quality backlinks to your website thereby increasing traffic, improving rankings, and driving more conversions.",
        },
        {
          number: "05 /",
          title: "Local SEO",
          description:
            "If your business is serves only specific geographies, we employ best-in-industry local SEO techniques, to give you more visibility when it comes to local searches for your product or service.",
        },
        {
          number: "06 /",
          title: "Technical SEO",
          description:
            "Technical SEO is what happens behind the scenes of a search engine. Our experts ensure that your website is easy for search engines to crawl, understand, and store your content. This, in turn, helps rank your website as one of the most preferred search results on all search engines.",
        },
        {
          number: "07 /",
          title: "Content Optimization",
          description:
            "Every website needs to refine and enhance its content to remain relevant as search habits constantly evolve. For this, our SEO experts work with the content team and the tech team to ensure content quality, keyword inclusion, meta tagging and more.",
        },
      ],
    },
  ],
  latestWork: [
    {
      name: "AMNS",
      type: "Website Design - Development - SEO",
      url: "https://www.amns.in/",
      image: "/assets/images/service/amns.webp",
    },
  ],
};

export default function SearchEngineOptimizationPage() {
  return <ServiceDetailPage config={pageConfig} />;
}
