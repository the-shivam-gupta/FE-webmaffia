"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const Footer = ({ footerData }) => {
  const pathname = usePathname();
  const showContactIllustration = /^\/case-study\/[^/]+$/.test(pathname ?? "");

  const socialLinks = footerData?.socialLinks ?? [];
  const navLinks = footerData?.navLinks ?? [];
  const services = footerData?.services ?? [];
  const offices = footerData?.offices ?? [];
  const copyright = footerData?.copyright;

  const mumbaiOffice = offices.find((o) => o.city?.startsWith("Mumbai"));
  const dubaiOffice = offices.find((o) => o.city?.startsWith("Dubai"));

  return (
    <footer>
      {showContactIllustration ? (
        <div className="footer_contact_illustration_layer" aria-hidden="true">
          <Image
            src="/assets/images/hands.svg"
            alt=""
            width={871}
            height={767}
            className="footer_contact_illustration"
          />
        </div>
      ) : null}
      <div className="footer_nav">
        <div className="footer_col footer_col--social">
          <div className="footer_col_title">Social Media</div>
          <div className="footer_col_content footer_col_content--center">
            <div className="footer_social_icons">
              {socialLinks.map(({ platform, url, iconSrc, iconAlt }) => (
                iconSrc ? (
                  <a key={platform} href={url} target="_blank" rel="noopener noreferrer" aria-label={iconAlt}>
                    <Image src={iconSrc} alt={iconAlt} width={35} height={35} />
                  </a>
                ) : null
              ))}
            </div>
          </div>
        </div>

        <div className="footer_col footer_col--work">
          <div className="footer_col_content">
            <div className="footer_col_title">Quick Links</div>
            <ul className="footer_links footer_links--spaced">
              {navLinks.map(({ href, label }) => (
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
              {services.map(({ href, label }) => (
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
            {copyright?.brand && <div className="footer_brand">{copyright.brand}</div>}
            {copyright?.description && <div className="copyright">{copyright.description}</div>}
          </div>
        </div>

        {mumbaiOffice && (
          <div className="footer_col footer_col--mumbai">
            <div className="footer_col_content">
              <div className="region_text">{mumbaiOffice.city}</div>
              <address>
                <a
                  href={mumbaiOffice.addressLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {mumbaiOffice.address}
                </a>
              </address>
              {mumbaiOffice.phone && (
                <a className="footer_contact_item" href={`tel:${mumbaiOffice.phone.replace(/\s/g, "")}`}>
                  {mumbaiOffice.phone}
                </a>
              )}
            </div>
          </div>
        )}

        {dubaiOffice && (
          <div className="footer_col footer_col--dubai">
            <div className="footer_col_content">
              <div className="region_text">{dubaiOffice.city}</div>
              <address>
                <a
                  href={dubaiOffice.addressLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dubaiOffice.address}
                </a>
              </address>
              {dubaiOffice.email && (
                <a className="footer_contact_item footer_contact_item--icon" href={`mailto:${dubaiOffice.email}`}>
                  <Image src="/assets/images/footer/message.svg" alt="" width={20} height={16} aria-hidden="true" />
                  {dubaiOffice.email}
                </a>
              )}
              {dubaiOffice.phone && (
                <a className="footer_contact_item footer_contact_item--icon" href={`tel:${dubaiOffice.phone.replace(/\s/g, "")}`}>
                  <Image src="/assets/images/footer/phone.svg" alt="" width={18} height={18} aria-hidden="true" />
                  {dubaiOffice.phone}
                </a>
              )}
            </div>
          </div>
        )}
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
