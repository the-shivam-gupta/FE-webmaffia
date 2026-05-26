import ServiceDetailPage from "../components/ServiceDetailPage";

const ICON = (file, title) => ({
  src: `/assets/images/service/icons/${file}`,
  title,
});

const TECH_WE_USE = {
  title: "Technologies we use",
  groups: [
    {
      label: "Front End",
      icons: [
        ICON("html.webp", "HTML"),
        ICON("css.webp", "CSS"),
        ICON("js.webp", "JavaScript"),
        ICON("gsap.webp", "GSAP"),
      ],
    },
    {
      label: "Full Stack",
      icons: [
        ICON("A.webp", "Angular"),
        ICON("react.webp", "React"),
        ICON("vue-js.webp", "Vue"),
        ICON("nest-js.webp", "Nest.js"),
        ICON("next-js.webp", "Next.js"),
      ],
    },
    {
      label: "Back End",
      icons: [
        ICON("php.webp", "PHP"),
        ICON("laravel.webp", "Laravel"),
        ICON("wordpress.webp", "WordPress"),
        ICON("drupal.webp", "Drupal"),
        ICON("strapi.webp", "Strapi"),
        ICON("node-js.webp", "Node.js"),
      ],
    },
    {
      label: "Database",
      icons: [
        ICON("sql.webp", "SQL"),
        ICON("postgresql.webp", "PostgreSQL"),
        ICON("mongo-db.webp", "MongoDB"),
        ICON("sql-lite.webp", "SQLite"),
      ],
    },
  ],
};

const SYSTEM_ARCH = {
  title: "System architecture",
  groups: [
    {
      icons: [
        ICON("html.webp", "HTML"),
        ICON("css.webp", "CSS"),
        ICON("js.webp", "JavaScript"),
        ICON("html.webp", "HTML"),
        ICON("css.webp", "CSS"),
        ICON("js.webp", "JavaScript"),
      ],
    },
  ],
};

