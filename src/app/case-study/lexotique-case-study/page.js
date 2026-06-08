"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ContactFormSection from "@/components/ContactFormSection";

const SEO_CHART_SLIDES = ["/assets/images/work/seo_section_chart.png"];

const CREATIVE_REELS = [
  { src: "/assets/images/work/leaxotique.png", alt: "Lexotique reel" },
  { src: "/assets/images/work/apple.png", alt: "Light your healthy side reel" },
  { src: "/assets/images/work/mix-fruits.png", alt: "Mix fruits reel" },
  { src: "/assets/images/work/leaxotique.png", alt: "Lexotique reel" },
  { src: "/assets/images/work/apple.png", alt: "Light your healthy side reel" },
  { src: "/assets/images/work/mix-fruits.png", alt: "Mix fruits reel" },
];

const INSTAGRAM_URL = "https://www.instagram.com/lexotique.fruits/";

export default function LexotiqueCaseStudyPage() {
  return (
    <main className="wrapper">
      <div className="ml-setter lexotique_detail">
        <section data-section="hero_section" className="hero_section flex">
          <picture className="detail_banner">
            <source
              media="(max-width: 540px)"
              srcSet="/assets/images/hoabl/hoabl-banner_mobile.png"
            />
            <Image
              src="/assets/images/lexotic.png"
              alt=""
              width={1920}
              height={981}
              priority
            />
          </picture>
          <div>
            <h1>
              LEXOTIQUE
            </h1>
            <h4>Elevating Everyday Fruits into a <br /> Premium Experience</h4>
            <p>
              Lexotique reimagines the way fresh fruits are perceived — shifting from a basic necessity to a symbol of quality, care, and conscious living.
              We set out to design a digital experience that captures this vision — highlighting farm-fresh produce, hygiene-first practices, and a sense of natural luxury — establishing Lexotic as a brand that delivers
              freshness you can see and trust.
            </p>
          </div>
        </section>

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

        <section data-section="creative_section" className="creative_section">
          <div className="creative_section_header">
            <div className="creative_section_intro">
              <h2>Creatives</h2>
              <div className="creative_tabs" role="tablist" aria-label="Creative content type">
                <button type="button" className="creative_tab" role="tab" aria-selected="false">
                  Posts
                </button>
                <button
                  type="button"
                  className="creative_tab creative_tab--active"
                  role="tab"
                  aria-selected="true"
                >
                  Reels
                </button>
              </div>
            </div>
            <a
              href={INSTAGRAM_URL}
              className="creative_instagram_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check the On Instagram
              <Image
                src="/assets/images/footer/instagram.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
              />
            </a>
          </div>

          <div className="creative_reels">
            <div className="creative_reels_viewport">
              <Swiper
                modules={[Navigation]}
                className="creative_reels_swiper"
                slidesPerView="auto"
                spaceBetween={24}
                speed={400}
                watchOverflow
                breakpoints={{
                  0: { spaceBetween: 20 },
                  768: { spaceBetween: 20 },
                  1024: { spaceBetween: 24 },
                }}
                navigation={{
                  prevEl: ".creative_reels .creative_reels_prev",
                  nextEl: ".creative_reels .creative_reels_next",
                }}
              >
              {CREATIVE_REELS.map(({ src, alt }, index) => (
                <SwiperSlide key={`${src}-${index}`}>
                  <a
                    href={INSTAGRAM_URL}
                    className="creative_reel_card"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${alt} on Instagram`}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      width={480}
                      height={854}
                      className="creative_reel_img"
                    />
                    <Image
                      src="/assets/icons/video-icon.svg"
                      alt=""
                      width={121}
                      height={121}
                      className="creative_reel_play"
                      aria-hidden="true"
                    />
                  </a>
                </SwiperSlide>
              ))}
              </Swiper>
            </div>

            <nav className="creative_reels_nav" aria-label="Reels navigation">
              <button type="button" className="creative_reels_prev cta_text">
                <span>Previous</span>
              </button>
              <button type="button" className="creative_reels_next cta_text">
                <span>Next</span>
              </button>
            </nav>
          </div>
        </section>

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
