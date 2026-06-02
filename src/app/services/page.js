import Image from "next/image";
import Link from "next/link";
import ServiceTagSwiper from "@/components/ServiceTagSwiper";

const SERVICE_SECTIONS = [
  {
    imageFirst: true,
    title: (
      <>
        Digital <br />
        Strategy
      </>
    ),
    img: { src: "/assets/images/number/1.webp", alt: "Digital Strategy" },
    slides: ["Brand Positioning", "Competitive", "Brand Positioning", "Competitive"],
    body: (
      <>
        We understand that a digital marketing strategy <br />
        goes beyond the traditional approach towards strategizing <br />
        a campaign. This is why we draw our talent from agencies <br />
        specializing in digital strategy and consulting firms.
      </>
    ),
    href: "/digital-strategy",
  },
  {
    imageFirst: false,
    title: (
      <>
        Design & <br />
        Development
      </>
    ),
    img: { src: "/assets/images/number/2.webp", alt: "Design and Development" },
    slides: ["Development", "Hosting"],
    body: (
      <>
        We blur the lines between Design and development <br />
        to create work that inspires delight. Our web design <br />
        and development section specializes in crafting innovative <br />
        digital experiences tailored to elevate brands and <br />
        captivate audiences.
      </>
    ),
    href: "/website-design-development-services",
  },
  {
    imageFirst: true,
    title: <>SEO</>,
    img: { src: "/assets/images/number/3.webp", alt: "SEO" },
    slides: ["Backlinks", "On-Page"],
    body: (
      <>
        In a world where Search is the point of discovery <br />
        for almost all consumers, a solid SEO strategy is crucial <br />
        for any brand to taste digital success. Brand awareness, <br />
        increasing website traffic, generating leads, and converting them, <br />
        no matter what your objective, SEO has a crucial part to play.
      </>
    ),
    href: "/search-engine-optimization-services",
  },
  {
    imageFirst: false,
    title: (
      <>
        Social <br />
        media
      </>
    ),
    img: { src: "/assets/images/number/4.webp", alt: "Social Media" },
    slides: ["Engagement", "Hashtag"],
    body: (
      <>
        Social media is the backbone of digital marketing; <br />
        for a good reason. Where else will we be able to zero <br />
        in on the perfect audience for our brand, and then customize <br />
        our message to best appeal to them? We understand it is a crucial <br />
        component of a social media agency, and we go to great lengths <br />
        to do justice to it.
      </>
    ),
    href: "/social-media-marketing-strategy",
  },
  {
    imageFirst: true,
    title: (
      <>
        Content <br />
        Marketing
      </>
    ),
    img: { src: "/assets/images/number/5.webp", alt: "Content Marketing" },
    slides: ["Backlinks", "On-Page"],
    body: (
      <>
        Original Content - Blog and Copywriting <br />
        Our wordsmiths create compelling ad copy, <br />
        editorial pieces and other original content <br />
        that prioritizes impact, clarity and <br />
        empathy over mere loudness. We put customer <br />
        intent behind every word we craft to drive <br />
        clicks and shares.
      </>
    ),
    href: "/content-marketing-strategy",
  },
  {
    imageFirst: true,
    title: (
      <>
        App Store <br />
        Optimization
      </>
    ),
    img: { src: "/assets/images/number/6.webp", alt: "App Store Optimization" },
    slides: ["Backlinks", "On-Page"],
    body: (
      <>
        Want to Dominate App Stores? Our app store <br />
        optimization services will ensure that among hundreds <br />
        of apps your users are able to find your app in your <br />
        targeted App Store. Want to improve your play store <br />
        rankings? Partner With us.
      </>
    ),
    href: "/app-store-optimization",
  },
];

function ServiceSection({ imageFirst, title, img, slides, body, href }) {
  const image = (
    <Image
      src={img.src}
      alt={img.alt}
      width={674}
      height={568}
      className="dark_img"
    />
  );

  const content = (
    <div>
      <h2>{title}</h2>
      <ServiceTagSwiper items={slides} />
      <p>{body}</p>
      <Link href={href} className="cta_text">
        Take a <span>Look</span>
      </Link>
    </div>
  );

  return (
    <section data-section="" className="flex">
      {imageFirst ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className="wrapper">
      <div className="services ml-setter">
        <section data-section="hero_section" className="hero_section flex">
          <div>
            <h1 className="sub_title">OUR SERVICES</h1>
            <div className="h1">
              Creating a
              <br />
              platform for your <br />
              purpose
            </div>
            <p>
              Transforming visions into captivating digital landscapes, <br />
              we crafts tailored solutions that elevate brands and engage <br />
              audiences. With a focus on innovation and precision, we <br />
              bring your online presence to life, delivering seamless user <br />
              experiences that resonate and inspire.
            </p>
          </div>
        </section>

        <div>
          {SERVICE_SECTIONS.map((service) => (
            <ServiceSection key={service.href} {...service} />
          ))}
        </div>
      </div>
    </main>
  );
}
