"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function normalizeSlide(slide, chartAlt) {
  if (typeof slide === "string") {
    return { src: slide, alt: chartAlt };
  }

  return { alt: chartAlt, ...slide };
}

function SectionTitle({ heading, className }) {
  const text = String(heading ?? "").trim();
  if (!text) return null;

  const words = text.split(/\s+/);
  if (words.length <= 1) {
    return <h2 className={className}>{text}</h2>;
  }

  const lastWord = words.pop();

  return (
    <h2 className={className}>
      {words.join(" ")}
      <br />
      {lastWord}
    </h2>
  );
}

export default function CaseStudySeoSection({
  heading,
  subHeading,
  description,
  chartSlides,
  chartAlt = "SEO growth chart",
}) {
  return (
    <section data-section="seo_section" className="seo_section">
      <div>
        <SectionTitle heading={heading} className="challenge_content__title" />
        {subHeading ? <h4>{subHeading}</h4> : null}
        {description ? <p>{description}</p> : null}
      </div>
      <div className="seo_slider">
        <Swiper
          modules={[Navigation]}
          className="seo_slider_swiper"
          slidesPerView={1}
          speed={400}
          navigation={{
            prevEl: ".seo_slider .seo_slider_prev",
            nextEl: ".seo_slider .seo_slider_next",
          }}
        >
          {chartSlides.map((slide) => {
            const { src, alt } = normalizeSlide(slide, chartAlt);

            return (
              <SwiperSlide key={src}>
                <div className="seo_slider_media">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 80rem"
                    className="seo_slider_img"
                    quality={100}
                    unoptimized
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <nav className="seo_slider_nav" aria-label="Chart navigation">
          <button type="button" className="seo_slider_prev cta_text">
            <span>Previous</span>
          </button>
          <button type="button" className="seo_slider_next cta_text">
            <span>Next</span>
          </button>
        </nav>
      </div>
    </section>
  );
}
