/** Blog listing data (matches live webmaffia.com/blog) */

export const FEATURED_BLOG = {
  slug: "geo-vs-seo-vs-aeo-what-brands-need-in-2026",
  title: (
    <>
      GEO, SEO, AEO - <br />
      Your Business Needs <br />
      All Three
    </>
  ),
  excerpt: (
    <>
      The way people search has changed. <br />
      Learn the key differences between GEO, SEO, and AEO— <br />
      and what brands must prioritise in 2026 to stay found.
    </>
  ),
  date: "22 May'26",
  readTime: "18 min.Read",
  image: "/assets/images/blogs/geo-seo-aeo.png",
  imageAlt: "GEO vs SEO vs AEO - your business needs all three",
  imageWidth: 896,
  imageHeight: 614,
};

export const OTHER_BLOGS = [
  {
    slug: "web-development-trends-2026",
    title: "Top Web Development Trends Businesses Should Watch in 2026",
    excerpt:
      "Your website is either making you money or costing you money. From AI in web development to headless CMS and web security—here are the trends every business should act on in 2026.",
    date: "19 May'26",
    readTime: "14 min.Read",
    image: "/assets/images/blogs/web-development-trends-2026.png",
    imageAlt: "Top web development trends businesses should watch in 2026",
  },
  {
    slug: "ai-in-web-development-2026",
    title: "How AI Is Changing Web Development in 2026",
    excerpt:
      "Websites used to take months to build. Today, AI can generate a functional, design-ready site in under an hour.",
    date: "15 May'26",
    readTime: "12 min.Read",
    image: "/assets/images/blogs/ai-in-web-development-2026.png",
    imageAlt: "Developer using AI tools for web development",
  },
  {
    slug: "how-to-plan-and-organise-a-social-media-calendar",
    title: "How to Plan and Organise Your Social Media Calendar?",
    excerpt:
      "Every business's biggest fear is not knowing what to post next. Of course, once they get past the fear of failure. Suppose you are a business owner, knowing what to post next and exactly when, for almost a week or a month. Doesn't that feel sorted?",
    date: "08 Dec'25",
    readTime: "9 min.Read",
    image: "/assets/images/blogs/detail/blog-img-6.webp",
    imageAlt: "",
  },
  {
    slug: "what-is-ppc-simple-guide-to-pay-per-click-advertising",
    title: (
      <>
        What is PPC Advertising? Everything You <br />
        Need to Know to Get Started
      </>
    ),
    excerpt:
      "Imagine throwing a promotion party, decorating your place, ordering the best snacks, but failing to send out the invitation.",
    date: "28 Oct'25",
    readTime: "7 min.Read",
    image: "/assets/images/blogs/ppc.png",
    imageAlt: "",
  },
  {
    slug: "what-is-content-marketing-why-it-matters-for-your-business",
    title: "What is Content Marketing? A Beginner's Guide",
    excerpt:
      "You are scrolling through Instagram and encounter two brands. One is bombarding your feed with numerous ads, and the other appears with guidance, tips, and stories that entice.",
    date: "28 Oct'25",
    readTime: "7 min.Read",
    image: "/assets/images/blogs/content-marketing.png",
    imageAlt: "",
  },
  {
    slug: "what-is-digital-marketing-everything-about-types-and-process",
    title: (
      <>
        What is Digital Marketing? Everything About <br />
        Types and Process
      </>
    ),
    excerpt:
      "Today's businesses aren't like those street vendors who wait for their customers to show up. They create campaign plans and practical strategies, and invest a lot of time and effort to reach them.",
    date: "6 Oct'25",
    readTime: "7 min.Read",
    image: "/assets/images/blogs/digital.png",
    imageAlt: "",
  },
  {
    slug: "what-is-seo-boost-website-traffic-with-simple-steps",
    title: "What is SEO? Boost Website Traffic with Simple Steps",
    excerpt:
      "SEO is a process of promoting your business on search engines to attract the right audience. As a new business owner, like my friend, people often have no idea what is SEO and how beneficial it can be for their company.",
    date: "6 Oct'25",
    readTime: "5 min.Read",
    image: "/assets/images/blogs/seo.png",
    imageAlt: "",
  },
  {
    slug: "what-are-google-core-web-vitals",
    title: "What Are Google Core Web Vitals and How to Improve Them?",
    excerpt:
      "When it comes to running a website, ensuring a positive user experience is critical. Users expect pages to load quickly, interact smoothly, and be visually stable as they load. If any of these aspects are lacking, it can lead to frustrated visitors—and possibly a drop in your website's rankings.",
    date: "10 May'25",
    readTime: "10 min.Read",
    image: "/assets/images/blogs/what-are-google-core-web-vitals.jpg",
    imageAlt: "",
  },
  {
    slug: "artificial-intelligence-in-digital-marketing",
    title: "How to Use Artificial Intelligence (AI) in Digital Marketing?",
    excerpt:
      "As the digital world keeps evolving, artificial intelligence (AI) is rapidly becoming a cornerstone of modern marketing. From automated customer service to personalised content, AI offers countless opportunities to optimise marketing strategies.",
    date: "25 April'25",
    readTime: "8 min.Read",
    image: "/assets/images/blogs/detail/blog-img-5.webp",
    imageAlt: "How to use artificial intelligence in digital marketing",
  },
  {
    slug: "digital-marketing-trends-to-look-out-for",
    title: (
      <>
        Digital Marketing Trends to Look <br />
        Out for in 2025
      </>
    ),
    excerpt:
      "As we step into 2025, the digital marketing landscape has become more dynamic than ever. It is an exciting time to be in the industry! With the emergence of new technologies and constantly evolving consumer behaviours, marketers are faced with the challenge of staying ahead of the curve.",
    date: "16 April'25",
    readTime: "8 min.Read",
    image: "/assets/images/blogs/detail/blog-img-4.webp",
    imageAlt: "",
  },
];

export function blogHref(slug) {
  return `/blog/${slug}`;
}
