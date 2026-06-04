"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toggleTheme } from "@/lib/theme";

const Header = () => {
  const router = useRouter();
  const servicesSubRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    mobile: "",
    url: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (menuOpen) {
      const t = window.setTimeout(() => {
        document.body.style.overflow = "hidden";
      }, 450);
      return () => window.clearTimeout(t);
    }
    document.body.style.overflow = "auto";
  }, [menuOpen]);

  const openMenu = (e) => {
    e.preventDefault();
    setMenuOpen(true);
  };

  const closeMenu = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const setServicesSubmenuOpen = (open) => {
    setServicesOpen(open);
    const content = servicesSubRef.current;
    if (content) {
      content.style.maxHeight = open ? `${content.scrollHeight}px` : "0";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile" && !/^\d*$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Submission failed");

      router.push("/thank-you");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <header className={menuOpen ? "opacity_0 menu_active" : "opacity_0"}>
        <Link href="/" className="logo">
          <Image
            src="/assets/images/icons/webmaffia.webp"
            alt="Webmaffia"
            width={166}
            height={26}
          />
        </Link>

        <div className="right_menu">
          {/* Menu toggle */}
          <a href="" className="menu" onClick={openMenu}>
            <div>Menu</div>
            <Image
              src="/assets/images/icons/menu.webp"
              alt=""
              aria-hidden="true"
              width={26}
              height={14}
            />
          </a>

          <button type="button">
            <label className="toggle" htmlFor="switch">
              <input
                id="switch"
                className="input"
                type="checkbox"
                onClick={(e) => {
                  e.preventDefault();
                  toggleTheme();
                }}
                aria-label="Toggle dark mode"
              />
              <div className="icon icon--moon">
                <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    clipRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <div className="icon icon--sun">
                <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              </div>
            </label>
          </button>

          <Link href="/contact" className="cta">
            Contact Us
          </Link>
        </div>
      </header>

      {/* Overlay menu */}
      <div className={`menu_wrapper${menuOpen ? " active" : ""}`}>
        <a href="" className="cta_text close" onClick={closeMenu}>
          <span>Close</span>
        </a>

        <div className="menu_container">
          {/* ── Left: nav links ── */}
          <div className="left_container">
            <div className="menu_link" data-number="01">
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About us
              </Link>
            </div>

            <div
              className={`menu_link menu_btn${servicesOpen ? " active" : ""}`}
              data-number="02"
              onMouseEnter={() => setServicesSubmenuOpen(true)}
              onMouseLeave={() => setServicesSubmenuOpen(false)}
            >
              <Link href="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>

              <div className="sub_menu_content" ref={servicesSubRef}>
                <ul className="sub_menu">
                  {[
                    { href: "/digital-strategy", label: "Digital Strategy" },
                    { href: "/website-design-development-services", label: "Design and Development" },
                    { href: "/search-engine-optimization-services", label: "SEO" },
                    { href: "/ai-powered-solutions-services", label: "AI-Powered Solutions" },
                    { href: "/social-media-marketing-strategy", label: "Social Media" },
                    { href: "/content-marketing-strategy", label: "Content Marketing" },
                    { href: "/influencer-marketing", label: "Influencer Marketing" },
                    { href: "/app-store-optimization", label: "App Store Optimization" },
                  ].map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} onClick={() => setMenuOpen(false)}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="menu_link" data-number="03">
              <Link href="/case-study" onClick={() => setMenuOpen(false)}>
                Our work
              </Link>
            </div>

            <div className="menu_link" data-number="04">
              <Link href="/blog" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
            </div>

            <div className="menu_link" data-number="04">
              <Link href="/career" onClick={() => setMenuOpen(false)}>
                Career
              </Link>
            </div>

            <div className="menu_link" data-number="05">
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </div>

            {/* Office addresses */}
            <div className="country_container">
              <div className="country_region">
                <div className="region_text">Mumbai (India)</div>
                <address>
                  <a
                    href="https://maps.app.goo.gl/iPvLshVht1xP6hT1A"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    403 A Wing, Cello Triumph,
                    <br />
                    IB Patel Rd, Jay Prakash Nagar,
                    <br />
                    Goregaon (E), Mumbai - 400063
                  </a>
                </address>
                <div className="contact_info">
                  <a href="mailto:veera@webmaffia.com">veera@webmaffia.com</a>
                  <a href="tel:+919867625909">+91 9867625909</a>
                </div>
              </div>

              <div className="country_region">
                <div className="region_text">Dubai (UAE)</div>
                <address>
                  <a
                    href="https://maps.app.goo.gl/2qVqKVXrwNok34KH6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JLT Cluster H
                    <br />
                    Dubai, United Arab Emirates
                  </a>
                </address>
                <div className="contact_info">
                  <a href="mailto:veera@webmaffia.com">veera@webmaffia.com</a>
                  <a href="tel:+971562722998">+971 56 272 2998</a>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="social_icons">
              {[
                { href: "https://www.instagram.com/webmaffia/?hl=en", src: "/assets/images/icons/insta.webp", alt: "Instagram" },
                { href: "https://www.facebook.com/Webmaffia/", src: "/assets/images/icons/fb.webp", alt: "Facebook" },
                { href: "https://in.linkedin.com/company/webmaffia", src: "/assets/images/icons/linkedin.webp", alt: "LinkedIn" },
              ].map(({ href, src, alt }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                  <Image src={src} alt={alt} width={50} height={50} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: contact form ── */}
          <div className="right_container">
            <div className="mail_title">Drop us a mail</div>

            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="h_name">Your Name</label>
              <input
                type="text"
                name="name"
                id="h_name"
                className="txtNumeric"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="h_organization">Your Organization&apos;s Name</label>
              <input
                type="text"
                name="organization"
                id="h_organization"
                className="txtNumeric"
                value={formData.organization}
                onChange={handleChange}
              />

              <label htmlFor="h_email">Your Email</label>
              <input
                type="email"
                name="email"
                id="h_email"
                value={formData.email}
                onChange={handleChange}
              />

              <label htmlFor="h_mobile">Your Number</label>
              <input
                type="text"
                name="mobile"
                id="h_mobile"
                maxLength={10}
                inputMode="numeric"
                value={formData.mobile}
                onChange={handleChange}
                required
              />

              <label htmlFor="h_url">Website/Social Media Link</label>
              <input
                type="text"
                name="url"
                id="h_url"
                value={formData.url}
                onChange={handleChange}
              />

              {error && <p className="form_error" role="alert">{error}</p>}

              <button type="submit" className="cta_text" disabled={submitting}>
                <span>{submitting ? "Sending…" : "Submit"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;