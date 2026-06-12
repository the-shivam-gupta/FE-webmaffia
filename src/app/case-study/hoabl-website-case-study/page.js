"use client";

import Image from "next/image";
import Banner from "@/components/Banner";
import CaseStudySeoSection from "@/components/CaseStudySeoSection";
import ContactFormSection from "@/components/ContactFormSection";

const SEO_CHART_SLIDES = [
  "/assets/images/work/hoabl-Organic-Traffic-Organic-Users.png",
  "/assets/images/work/hoabl-Brand-Keywords-Clicks.png",
  "/assets/images/work/hoabl-Brand-Keywords-Impressions.png",
  "/assets/images/work/hoabl-Non-Brand-Keywords-Clicks.png",
  "/assets/images/work/hoabl-Non-Brand-Keywords-Impressions.png",
];

const bannerData = {
  imagePosition: "background",
  priority: true,
  unoptimized: true,
  subheading: {
    enabled: true,
    text: "growwithhoabl.com",
  },
  title: {
    line1: "HoABL",
  },
  subtitle: {
    enabled: true,
    text: "Redefining Real Estate Through\na Digital-First Lens",
  },
  description:
    "HoABL set out to revolutionize the real estate experience through technology — a fully\ndigital-first, AI-driven model aimed at a new generation of investors and homeowners.\nOur mandate was to build a progressive, tech-savvy website that reflected this innovation,\noffered an intuitive user experience, and established HoABL as a leader in modern real estate.",
  images: {
    banner: {
      url: "/assets/images/hoabl/hoabl-banner.png",
      alt: "",
      width: 1920,
      height: 981,
    },
    bannerMobile: {
      url: "/assets/images/hoabl/hoabl-banner.png",
      alt: "",
    },
  },
};

export default function HoablWebsiteCaseStudyPage() {
  return (
    <main className="wrapper">
      <div className="ml-setter hoabl_detail">
        <Banner data={bannerData} />

        <div className="detail_sections">
          <section
            data-section="detail_challenge"
            className="detail_challenge flex"
          >
            <div className="challenge_content">
              <div className="sub_title">growwithhoabl.com</div>
              <h2 className="challenge_content__title">
                The <br />
                Challenge
              </h2>
              <p className="challenge_content__para">
                HoABL&apos;s ambition was to stand out in a competitive real
                estate market dominated by static, traditional websites. Their
                business model was entirely digital, demanding a website that
                could mirror their progressive outlook while staying
                lightweight, intelligent, and engaging.
              </p>
              <h3 className="challenge_content__title_2">The key challenges<br /> included:</h3>
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
                src="/assets/images/work/case-study/hoabl_challenge-image.svg"
                alt=""
                width={572}
                height={756}
                className="dark_img"
              />
            </picture>
          </section>

          <section data-section="detail_solution" className="detail_solution flex">
            {/* <picture>
              <Image
                src="/assets/images/work/detail-img-2.webp"
                alt=""
                width={684}
                height={835}
                className="dark_img"
              />
            </picture> */}
            <div>
              <div className="sub_title">growwithhoabl.com</div>
              <h2 className="challenge_content__title">
                The 
                <br />
                Solution
              </h2>
              <h4>
                Our approach combined strategic design thinking, advanced
                
                technology, and precise execution.
              </h4>
              <ul className="jashList">
                <li>
                  <p>
                    Design & Experience: We created a clean, immersive 
                    interface with subtle motion, intuitive navigation, and
                    modern layouts — capturing 
                    the premium, future-forward essence of the brand.
                  </p>
                </li>
                <li>
                  <p>
                    Technology & Development: Built on React and a Headless{" "}
                    
                    CMS, the platform leverages AI-driven property
                    recommendations, an integrated chatbot,
                     and real-time analytics. Every component was
                    optimized for Core Web Vitals, speed,
                     and responsiveness.
                  </p>
                </li>
                <li>
                  <p>
                    Scalability & Optimization: Designed modularly, the system
                    
                    allows easy integration of upcoming digital features — from
                    virtual tours to personalized
                     dashboards — ensuring the site evolves with the
                    brand.
                  </p>
                </li>
                <li>
                  <p>
                    The result was a smart, data-backed website that not only
                    enhanced engagement but also positioned HoABL as a tech-driven
                    pioneer in the real estate space.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <div className="hoabl_showcase_wrapper">
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
            {/* Visit website button */}
            <button className="visit_website_button">
              <a href="https://growwithhoabl.com" target="_blank" rel="noopener noreferrer">
                Check the website
              </a>
            </button>
          </div>
        </div>

        <CaseStudySeoSection
          tagLine="SEO Section"
          title="300% Organic Growth with SEO"
          subtitle="A data-led SEO approach that boosted visibility & qualified traffic"
          description="HoABL achieved 300% growth in organic sessions through a data-driven SEO strategy focused on high-intent keywords, technical optimization, and scalable content planning. By improving search visibility and user engagement, the brand significantly increased qualified traffic and strengthened its digital presence across competitive markets."
          chartSlides={SEO_CHART_SLIDES}
        />

        <section data-section="client_work" className="client_work">
          <h2 className="client_work__title">
            Don't just take our <br/>
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

        <section data-section="contact_section" className="hoabl_contact_section">
          <ContactFormSection
            variant="light"
            showIllustration
            idPrefix="hoabl"
          />
        </section>
      </div>
    </main>
  );
}
