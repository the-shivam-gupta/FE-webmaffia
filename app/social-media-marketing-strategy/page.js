import ServiceDetailPage from "../components/ServiceDetailPage";

const pageConfig = {
  hero: {
    subtitle: "OUR SERVICES",
    title: "Social media",
    description: (
      <>
        Social media is the backbone of digital marketing; for a good reason. <br />
        Where else will we be able to zero in on the perfect audience for our brand, <br />
        and then customize our message to best appeal to them? We understand <br />
        it is a crucial component of a social media agency, and we go to great lengths <br />
        to do justice to it.
      </>
    ),
    image: "/assets/images/our-work.svg",
  },
  sections: [
    {
      dataSection: "design_features",
      features: [
        {
          number: "01 /",
          title: "Targeting",
          description:
            "Our first objective here is to identify and reach the right audience for your brand's marketing objectives. We use a combination of demographic, interest, behavioural, and lookalike data points to zero in on the perfect targeting to reach new customers, while leveraging the captive audience on your website, social pages and email, to create holistic audience groups.",
        },
        {
          number: "02 /",
          title: "Execution",
          description:
            "We base our approach on research. Our social media team works alongside the creative folk to identify best practices, in terms of compelling visuals, memorable copy, CTAs, and everything else that goes into creating attention-grabbing content on social media.",
        },
        {
          number: "03 /",
          title: "Optimization",
          description:
            "The perfect social media strategy is one that is always evolving. We constantly monitor your brand's social campaigns and optimize them on the go to ensure they perform at their best. This includes optimizing budgets, changing targeting when needed, and refreshing creatives in a timely manner. All these decisions are taken based on a thorough analysis of data from every ongoing campaign.",
        },
        {
          number: "04 /",
          title: "Measurement & Reporting",
          description: [
            "The performance of any social campaign is the only metric that truly defines its success. This is an aspect we take seriously, right from the get-go. First, we set the key metrics in tandem with your marketing team, and then chart a path to achieve the same.",
            "The metrics are analysed on a weekly basis for course corrections; and we ensure a completely transparent reporting process so that we work as one, to achieve one single goal – a successful ROI-driven campaign.",
          ],
        },
      ],
    },
  ],
  latestWork: [
    {
      name: "Ecovero",
      type: "Social Media",
      url: "https://www.instagram.com/ecovero_global/?hl=en",
      image: "/assets/images/service/ecovero.webp",
    },
    {
      name: "Finmart",
      type: "Social Media",
      url: "https://www.instagram.com/finmartae/?hl=en",
      image: "/assets/images/service/finmart.webp",
    },
  ],
};

export default function SocialMediaMarketingPage() {
  return <ServiceDetailPage config={pageConfig} />;
}
