"use client";

import Image from "next/image";
import Banner from "@/components/Banner";
import ServiceSelect from "@/components/ServiceSelect";
import { useRouter } from "next/navigation";
import { useState } from "react";

const bannerData = {
  imagePosition: "right",
  subheading: {
    enabled: true,
    text: "CONTACT",
  },
  title: {
    line1: "Start reaching",
    line2: "your digital",
    line3: "goals",
  },
  images: {
    banner: {
      url: "/assets/images/contact-banner.svg",
      alt: "",
      width: 871,
      height: 767,
    },
    bannerMobile: {
      url: "/assets/images/hero-mobile.webp",
      alt: "",
    },
  },
};

const HEAR_ABOUT = [
  { id: "referral", value: "Referral", label: "Referral" },
  { id: "media_news", value: "Media & News", label: "Media & News" },
  { id: "linkedIn", value: "LinkedIn", label: "LinkedIn" },
  { id: "insta_fab", value: "Instagram/facebook", label: "Instagram/facebook" },
  { id: "search_tag", value: "Search", label: "Search" },
  { id: "other_source", value: "Other Source", label: "Other Source" },
];

export default function ContactPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    mobile: "",
    service: "",
    message: "",
    hear_about: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile" && !/^\d*$/.test(value)) return;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleCheckbox = (field, value) => {
    setForm((prev) => {
      const list = prev[field];
      const next = list.includes(value)
        ? list.filter((v) => v !== value)
        : [...list, value];
      return { ...prev, [field]: next };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...form }),
      });

      if (!res.ok) throw new Error("Submission failed");
      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="wrapper">
      <div className="ml-setter contact_us">
        <Banner data={bannerData}>
          <p>
            We&apos;re excited to work with you soon! Please drop <br />
            an email with your details & requirements to
            <br />
            <a href="mailto:veera@webmaffia.com">veera@webmaffia.com</a>
          </p>
          <p>
            You can also fill this form & we&apos;ll get back in 2 <br />
            business days.
          </p>
        </Banner>

        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="txtNumeric"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="organization">Your Organization&apos;s Name</label>
          <input
            type="text"
            name="organization"
            id="organization"
            className="txtNumeric"
            value={form.organization}
            onChange={handleChange}
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
          />

          <label htmlFor="mobile">Your Number</label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            maxLength={10}
            inputMode="numeric"
            pattern="[0-9]+"
            value={form.mobile}
            onChange={handleChange}
            required
          />

          <label htmlFor="service">Services Interested In</label>
          <ServiceSelect
            id="service"
            value={form.service}
            onChange={handleChange}
          />

          <label htmlFor="message">What&apos;s in your mind</label>
          <input
            type="text"
            name="message"
            id="message"
            value={form.message}
            onChange={handleChange}
          />

          <label htmlFor="hear_about">How did you hear about us?</label>
          <div className="input_checkox">
            {HEAR_ABOUT.map(({ id, value, label }) => (
              <label key={id} htmlFor={`contact_hear_${id}`} className="checkmark">
                <input
                  type="checkbox"
                  id={`contact_hear_${id}`}
                  checked={form.hear_about.includes(value)}
                  onChange={() => toggleCheckbox("hear_about", value)}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>

          {error && (
            <p role="alert" style={{ color: "#c72c2c", marginBottom: "2rem" }}>
              {error}
            </p>
          )}

          <button type="submit" className="cta_text" disabled={submitting}>
            Apply <span>{submitting ? "…" : "Now"}</span>
          </button>
        </form>

        <section className="contact_address">
          <div>
            <div>
              <div className="h2">Address</div>
              <div className="country_container">
                <div className="country_region">
                  <div className="region_text">Mumbai (India)</div>
                  <address>
                    <a
                      href="https://maps.app.goo.gl/iPvLshVht1xP6hT1A"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      403 A Wing, Cello Triumph, <br />
                      IB Patel Rd, Jay Prakash Nagar, <br />
                      Goregaon (E) , Mumbai - 400063
                    </a>
                  </address>
                  <div className="contact_info">
                    <a href="mailto:veera@webmaffia.com">veera@webmaffia.com</a>
                    <a href="tel:+919867625909">+91 9867625909</a>
                  </div>
                </div>
                <div className="country_region">
                  <div className="region_text">Bangaluru</div>
                  <address>
                    <a
                      href="https://maps.app.goo.gl/iPvLshVht1xP6hT1A"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Brigade Exotica - Burgundy <br />
                      Unit 2503, <br />
                      Old Madras Road, <br />
                      Bengaluru - 560049
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
                    <div className="contact_persons_row">
                    <div className="contact_info">
                      <span className="contact_person">Veera Ghyara Roy <br />Co-Founder</span>
                        <a href="mailto:veera@webmaffia.com">veera@webmaffia.com</a>
                        <a href="tel:+971562722998">+971 56 272 2998</a>
                      </div>
                      <div className="contact_info">
                      <span className="contact_person">Sheetal Gandhi <br />Regional Expansion Lead</span>
                        <a href="mailto:sheetal.gandhi@webmaffia.com">sheetal.gandhi@webmaffia.com</a>
                        <a href="tel:+971544949429">+971 544949429</a>
                      </div>
                    </div>
                  </address>
                </div>
              </div>
            </div>
            <div className="follow_us">
              <div className="h2">Follow us</div>
              <div>
                <a
                  href="https://www.facebook.com/Webmaffia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/assets/images/icons/fb.webp"
                    alt="Facebook"
                    width={50}
                    height={50}
                  />
                </a>
                <a
                  href="https://in.linkedin.com/company/webmaffia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/assets/images/icons/linkedin.webp"
                    alt="LinkedIn"
                    width={50}
                    height={50}
                  />
                </a>
                <a
                  href="https://www.instagram.com/webmaffia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/assets/images/icons/insta.webp"
                    alt="Instagram"
                    width={50}
                    height={50}
                  />
                </a>
              </div>
            </div>
          </div>
          <Image
            src="/assets/images/testimonial_img.webp"
            alt=""
            width={678}
            height={877}
            className="dark_img"
          />
        </section>
      </div>
    </main>
  );
}
