"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    mobile: "",
    url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

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
    <footer>
      <div className="footer_container">
        <div className="footer_title">
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
