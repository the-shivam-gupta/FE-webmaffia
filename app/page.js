"use client";

import { useRef, useCallback } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Banner from "./components/Banner";
import { useHomeScrollAnimations } from "./hooks/useHomeScrollAnimations";

const SERVICES = [
  {
    number: "01",
    subtitle: "DIGITAL STRATEGY",
    heading: "It's all about\nthe positioning",
    body: "That's why we begin with a thorough understanding of your business. Then, we analyze data using cutting-edge digital tools and on-ground research; to understand market trends and audience behavior. The result is a positioning that really builds a brand.",
    href: "/digital-strategy",
    img: { src: "/assets/images/number/1.webp", w: 674, h: 568 },
  },
  {
    number: "02",
    subtitle: "DESIGN AND DEVELOPMENT",
    heading: "User experience\nis above all",
    body: "Our technological expertise is multi-faceted. Right from website and product development to experiential tech, we do it all. Our tech team is a bunch of nerds who never stop learning. That's why we are always abreast of the latest innovations, if not one step ahead.",
    href: "/website-design-development-services",
    img: { src: "/assets/images/number/2.webp", w: 674, h: 568 },
  },
  {
    number: "03",
    subtitle: "SEO",
    heading: "Top of search is\nthe new top of mind",
    body: "In a world where Search is the point of discovery for almost all consumers, a solid SEO strategy is crucial for any brand to taste digital success. Brand awareness, increasing website traffic, generating leads, and converting them, no matter what your objective, SEO has a crucial part to play.",
    href: "/search-engine-optimization-services",
    img: { src: "/assets/images/number/3.webp", w: 674, h: 568 },
  },
  {
    number: "04",
    subtitle: "SOCIAL MEDIA",
    heading: "With the trends,\nahead of the curve.",
    body: "This is where our social media team comes in. Ensuring relevance, Identifying trends to capitalize on, influencer collaborations, no matter what the need is, we have more than one maffian to pull it off.",
    href: "/social-media-marketing-strategy",
    img: { src: "/assets/images/number/4.webp", w: 674, h: 568 },
  },
  {
    number: "05",
    subtitle: "CONTENT MARKETING",
    heading: "Smart,\nreliable &\nagile.",
    body: "Original Content - Blog and Copywriting. Our wordsmiths create compelling ad copy, editorial pieces and other original content that prioritizes impact, clarity and empathy over mere loudness. We put customer intent behind every word we craft to drive clicks and shares.",
    href: "/content-marketing-strategy",
    img: { src: "/assets/images/number/5.webp", w: 674, h: 568 },
  },
  {
    number: "06",
    subtitle: "APP STORE OPTIMIZATION",
    heading: "Let's,\nshape the\nfuture",
    body: "Want to Dominate App Stores? Our app store optimization services will ensure that among hundreds of apps your users are able to find your app in your targeted App Store. Want to improve your play store rankings? Partner With us.",
    href: "/app-store-optimization",
    img: { src: "/assets/images/number/6.webp", w: 674, h: 568 },
  },
];

const CLIENTS = [
  { src: "/assets/images/clients/AFCONS.webp", alt: "AFCONS" },
  { src: "/assets/images/clients/amns.webp", alt: "AMNS" },
  { src: "/assets/images/clients/dcc.webp", alt: "DCC" },
  { src: "/assets/images/clients/Ecovero.webp", alt: "Ecovero" },
  { src: "/assets/images/clients/FINMAPP.webp", alt: "Finmapp" },
  { src: "/assets/images/clients/lexotique.webp", alt: "Lexotique" },
  { src: "/assets/images/clients/lupin.webp", alt: "Lupin" },
  { src: "/assets/images/clients/Nayara.webp", alt: "Nayara" },
];

