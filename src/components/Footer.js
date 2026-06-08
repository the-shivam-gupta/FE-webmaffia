"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
const SOCIAL_LINKS = [
  { href: "https://x.com/webmaffia", src: "/assets/images/footer/X.svg", alt: "X" },
  { href: "https://www.facebook.com/Webmaffia/", src: "/assets/images/footer/facebook.svg", alt: "Facebook" },
  { href: "https://www.instagram.com/webmaffia/", src: "/assets/images/footer/instagram.svg", alt: "Instagram" },
  { href: "https://www.youtube.com/@webmaffia", src: "/assets/images/footer/yt.svg", alt: "YouTube" },
  { href: "https://in.linkedin.com/company/webmaffia", src: "/assets/images/footer/linkedIn.svg", alt: "LinkedIn" },
];

const WORK_LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" },
];

const SERVICE_LINKS = [
  { href: "/digital-strategy", label: "Digital Strategy" },
  { href: "/website-design-development-services", label: "Design & Development" },
  { href: "/search-engine-optimization-services", label: "SEO" },
  { href: "/social-media-marketing-strategy", label: "Social Media" },
  { href: "/content-marketing-strategy", label: "Content Marketing" },
  { href: "/app-store-optimization", label: "App Store Optimization" },
];

const Footer = () => {
  return (
    <footer>
      <div className="footer_nav">
        <div className="footer_col footer_col--social">
          <div className="footer_col_title">Social media</div>
          <div className="footer_col_content footer_col_content--center">
            <div className="footer_social_icons">
              {SOCIAL_LINKS.map(({ href, src, alt }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={alt}>
                  <Image src={src} alt={alt} width={35} height={35} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer_col footer_col--work">
          <div className="footer_col_content">
            <div className="footer_col_title">Our Work</div>
            <ul className="footer_links footer_links--spaced">
              {WORK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer_col footer_col--services">
          <div className="footer_col_content">
            <div className="footer_col_title">Our Services</div>
            <ul className="footer_links">
              {SERVICE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer_info">
        <div className="footer_col footer_col--brand">
          <div className="footer_col_content">
            <div className="footer_brand">Webmaffia</div>
            <div className="copyright">
              © 2025 Webmaffia — Crafted with creativity and code in India.
            </div>
          </div>
        </div>

        <div className="footer_col footer_col--mumbai">
          <div className="footer_col_content">
            <div className="region_text">Mumbai (India)</div>
            <address>
              <a
                href="https://maps.app.goo.gl/iPvLshVht1xP6hT1A"
                target="_blank"
                rel="noopener noreferrer"
              >
                403 A Wing, Cello Triumph, IB Patel Rd, Jay Prakash Nagar, Goregaon (E), Mumbai - 400063
              </a>
            </address>
            <a className="footer_contact_item" href="tel:+919867625909">
              +91 9867625909
            </a>
          </div>
        </div>

        <div className="footer_col footer_col--dubai">
          <div className="footer_col_content">
            <div className="region_text">Dubai (UAE)</div>
            <address>
              <a
                href="https://maps.app.goo.gl/2qVqKVXrwNok34KH6"
                target="_blank"
                rel="noopener noreferrer"
              >
                JLT Cluster H, Dubai, United Arab Emirates
              </a>
            </address>
            <a className="footer_contact_item footer_contact_item--icon" href="mailto:veera@webmaffia.com">
              <Image src="/assets/images/footer/message.svg" alt="" width={20} height={16} aria-hidden="true" />
              veera@webmaffia.com
            </a>
            <a className="footer_contact_item footer_contact_item--icon" href="tel:+971562722998">
              <Image src="/assets/images/footer/phone.svg" alt="" width={18} height={18} aria-hidden="true" />
              +971 56 272 2998
            </a>
          </div>
        </div>
      </div>

      <Link href="https://www.webmaffia.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/assets/images/maffia-logo.webp"
          alt="Webmaffia"
          width={1318}
          height={210}
        />
      </Link>
    </footer>
  );
};

export default Footer;

export const FeatureSwiper = ({ slides }) => (
  <Swiper
    modules={[Autoplay]}
    loop={true}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    className="feature_swiper"
  >
    {slides.map((slide, i) => (
      <SwiperSlide key={i}>{slide}</SwiperSlide>
    ))}
  </Swiper>
);

export const TestimonialSwiper = ({ slides }) => (
  <Swiper
    modules={[Navigation]}
    loop={true}
    navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
    className="testimonial-swiper"
  >
    {slides.map((slide, i) => (
      <SwiperSlide key={i}>{slide}</SwiperSlide>
    ))}
  </Swiper>
);

export const ServiceSwiper = ({ slides }) => (
  <Swiper
    modules={[Autoplay]}
    loop={true}
    autoplay={{ delay: 5000, disableOnInteraction: false }}
    className="service-swiper"
  >
    {slides.map((slide, i) => (
      <SwiperSlide key={i}>{slide}</SwiperSlide>
    ))}
  </Swiper>
);
