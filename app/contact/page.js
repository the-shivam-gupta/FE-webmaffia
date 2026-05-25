"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const INTERESTS = [
  { id: "Web_design", value: "Web design", label: "Web design" },
  { id: "UI/UX_design", value: "UI/UX design", label: "UI/UX design" },
  { id: "Web_development", value: "Web development", label: "Web development" },
  { id: "SEO_specialist", value: "SEO specialist", label: "SEO specialist" },
  { id: "Social_media_manager", value: "Social media manager", label: "Social media manager" },
  { id: "Back_end_developer", value: "Back-end developer", label: "Back-end developer" },
  { id: "UllUX_Intern", value: "UI/UX Intern", label: "Ul/UX Intern" },
  { id: "Front_end_developer", value: "Front-end developer", label: "Front-end developer" },
  { id: "Full_stack_developer", value: "Full-stack developer", label: "Full-stack developer" },
];

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
    url: "",
    message: "",
    interests: [],
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
        body: JSON.stringify(form),
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
        <section data-section="hero_section" className="hero_section flex">
          <div>
            <div className="sub_title">CONTACT</div>
            <h1>
              Start reaching <br />
              your digital <br />
              goals
            </h1>
            <p>
              We&apos;re excited to work with you soon! Please drop <br />
              an email with your details & requirements to<br />
              <a href="mailto:veera@webmaffia.com">veera@webmaffia.com</a>
            </p>
            <p>
              You can also fill this form & we&apos;ll get back in 2 <br />
              business days.
            </p>
          </div>
          <picture>
            <source
              media="(max-width: 540px)"
              srcSet="/assets/images/hero-mobile.webp"
            />
            <Image
              src="/assets/images/contact-banner.svg"
              alt=""
              width={871}
              height={767}
              className="dark_img"
            />
          </picture>
        </section>

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

          <label htmlFor="url">Website/Social Media Link</label>
          <input
            type="text"
            name="url"
            id="url"
            value={form.url}
            onChange={handleChange}
          />

          <label htmlFor="interests">You are interested in</label>
          <div className="input_checkox">
            {INTERESTS.map(({ id, value, label }) => (
              <label key={id} htmlFor={id} className="checkmark">
                <input
                  type="checkbox"
                  id={id}
                  checked={form.interests.includes(value)}
                  onChange={() => toggleCheckbox("interests", value)}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>

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
              <label key={id} htmlFor={id} className="checkmark">
                <input
                  type="checkbox"
                  id={id}
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
                  <div className="region_text">Dubai (UAE)</div>
                  <address>
                    <a
                      href="https://maps.app.goo.gl/2qVqKVXrwNok34KH6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      JLT Cluster H <br />
                      Dubai, United Arab Emirates
                    </a>
                  </address>
                  <div className="contact_info">
                    <a href="mailto:veera@webmaffia.com">veera@webmaffia.com</a>
                    <a href="tel:+971562722998">+971 56 272 2998</a>
                  </div>
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