const pageConfig = {
  hero: {
    subtitle: "OUR SERVICES",
    title: (
      <>
        Design and <br />
        development
      </>
    ),
    description: (
      <>
        We blur the lines between Design and <br />
        development to create work that inspires delight. <br />
        Our web design and development section <br />
        specializes in crafting innovative digital <br />
        experiences tailored to elevate brands and <br />
        captivate audiences.
      </>
    ),
    image: "/assets/images/design-and-development.svg",
  },
  sections: [
    {
      dataSection: "design_features",
      heading: "Web design",
      intro: (
        <>
          We approach design projects with unwavering <br />
          commitment. Unlike others, we don&apos;t limit <br />
          concepts or revisions. Our unlimited service <br />
          ensures your complete satisfaction throughout <br />
          the design process.
        </>
      ),
      features: [
        {
          number: "01 /",
          title: "Discovery",
          description:
            "We work collaboratively with our clients to define requirements and architect solutions that align their unique needs and business goals with off-the-shelf and custom development. Our consultative approach results in complete technology solutions that deliver best-in-class customer and brand experiences",
        },
        {
          number: "02 /",
          title: "Structure",
          description:
            "We specialize in creating intuitive and streamlined structures that transform how users navigate and engage with your content. With our meticulous approach, we'll analyze your website's content, understand your audience's needs, and design a strategic Information Architecture that ensures seamless navigation and effortless discovery. We'll organize your content in a way that enhances user experience, empowers exploration, and maximizes conversions.",
        },
        {
          number: "03 /",
          title: "Wireframe",
          description:
            "The primary purpose of wireframes is to communicate the structure and functionality of the product, allowing stakeholders to provide feedback and make informed decisions before investing significant resources into detailed design and development. By focusing on the core elements and user interactions, wireframes help ensure that the overall user experience and information architecture are well-planned and intuitive.",
        },
        {
          number: "04 /",
          title: "Mood boards",
          description:
            "With our keen eye for aesthetics and attention to detail, we gather a collection of images, colors, textures, typography and custom graphics that encapsulate the essence of your brand. Each element is thoughtfully arranged on a digital canvas, forming a captivating visual narrative that evokes the desired mood and emotion and sparks ideas for your evolution.",
        },
        {
          number: "05 /",
          title: "Visual design",
          description:
            "We create captivating digital experiences that seamlessly blend aesthetics with functionality. With meticulous attention to detail and a profound understanding of user experience, we create engaging websites that intuitively guide visitors through your content. Our strategic approach focuses on setting specific goals to help each user take the expected action, ensuring a seamless journey that maximizes conversions.",
        },
      ],
    },
    {
      dataSection: "development_features",
      heading: "Web development",
      intro: (
        <>
          Our developers are artists. they turn designs into <br />
          animated and interactive user interfaces that <br />
          leave a lasting impression on your audience. <br />
          breathing life into websites through motion and <br />
          movement is our bread and butter.
        </>
      ),
      features: [
        {
          number: "01 /",
          title: "Set up framework",
          description:
            "We develop animations that engage users and bring your digital content to life. Our go-to library for animation is GSAP, a powerful tool that enables us to craft dynamic and smooth animations.",
        },
        {
          number: "02 /",
          title: "API's",
          description:
            "With our extensive experience in API development and integration, we enable your systems, applications, and services to communicate and interact effortlessly. Our team builds robust APIs that facilitate seamless data exchange, empowering your business to leverage the full potential of connected technologies.",
        },
        {
          number: "03 /",
          title: (
            <>
              Server side <br />
              programming
            </>
          ),
          description:
            "With our knowledge and experience in server-side programming languages, we offer a vast array of carefully curated libraries that cater to the specific needs of your project. These libraries serve as the building blocks for creating a powerful backend infrastructure that drives seamless interactions and efficient data management. We understand the importance of selecting the right libraries to support your company's goals. We evaluate and identify the most suitable libraries for your project, taking into consideration factors such as performance, security, compatibility, and extensibility.",
        },
        {
          number: "04 /",
          title: (
            <>
              Performance & <br />
              testing
            </>
          ),
          description:
            "There's no room for slow loading times or delays. Our team conducts rigorous performance testing to identify bottlenecks and optimize every aspect of your digital platform. We ensure your website or app performs flawlessly, even under heavy traffic, keeping users engaged and satisfied.",
        },
        {
          number: "05 /",
          title: (
            <>
              Optimization <br />
              and QA
            </>
          ),
          description:
            "Our diligent and thorough quality assurance process ensures that every product we deploy has been extensively road-tested and is ready to go. We kill more bugs than a Coney Island Superintendent.",
        },
        {
          number: "06 /",
          title: (
            <>
              Maintenance <br />
              and support
            </>
          ),
          description:
            "It's our job to ensure your website remains at its peak performance with our comprehensive support and maintenance services. We're committed to keeping your online presence running like a Tesla at all times as it's crucial for a seamless user experience. Whether you need to add new pages, update existing content, or integrate additional features, our team is here to support your evolving needs.",
        },
      ],
      technologies: TECH_WE_USE,
    },
    {
      dataSection: "support_features",
      heading: "Website support",
      intro: (
        <>
          our commitment to website support goes beyond <br />
          mere troubleshooting — it&apos;s a comprehensive <br />
          strategy to fortify, optimize, and elevate your <br />
          digital presence.
        </>
      ),
      features: [
        {
          number: "01 /",
          title: "Hosting",
          description:
            "Keeping it simple. Our comprehensive hosting services streamline operations, covering everything from code fixes to seamless deployments. Our proficiency extends to monitoring server health for optimal performance, implementing load balancers during traffic surges, and executing software updates to avert any downtime.",
        },
        {
          number: "02 /",
          title: "Priority support",
          description:
            "Clients with managed sites enjoy immediate, dedicated attention, ensuring a response within minutes.",
        },
        {
          number: "03 /",
          title: "Heat-Maps",
          description:
            "Heat maps are used on websites to visually represent user interaction and behavior. By tracking and displaying where users click, move, scroll, and linger on a web page, they provide valuable insights into how visitors engage with site content. This helps us understand user preferences, identify areas of interest, and recognize potential pain points or obstacles.",
        },
        {
          number: "04 /",
          title: "Updates & fixes",
          description:
            "We stand by our code. In the event of any glitches, we're steadfast in our resolve. With unwavering determination and a unified effort, we rectify issues without hesitation.",
        },
      ],
      technologies: SYSTEM_ARCH,
    },
  ],
  latestWork: [
    {
      name: "Nayara-Energy",
      type: "Website Design - Development",
      url: "https://www.nayaraenergy.com/",
      image: "/assets/images/service/nayara.webp",
    },
    {
      name: "Finmapp",
      type: "Website Design - Development - SEO",
      url: "https://airpay.money/",
      image: "/assets/images/service/finampp.webp",
    },
  ],
};

export default function WebsiteDesignDevelopmentPage() {
  return <ServiceDetailPage config={pageConfig} />;
}
