import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Webmaffia - Taking Marketing to Another Level",
  description:
    "An award-winning digital agency with a strong foothold in creative thinking & execution, Webmaffia is growing in creative strength with every passing year.",
};

const ABOUT_AWARDS = [
  { src: "/assets/images/awards/img-1.webp", alt: "Award 1" },
  { src: "/assets/images/awards/img-2.webp", alt: "Award 2" },
  { src: "/assets/images/awards/arvind.png", alt: "Award 3" },
  { src: "/assets/images/awards/img-4.webp", alt: "Award 4" },
  { src: "/assets/images/awards/img-5.webp", alt: "Award 5" },
  { src: "/assets/images/awards/img-6.webp", alt: "Award 6" },
  { src: "/assets/images/awards/img-7.webp", alt: "Award 7" },
  { src: "/assets/images/awards/img-8.webp", alt: "Award 8" },
];

export default function AboutPage() {
  return (
    <main className="wrapper about_wrapper">
      <div className="ml-setter about_us">
        <section
          data-section="about_us"
          className="hero_section banner_para flex"
        >
          <div>
            <h1 className="sub_title">ABOUT US</h1>
            <div className="h1">
              Discover our <br />
              true essence
            </div>
            <p>
              An award-winning digital agency with a strong <br />
              foothold in Creative Thinking and Execution, <br />
              Webmaffia is growing in creative strength with <br />
              every passing year.
            </p>
            <p>
              Our creative Maffians brainstorm with just one <br />
              mission, and that is to make sure your brand <br />
              triggers a connect, emotional and/or rational, by <br />
              standing out from the rest. With thorough research <br />
              and understanding, we conceptualize an insightful <br />
              and unique communication approach for your <br />
              brand.
            </p>
          </div>
          <picture>
            <source
              media="(max-width: 540px)"
              srcSet="/assets/images/home_mobile_banner.svg"
            />
            <Image
              src="/assets/images/about_banner.svg"
              alt="learn more about webmaffia"
              width={871}
              height={767}
              className="dark_img"
            />
          </picture>
        </section>

        <section className="about_container" data-section="">
          <Image
            src="/assets/images/about_img.webp"
            alt=""
            width={589}
            height={761}
          />
          <div className="about_content banner_para">
            <p>
              With over a decade of experience, our digital agency stands as a
              seasoned <br />
              authority in the dynamic realm of digital marketing and technology.
              Leveraging <br />
              our extensive knowledge and insights gained over the years, we offer{" "}
              <br />
              comprehensive solutions tailored to meet the unique needs of each
              client. From <br />
              crafting compelling digital strategies to executing creative campaigns
              and <br />
              delivering measurable results, our team is committed to driving growth
              and <br />
              success in the digital landscape.
            </p>
            <p>
              With a forward-thinking approach and a dedication to innovation, we{" "}
              <br />
              continuously evolve alongside the industry to ensure our clients stay
              ahead of <br />
              the curve and achieve their business objectives effectively.
            </p>
            <p>Save your precious time and effort spent for finding a solution.</p>
            <Link href="/contact" className="cta_text">
              Contact us <span>Now</span>
            </Link>
          </div>
        </section>

        <div className="about_award">
          <section data-section="awards" className="our_work awards">
            <h2 className="sub_heading">
              Latest <br /> wins
            </h2>
            <div className="work_box">
              {ABOUT_AWARDS.map((award) => (
                <Link href="/awards" key={award.src}>
                  <Image
                    src={award.src}
                    alt={award.alt}
                    width={150}
                    height={130}
                  />
                </Link>
              ))}
            </div>
          </section>
          <div className="about_cta">
            <Link href="/services" className="cta_text">
              Next up <span>Services</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
