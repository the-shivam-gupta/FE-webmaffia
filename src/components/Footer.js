"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ContactFormSection from "@/components/ContactFormSection";

const Footer = () => {
  return (
    <footer>
      <ContactFormSection variant="dark" />

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