const PORTFOLIO = [
  {
    title: "AFCONS",
    service: "Website Design & Development - SEO",
    href: "https://www.afcons.com/en",
    img: { desktop: "/assets/images/portfolio/Afcons.webp", mobile: "/assets/images/portfolio/mobile/Afcons.webp" },
  },
  {
    title: "NAYARA ENERGY",
    service: "Website Design & Development - SEO",
    href: "https://www.nayaraenergy.com/",
    img: { desktop: "/assets/images/portfolio/Nayara-Energy.webp", mobile: "/assets/images/portfolio/mobile/Nayara-Energy.webp" },
  },
  {
    title: "ECOVERO",
    service: "Social Media",
    href: "https://www.instagram.com/ecovero_global/?hl=en",
    img: { desktop: "/assets/images/portfolio/Ecovero.webp", mobile: "/assets/images/portfolio/mobile/Ecovero.webp" },
  },
  {
    title: "L'EXOTIQUE",
    service: "Website Design & Development",
    href: "https://lexotique.in/",
    img: { desktop: "/assets/images/portfolio/L'exotique.webp", mobile: "/assets/images/portfolio/mobile/L'exotique.webp" },
  },
  {
    title: "AMNS",
    service: "Website Design & Development - SEO",
    href: "https://www.amns.in/",
    img: { desktop: "/assets/images/portfolio/AMNS.webp", mobile: "/assets/images/portfolio/mobile/AMNS.webp" },
  },
  {
    title: "SS-AUTOMATION",
    service: "Website Design & Development",
    href: "https://origin-www.ssautomation.in/",
    img: { desktop: "/assets/images/portfolio/SS-Automation.webp", mobile: "/assets/images/portfolio/mobile/SS-Automation.webp" },
  },
  {
    title: "GREAT TOWER",
    service: "Website Design & Development",
    href: "https://www.great-towers.com/",
    img: { desktop: "/assets/images/portfolio/Great-Tower.webp", mobile: "/assets/images/portfolio/mobile/Great-Tower.webp" },
  },
  {
    title: "SUMMIT-DIGITEL",
    service: "Website Design & Development - SEO",
    href: "https://www.summitdigitel.com/",
    img: { desktop: "/assets/images/portfolio/Summit-digitel.webp", mobile: "/assets/images/portfolio/mobile/Summit-digitel.webp" },
  },
];

const AWARDS = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
  src: `/assets/images/awards/img-${n}.webp`,
  alt: `Award ${n}`,
}));

const TESTIMONIALS = [
  {
    quote: 'Demonstrating great professionalism, the Blackfish team proved to be amazingly adaptive to the client\'s needs. They\'re distinguished by their speed and flexibility.',
    author: "ASHISH KAUSHIK",
    role: "Digital Communication",
    logo: { src: "/assets/images/amns-logo.webp", w: 114, h: 114 },
    speaker: "ASHISH",
  },
  {
    quote: 'Demonstrating great professionalism, the Blackfish team proved to be amazingly adaptive to the client\'s needs. They\'re distinguished by their speed and flexibility.',
    author: "ASHISH KAUSHIK",
    role: "Digital Communication",
    logo: { src: "/assets/images/amns-logo.webp", w: 114, h: 114 },
    speaker: "ASHISH",
  },
];

const HOME_BANNER = {
  subheading: { enabled: true, text: "CREATIVE DIGITAL AGENCY" },
  title: { line1: "A digital-first", line2: "creative agency" },
  description:
    "Yes, that's what we maffians pride ourselves on doing.\nCreative is our forte, digital is our medium. And our objective\nfor every campaign is the same as yours \u2013 ROI.",
  images: {
    banner: { url: "/assets/images/home_banner.svg", alt: "award winning agency" },
    bannerMobile: { url: "/assets/images/home_mobile_banner.svg", alt: "award winning agency" },
  },
};

