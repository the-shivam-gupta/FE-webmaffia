import Image from "next/image";
import Banner from "@/components/Banner";

const bannerData = {
  imagePosition: "right",
  priority: true,
  subheading: {
    enabled: true,
    text: "AWARDS",
  },
  title: {
    line1: "Glory in",
    line2: "Achievement",
  },
  description:
    "Transforming visions into captivating digital landscapes,\nwe crafts tailored solutions that elevate brands and engage\naudiences. With a focus on innovation and precision, we\nbring your online presence to life, delivering seamless user\nexperiences that resonate and inspire.",
  images: {
    banner: {
      url: "/assets/images/contact-hero.webp",
      alt: "",
      width: 871,
      height: 767,
    },
    bannerMobile: {
      url: "/assets/images/hero-mobile.webp",
      alt: "",
    },
  },
};

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
        <Banner data={bannerData} />

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
