"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Loop } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import Swiper styles in your global CSS or layout instead:
// import "swiper/css";
// import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const titleRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    mobile: "",
    url: "",
  });

  // GSAP animation on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, footerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict mobile to numeric only
    if (name === "mobile" && !/^\d*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) window.location.href = "/thank-you";
    } catch (err) {
      console.error("Form submission failed:", err);
    }
  };

  return (
    <footer ref={footerRef}>
      <div className="footer_container">
        <div className="footer_title" ref={titleRef}>
          Drop <br />
          us a <br />
          message
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="txtNumeric"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="organization">Your Organization&apos;s Name</label>
          <input
            type="text"
            name="organization"
            id="organization"
            className="txtNumeric"
            value={formData.organization}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="mobile">Your Number</label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            maxLength={10}
            inputMode="numeric"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <label htmlFor="url">Website/Social Media Link</label>
          <input
            type="url"
            name="url"
            id="url"
            value={formData.url}
            onChange={handleChange}
            required
          />

          <button type="submit" className="cta_text">
            <span>Submit</span>
          </button>
        </form>
      </div>

      <Link href="https://www.webmaffia.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/assets/images/maffia-logo.webp"
          alt="Webmaffia"
          width={1318}
          height={210}
        />
      </Link>

      <div className="copyright">© 2024 Pixtop Media Solutions Pvt. Ltd</div>
    </footer>
  );
};

export default Footer;


// ─────────────────────────────────────────────────────────────────────────────
// SWIPER USAGE EXAMPLE
// Use the Swiper React component in the page/component where you need it.
// Do NOT use raw <Script> tags for Swiper initialization in Next.js.
// ─────────────────────────────────────────────────────────────────────────────

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