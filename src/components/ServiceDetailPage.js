import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";

function TechnologyBlock({ technologies }) {
  if (!technologies) return null;

  return (
    <div className="technologies">
      <h2 className="feature_title">{technologies.title}</h2>
      {technologies.groups.map((group, index) => (
        <div
          className="technology_items"
          key={group.label ?? `${technologies.title}-${index}`}
        >
          {group.label ? <h4 className="h4">{group.label}</h4> : null}
          <div className="technology_img">
            {group.icons.map((icon, iconIndex) => (
              <div key={`${group.label ?? "icon"}-${iconIndex}-${icon.src}`}>
                <Image
                  src={icon.src}
                  title={icon.title}
                  alt=""
                  width={75}
                  height={75}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ServiceDetailPage({ config }) {
  const { hero, sections, latestWork } = config;
  const heroClass = hero.heroClassName
    ? `hero_section flex ${hero.heroClassName}`
    : "hero_section flex";

  const descriptions = Array.isArray(hero.description)
    ? hero.description
    : [hero.description];

  const bannerData = {
    imagePosition: "right",
    priority: true,
    subheading: {
      enabled: true,
      text: hero.subtitle,
    },
    title: {
      line1: hero.title,
    },
    images: {
      banner: {
        url: hero.image,
        alt: "",
        width: hero.imageWidth ?? 871,
        height: hero.imageHeight ?? 767,
      },
      bannerMobile: {
        url: "/assets/images/hero-mobile.webp",
        alt: "",
      },
    },
  };

  return (
    <main className="wrapper">
      <div className="ml-setter service_detail">
        <Banner data={bannerData} className={heroClass}>
          {descriptions.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </Banner>

        {sections?.length > 0 && (
          <div className="services_parent">
            {sections.map((section) => (
              <section
                key={section.dataSection}
                data-section={section.dataSection}
                className={section.className ?? "service_features"}
              >
                {section.heading ? <h2 className="h2">{section.heading}</h2> : null}
                {section.intro ? <p>{section.intro}</p> : null}
                <div className="feature_type">
                  {section.features.map((feature, index) => (
                    <div
                      className="feature_box"
                      key={`${section.dataSection}-${feature.number}-${index}`}
                    >
                      <h2
                        className={
                          feature.influencerTitle
                            ? "feature_title influencer_title"
                            : "feature_title"
                        }
                        data-sf-number={feature.number}
                      >
                        {feature.title}
                      </h2>
                      {Array.isArray(feature.description) ? (
                        feature.description.map((para, i) => (
                          <p key={i}>{para}</p>
                        ))
                      ) : (
                        <p>{feature.description}</p>
                      )}
                    </div>
                  ))}
                </div>
                <TechnologyBlock technologies={section.technologies} />
              </section>
            ))}
          </div>
        )}

        {latestWork?.length > 0 && (
          <section data-section="services_work" className="services_work">
            <h2 className="h2">Latest work</h2>
            <div className="workspace">
              {latestWork.map((item) => (
                <div className="service_item" key={item.name}>
                  <a
                    href={item.url}
                    className="service_img"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={item.image}
                      alt=""
                      width={821}
                      height={601}
                    />
                  </a>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <h3 className="service_name">{item.name}</h3>
                    <div className="service_type">{item.type}</div>
                  </a>
                </div>
              ))}
            </div>
            <div className="cta_work">
              <Link href="/case-study" className="cta_text">
                View All <span>Work</span>
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
