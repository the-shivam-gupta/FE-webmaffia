import Image from "next/image";

const AWARDS = [
  {
    image: "/assets/images/awards/award-1.webp",
    title: "Abby awards",
    year: "2014",
    type: "Silver",
    description: (
      <>
        Best use of Animation <br />
        for AM / NS India
      </>
    ),
  },
  {
    image: "/assets/images/awards/award-1.webp",
    title: "Abby awards",
    year: "2014",
    type: "Bronze",
    description: (
      <>
        Best use of Animation <br />
        for AM / NS India
      </>
    ),
  },
  {
    image: "/assets/images/awards/award-1.webp",
    title: "Abby awards",
    year: "2015",
    type: "Bronze",
    description: (
      <>
        Best use of Animation <br />
        for AM / NS India
      </>
    ),
  },
  {
    image: "/assets/images/awards/award-1.webp",
    title: "Abby awards",
    year: "2015",
    type: "Bronze",
    description: (
      <>
        Best use of Animation <br />
        for AM / NS India
      </>
    ),
  },
  {
    image: "/assets/images/awards/award-2.webp",
    title: (
      <>
        Digital crest <br />
        awards
      </>
    ),
    year: "2015",
    type: "Gold",
    description: "Best Website Corporate / Brand",
  },
  {
    image: "/assets/images/awards/award-3.webp",
    title: (
      <>
        Kyoorius <br />
        creative awards
      </>
    ),
    year: "2015",
    type: "Gold",
    description: (
      <>
        Best use of Animation <br />
        for AM / NS India
      </>
    ),
  },
];

export default function AwardsPage() {
  return (
    <main className="wrapper">
      <div className="ml-setter awards_page">
        <section data-section="hero_section" className="hero_section flex">
          <div>
            <div className="sub_title">AWARDS</div>
            <h1>
              Glory in <br />
              Achievement
            </h1>
            <p>
              Transforming visions into captivating digital landscapes, <br />
              we crafts tailored solutions that elevate brands and engage <br />
              audiences. With a focus on innovation and precision, we <br />
              bring your online presence to life, delivering seamless user <br />
              experiences that resonate and inspire.
            </p>
          </div>
          <picture>
            <source
              media="(max-width: 540px)"
              srcSet="/assets/images/hero-mobile.webp"
            />
            <Image
              src="/assets/images/contact-hero.webp"
              alt=""
              width={871}
              height={767}
              className="dark_img"
              priority
            />
          </picture>
        </section>

        <section className="award_section">
          <div className="awards_box">
            {AWARDS.map((award, index) => (
              <div className="awards_item" key={`${award.year}-${award.type}-${index}`}>
                <Image
                  src={award.image}
                  alt=""
                  width={410}
                  height={267}
                  className="dark_img"
                />
                <h2 className="h3">{award.title}</h2>
                <div className="award_date">{award.year}</div>
                <div className="award_type">{award.type}</div>
                <div className="about_award">{award.description}</div>
              </div>
            ))}
          </div>
          <Image
            src="/assets/images/award_vector.webp"
            alt=""
            className="award_vector dark_img"
            width={340}
            height={491}
          />
        </section>
      </div>
    </main>
  );
}
