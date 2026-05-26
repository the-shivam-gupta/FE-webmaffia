import CTA from "./CTA";

const DEFAULT_DATA = {
  subheading: {
    enabled: true,
    text: "CREATIVE DIGITAL AGENCY",
  },
  title: {
    line1: "A digital-first",
    line2: "creative agency",
  },
  description:
    "Yes, that\u2019s what we maffians pride ourselves on doing.\nCreative is our forte, digital is our medium. And our objective\nfor every campaign is the same as yours \u2013 ROI.",
  background: {
    color1: "",
    color2: "",
    opacity: 0.8,
  },
  images: {
    banner: {
      url: "/assets/images/home_banner.svg",
      alt: "award winning agency",
    },
    bannerMobile: {
      url: "/assets/images/home_mobile_banner.svg",
      alt: "award winning agency",
    },
    petal: {
      url: "",
      alt: "",
    },
  },
};

const Banner = ({ data = DEFAULT_DATA }) => {
  const {
    subheading,
    title,
    description,
    images: { banner, bannerMobile },
  } = data;

  return (
    <section data-section="hero_section" className="hero_section flex">
      <div>
        {subheading.enabled && (
          <h1 className="sub_title">{subheading.text}</h1>
        )}
        <div className="h1">
          {title.line1}
          {title.line2 && <><br />{title.line2}</>}
        </div>
        <p>
          {description.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
        <CTA />
      </div>

      <picture>
        <source media="(max-width: 540px)" srcSet={bannerMobile.url} />
        <img
          src={banner.url}
          alt={banner.alt}
          width={788}
          height={693}
          className="dark_img"
        />
      </picture>
    </section>
  );
};

export default Banner;
