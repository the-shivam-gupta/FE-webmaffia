"use client";

import Image from "next/image";
import Banner from "@/components/Banner";
import CaseStudyCreativeSection from "@/components/CaseStudyCreativeSection";
import ContactFormSection from "@/components/ContactFormSection";

const CREATIVE_POSTS = [
  {
    src: "/assets/images/work/case-study/posts/lexotque-post1.jpg",
    alt: "Lexotique post 1",
  },
  {
    src: "/assets/images/work/case-study/posts/lexotque-post2.jpg",
    alt: "Lexotique post 2",
  },
  {
    src: "/assets/images/work/case-study/posts/lexotque-post3.jpg",
    alt: "Lexotique post 3",
  },
  {
    src: "/assets/images/work/case-study/posts/lexotque-post4.jpg",
    alt: "Lexotique post 3",
  },
  {
    src: "/assets/images/work/case-study/posts/lexotque-post5.jpg",
    alt: "Lexotique post 3",
  },
  {
    src: "/assets/images/work/case-study/posts/lexotque-post6.jpg",
    alt: "Lexotique post 3",
  },
  {
    src: "/assets/images/work/case-study/posts/lexotque-post7.jpg",
    alt: "Lexotique post 3",
  },
  {
    src: "/assets/images/work/case-study/posts/lexotque-post8.jpg",
    alt: "Lexotique post 3",
  },
  {
    src: "/assets/images/work/case-study/posts/lexotque-post9.jpg",
    alt: "Lexotique post 3",
  },
];

const STRAPI_MEDIA_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ?? "https://cms.webmaffia.com";

const CREATIVE_REELS = [
  {
    src: "/assets/images/work/leaxotique.png",
    alt: "Lexotique reel 1",
    video: `${STRAPI_MEDIA_URL}/uploads/lexotique_reel1_59a7693d96.mp4`,
  },
  {
    src: "/assets/images/work/apple.png",
    alt: "Lexotique reel 2",
    video: `${STRAPI_MEDIA_URL}/uploads/lexotique_reel2_4f36659e37.mp4`,
  },
  {
    src: "/assets/images/work/mix-fruits.png",
    alt: "Lexotique reel 3",
    video: `${STRAPI_MEDIA_URL}/uploads/lexotique_reel3_87c3add828.mp4`,
  },
  {
    src: "/assets/images/work/leaxotique.png",
    alt: "Lexotique reel 4",
    video: `${STRAPI_MEDIA_URL}/uploads/lexotique_reel4_4bc64a92c6.mp4`,
  },
  {
    src: "/assets/images/work/apple.png",
    alt: "Lexotique reel 5",
    video: `${STRAPI_MEDIA_URL}/uploads/lexotique_reel5_053f807486.mp4`,
  },
  {
    src: "/assets/images/work/mix-fruits.png",
    alt: "Lexotique reel 6",
    video: `${STRAPI_MEDIA_URL}/uploads/lexotique_reel6_fb0f720908.mp4`,
  },
];

const INSTAGRAM_URL = "https://www.instagram.com/lexotique.fruits/";

const bannerData = {
  imagePosition: "background",
  priority: true,
  title: {
    line1: "LEXOTIQUE",
  },
  description:
    "Lexotique reimagines the way fresh fruits are perceived — shifting from a basic necessity to a symbol of quality, care, and conscious living. We set out to design a digital experience that captures this vision — highlighting farm-fresh produce, hygiene-first practices, and a sense of natural luxury — establishing Lexotic as a brand that delivers freshness you can see and trust.",
  images: {
    banner: {
      url: "/assets/images/lexotic.png",
      alt: "",
      width: 1920,
      height: 981,
    },
    bannerMobile: {
      url: "/assets/images/hoabl/hoabl-banner_mobile.png",
      alt: "",
    },
  },
};

export default function LexotiqueCaseStudyPage() {
  return (
    <main className="wrapper">
      <div className="ml-setter lexotique_detail">
        <Banner data={bannerData}>
          <h4>
            Elevating Everyday Fruits into a <br /> Premium Experience
          </h4>
        </Banner>

        <div className="detail_sections">
          <section
            data-section="detail_challenge"
            className="detail_challenge flex"
          >
            <div className="challenge_content">
              <h2 className="challenge_content__title">
                The <br />
                Challenge
              </h2>
              <p className="challenge_content__para">
                Lexotique reimagines the way fresh fruits are perceived — shifting from a basic necessity to a symbol of quality, care, and conscious living.
                We set out to design a digital experience that captures this vision — highlighting farm-fresh produce, hygiene-first practices, and a sense of natural luxury — establishing Lexotic as a brand that delivers
                freshness you can see and trust.
              </p>
              <h3 className="challenge_content__title_2">The key challenges included:</h3>
              <ul className="jashList">
                <li>
                  <p>
                    Creating a distinct brand identity
                  </p>
                </li>
                <li>
                  <p>
                    Communicating freshness and quality digitally
                  </p>
                </li>
                <li>
                  <p>
                    Balancing simplicity with premium appeal
                  </p>
                </li>
                <li>
                  <p>
                    Ensuring performance and scalability
                  </p>
                </li>
              </ul>
            </div>
            <picture className="detail_section_media">
              <Image
                src="/assets/images/work/dragon-fruits.png"
                alt=""
                width={684}
                height={835}
                className="dark_img detail_section_img"
              />
            </picture>
          </section>

          <section data-section="detail_solution" className="detail_solution flex">
            <div>
              <h2>
                The <br />
                Solution
              </h2>
              <p>
                Our approach brought lexotique’s
                freshness-first vision to life through
                design and storytelling
              </p>
              <ul className="jashList2">
                <li>
                  <h5>Freshness, reimagined.</h5>
                  <p>
                    At Lexotique, every fruit is handpicked to deliver purity, quality, and
                    a premium experience you can see and feel.
                  </p>
                </li>
                <li>
                  <h5>Not just fruits. A fresher way to live.</h5>
                  <p>
                    Juicy, vibrant, and just-plucked — Lexotique brings you nature at its finest,
                    with a touch of everyday luxury.
                  </p>
                </li>
                <li>
                  <h5>Pure. Fresh. Lexotique.</h5>
                  <p>
                    Where premium quality meets natural beauty — every fruit crafted to perfection.
                  </p>
                </li>
              </ul>
            </div>
            <picture className="detail_section_media">
              <Image
                src="/assets/images/work/mobile-dragon-fruit.png"
                alt=""
                width={684}
                height={835}
                className="dark_img detail_section_img"
              />
            </picture>
          </section>
        </div>

        <CaseStudyCreativeSection
          instagramUrl={INSTAGRAM_URL}
          posts={CREATIVE_POSTS}
          reels={CREATIVE_REELS}
        />

        <section data-section="client_work" className="client_work">
          <h2 className="client_work__title">
            Don't just take our <br />
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
