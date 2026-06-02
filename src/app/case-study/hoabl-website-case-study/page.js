import Image from "next/image";

export default function HoablWebsiteCaseStudyPage() {
  return (
    <main className="wrapper">
      <div className="ml-setter work_detail hoabl_detail">
        <section data-section="hero_section" className="hero_section flex">
          <picture className="detail_banner">
            <source
              media="(max-width: 540px)"
              srcSet="/assets/images/hoabl/hoabl-banner_mobile.png"
            />
            <Image
              src="/assets/images/hoabl/hoabl-banner.png"
              alt=""
              width={1920}
              height={981}
              priority
            />
          </picture>
          <div>
            <div className="sub_title">growwithhoabl.com</div>
            <h1>
              HoABL
              <br />
              Redefining Real Estate Through a Digital-First Lens
            </h1>
            <p>
              HoABL set out to revolutionize the real estate experience through
              technology — a fully
              <br />
              digital-first, AI-driven model aimed at a new generation of
              investors and homeowners.
              <br />
              Our mandate was to build a progressive, tech-savvy website that
              reflected this innovation,
              <br />
              offered an intuitive user experience, and established HoABL as a
              leader in modern real estate.
            </p>
          </div>
        </section>

        <div className="detail_sections">
          <section
            data-section="detail_challenge"
            className="detail_challenge flex"
          >
            <div>
              <div className="sub_title">growwithhoabl.com</div>
              <h2>
                The <br />
                Challenge
              </h2>
              <p>
                HoABL&apos;s ambition was to stand out in a competitive real
                estate market dominated by static, traditional websites. Their
                business model was entirely digital, demanding a website that
                could mirror their progressive outlook while staying
                lightweight, intelligent, and engaging.
              </p>
              <h3>The key challenges included:</h3>
              <ul className="jashList">
                <li>
                  <p>
                    Creating a distinct digital identity that differentiates
                    HoABL
                    <br /> from competitors.
                  </p>
                </li>
                <li>
                  <p>
                    Delivering a high-performance, AI-integrated site within
                    tight
                    <br /> deadlines.
                  </p>
                </li>
                <li>
                  <p>
                    Designing an experience that balanced aesthetic luxury with
                    <br /> technological sophistication.
                  </p>
                </li>
                <li>
                  <p>
                    Ensuring the platform was scalable, analytics-ready, and
                    <br /> adaptable for future modules such as chatbots,
                    <br /> recommendation engines, and interactive property
                    showcases.
                  </p>
                </li>
              </ul>
            </div>
            <picture>
              <Image
                src="/assets/images/work/detail-img-1.webp"
                alt=""
                width={572}
                height={756}
                className="dark_img"
              />
            </picture>
          </section>

          <section data-section="detail_solution" className="detail_solution flex">
            <picture>
              <Image
                src="/assets/images/work/detail-img-2.webp"
                alt=""
                width={684}
                height={835}
                className="dark_img"
              />
            </picture>
            <div>
              <div className="sub_title">growwithhoabl.com</div>
              <h2>
                The <br />
                Solution
              </h2>
              <p>
                Our approach combined strategic design thinking, advanced
                <br />
                technology, and precise execution.
              </p>
              <ul className="jashList">
                <li>
                  <p>
                    Design & Experience: We created a clean, immersive <br />
                    interface with subtle motion, intuitive navigation, and
                    modern layouts — capturing <br />
                    the premium, future-forward essence of the brand.
                  </p>
                </li>
                <li>
                  <p>
                    Technology & Development: Built on React and a Headless{" "}
                    <br />
                    CMS, the platform leverages AI-driven property
                    recommendations, an integrated chatbot,
                    <br /> and real-time analytics. Every component was
                    optimized for Core Web Vitals, speed,
                    <br /> and responsiveness.
                  </p>
                </li>
                <li>
                  <p>
                    Scalability & Optimization: Designed modularly, the system
                    <br />
                    allows easy integration of upcoming digital features — from
                    virtual tours to personalized
                    <br /> dashboards — ensuring the site evolves with the
                    brand.
                  </p>
                </li>
              </ul>
              <br />
              <br />
              <p>
                The result was a smart, data-backed website that not only
                enhanced engagement but also positioned HoABL as a tech-driven
                pioneer in the real estate space.
              </p>
            </div>
          </section>

          <picture className="hoabl_showcase">
            <source
              media="(max-width: 540px)"
              srcSet="/assets/images/hoabl/hoabl-mobile.png"
            />
            <Image
              src="/assets/images/hoabl/hoabl-desktop.png"
              alt=""
              width={1920}
              height={981}
              className="dark_img"
            />
          </picture>
        </div>

        <section data-section="client_work" className="client_work">
          <h2>
            Don&apos;t just take our <br />
            word for it
          </h2>
          <div className="client_para">Read what our client have to say</div>
          <div className="client_testimonial">
            <div className="testimonial_wrapper">
              <div className="swiper-slide">
                <div className="testimonial_content">
                  The website growwithhoabl.com is exceptionally well made —
                  seamless, intuitive, and smooth in its functionality. The
                  overall experience was effortless, and everything worked
                  perfectly across sections. Truly a job well done!
                </div>
                <div className="company">
                  <Image
                    src="/assets/images/hoabl/hoabl-testi.webp"
                    alt=""
                    width={91}
                    height={91}
                  />
                  <div>
                    <div className="name">Priyam Shukla</div>
                    <div className="work">DGM - Digital Marketing</div>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src="/assets/images/testimonial_img.webp"
              alt=""
              className="client_img"
              width={678}
              height={877}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
