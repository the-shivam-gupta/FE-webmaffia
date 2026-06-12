"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const CREATIVE_SWIPER_SETTINGS = {
  slidesPerView: "auto",
  slidesPerGroup: 1,
  spaceBetween: 20,
  speed: 400,
  watchOverflow: true,
  breakpoints: {
    1024: { spaceBetween: 24 },
  },
};

export default function CaseStudyCreativeSection({
  instagramUrl,
  posts = [],
  reels,
  instagramLinkText = "Check the On Instagram",
}) {
  const [activeTab, setActiveTab] = useState("reels");
  const isPosts = activeTab === "posts";

  return (
    <section data-section="creative_section" className="creative_section">
      <div className="creative_section_header">
        <div className="creative_section_intro">
          <h2>Creatives</h2>
          <div className="creative_tabs" role="tablist" aria-label="Creative content type">
            <button
              type="button"
              className={`creative_tab${isPosts ? " creative_tab--active" : ""}`}
              role="tab"
              aria-selected={isPosts}
              onClick={() => setActiveTab("posts")}
            >
              Posts
            </button>
            <button
              type="button"
              className={`creative_tab${!isPosts ? " creative_tab--active" : ""}`}
              role="tab"
              aria-selected={!isPosts}
              onClick={() => setActiveTab("reels")}
            >
              Reels
            </button>
          </div>
        </div>
        <a
          href={instagramUrl}
          className="creative_instagram_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {instagramLinkText}
          <Image
            src="/assets/images/footer/instagram.svg"
            alt=""
            width={24}
            height={24}
            aria-hidden="true"
          />
        </a>
      </div>

      <div key={activeTab} className="creative_content">
      {isPosts ? (
        <div className="creative_posts">
          <div className="creative_posts_viewport">
            <Swiper
              modules={[Navigation]}
              className="creative_posts_swiper"
              {...CREATIVE_SWIPER_SETTINGS}
              navigation={{
                prevEl: ".creative_posts .creative_posts_prev",
                nextEl: ".creative_posts .creative_posts_next",
              }}
            >
              {posts.map(({ src, alt }, index) => (
                <SwiperSlide key={`${src}-${index}`}>
                  <a
                    href={instagramUrl}
                    className="creative_post_card"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${alt} on Instagram`}
                  >
                    <div className="creative_post_media">
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="48rem"
                        className="creative_post_img"
                      />
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <nav className="creative_posts_nav" aria-label="Posts navigation">
            <button type="button" className="creative_posts_prev cta_text">
              <span>Previous</span>
            </button>
            <button type="button" className="creative_posts_next cta_text">
              <span>Next</span>
            </button>
          </nav>
        </div>
      ) : (
        <div className="creative_reels">
          <div className="creative_reels_viewport">
            <Swiper
              modules={[Navigation]}
              className="creative_reels_swiper"
              {...CREATIVE_SWIPER_SETTINGS}
              navigation={{
                prevEl: ".creative_reels .creative_reels_prev",
                nextEl: ".creative_reels .creative_reels_next",
              }}
            >
              {reels.map(({ src, alt, video }, index) => (
                <SwiperSlide key={`${src}-${index}`}>
                  <a
                    href={instagramUrl}
                    className="creative_reel_card"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${alt} on Instagram`}
                  >
                    <div className="creative_reel_media">
                      {video ? (
                        <video
                          src={video}
                          className="creative_reel_video"
                          autoPlay
                          muted
                          loop
                          playsInline
                          poster={src}
                          aria-label={alt}
                        />
                      ) : (
                        <Image
                          src={src}
                          alt={alt}
                          fill
                          sizes="48rem"
                          className="creative_reel_img"
                        />
                      )}
                    </div>
                    {!video && (
                      <Image
                        src="/assets/icons/video-icon.svg"
                        alt=""
                        width={121}
                        height={121}
                        className="creative_reel_play"
                        aria-hidden="true"
                      />
                    )}
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
      )}
      </div>
    </section>
  );
}
