import ServiceDetailPage from "@/components/ServiceDetailPage";

const pageConfig = {
  hero: {
    subtitle: "OUR SERVICES",
    title: "AI-Powered Solutions",
    description: (
      <>
        We help brands and businesses unlock the potential of AI through smart, <br />
        scalable, and creative digital solutions. From automating workflows and <br />
        enhancing customer experiences to powering marketing, content, and <br />
        business operations, our AI-driven solutions are designed to improve <br />
        efficiency, accelerate growth, and give businesses a competitive edge <br />
        in the digital landscape.
      </>
    ),
    image: "/assets/images/digital-strategy.svg",
  },
  sections: [
    {
      dataSection: "ai_features",
      features: [
        {
          number: "01 /",
          title: "AI Consulting",
          description:
            "We help businesses identify the right opportunities to integrate AI into their operations, marketing, and digital ecosystems. From strategy and workflow planning to implementation guidance, we provide practical AI consulting that helps brands adopt the right technologies to improve efficiency, enhance customer experiences, and support long-term growth.",
        },
        {
          number: "02 /",
          title: "AI Chatbots",
          description:
            "We create intelligent AI chatbots and virtual assistants that help businesses deliver faster support, improve engagement, and automate conversations across digital platforms. Whether for customer service, lead generation, inquiries, or internal processes, our chatbot solutions are designed to provide seamless and personalized user experiences.",
        },
        {
          number: "03 /",
          title: "Generative AI Solutions",
          description:
            "We develop generative AI solutions that help businesses streamline content creation, automate workflows, and enhance digital experiences. From AI-powered content generation and summarization to recommendations and creative automation, we help brands leverage modern AI technologies to work smarter and scale faster.",
        },
        {
          number: "04 /",
          title: "AI Automation",
          description:
            "We build AI-driven automation solutions that simplify repetitive tasks and optimize everyday business operations. By automating workflows, data processing, reporting, and operational processes, we help businesses improve productivity, reduce manual effort, and create more efficient systems across teams and departments.",
        },
        {
          number: "05 /",
          title: "AI Agents",
          description:
            "We develop advanced AI agents capable of handling tasks, assisting users, managing workflows, and supporting business operations intelligently. Designed to enhance productivity and automate complex processes, our AI agents help businesses streamline communication, research, execution, and digital interactions at scale.",
        },
        {
          number: "06 /",
          title: "AI-Powered Web & App Development",
          description:
            "We design and develop modern websites and applications enhanced with AI-powered features and intelligent functionality. From personalized user experiences and smart automation to AI integrations and data-driven capabilities, we create scalable digital platforms built for performance, engagement, and business growth.",
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

export default function AiPoweredSolutionsPage() {
  return <ServiceDetailPage config={pageConfig} />;
}