export default function Home() {
  const mainHorizontalRef = useRef(null);
  const serviceSwiperRef = useRef(null);

  useHomeScrollAnimations(mainHorizontalRef, serviceSwiperRef);

  const refreshScroll = useCallback(() => {
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, []);

  const onServicesSwiper = useCallback(
    (swiper) => {
      serviceSwiperRef.current = swiper;
      if (typeof window !== "undefined" && window.innerWidth > 768 && swiper.autoplay) {
        swiper.autoplay.stop();
      }
      refreshScroll();
    },
    [refreshScroll]
  );

  return (
    <main className="wrapper home_wrapper opacity_0">
      <div className="ml-setter">
        <Banner data={HOME_BANNER} />

        <div className="main_horizontal" ref={mainHorizontalRef}>
            <div className="horizontal_section">
              <div className="staticSection hs1">
                <section className="horizontal_sliders flex">
                  <div>
                    <h2 className="sub_title">OUR SERVICES</h2>
                    <div className="sub_heading">A glimpse of what we do</div>
                    <p>
                      Boosting brand awareness through impactful <br />
                      digital campaigns, designing and developing <br />
                      your website, ROI-driven performance marketing, <br />
                      social media management, we do all this, and more.
                    </p>
                    <Link href="/services" className="cta_text">
                      Take a <span>Look</span>
                    </Link>
                  </div>
                </section>
              </div>
            </div>

            <Swiper
              modules={[Navigation, Autoplay]}
              loop
              slidesPerView={1}
              spaceBetween={0}
              speed={1000}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              onSwiper={onServicesSwiper}
              navigation={{
                prevEl: ".service-button-prev",
                nextEl: ".service-button-next",
              }}
              className="ourService-swiper testimonial_wrapper hs2"
            >
              {SERVICES.map((s, index) => (
                <SwiperSlide key={s.number}>
                  <section
                    className={`horizontal_sliders flex${
                      index === 4 ? " slider-6" : ""
                    }${index === 5 ? " slider-7" : ""}`}
                  >
                    <div>
                      <h3 className="sub_title">{s.subtitle}</h3>
                      <div className="sub_heading">
                        {s.heading.split("\n").map((line, i) => (
                          <span key={i}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </div>
                      <p>{s.body}</p>
                      <Link href={s.href} className="cta_text">
                        Take a <span>Look</span>
                      </Link>
                    </div>
                    <Image
                      src={s.img.src}
                      alt={s.subtitle}
                      width={s.img.w}
                      height={s.img.h}
                      className="dark_img"
                    />
                  </section>
                </SwiperSlide>
              ))}
              <div className="slide_cta">
                <div className="service-button-prev cta_text">
                  View <span>Previous</span>
                </div>
                <div className="service-button-next cta_text">
                  View <span>Next</span>
                </div>
              </div>
            </Swiper>
        </div>

        <section data-section="our_work" className="our_work">
          <h2 className="sub_title">OUR WORK</h2>
          <div className="sub_heading">Clients</div>
          <div className="work_box">
            {CLIENTS.map((c) => (
              <Link href="/case-study" key={c.alt}>
                <Image src={c.src} alt={c.alt} width={127} height={88} />
              </Link>
            ))}
          </div>
          <div className="cta_box">
            <Link href="/case-study" className="cta_text">
              View All <span>Clients</span>
            </Link>
          </div>
        </section>
      </div>

      <section data-section="features" className="features white_color">
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="feature_swiper"
        >
          {PORTFOLIO.map((p) => (
            <SwiperSlide key={p.title}>
              <div className="swiper_content">
                <picture>
                  <source media="(max-width:540px)" srcSet={p.img.mobile} />
                  <img
                    loading="lazy"
                    src={p.img.desktop}
                    alt={p.title}
                    width={1920}
                    height={1118}
                  />
                </picture>
                <div>
                  <h2 className="sub_title">PORTFOLIO</h2>
                  <div className="sub_heading">
                    Featured <br />
                    work
                  </div>
                  <div className="project_content">
                    <h3 className="project_title">{p.title}</h3>
                    <div className="project_text">{p.service}</div>
                  </div>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta_text"
                  >
                    Take a <span>Look</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className="ml-setter">
        <section data-section="awards" className="our_work awards">
          <h2 className="sub_title">AWARDS</h2>
          <div className="sub_heading">
            Latest <br /> wins
          </div>
          <div className="work_box">
            {AWARDS.map((a) => (
              <div className="awards_work" key={a.src}>
                <Image src={a.src} alt={a.alt} width={150} height={130} />
              </div>
            ))}
          </div>
          <div className="cta_box">
            <Link href="/awards" className="cta_text">
              View All <span>Awards</span>
            </Link>
          </div>
        </section>

        <section data-section="testimonial" className="testimonial">
          <div className="testimonial_top">
            <div>
              <h2 className="sub_title">TESTIMONIALS</h2>
              <div className="sub_heading">
                What our <br />
                clients <br />
                are saying
              </div>
            </div>
            <Image
              src="/assets/images/testimonial_img.webp"
              alt="Testimonials"
              width={678}
              height={877}
              className="dark_img"
            />
          </div>

          <Swiper
            modules={[Navigation]}
            loop
            navigation={{
              nextEl: ".testimonial .swiper-button-next",
              prevEl: ".testimonial .swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            className="testimonial-swiper testimonial_wrapper"
          >
            {TESTIMONIALS.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial_content">
                  <span>{t.speaker} SAID</span> {t.quote}
                </div>
                <div className="company">
                  <Image
                    src={t.logo.src}
                    alt={t.author}
                    width={t.logo.w}
                    height={t.logo.h}
                  />
                  <div>
                    <div className="name">{t.author}</div>
                    <div className="work">{t.role}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="slide_cta">
            <div className="swiper-button-prev cta_text">
              View <span>Previous</span>
            </div>
            <div className="swiper-button-next cta_text">
              View <span>Next</span>
            </div>
          </div>
          <div className="swiper-pagination" />
        </section>
      </div>
    </main>
  );
}
